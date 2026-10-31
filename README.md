# 🌐 Web Scraper, Portal Website & Bot Telegram Properti Renggali Group Batam

Sistem terintegrasi lengkap yang terdiri dari **Web Scraper Otomatis**, **Portal Website Interaktif**, dan **Bot Telegram Cerdas** untuk mengekstrak, memvisualisasikan, dan melacak seluruh proyek properti serta transaksi booking unit dari situs resmi **Renggali Group Batam**:  
🔗 **[https://sites.google.com/view/proyekrenggali/home](https://sites.google.com/view/proyekrenggali/home)**

---

## 🌟 Ekosistem Aplikasi

| Komponen | Berkas Utama | Keterangan & Akses |
| :--- | :--- | :--- |
| 🚀 **Portal Website (Live Vercel)** | `index.html`, `data.js` | **[https://scraprenggali.vercel.app](https://scraprenggali.vercel.app)** |
| 🤖 **Bot Telegram Interaktif** | `bot.py` | Navigasi katalog, unduh PDF, & cek booking via Telegram |
| ⚡ **Engine Web Scraper** | `renggali_scraper.py` | Ekstraksi 17 proyek, deep crawl subsite, & live Google Sheets |
| 💻 **CLI & Local Server** | `main.py` | Menu interaktif terminal, server lokal, & runner bot |
| 📊 **Master Data** | `.xlsx`, `.json`, `.csv` | Ekspor komprehensif ke Excel, JSON, dan CSV |

---

## 🤖 Bot Telegram Renggali Group (`bot.py`)

Bot Telegram interaktif yang memudahkan agen pemasaran, sales, dan konsumen melihat katalog perumahan, mengunduh file Price List & Site Plan PDF, serta memantau status booking unit secara langsung dari Telegram.

### 📋 Fitur-Fitur Bot:
- 🏢 **Katalog 17 Proyek Properti**: Menampilkan daftar perumahan lengkap dengan foto banner beresolusi tinggi dan ringkasan promo.
- 📍 **Pencarian & Filter Wilayah**: Filter cepat berdasarkan kawasan di Batam (Tembesi, Simp. Basecamp, Nongsa, Tanjung Uncang, Batu Besar, Sei Daun - Piayu, Putri Hijau).
- 📥 **Unduh Dokumen PDF**: Tombol direct download untuk Site Plan & Price List resmi dari Google Drive.
- 📊 **Live Booking Tracker**: Menampilkan ringkasan status 116 transaksi booking unit (KPR Ekspress, Cash Tahap, Sisforum OKE).
- 🔍 **Pencarian Cepat**: Perintah `/cari <nama>` (contoh: `/cari asoka` atau `/cari tembesi`).
- 🔄 **Refresh Data Otomatis**: Perintah `/refresh` untuk menjalankan ulang scraper secara live.

### 🚀 Cara Menjalankan Bot Telegram:

1. **Dapatkan Token Bot dari Telegram**:
   - Buka aplikasi Telegram dan cari **[@BotFather](https://t.me/BotFather)**.
   - Kirim pesan `/newbot`, lalu ikuti petunjuknya hingga mendapatkan token API HTTP.
   
2. **Setel Token di File `.env`**:
   - Buat file baru bernama `.env` di folder proyek ini (atau salin dari `.env.example`).
   - Masukkan token Anda:
     ```env
     TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
     ```

3. **Jalankan Bot**:
   ```bash
   python bot.py
   ```
   *Atau jalankan melalui menu utama:*
   ```bash
   python main.py --bot
   ```

---

## 🖥️ Portal Website Interaktif (`index.html`)

Website responsif modern yang sudah di-deploy di Vercel:
👉 **[https://scraprenggali.vercel.app](https://scraprenggali.vercel.app)**

### Fitur Utama Website:
- **Showcase 17 Proyek**: Kartu perumahan dengan badge lokasi, indikator ketersediaan PDF & video.
- **Pencarian & Filter Real-Time**: Kolom pencarian instan dan filter pil wilayah.
- **Modal Pop-Up Detail**: Info promo, tombol *Preview* & *Direct Download* untuk file PDF Google Drive, serta pemutar video YouTube tersemat.
- **Live Booking Unit Table**: Tabel 116 transaksi dengan filter status KPR/Cash, pencarian konsumen/sales, dan pagination rapi.
- **Pusat Unduhan Master Data**: Tombol unduh langsung untuk file Excel, JSON, dan CSV.

---

## 📂 Struktur Direktori Proyek

```text
scraprenggali/
│
├── bot.py                      # Bot Telegram Interaktif
├── index.html                  # Halaman Website Portal Utama
├── data.js                     # Dataset JavaScript otomatis untuk Website
├── main.py                     # CLI Menu interaktif, Web Server, & Runner Bot
├── renggali_scraper.py         # Modul inti logika scraping & ekspor data
├── requirements.txt            # Dependensi library Python
├── .env.example                # Contoh format file token Telegram
├── vercel.json                 # Konfigurasi deployment Vercel
├── .vercelignore               # Berkas yang diabaikan saat upload ke Vercel
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

## 🔄 Sistem Otomatis Scraping (Auto-Scraper & Live Sync)

Proyek ini telah dilengkapi sistem pembaruan data otomatis pada 3 tingkatan (Cloud, Website Frontend, & Local Scheduler):

### 1. ☁️ Cloud Automation (GitHub Actions Cron)
- Workflow file: [`.github/workflows/auto_scrape.yml`](file:///.github/workflows/auto_scrape.yml)
- **Jadwal Otomatis**: Berjalan otomatis via cron setiap 3 jam untuk mengekstrak Google Sites dan Google Spreadsheet.
- **Auto-Commit & Auto-Deploy**: Bila terdeteksi perubahan pada katalog atau booking, GitHub Actions secara otomatis melakukan commit & push ke branch `main`, yang langsung memicu auto-deploy Vercel ke [https://scraprenggali.vercel.app](https://scraprenggali.vercel.app).
- **Manual Trigger**: Pengguna dapat memicu scrape kapan saja melalui tab **Actions** di GitHub dengan menekan tombol **"Run workflow"**.

### 2. 🌐 Website Real-Time Polling & Live Sync
- Saat pengguna membuka website [scraprenggali.vercel.app](https://scraprenggali.vercel.app), browser secara otomatis menarik data live dari Google Spreadsheet secara real-time via CORS.
- **Auto-Sync Tiap 60 Detik**: Website memiliki background timer yang secara periodik mengecek pembaruan transaksi booking dan berkas katalog baru dengan notifikasi toast visual yang interaktif.

### 3. 💻 Local Scheduler (CLI & Windows Batch)
- **Perintah CLI**:
  ```bash
  python main.py --schedule 60
  ```
  *(Jalankan auto-scraping berulang setiap 60 menit di latar belakang).*
- **Windows One-Click Batch**:
  Cukup klik dua kali berkas [`auto_scrape.bat`](file:///auto_scrape.bat).

---

## 🛠️ Instalasi & Menjalankan Scraper

1. **Pasang Dependensi**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Perintah Cepat CLI**:
   ```bash
   # Scrape ulang seluruh data (update Excel, JSON, CSV, dan website):
   python main.py --all

   # Jalankan Web Server lokal & buka website di browser:
   python main.py --serve

   # Jalankan Bot Telegram:
   python main.py --bot

   # Unduh semua file PDF (Price List & Site Plan) ke folder downloads/pdf/:
   python main.py --download-pdf

   # Unduh semua gambar banner ke folder downloads/images/:
   python main.py --download-img
   ```

---

## 🏢 17 Proyek Perumahan & Ruko Renggali Group

1. **Renggali Residence** (Tembesi)
2. **Taman Anugerah Residence** (Tembesi)
3. **Anugerah Renggali** (Tembesi)
4. **Cluster Ivory** (Tembesi)
5. **Cluster Orange** (Tembesi)
6. **Ruko Taman Anugerah** (Tembesi)
7. **Citra Renggali Marina** (Simp. Basecamp)
8. **Citra Renggali Sakura** (Simp. Basecamp)
9. **Renggali Asoka** (Simp. Basecamp)
10. **Renggali Fantasy Namsan** (Simp. Basecamp)
11. **Perumahaan & Ruko Sumberindo** (Tanjung Uncang)
12. **Renggali Sitalasari** (Nongsa)
13. **Renggali Nongsa** (Nongsa)
14. **Renggali Khalifa** (Batu Besar)
15. **Renggali Nongsa viory** (Nongsa)
16. **Renggali Visco** (Sei Daun - Piayu)
17. **Renggali Silimakuta** (Putri Hijau)
