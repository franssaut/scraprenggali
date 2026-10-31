import re
import os
import io
import time
import json
import urllib.parse
from typing import Dict, List, Any, Optional

import requests
from bs4 import BeautifulSoup
import pandas as pd


class RenggaliScraper:
    """
    Scraper komprehensif untuk portal proyek properti Renggali Group:
    URL: https://sites.google.com/view/proyekrenggali/home
    """

    BASE_URL = "https://sites.google.com/view/proyekrenggali/home"
    DEFAULT_SHEET_ID = "194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8"
    DEFAULT_SHEET_GID = "1761929285"

    def __init__(self, headers: Optional[Dict[str, str]] = None, timeout: int = 20):
        self.headers = headers or {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
        }
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update(self.headers)

        self.catalog_data: List[Dict[str, Any]] = []
        self.projects_detailed: List[Dict[str, Any]] = []
        self.booking_df: Optional[pd.DataFrame] = None
        self.spreadsheet_url: Optional[str] = None

    @staticmethod
    def clean_google_url(url: str) -> str:
        """Membersihkan URL redirect Google (https://www.google.com/url?q=...)."""
        if not url:
            return ""
        if "google.com/url?q=" in url:
            parsed = urllib.parse.urlparse(url)
            qs = urllib.parse.parse_qs(parsed.query)
            if "q" in qs:
                return qs["q"][0]
        return url

    def fetch_catalog(self) -> List[Dict[str, Any]]:
        """
        Scrape halaman utama untuk mengekstrak seluruh daftar proyek perumahan & link spreadsheet.
        """
        print(f"[1/3] Mengambil katalog dari {self.BASE_URL}...")
        res = self.session.get(self.BASE_URL, timeout=self.timeout)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "html.parser")

        # 1. Cari link Google Sheets Booking
        sheet_link = None
        for a in soup.find_all("a", href=True):
            clean_href = self.clean_google_url(a["href"])
            if "spreadsheets" in clean_href or ("drive.google.com" in clean_href and "194ex" in clean_href):
                sheet_link = clean_href
                break
        self.spreadsheet_url = sheet_link or f"https://docs.google.com/spreadsheets/d/{self.DEFAULT_SHEET_ID}/edit"

        # 2. Ekstraksi kolom/kartu proyek dari sections
        catalog = []
        seen_urls = set()

        for sec in soup.find_all("section"):
            container = sec.find("div", class_="LS81yb")
            if not container:
                continue

            # Kolom-kolom langsung di dalam container baris
            cols = container.find_all("div", recursive=False)
            for col in cols:
                links = col.find_all("a", href=True)
                site_links = [
                    self.clean_google_url(a["href"]).split("?")[0].rstrip("/")
                    for a in links
                    if "sites.google.com/view/" in self.clean_google_url(a["href"])
                    and "/proyekrenggali" not in self.clean_google_url(a["href"])
                ]

                if not site_links:
                    continue

                target_url = site_links[0]
                if target_url in seen_urls:
                    continue
                seen_urls.add(target_url)

                img = col.find("img")
                img_src = img["src"] if img and img.has_attr("src") else ""

                texts = [
                    t.strip() for t in col.stripped_strings
                    if t.strip() and t.strip() not in ["UPDATE PRODUK", "Info Update Terbaru", "(", "Klik Gambar)"]
                ]

                # Standarisasi nama dan lokasi
                name = ""
                location = ""

                if len(texts) == 1:
                    name = texts[0]
                elif len(texts) == 2:
                    name = texts[0]
                    location = texts[1]
                elif len(texts) >= 3:
                    last = texts[-1]
                    if "Basecamp" in last or "imp. Basecamp" in last:
                        location = "Simp. Basecamp"
                        name = " ".join([t for t in texts[:-1] if t != "S" and "Basecamp" not in t])
                    elif "Nongsa" in last:
                        location = "Nongsa"
                        name = " ".join([t for t in texts[:-1] if t != "Nongsa"])
                    else:
                        name = " ".join(texts[:-1])
                        location = last

                # Pembersihan format
                name = " ".join(name.split())
                location = " ".join(location.split())

                if not name:
                    slug = target_url.split("/view/")[-1].split("/")[0].replace("-", " ").title()
                    name = slug

                catalog.append({
                    "project_name": name,
                    "location": location,
                    "project_url": target_url,
                    "image_url": img_src,
                })

        self.catalog_data = catalog
        print(f"-> Berhasil mengekstrak {len(catalog)} proyek properti.")
        return catalog

    def fetch_project_details(self, project: Dict[str, Any]) -> Dict[str, Any]:
        """
        Deep crawl ke sub-site proyek untuk mengambil:
        - Promo & penawaran terbaru
        - Dokumen Site Plan (PDF, Drive preview, direct download)
        - Dokumen Price List (PDF, Drive preview, direct download)
        - Video promosi YouTube
        - Deskripsi & teks info lainnya
        """
        url = project["project_url"]
        try:
            r = self.session.get(url, timeout=self.timeout)
            r.raise_for_status()
            soup = BeautifulSoup(r.text, "html.parser")

            # 1. Dokumen Drive / PDF (Site Plan & Price List)
            documents = []
            seen_doc_ids = set()

            # Dari atribut data-embed
            for e in soup.find_all(attrs={"data-embed-doc-id": True}):
                doc_id = e.get("data-embed-doc-id")
                if not doc_id or doc_id in seen_doc_ids:
                    continue
                seen_doc_ids.add(doc_id)
                title = e.get_text(separator=" ", strip=True)
                doc_type = "Site Plan" if "sp" in title.lower() or "site" in title.lower() else (
                    "Price List" if "pl" in title.lower() or "price" in title.lower() else "Dokumen"
                )
                documents.append({
                    "title": title,
                    "doc_type": doc_type,
                    "doc_id": doc_id,
                    "preview_url": f"https://drive.google.com/file/d/{doc_id}/preview",
                    "view_url": e.get("data-embed-open-url") or f"https://drive.google.com/file/d/{doc_id}/view",
                    "download_url": f"https://drive.google.com/uc?id={doc_id}&export=download",
                    "thumbnail_url": e.get("data-embed-thumbnail-url"),
                })

            # Dari iframe
            for iframe in soup.find_all("iframe"):
                src = iframe.get("src") or iframe.get("data-src") or ""
                label = iframe.get("aria-label") or ""
                if "drive.google.com" in src:
                    m = re.search(r"file/d/([a-zA-Z0-9_-]+)", src)
                    if m:
                        doc_id = m.group(1)
                        if doc_id not in seen_doc_ids:
                            seen_doc_ids.add(doc_id)
                            clean_label = label.replace("Drive, ", "").strip()
                            doc_type = "Site Plan" if "sp" in clean_label.lower() or "site" in clean_label.lower() else (
                                "Price List" if "pl" in clean_label.lower() or "price" in clean_label.lower() else "Dokumen"
                            )
                            documents.append({
                                "title": clean_label or f"Doc_{doc_id}",
                                "doc_type": doc_type,
                                "doc_id": doc_id,
                                "preview_url": f"https://drive.google.com/file/d/{doc_id}/preview",
                                "view_url": f"https://drive.google.com/file/d/{doc_id}/view",
                                "download_url": f"https://drive.google.com/uc?id={doc_id}&export=download",
                                "thumbnail_url": None,
                            })

            # 2. Video YouTube Promosi
            videos = []
            seen_video_ids = set()
            for iframe in soup.find_all("iframe"):
                src = iframe.get("src") or iframe.get("data-src") or ""
                label = iframe.get("aria-label") or ""
                if "youtube.com" in src or "youtu.be" in src:
                    yt_m = re.search(r"embed/([a-zA-Z0-9_-]+)", src)
                    yt_id = yt_m.group(1) if yt_m else None
                    if yt_id and yt_id not in seen_video_ids:
                        seen_video_ids.add(yt_id)
                        video_title = label.replace("YouTube Video, ", "").strip()
                        videos.append({
                            "title": video_title or f"Video {project['project_name']}",
                            "video_id": yt_id,
                            "embed_url": src,
                            "watch_url": f"https://www.youtube.com/watch?v={yt_id}",
                        })

            # 3. Promo & Penawaran Terbaru
            raw_texts = [t.strip() for t in soup.stripped_strings if len(t.strip()) > 1]
            boilerplate = {
                "UPDATE PRODUK", "Search this site", "Embedded Files", "Skip to main content",
                "Skip to navigation", "Google Sites", "Report abuse", "Page details", "Page updated"
            }
            clean_texts = [t for t in raw_texts if t not in boilerplate]

            promo_items = []
            for t in clean_texts:
                low = t.lower()
                if any(kw in low for kw in ["promo", "diskon", "gratis", "free", "cashback", "bphtb", "shgb", "ajb", "saldo bank"]):
                    if t not in promo_items and len(t) < 200:
                        promo_items.append(t)

            promo_text = " | ".join(promo_items) if promo_items else "Promo sesuai brosur & pricelist"

            # 4. Sheet links spesifik proyek
            sheet_links = []
            for a in soup.find_all("a", href=True):
                clean_href = self.clean_google_url(a["href"])
                if "spreadsheets" in clean_href and clean_href not in sheet_links:
                    sheet_links.append(clean_href)

            return {
                **project,
                "promo_summary": promo_text,
                "promo_details": promo_items,
                "documents": documents,
                "videos": videos,
                "sheet_links": sheet_links,
                "raw_text_snippets": clean_texts[:20],
            }
        except Exception as e:
            print(f"  [!] Gagal mengambil detail {project['project_name']}: {e}")
            return {
                **project,
                "promo_summary": "Gagal mengambil data",
                "promo_details": [],
                "documents": [],
                "videos": [],
                "sheet_links": [],
                "raw_text_snippets": [],
            }

    def fetch_all_projects(self, deep: bool = True) -> List[Dict[str, Any]]:
        """Mengambil semua proyek beserta detail lengkapnya jika deep=True."""
        if not self.catalog_data:
            self.fetch_catalog()

        if not deep:
            return self.catalog_data

        print(f"[2/3] Mengambil detail untuk {len(self.catalog_data)} proyek...")
        detailed = []
        for idx, p in enumerate(self.catalog_data, 1):
            print(f"  [{idx}/{len(self.catalog_data)}] {p['project_name']} ({p['location']})...")
            detail = self.fetch_project_details(p)
            detailed.append(detail)
            time.sleep(0.3)

        self.projects_detailed = detailed
        return detailed

    def fetch_booking_data(self) -> pd.DataFrame:
        """
        Mengunduh data booking unit terkini dari Google Spreadsheet Renggali Group:
        Sheet ID: 194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8
        """
        print("[3/3] Mengunduh data 'Info Book Unit Hari ini' dari Google Spreadsheet...")
        sheet_id = self.DEFAULT_SHEET_ID
        gid = self.DEFAULT_SHEET_GID

        csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"
        res = self.session.get(csv_url, timeout=self.timeout)
        res.raise_for_status()

        # Baca CSV mentah
        raw_df = pd.read_csv(io.StringIO(res.text))

        # Gabungkan kolom duplikat jika ada untuk mencegah UserWarning / data collision
        clean_dict: Dict[str, List[Any]] = {}
        for col_name in raw_df.columns:
            clean_name = col_name.strip()
            # Standarisasi nama kolom
            if clean_name == "C":
                clean_name = "NO"
            elif clean_name == "TGGL BOOKING":
                clean_name = "TANGGAL_BOOKING"
            elif clean_name == "JANGKA WAKTU":
                clean_name = "JANGKA_WAKTU"
            elif clean_name == "NAMA KONSUMEN":
                clean_name = "NAMA_KONSUMEN"
            elif clean_name == "STATUS BERKAS AWAL":
                clean_name = "STATUS_BERKAS_AWAL"
            elif clean_name == "STATUS SISFORUM":
                clean_name = "STATUS_SISFORUM"
            elif clean_name == "KETERANGAN PROSES":
                clean_name = "KETERANGAN_PROSES"
            elif clean_name.startswith("Column"):
                clean_name = "KETERANGAN_TAMBAHAN"

            col_series = raw_df[col_name].fillna("")
            if clean_name not in clean_dict:
                clean_dict[clean_name] = col_series.tolist()
            else:
                # Merge: utamakan nilai yang tidak kosong
                merged = [
                    val if str(val).strip() != "" else clean_dict[clean_name][i]
                    for i, val in enumerate(col_series.tolist())
                ]
                clean_dict[clean_name] = merged

        df = pd.DataFrame(clean_dict)
        # Hapus baris yang kosong seluruhnya atau yang NO-nya kosong
        df = df[df["NO"].astype(str).str.strip() != ""]

        self.booking_df = df
        print(f"-> Berhasil memuat {len(df)} entri transaksi booking unit.")
        return df

    def export_to_excel(self, output_path: str = "hasil_scraping_renggali.xlsx"):
        """Mengekspor seluruh data ke file Excel terstruktur multi-sheet."""
        os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)

        projects_data = self.projects_detailed or self.catalog_data
        if not projects_data:
            projects_data = self.fetch_all_projects(deep=True)

        # Sheet 1: Katalog Proyek
        proyek_rows = []
        for p in projects_data:
            proyek_rows.append({
                "Nama Perumahan": p.get("project_name", ""),
                "Lokasi": p.get("location", ""),
                "Ringkasan Promo": p.get("promo_summary", ""),
                "Jumlah Dokumen": len(p.get("documents", [])),
                "Jumlah Video": len(p.get("videos", [])),
                "URL Google Sites": p.get("project_url", ""),
                "URL Banner Image": p.get("image_url", ""),
            })
        df_proyek = pd.DataFrame(proyek_rows)

        # Sheet 2: Dokumen Drive / PDF
        doc_rows = []
        for p in projects_data:
            for doc in p.get("documents", []):
                doc_rows.append({
                    "Nama Perumahan": p.get("project_name", ""),
                    "Lokasi": p.get("location", ""),
                    "Tipe Dokumen": doc.get("doc_type", "Dokumen"),
                    "Judul Dokumen (File)": doc.get("title", ""),
                    "Google Drive Doc ID": doc.get("doc_id", ""),
                    "Link View": doc.get("view_url", ""),
                    "Link Direct Download": doc.get("download_url", ""),
                })
        df_docs = pd.DataFrame(doc_rows)

        # Sheet 3: Video Promosi
        vid_rows = []
        for p in projects_data:
            for v in p.get("videos", []):
                vid_rows.append({
                    "Nama Perumahan": p.get("project_name", ""),
                    "Lokasi": p.get("location", ""),
                    "Judul Video": v.get("title", ""),
                    "YouTube ID": v.get("video_id", ""),
                    "Link Tonton (YouTube)": v.get("watch_url", ""),
                    "Link Embed": v.get("embed_url", ""),
                })
        df_vids = pd.DataFrame(vid_rows)

        # Sheet 4: Booking Unit
        if self.booking_df is None:
            self.fetch_booking_data()

        with pd.ExcelWriter(output_path, engine="openpyxl") as writer:
            df_proyek.to_excel(writer, sheet_name="Katalog_Proyek", index=False)
            df_docs.to_excel(writer, sheet_name="Dokumen_Drive_PDF", index=False)
            df_vids.to_excel(writer, sheet_name="Video_Promosi", index=False)
            if self.booking_df is not None:
                self.booking_df.to_excel(writer, sheet_name="Info_Booking_Unit", index=False)

        print(f"[OK] File Excel tersimpan: {output_path}")

    def export_to_json(self, output_path: str = "hasil_scraping_renggali.json"):
        """Mengekspor data ke file JSON terstruktur."""
        os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)

        payload = {
            "source_url": self.BASE_URL,
            "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "total_projects": len(self.projects_detailed or self.catalog_data),
            "projects": self.projects_detailed or self.catalog_data,
            "booking_spreadsheet_url": self.spreadsheet_url,
            "booking_records_count": len(self.booking_df) if self.booking_df is not None else 0,
            "booking_records": self.booking_df.to_dict(orient="records") if self.booking_df is not None else [],
        }

        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)

        print(f"[OK] File JSON tersimpan: {output_path}")

    def export_to_csv(self, output_dir: str = "output_csv"):
        """Mengekspor masing-masing tabel ke file CSV."""
        os.makedirs(output_dir, exist_ok=True)

        projects_data = self.projects_detailed or self.catalog_data
        proyek_rows = []
        doc_rows = []
        vid_rows = []

        for p in projects_data:
            proyek_rows.append({
                "Nama Perumahan": p.get("project_name", ""),
                "Lokasi": p.get("location", ""),
                "Ringkasan Promo": p.get("promo_summary", ""),
                "Jumlah Dokumen": len(p.get("documents", [])),
                "Jumlah Video": len(p.get("videos", [])),
                "URL Google Sites": p.get("project_url", ""),
                "URL Banner Image": p.get("image_url", ""),
            })
            for doc in p.get("documents", []):
                doc_rows.append({
                    "Nama Perumahan": p.get("project_name", ""),
                    "Lokasi": p.get("location", ""),
                    "Tipe Dokumen": doc.get("doc_type", "Dokumen"),
                    "Judul Dokumen (File)": doc.get("title", ""),
                    "Google Drive Doc ID": doc.get("doc_id", ""),
                    "Link View": doc.get("view_url", ""),
                    "Link Direct Download": doc.get("download_url", ""),
                })
            for v in p.get("videos", []):
                vid_rows.append({
                    "Nama Perumahan": p.get("project_name", ""),
                    "Lokasi": p.get("location", ""),
                    "Judul Video": v.get("title", ""),
                    "YouTube ID": v.get("video_id", ""),
                    "Link Tonton": v.get("watch_url", ""),
                })

        pd.DataFrame(proyek_rows).to_csv(os.path.join(output_dir, "katalog_proyek.csv"), index=False, encoding="utf-8-sig")
        pd.DataFrame(doc_rows).to_csv(os.path.join(output_dir, "dokumen_drive_pdf.csv"), index=False, encoding="utf-8-sig")
        pd.DataFrame(vid_rows).to_csv(os.path.join(output_dir, "video_promosi.csv"), index=False, encoding="utf-8-sig")

        if self.booking_df is not None:
            self.booking_df.to_csv(os.path.join(output_dir, "info_booking_unit.csv"), index=False, encoding="utf-8-sig")

        print(f"[OK] File CSV tersimpan di folder: {output_dir}")

    def download_documents(self, output_dir: str = "downloads/pdf"):
        """Mengunduh semua file PDF (Price List & Site Plan) dari Google Drive."""
        os.makedirs(output_dir, exist_ok=True)
        projects = self.projects_detailed or self.catalog_data

        all_docs = []
        for p in projects:
            for d in p.get("documents", []):
                all_docs.append((p.get("project_name", "Proyek"), d))

        print(f"\n[DOWNLOAD] Mengunduh {len(all_docs)} dokumen PDF ke {output_dir}...")
        for idx, (pname, doc) in enumerate(all_docs, 1):
            title = doc.get("title", "doc").strip()
            if not title.lower().endswith(".pdf"):
                title += ".pdf"
            safe_name = re.sub(r'[\\/*?:"<>|]', "_", f"{pname} - {title}")
            dest_file = os.path.join(output_dir, safe_name)

            if os.path.exists(dest_file):
                print(f"  [{idx}/{len(all_docs)}] Sudah ada: {safe_name}")
                continue

            dl_url = doc.get("download_url")
            print(f"  [{idx}/{len(all_docs)}] Mengunduh: {safe_name}...")
            try:
                r = self.session.get(dl_url, stream=True, timeout=30)
                if r.status_code == 200:
                    with open(dest_file, "wb") as f:
                        for chunk in r.iter_content(chunk_size=8192):
                            f.write(chunk)
                    print(f"      -> Selesai ({os.path.getsize(dest_file):,} bytes)")
                else:
                    print(f"      -> Gagal (HTTP {r.status_code})")
            except Exception as e:
                print(f"      -> Error: {e}")

    def download_images(self, output_dir: str = "downloads/images"):
        """Mengunduh gambar banner/thumbnail tiap proyek."""
        os.makedirs(output_dir, exist_ok=True)
        projects = self.catalog_data or self.projects_detailed

        print(f"\n[DOWNLOAD] Mengunduh gambar banner ke {output_dir}...")
        for idx, p in enumerate(projects, 1):
            img_url = p.get("image_url")
            if not img_url:
                continue
            safe_name = re.sub(r'[\\/*?:"<>|]', "_", f"{p.get('project_name', 'Proyek')}.jpg")
            dest_file = os.path.join(output_dir, safe_name)

            if os.path.exists(dest_file):
                print(f"  [{idx}/{len(projects)}] Sudah ada: {safe_name}")
                continue

            print(f"  [{idx}/{len(projects)}] Mengunduh gambar: {safe_name}...")
            try:
                r = self.session.get(img_url, timeout=20)
                if r.status_code == 200:
                    with open(dest_file, "wb") as f:
                        f.write(r.content)
                    print(f"      -> Selesai ({len(r.content):,} bytes)")
            except Exception as e:
                print(f"      -> Error: {e}")
