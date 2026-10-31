# 🌐 Web Scraper & Portal Properti Renggali Group Batam

Aplikasi web scraper dan portal showcase modern terstruktur untuk mengekstrak, memvisualisasikan, dan melacak seluruh proyek properti serta transaksi booking unit dari situs resmi **Renggali Group Batam**:  
🔗 **[https://sites.google.com/view/proyekrenggali/home](https://sites.google.com/view/proyekrenggali/home)**

---

## ✨ Fitur Utama

### 1. 🖥️ Website Portal Interaktif & Terstruktur Rapi (`index.html`)
- **Showcase 17 Proyek Properti**: Tampilan kartu perumahan & ruko modern lengkap dengan foto banner, lokasi, dan ringkasan promo.
- **Pencarian & Filter Canggih**: Cari nama perumahan, blok, atau filter berdasarkan 7 wilayah strategis di Batam.
- **Modal Detail Proyek**:
  - Ringkasan promo dan syarat & ketentuan resmi.
  - Tautan lihat (view) dan unduh langsung (direct download) seluruh dokumen **Site Plan** & **Price List** (PDF Google Drive).
  - Pemutar video YouTube lokasi & unit perumahan.
- **Live Booking Unit Tracker**:
  - Tabel transaksi booking unit real-time (116+ data) dari Google Spreadsheet.
  - Pencarian berdasarkan nama konsumen, sales, blok, atau kode perumahan.
  - Filter skema transaksi: *KPR Ekspress, Cash Tahap, Cicil UM, Batal*.
  - Indikator status berkas & *Sisforum OKE*.
- **Panduan Wilayah**: Penjelasan 7 kawasan strategis proyek (Tembesi, Simp. Basecamp, Nongsa, Tanjung Uncang, Batu Besar, Sei Daun - Piayu, Putri Hijau).

### 2. ⚡ Scraper Otomatis Python (`renggali_scraper.py`)
- Ekstraksi otomatis katalog 17 proyek dari portal Google Sites.
- Deep crawl ke seluruh sub-halaman masing-masing perumahan.
- Ekstraksi file Google Drive (Doc ID, Preview URL, View URL, Download URL).
- Pengunduhan otomatis lembar spreadsheet *"Info Book Unit Hari ini"* (Google Spreadsheet ID: `194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8`).
- Pengunduh berkas massal: PDF (Price List & Site Plan) dan gambar banner JPG.

### 3. 📊 Multi-Format Data Export
- 📑 **Excel Workbook (`.xlsx`)**: 4 Sheet terstruktur (`Katalog_Proyek`, `Dokumen_Drive_PDF`, `Video_Promosi`, `Info_Booking_Unit`).
- 📄 **JSON (`.json`)**: Data hierarkis lengkap untuk integrasi API/Database.
- 📂 **CSV (`.csv`)**: Berkas tabel per entitas di folder `output_csv/`.
- 🌐 **Web Data (`data.js`)**: Sinkronisasi data otomatis untuk tampilan website frontend.

---

## 📂 Struktur Direktori Proyek

```text
scraprenggali/
│
├── index.html                  # Halaman Website Portal Utama (Responsif & Modern)
├── data.js                     # Dataset JavaScript otomatis untuk Website
├── main.py                     # CLI & Menu interaktif scraper + Web Server lokal
├── renggali_scraper.py         # Modul inti logika scraping, crawling & ekspor
├── requirements.txt            # Dependensi Python
├── README.md                   # Dokumentasi lengkap proyek
│
├── hasil_scraping_renggali.xlsx# Master Excel (4 Sheet lengkap)
├── hasil_scraping_renggali.json# Master JSON data lengkap
├── output_csv/                 # Folder tabel CSV
│   ├── katalog_proyek.csv
│   ├── dokumen_drive_pdf.csv
│   ├── video_promosi.csv
│   └── info_booking_unit.csv
│
└── downloads/                  # Folder hasil unduhan file
    ├── images/                 # 17 Berkas poster/banner proyek (.jpg)
    └── pdf/                    # Berkas Price List & Site Plan (.pdf)
```

---

## 🚀 Cara Menjalankan Website

### Cara 1: Langsung Buka File HTML (Paling Cepat)
Cukup klik ganda (double-click) file **`index.html`** di Windows Explorer. Halaman website akan langsung terbuka di browser Anda secara offline dengan data lengkap!

### Cara 2: Melalui Perintah CLI Web Server Lokal
Jalankan perintah berikut di terminal:
```bash
python main.py --serve
```
Browser akan otomatis terbuka menampilkan website di alamat:  
👉 **`http://localhost:8000`**

### Cara 3: Menggunakan Menu Interaktif
Jalankan:
```bash
python main.py
```
Pilih opsi **`[6] Jalankan Web Server & Buka Website di Browser`**.

---

## 🌐 Deploy ke GitHub Pages (Gratis & Online)

Website ini sudah 100% siap dihosting langsung di **GitHub Pages**:
1. Buka repositori Anda di GitHub: [https://github.com/franssaut/scraprenggali](https://github.com/franssaut/scraprenggali)
2. Klik tab **Settings** > **Pages** (di bilah kiri).
3. Di bagian **Build and deployment > Branch**:
   - Pilih Branch: **`main`**
   - Folder: **`/ (root)`**
4. Klik **Save**.
5. Dalam 1-2 menit, website Anda akan aktif online di:  
   👉 **`https://franssaut.github.io/scraprenggali/`**

---

## 🛠️ Perintah Scraping & Pembaharuan Data

Jika ada pembaruan data pada Google Sites atau Google Spreadsheet Renggali Group, Anda dapat memperbarui data kapan saja:

```bash
# Scrape ulang seluruh data dan update Excel, JSON, CSV, serta data.js website:
python main.py --all

# Hanya perbarui data transaksi booking unit:
python main.py --booking

# Unduh semua file PDF (Price List & Site Plan) ke folder downloads/pdf/:
python main.py --download-pdf

# Unduh semua gambar banner ke folder downloads/images/:
python main.py --download-img
```

---

## 🏢 17 Proyek Perumahan & Ruko yang Terdata

| No | Nama Properti | Lokasi Batam | Berkas Legalitas & Pricelist | Video Promosi |
|:---|:---|:---|:---:|:---:|
| 1 | **Renggali Residence** | Tembesi | Site Plan & Price List PDF | Ada (YouTube) |
| 2 | **Taman Anugerah Residence** | Tembesi | Site Plan & Price List PDF | Ada (YouTube) |
| 3 | **Anugerah Renggali** | Tembesi | Site Plan & Price List PDF | Ada (YouTube) |
| 4 | **Cluster Ivory** | Tembesi | Site Plan & Price List PDF | Ada (YouTube) |
| 5 | **Cluster Orange** | Tembesi | Site Plan & Price List PDF | - |
| 6 | **Ruko Taman Anugerah** | Tembesi | Site Plan & Price List PDF | - |
| 7 | **Citra Renggali Marina** | Simp. Basecamp | Site Plan & Price List PDF | Ada (YouTube) |
| 8 | **Citra Renggali Sakura** | Simp. Basecamp | Site Plan & Price List PDF | Ada (YouTube) |
| 9 | **Renggali Asoka** | Simp. Basecamp | Site Plan & Price List PDF | Ada (YouTube) |
| 10 | **Renggali Fantasy Namsan** | Simp. Basecamp | Site Plan & Price List PDF | Ada (YouTube) |
| 11 | **Perumahaan & Ruko Sumberindo** | Tanjung Uncang | Site Plan & Price List PDF | - |
| 12 | **Renggali Sitalasari** | Nongsa | Site Plan & Price List PDF | - |
| 13 | **Renggali Nongsa** | Nongsa | Site Plan & Price List PDF | - |
| 14 | **Renggali Khalifa** | Batu Besar | Site Plan & Price List PDF | Ada (YouTube) |
| 15 | **Renggali Nongsa viory** | Nongsa | Site Plan & Price List PDF | - |
| 16 | **Renggali Visco** | Sei Daun - Piayu | Site Plan & Price List PDF | Ada (YouTube) |
| 17 | **Renggali Silimakuta** | Putri Hijau | Site Plan & Price List PDF | Ada (YouTube) |
