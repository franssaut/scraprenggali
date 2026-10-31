# 🌐 Web Scraper Proyek Renggali Group (Google Sites)

Program scraper otomatis untuk mengekstrak seluruh data properti, dokumen (Price List & Site Plan), video promosi, dan transaksi booking unit dari situs portal resmi **Renggali Group**:  
🔗 **[https://sites.google.com/view/proyekrenggali/home](https://sites.google.com/view/proyekrenggali/home)**

---

## 🚀 Fitur Utama

1. **Scraping Katalog 17 Proyek Properti Lengkap**:
   - Mengekstrak nama perumahan, lokasi, URL Google Sites, dan gambar banner poster.
   - Menjangkau seluruh wilayah Batam: **Tembesi, Simp. Basecamp, Tanjung Uncang, Nongsa, Batu Besar, Sei Daun - Piayu, dan Putri Hijau**.

2. **Deep Crawling Sub-Halaman Tiap Proyek**:
   - **Promo & Diskon Terkini**: Diskon puluhan juta, Gratis BPHTB, SHGB, AJB, saldo bank, dan ketentuan promo.
   - **Dokumen Google Drive (Site Plan & Price List)**: Nama file, Doc ID, URL Preview, URL Buka, dan URL Download Langsung.
   - **Video Promosi YouTube**: Judul video, ID video, URL Embed, dan URL Nonton Langsung.

3. **Data Booking Unit Real-Time (Live Google Spreadsheet)**:
   - Mengunduh dan membersihkan data dari spreadsheet *"Info Book Unit Hari ini"* (116+ entri transaksi).
   - Data mencakup: No, Tanggal Booking, Jangka Waktu, Sales, Nama Konsumen, Perumahan, Blok, Nomor Unit, Keterangan Proses, Status Berkas Awal, dan Status Sisforum.

4. **Multi-Format Export**:
   - 📊 **Excel (`.xlsx`)**: File Excel rapi dengan 4 sheet terpisah (`Katalog_Proyek`, `Dokumen_Drive_PDF`, `Video_Promosi`, `Info_Booking_Unit`).
   - 📄 **JSON (`.json`)**: Data hierarkis lengkap, siap diintegrasikan ke API atau database web.
   - 📑 **CSV (`.csv`)**: Tabel individual per kategori di folder `output_csv/`.

5. **Pengunduh File Otomatis (Optional)**:
   - Unduh semua dokumen PDF (Price List & Site Plan) langsung dari Google Drive ke folder `downloads/pdf/`.
   - Unduh semua gambar poster/banner perumahan ke folder `downloads/images/`.

---

## 📂 Struktur Direktori

```text
scraprenggali/
│
├── main.py                     # CLI & Menu interaktif scraper
├── renggali_scraper.py         # Modul inti logika scraping & export
├── requirements.txt            # Daftar pustaka Python yang dibutuhkan
├── README.md                   # Panduan dokumentasi lengkap
│
├── hasil_scraping_renggali.xlsx# Output Excel lengkap (4 Sheet)
├── hasil_scraping_renggali.json# Output JSON lengkap
├── output_csv/                 # Folder tabel-tabel CSV
│   ├── katalog_proyek.csv
│   ├── dokumen_drive_pdf.csv
│   ├── video_promosi.csv
│   └── info_booking_unit.csv
│
└── downloads/                  # Folder hasil unduhan file (jika dijalankan)
    ├── images/                 # Poster/Banner proyek (.jpg)
    └── pdf/                    # Price List & Site Plan (.pdf)
```

---

## 🛠️ Instalasi

Pastikan Python 3.8+ telah terpasang di komputer Anda. Buka terminal/PowerShell di folder proyek lalu jalankan:

```bash
pip install -r requirements.txt
```

---

## 💻 Cara Penggunaan

### 1. Mode Menu Interaktif (Paling Mudah)
Jalankan tanpa argumen untuk menampilkan menu pilihan:
```bash
python main.py
```
Menu yang akan tampil:
```text
Pilih operasi yang ingin Anda jalankan:
  [1] Scrape LENGKAP (Katalog + Detail Proyek + Data Booking) -> Excel, JSON & CSV
  [2] Scrape KATALOG Proyek saja (Nama, Lokasi, Link, Thumbnail)
  [3] Scrape Data BOOKING UNIT Terkini saja (Google Spreadsheet)
  [4] Unduh Semua Dokumen PDF (Site Plan & Price List dari Google Drive)
  [5] Unduh Semua Gambar Banner Proyek
  [0] Keluar
```

### 2. Mode Perintah Cepat (Command-Line Arguments)

- **Scrape Seluruh Data Sekaligus**:
  ```bash
  python main.py --all
  ```

- **Hanya Ambil Data Booking Unit (Spreadsheet)**:
  ```bash
  python main.py --booking
  ```

- **Hanya Ambil Katalog Daftar Proyek**:
  ```bash
  python main.py --catalog
  ```

- **Unduh Semua Dokumen PDF (Price List & Site Plan)**:
  ```bash
  python main.py --download-pdf
  ```

- **Unduh Semua Gambar Poster/Banner**:
  ```bash
  python main.py --download-img
  ```

- **Kustomisasi Nama File Output**:
  ```bash
  python main.py --all --excel "laporan_renggali.xlsx" --json "data_renggali.json" --csv-dir "folder_csv"
  ```

---

## 🏢 Daftar Proyek Properti yang Tercover (17 Proyek)

| No | Nama Perumahan / Properti | Lokasi | Sub-halaman Google Sites |
|----|---------------------------|--------|--------------------------|
| 1  | **Renggali Residence** | Tembesi | `https://sites.google.com/view/renggaliresidence/home` |
| 2  | **Taman Anugerah Residence** | Tembesi | `https://sites.google.com/view/tamananugerah/home` |
| 3  | **Anugerah Renggali** | Tembesi | `https://sites.google.com/view/anugerahrenggali/home` |
| 4  | **Cluster Ivory** | Tembesi | `https://sites.google.com/view/kotamandirirenggali/home` |
| 5  | **Cluster Orange** | Tembesi | `https://sites.google.com/view/clusterorange/home` |
| 6  | **Ruko Taman Anugerah** | Tembesi | `https://sites.google.com/view/rukotamananugerah/home` |
| 7  | **Citra Renggali Marina** | Simp. Basecamp | `https://sites.google.com/view/citrarenggalimarina/home` |
| 8  | **Citra Renggali Sakura** | Simp. Basecamp | `https://sites.google.com/view/citra-renggali-sakura/home` |
| 9  | **Renggali Asoka** | Simp. Basecamp | `https://sites.google.com/view/renggaliasoka/home` |
| 10 | **Renggali Fantasy Namsan** | Simp. Basecamp | `https://sites.google.com/view/renggalifantasy/home` |
| 11 | **Perumahaan & Ruko Sumberindo** | Tanjung Uncang | `https://sites.google.com/view/sumberindo/home` |
| 12 | **Renggali Sitalasari** | Nongsa | `https://sites.google.com/view/renggali-sitalasari/home` |
| 13 | **Renggali Nongsa** | Nongsa | `https://sites.google.com/view/renggali-nongsa/home` |
| 14 | **Renggali Khalifa** | Batu Besar | `https://sites.google.com/view/renggalikhalifa/home` |
| 15 | **Renggali Nongsa viory** | Nongsa | `https://sites.google.com/view/renggalinongsaviory/home` |
| 16 | **Renggali Visco** | Sei Daun - Piayu | `https://sites.google.com/view/renggalivisco/home` |
| 17 | **Renggali Silimakuta** | Putri Hijau | `https://sites.google.com/view/renggalisilimakuta/home` |
