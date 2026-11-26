// Data Otomatis Hasil Scraping Renggali Group
const RENGGALI_DATA = {
  "source_url": "https://sites.google.com/view/proyekrenggali/home",
  "scraped_at": "2026-11-26 11:37:52",
  "scraped_at_formatted": "26 November 2026, 11:37 WIB",
  "total_projects": 17,
  "latest_updates": [
    {
      "id": "book_1",
      "type": "BOOKING",
      "badge": "Booking Unit Live",
      "badge_color": "emerald",
      "title": "Unit RRT Blok RK/6 Terbooking",
      "description": "Skema: TIDAK JADI AMBIL • Sales: FANDI • Status Sisforum: ",
      "date": "01-11-2026",
      "project_name": "RRT",
      "link_type": "scroll_booking",
      "target": "#booking-section"
    },
    {
      "id": "book_2",
      "type": "BOOKING",
      "badge": "Booking Unit Live",
      "badge_color": "emerald",
      "title": "Unit CRM Blok AD/1 Terbooking",
      "description": "Skema: NUNGGU KONFIRMASI PINDAH BLOK • Sales: ARYO • Status Sisforum: ",
      "date": "01-11-2026",
      "project_name": "CRM",
      "link_type": "scroll_booking",
      "target": "#booking-section"
    },
    {
      "id": "book_3",
      "type": "BOOKING",
      "badge": "Booking Unit Live",
      "badge_color": "emerald",
      "title": "Unit RRT Blok RW5/22 Terbooking",
      "description": "Skema: KPR EKSPRESS • Sales: SONIA • Status Sisforum: SISFORUM OKE",
      "date": "02-11-2026",
      "project_name": "RRT",
      "link_type": "scroll_booking",
      "target": "#booking-section"
    },
    {
      "id": "promo_Renggali R",
      "type": "PROMO",
      "badge": "Promo Diskon Hot",
      "badge_color": "amber",
      "title": "Promo Terbaru: Renggali Residence",
      "description": "PROMO TERBARU | Diskon | Gratis | : BPHTB, SHGB, AJB Dan 5% Saldo Bank | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin! | 🟥= Free Dapur",
      "date": "Oktober 2026",
      "project_name": "Renggali Residence",
      "link_type": "open_modal",
      "target": "Renggali Residence"
    },
    {
      "id": "promo_Taman Anug",
      "type": "PROMO",
      "badge": "Promo Diskon Hot",
      "badge_color": "amber",
      "title": "Promo Terbaru: Taman Anugerah Residence",
      "description": "PROMO TERBARU | Gratis | : BPHTB, SHGB, AJB Dan 4% Saldo Bank | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "date": "Oktober 2026",
      "project_name": "Taman Anugerah Residence",
      "link_type": "open_modal",
      "target": "Taman Anugerah Residence"
    },
    {
      "id": "promo_Anugerah R",
      "type": "PROMO",
      "badge": "Promo Diskon Hot",
      "badge_color": "amber",
      "title": "Promo Terbaru: Anugerah Renggali",
      "description": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB Dan | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "date": "Oktober 2026",
      "project_name": "Anugerah Renggali",
      "link_type": "open_modal",
      "target": "Anugerah Renggali"
    },
    {
      "id": "doc_1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr",
      "type": "DOKUMEN",
      "badge": "Site Plan Baru",
      "badge_color": "blue",
      "title": "Update Site Plan: Renggali Residence",
      "description": "Berkas resmi 'SP RRT 31 MEI 25.pdf' telah diperbarui dan siap diunduh.",
      "date": "Edisi Terbaru",
      "project_name": "Renggali Residence",
      "link_type": "external_download",
      "target": "https://drive.google.com/uc?id=1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr&export=download"
    },
    {
      "id": "doc_10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O",
      "type": "DOKUMEN",
      "badge": "Site Plan Baru",
      "badge_color": "blue",
      "title": "Update Site Plan: Taman Anugerah Residence",
      "description": "Berkas resmi 'SP TAR 31 OKT 24.pdf' telah diperbarui dan siap diunduh.",
      "date": "Edisi Terbaru",
      "project_name": "Taman Anugerah Residence",
      "link_type": "external_download",
      "target": "https://drive.google.com/uc?id=10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O&export=download"
    },
    {
      "id": "doc_1Gyhuu-jA6d2slxubD837d1R99v6mtLky",
      "type": "DOKUMEN",
      "badge": "Dokumen Baru",
      "badge_color": "blue",
      "title": "Update Dokumen: Cluster Ivory",
      "description": "Berkas resmi 'A.IVORY 2026.pdf' telah diperbarui dan siap diunduh.",
      "date": "Edisi Terbaru",
      "project_name": "Cluster Ivory",
      "link_type": "external_download",
      "target": "https://drive.google.com/uc?id=1Gyhuu-jA6d2slxubD837d1R99v6mtLky&export=download"
    }
  ],
  "projects": [
    {
      "project_name": "Renggali Residence",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/renggaliresidence/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe8czRhW4_vPUTCIzQAxdtaG8lF4fFGQtCaYdftrhzZH-8sS2wS7043hWpTLXYsx5Bprb5gtzUJ02vnMlgY75zRb7-tbb8qkPJe1ZuE_KltqJVWkwsLKqQeopKA0p5p5vQX4opPp6u-zt9MEjsbmijJLNiSVMlN_1yQB5AIu_NePmIhN5j2vWEI5535DUT0Y11SH4pA1CL24KpiePyLuw6-BoSfZyXkBr_jCY-5IXQ=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : BPHTB, SHGB, AJB Dan 5% Saldo Bank | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin! | 🟥= Free Dapur",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": BPHTB, SHGB, AJB Dan 5% Saldo Bank",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "🟥= Free Dapur"
      ],
      "documents": [
        {
          "title": "SP RRT 31 MEI 25.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr",
          "preview_url": "https://drive.google.com/file/d/1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr/preview",
          "view_url": "https://drive.google.com/file/d/1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr/view",
          "download_url": "https://drive.google.com/uc?id=1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1TrJFKUxd2iCKqQnZTFiRvXRNdNEb6YEr&sz=w967-h656-p-k-nu"
        },
        {
          "title": "PL RR 16 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1EcZSYcXBaaIHcHCL85-4eMTcdKJfAPit",
          "preview_url": "https://drive.google.com/file/d/1EcZSYcXBaaIHcHCL85-4eMTcdKJfAPit/preview",
          "view_url": "https://drive.google.com/open?id=1EcZSYcXBaaIHcHCL85-4eMTcdKJfAPit",
          "download_url": "https://drive.google.com/uc?id=1EcZSYcXBaaIHcHCL85-4eMTcdKJfAPit&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1EcZSYcXBaaIHcHCL85-4eMTcdKJfAPit&sz=w967-h1212-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "RENGGALI RESIDENCE",
          "video_id": "xbx9cvGuuL4",
          "embed_url": "https://www.youtube.com/embed/xbx9cvGuuL4?embed_config=%7B%22enc%22:%22AXH1ezluWTqChu1qsyJqAdUvhSn3pGd6dttzREWY5gelDq7lfimI-gVn017M1SGDUAvF0iUX64VzMm90yrbYXcLB51HycjmU07qKQGJZ-SOsvE-B-abEUcjhFxaOO3T38GB6P2iCZIgHjGBuMFNTzpYuFIWp2nnIPCZkSctP0K3BV25FXG-so6uqxD-xJDNCUPu3DeKfRn7Njwj9uP7rhDfRyRjGPbSsG5_pL628LXAer8cwVn4sPduheEFHwFbfWzOtxZZdtrgucTh4bkYkelvKZrsyQdk5OmSJs-xJIbhPTJTT2U6jDbPrR_dOS6xLfYSMDE6HQnDR5af5rOoNmAoOAnbzfd0d3Jp7wWIM683U0Q%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=xbx9cvGuuL4"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Renggali Residence",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Residence",
        "Renggali Residence",
        "Update Renggali Residence",
        "PROMO TERBARU",
        "Diskon",
        "Langsung Hingga 50 Juta",
        "Gratis",
        ": BPHTB, SHGB, AJB Dan 5% Saldo Bank",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "Hold Maksimal 24 Jam : Blok - No. -",
        "🟥= Free Dapur"
      ],
      "local_image": "downloads/images/Renggali Residence.jpg"
    },
    {
      "project_name": "Taman Anugerah Residence",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/tamananugerah/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQctpTPWXgz0kUnwzHzoq3GEUUVFjlsP82vY-_ZrHJhcvylCqHi-BWx-NvR_A1oMDwP61yL3c7O7a1-ykVXnj6WthimyquB1qUjQq1Qk6p5k5f_1l0PwXXQjc0gh2X8z29F9FoqXPYqoZ57FMQDvnaSL5ftszBD_YsWbx8kDfk1yYn73jJ5VbEwyUadMK4Eysuz7PIXlSW27so04tYYaG6yiVKy7QHlZxKfAL6r5=w1280",
      "promo_summary": "PROMO TERBARU | Gratis | : BPHTB, SHGB, AJB Dan 4% Saldo Bank | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Gratis",
        ": BPHTB, SHGB, AJB Dan 4% Saldo Bank",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP TAR 31 OKT 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O",
          "preview_url": "https://drive.google.com/file/d/10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O/preview",
          "view_url": "https://drive.google.com/open?id=10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O",
          "download_url": "https://drive.google.com/uc?id=10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=10WeoqCzSDXdNjpH__GEEbKp3qOL6C49O&sz=w967-h569-p-k-nu"
        },
        {
          "title": "pl tar fix.pdf",
          "doc_type": "Price List",
          "doc_id": "1X1Gk0_z7VYWiUKh8M-OruWUW9Dzz_rPx",
          "preview_url": "https://drive.google.com/file/d/1X1Gk0_z7VYWiUKh8M-OruWUW9Dzz_rPx/preview",
          "view_url": "https://drive.google.com/open?id=1X1Gk0_z7VYWiUKh8M-OruWUW9Dzz_rPx",
          "download_url": "https://drive.google.com/uc?id=1X1Gk0_z7VYWiUKh8M-OruWUW9Dzz_rPx&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1X1Gk0_z7VYWiUKh8M-OruWUW9Dzz_rPx&sz=w967-h980-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "TAMAN ANUGERAH",
          "video_id": "KwGkTkvNbdA",
          "embed_url": "https://www.youtube.com/embed/KwGkTkvNbdA?embed_config=%7B%22enc%22:%22AXH1ezkesCTdB82mQVu8Phe9pza8U-e7Qy4KeGAleM9gYFoYOuHnYwKxRuGEWNv_QzcO9OoahirjZyj0yXsfzEzARZhX0meBSYXsWTUlLm12hy94qyCksP8KHA5YJL3unGgHu38xN6ODzouNyGm5nro6YNmT3PDUt8Iy61pmN54JrNwSNhg2ZzoZNDSA1fiZdFSC9NIStmuaRLBBbn_mCQR8eJ_6TSozBLf4VUI8yXwO8IcHyXRf3PejfRDc3Fg92dMPsZ9jz-ImHny63nMjawb45qvlgp2aXERPpJWf2Twk9xf9fXPtvnM7jwE0SjRRGBOGT_F7beIchBe2QoltsssJ9j4SfcWNi2buxSWCL2VpwA%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=KwGkTkvNbdA"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "TAR",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "TAR",
        "Taman Anugerah Residence",
        "Update Taman Anugerah Residence",
        "PROMO TERBARU",
        "Gratis",
        ": BPHTB, SHGB, AJB Dan 4% Saldo Bank",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "SP TAR 31 OKT 24.pdf",
        "Hold Maksimal 24 Jam : Blok - No. -",
        "PRICE LIST",
        "pl tar fix.pdf"
      ],
      "local_image": "downloads/images/Taman Anugerah Residence.jpg"
    },
    {
      "project_name": "Anugerah Renggali",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/anugerahrenggali/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeGbs8ArA1tNmugZos9GF2QN_RfCJDKeGye3hum9H2bbvbjb896n-geEn0eiu7kynrRNaXDTmrmSIW6QklpzRFiL79vwvk3gjPBEuyl5R-8wLCFGKLuHg6Q77ODmC57kwC_jBygdstiqtMdhtB_njorkaJNZk-JcchlqoAvNJm2ymsIJGE_NERGGB-vG188PiYRtfvHfJgzWDf7fcIDL-wF18GqRdpyQ8XhhM1PR0g=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB Dan | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB Dan",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "PL AR 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1NgL9i2m0MYXb8iKAaAjDHdKo_Ii8nXGz",
          "preview_url": "https://drive.google.com/file/d/1NgL9i2m0MYXb8iKAaAjDHdKo_Ii8nXGz/preview",
          "view_url": "https://drive.google.com/open?id=1NgL9i2m0MYXb8iKAaAjDHdKo_Ii8nXGz",
          "download_url": "https://drive.google.com/uc?id=1NgL9i2m0MYXb8iKAaAjDHdKo_Ii8nXGz&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1NgL9i2m0MYXb8iKAaAjDHdKo_Ii8nXGz&sz=w967-h1045-p-k-nu"
        },
        {
          "title": "Untitled.pdf",
          "doc_type": "Dokumen",
          "doc_id": "1iaURRwovWGzu-gFDqe-g7L7YTG1-UnRt",
          "preview_url": "https://drive.google.com/file/d/1iaURRwovWGzu-gFDqe-g7L7YTG1-UnRt/preview",
          "view_url": "https://drive.google.com/open?id=1iaURRwovWGzu-gFDqe-g7L7YTG1-UnRt",
          "download_url": "https://drive.google.com/uc?id=1iaURRwovWGzu-gFDqe-g7L7YTG1-UnRt&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1iaURRwovWGzu-gFDqe-g7L7YTG1-UnRt&sz=w967-h1167-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "ANUGERAH RENGGALI",
          "video_id": "8EF0oxWUfw8",
          "embed_url": "https://www.youtube.com/embed/8EF0oxWUfw8?embed_config=%7B%22enc%22:%22AXH1ezkhKrqn2e5xZhES3vrcjO17Qdy61CqxvHrdN5qnafRhVW9z9k_4xz6O9qz65CpMUmceomh9zLHgF0nxgILiOecmhDWXTQLotyyr5kLuiElbCeiHkmDWIHmW0tg6cCy0s_FX4CklVFKlillsLiyn2pjoX9Vs3AZBpzMDljwNyUQNP1jSGI4s2QLZPx8ArdTry-Z2WsVbMP5xwCuWFul_-pfqW8kOFbmoYb0tSEs6wfY7RrTMMb8qndYB-4dwWKIzO3hPVegW0Ob22feYRbT2oHEYulrsuYshEwlwQdHcFzEpAAgSO50rX25-DY_2X6-KvVqhwdFYIO2hQYHQdEvDPzUnERLHWfrgdHG9i8LX6A%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=8EF0oxWUfw8"
        }
      ],
      "sheet_links": [],
      "raw_text_snippets": [
        "Anugerah Renggali",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Anugerah Renggali",
        "Anugerah Renggali",
        "Update Anugerah Renggali",
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB Dan",
        "Perpanjangan UWTO",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "PRICE LIST",
        "PL AR 14 NOV 26.pdf",
        "SITE PLAN",
        "Untitled.pdf",
        "Hold Maksimal 24 Jam : Blok - No. -"
      ],
      "local_image": "downloads/images/Anugerah Renggali.jpg"
    },
    {
      "project_name": "Cluster Ivory",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/kotamandirirenggali/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQcz66RYc4rTeZvJxSSFHsHPA814q-ae2g_Cf4773F45FWZAPnJdiAC0m6MdmIR884xlk92oN4z0nwj1q79fKDScqA39XOSkU5PmahdkIc1vnePqTyNUt2jy7uJLGtaV9a531MGWyy6mbZ4myeMwzWepKUnNuJk5nynkFLSjgH_aLbIZ1SI7z_lUH1wT09QomhtwsWKFDFOvGtcsZyNZW7DMNLFcqIBdvDlSCksTtUM=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, | AJB, | FREE DAPUR & RUANG MAKAN | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB,",
        "AJB,",
        "FREE DAPUR & RUANG MAKAN",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "A.IVORY 2026.pdf",
          "doc_type": "Dokumen",
          "doc_id": "1Gyhuu-jA6d2slxubD837d1R99v6mtLky",
          "preview_url": "https://drive.google.com/file/d/1Gyhuu-jA6d2slxubD837d1R99v6mtLky/preview",
          "view_url": "https://drive.google.com/open?id=1Gyhuu-jA6d2slxubD837d1R99v6mtLky",
          "download_url": "https://drive.google.com/uc?id=1Gyhuu-jA6d2slxubD837d1R99v6mtLky&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1Gyhuu-jA6d2slxubD837d1R99v6mtLky&sz=w967-h1378-p-k-nu"
        },
        {
          "title": "PL IVORY 15 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "1Nfe4vb58rt9sncuUMl3jGk2srSUiZ8ma",
          "preview_url": "https://drive.google.com/file/d/1Nfe4vb58rt9sncuUMl3jGk2srSUiZ8ma/preview",
          "view_url": "https://drive.google.com/open?id=1Nfe4vb58rt9sncuUMl3jGk2srSUiZ8ma",
          "download_url": "https://drive.google.com/uc?id=1Nfe4vb58rt9sncuUMl3jGk2srSUiZ8ma&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1Nfe4vb58rt9sncuUMl3jGk2srSUiZ8ma&sz=w967-h1297-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "PERUMAHAN KOTA MANDIRI RENGGALI",
          "video_id": "mPB-jegmXGM",
          "embed_url": "https://www.youtube.com/embed/mPB-jegmXGM?embed_config=%7B%22enc%22:%22AXH1ezmeuNlQrvWdxH5JgQjMhE5NT3BbqPnnbZnuU7bpR5bBUanHcuDyAT9XJgV-fG-0Z9g8d7Dn3wnlun-qosVR-B2uQ6RE85Sxor7vvSlh-CsxjeFO-s1O6t_ZVwlZT8dyorSbW6hdNGrsq_cDIuar_Dd9JztUM5uy3sPAfL7S0yNsoVcOulHAVWEhNkNC-Ku8sW8zLVIDfHoT7O43P6OnwJ0392sOJL8ekEum9NRdtP5goXA4qFb2As7lokOC3J3S0Vu1t-Hw8kaLFm5owvgE6gWybCIYNacyuVbEMHMn3o3gCUJeQUhmlag6xawMPYiMP1b_3Kmlw-Skz88J9PH6gNXSM6BSLxp4-E5eZf6JRQ%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=mPB-jegmXGM"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "KMR CLUSTER IVORY",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "KMR CLUSTER IVORY",
        "Update Kota Mandiri Renggali Cluster Ivory",
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB,",
        "AJB,",
        "FREE DAPUR & RUANG MAKAN",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "A.IVORY 2026.pdf",
        "PRICE LIST"
      ],
      "local_image": "downloads/images/Cluster Ivory.jpg"
    },
    {
      "project_name": "Cluster Orange",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/clusterorange/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfr2vb5Gr-DCNzchanJpuo_I_coJynuGx43F4bByNaaCLgDfzb6jYYCHGrCJmsSYAGJBk0EkyL6hVn4159swO7iXvUQszsS55O7hVDDwaUOpaz8QZ85pJTLEBVD8UqvU4JCt561N5stVDAfeOFdpKTTqTYvBJeZVq-pSR4I_8M5eg5Vnz6-FheMIbbHr4itaJ11pO4VhiLXBdxPpLrcalE-xFjTsD_HBr2aXfnAcyE=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Promo Launching | Gratis | SHGB, AJ | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Promo Launching",
        "Gratis",
        "SHGB, AJ",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "PK KMR.pdf",
          "doc_type": "Dokumen",
          "doc_id": "1_TfOmkdio9Qh6niBHAwbfXdp-EI-xLSj",
          "preview_url": "https://drive.google.com/file/d/1_TfOmkdio9Qh6niBHAwbfXdp-EI-xLSj/preview",
          "view_url": "https://drive.google.com/open?id=1_TfOmkdio9Qh6niBHAwbfXdp-EI-xLSj",
          "download_url": "https://drive.google.com/uc?id=1_TfOmkdio9Qh6niBHAwbfXdp-EI-xLSj&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1_TfOmkdio9Qh6niBHAwbfXdp-EI-xLSj&sz=w1218-h664-p-k-nu"
        },
        {
          "title": "SP KMR ORANGE 21 MAR 25.pdf",
          "doc_type": "Site Plan",
          "doc_id": "157336vpKSlT5vow3BFAMIunXeS2sBXWA",
          "preview_url": "https://drive.google.com/file/d/157336vpKSlT5vow3BFAMIunXeS2sBXWA/preview",
          "view_url": "https://drive.google.com/open?id=157336vpKSlT5vow3BFAMIunXeS2sBXWA",
          "download_url": "https://drive.google.com/uc?id=157336vpKSlT5vow3BFAMIunXeS2sBXWA&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=157336vpKSlT5vow3BFAMIunXeS2sBXWA&sz=w967-h656-p-k-nu"
        },
        {
          "title": "0110.Pricelist_KMR_Orange_OKTOBER.pdf",
          "doc_type": "Price List",
          "doc_id": "1ZUG5MXo_y1nAYkgUpDAxcRiC7kApPU_-",
          "preview_url": "https://drive.google.com/file/d/1ZUG5MXo_y1nAYkgUpDAxcRiC7kApPU_-/preview",
          "view_url": "https://drive.google.com/open?id=1ZUG5MXo_y1nAYkgUpDAxcRiC7kApPU_-",
          "download_url": "https://drive.google.com/uc?id=1ZUG5MXo_y1nAYkgUpDAxcRiC7kApPU_-&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1ZUG5MXo_y1nAYkgUpDAxcRiC7kApPU_-&sz=w1218-h1230-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Cluster Orange",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Cluster Orange",
        "Cluster Orange",
        "Update Cluster Orange",
        "PROMO TERBARU",
        "Diskon",
        "Promo Launching",
        "Cuma 350 juta Cash Tahap 36 Kali",
        "Guarantee Buy Back 400 Juta",
        "Gratis",
        "SHGB, AJ",
        "B, UWTO 2050",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "Unduh Produk Knowledge",
        "PK KMR.pdf"
      ],
      "local_image": "downloads/images/Cluster Orange.jpg"
    },
    {
      "project_name": "Ruko Taman Anugerah",
      "location": "Tembesi",
      "project_url": "https://sites.google.com/view/rukotamananugerah/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeZXL4B2uVWCjHWXpAs-lm_KFmE1uqEo7QKpXKya1vTQneDWK59bjklyjyliKYgV9AkvPVJ4wnwk-Mh8il9F70hwNQafkhzFjssEa0l3rXqaK30UbdxgbLAE4Bgvellhjt9IqFGCdZ1tT8EQO2wtdrvCozLnsIhcdYrmQ3W2XRvUg_HIREyvxJIUWi5NC-ns7P4gg6WdS5SKQeGYg3sG5psnFy64dxYDmOMNDvu1dg=w1280",
      "promo_summary": "Promo Sesuai Price List | PROMO TERBARU",
      "promo_details": [
        "Promo Sesuai Price List",
        "PROMO TERBARU"
      ],
      "documents": [
        {
          "title": "SP Ruko Taman Anugerah.pdf",
          "doc_type": "Site Plan",
          "doc_id": "14Jjr4Eu_srGNK2fLzlPS3s_B_qB_O7Nh",
          "preview_url": "https://drive.google.com/file/d/14Jjr4Eu_srGNK2fLzlPS3s_B_qB_O7Nh/preview",
          "view_url": "https://drive.google.com/open?id=14Jjr4Eu_srGNK2fLzlPS3s_B_qB_O7Nh",
          "download_url": "https://drive.google.com/uc?id=14Jjr4Eu_srGNK2fLzlPS3s_B_qB_O7Nh&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=14Jjr4Eu_srGNK2fLzlPS3s_B_qB_O7Nh&sz=w967-h656-p-k-nu"
        },
        {
          "title": "pl ruko taman anugerah.pdf",
          "doc_type": "Price List",
          "doc_id": "1GkVyVk7oFVOI-laaWaTm3unjR3RYWww3",
          "preview_url": "https://drive.google.com/file/d/1GkVyVk7oFVOI-laaWaTm3unjR3RYWww3/preview",
          "view_url": "https://drive.google.com/open?id=1GkVyVk7oFVOI-laaWaTm3unjR3RYWww3",
          "download_url": "https://drive.google.com/uc?id=1GkVyVk7oFVOI-laaWaTm3unjR3RYWww3&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1GkVyVk7oFVOI-laaWaTm3unjR3RYWww3&sz=w967-h656-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [],
      "raw_text_snippets": [
        "Ruko Taman Anugerah",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Ruko Taman Anugerah",
        "Promo Sesuai Price List",
        "PROMO TERBARU",
        "Site Plan",
        "SP Ruko Taman Anugerah.pdf",
        "Price List",
        "pl ruko taman anugerah.pdf",
        "Persyaratan KPR",
        "Kota Mandiri Renggali 2024",
        "Situs Google",
        "Laporkan penyalahgunaan",
        "Detail halaman",
        "Halaman diperbarui",
        "Situs Google",
        "Laporkan penyalahgunaan"
      ],
      "local_image": "downloads/images/Ruko Taman Anugerah.jpg"
    },
    {
      "project_name": "Citra Renggali Marina",
      "location": "Simp. Basecamp",
      "project_url": "https://sites.google.com/view/citrarenggalimarina/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeHnYVCYy1aR4oneYWd6cee6MGP1vTFfJr56OjX6OrPede7oUfHqdazRrXYOvZXCG7kjjlrgBgDcd51rzUyuTTHg7j_AC0-5AxSNUqAM_PFAH9bwNbmjbchL0XY5tlhjY1eFdhZY4mD-dUSW8yL8yLD9dZIbdyU9fKqtQOlGVb2yL3lzjWLI8lU6FpgjjqrQlDfblehgWV6x1soEL21Rcf_l_C5A-7ldNz0cwXVKIE=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB, BPHTB,  UWTO | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB, BPHTB,  UWTO",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "03.ANYELIR.LURUS.pdf",
          "doc_type": "Dokumen",
          "doc_id": "12De8TuhXkcIMH8DlxRXlRP5t3Dv_o4We",
          "preview_url": "https://drive.google.com/file/d/12De8TuhXkcIMH8DlxRXlRP5t3Dv_o4We/preview",
          "view_url": "https://drive.google.com/open?id=12De8TuhXkcIMH8DlxRXlRP5t3Dv_o4We",
          "download_url": "https://drive.google.com/uc?id=12De8TuhXkcIMH8DlxRXlRP5t3Dv_o4We&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=12De8TuhXkcIMH8DlxRXlRP5t3Dv_o4We&sz=w967-h665-p-k-nu"
        },
        {
          "title": "SP BOUGENVILLE LURUS 24 SEP 24 (1).pdf",
          "doc_type": "Site Plan",
          "doc_id": "199nDhsCZirDaFGQ70PPg9xDxpXchVaB0",
          "preview_url": "https://drive.google.com/file/d/199nDhsCZirDaFGQ70PPg9xDxpXchVaB0/preview",
          "view_url": "https://drive.google.com/open?id=199nDhsCZirDaFGQ70PPg9xDxpXchVaB0",
          "download_url": "https://drive.google.com/uc?id=199nDhsCZirDaFGQ70PPg9xDxpXchVaB0&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=199nDhsCZirDaFGQ70PPg9xDxpXchVaB0&sz=w967-h624-p-k-nu"
        },
        {
          "title": "SP MAWAR DAN DAHLIA LURUS 31 OKT 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "10EBRDtWhWRFNTnYZ8LRuvpN6ytHdNgfP",
          "preview_url": "https://drive.google.com/file/d/10EBRDtWhWRFNTnYZ8LRuvpN6ytHdNgfP/preview",
          "view_url": "https://drive.google.com/open?id=10EBRDtWhWRFNTnYZ8LRuvpN6ytHdNgfP",
          "download_url": "https://drive.google.com/uc?id=10EBRDtWhWRFNTnYZ8LRuvpN6ytHdNgfP&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=10EBRDtWhWRFNTnYZ8LRuvpN6ytHdNgfP&sz=w967-h656-p-k-nu"
        },
        {
          "title": "PL CRM 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1MEWpPFgb86glrdV45GCjZayMphgYypin",
          "preview_url": "https://drive.google.com/file/d/1MEWpPFgb86glrdV45GCjZayMphgYypin/preview",
          "view_url": "https://drive.google.com/open?id=1MEWpPFgb86glrdV45GCjZayMphgYypin",
          "download_url": "https://drive.google.com/uc?id=1MEWpPFgb86glrdV45GCjZayMphgYypin&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1MEWpPFgb86glrdV45GCjZayMphgYypin&sz=w967-h1120-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Perumahan Renggali Grup Batam",
          "video_id": "6ljiHk5-39Y",
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1eznD6vaNNLobMhlHtKihQfaDAix47QA54RLpMzqAcaGBZM6zqUYZgGTV73NPmxZ8f3Qc6uyWraEFW1tivnfA2bosuyAM_3fZXNw42nqT8N7bs_RZkunvb3AJfcwPnwVUVGShqgU76QT4ge8_mrB31ecvZxt3Xj8idb5v0NEv8I3Hp5sqN25f_si5s1LRWkg9ht2W2koNOBb9mAmBCbaQLAm6nz4yvQOxpzVj6_BYPHa8MtHAoj7e-g0MiG2mN5MmtH17TVaLAPOr6dvrRBEeKsqvXytTaJgLkwqq_pQa8Fd5jaPLOkIur21haJRA88TppBQ4QW9StfsWQ9LF0TapR1ZNIxA8ufGIQ-1zIYc4LQ%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=6ljiHk5-39Y"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Citra Renggali Marina",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Citra Renggali Marina",
        "CITRA RENGGALI MARINA",
        "Update Citra Renggali Marina",
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB, BPHTB,  UWTO",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "03.ANYELIR.LURUS.pdf",
        "SP BOUGENVILLE LURUS 24 SEP 24 (1).pdf",
        "SP MAWAR DAN DAHLIA LURUS 31 OKT 24.pdf"
      ],
      "local_image": "downloads/images/Citra Renggali Marina.jpg"
    },
    {
      "project_name": "Citra Renggali Sakura",
      "location": "Simp. Basecamp",
      "project_url": "https://sites.google.com/view/citra-renggali-sakura/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfoNN5i4lpS9GsiZKVSZ84zsENdvNrIot7nz8VtBALHXVxB1iza8s1VBxiuI7Q5weAIzIm4kvELd8NWlVA-5h4r_B69agSQGsodgKHvL2jvwX_37jEpHsQaKxlMYG2S0Cw52FVnwuTYopUrt1DmJwqQeHzcP4KMyE-9gKkEnrd_shzKbvMcmHFSODRC1LUs11gffWZReyMfvKPDk14onJtIwZD3105sD7LeQ7EKpeA=w1280",
      "promo_summary": "PROMO TERBARU | Gratis | : SHGB, | AJB,",
      "promo_details": [
        "PROMO TERBARU",
        "Gratis",
        ": SHGB,",
        "AJB,"
      ],
      "documents": [
        {
          "title": "SP CRM SAKURA 27 MAR 25.pdf",
          "doc_type": "Site Plan",
          "doc_id": "13Q9kYn-iZ4GOoK8SZlm6BdOF-HswZT_l",
          "preview_url": "https://drive.google.com/file/d/13Q9kYn-iZ4GOoK8SZlm6BdOF-HswZT_l/preview",
          "view_url": "https://drive.google.com/open?id=13Q9kYn-iZ4GOoK8SZlm6BdOF-HswZT_l",
          "download_url": "https://drive.google.com/uc?id=13Q9kYn-iZ4GOoK8SZlm6BdOF-HswZT_l&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=13Q9kYn-iZ4GOoK8SZlm6BdOF-HswZT_l&sz=w967-h656-p-k-nu"
        },
        {
          "title": "0124.Pricelist_Renggali_Sakura_010225.pdf",
          "doc_type": "Price List",
          "doc_id": "1psmLHr-LLWC8Ch3Z2mPQhB9uh8DZ_Nuk",
          "preview_url": "https://drive.google.com/file/d/1psmLHr-LLWC8Ch3Z2mPQhB9uh8DZ_Nuk/preview",
          "view_url": "https://drive.google.com/open?id=1psmLHr-LLWC8Ch3Z2mPQhB9uh8DZ_Nuk",
          "download_url": "https://drive.google.com/uc?id=1psmLHr-LLWC8Ch3Z2mPQhB9uh8DZ_Nuk&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1psmLHr-LLWC8Ch3Z2mPQhB9uh8DZ_Nuk&sz=w967-h656-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Perumahan Renggali Grup Batam",
          "video_id": "6ljiHk5-39Y",
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezkXSFT_Dn3IymYuS7ff_EJpeh-EcmnueK6H2WcoyOP1DONydKK5nvcWFEAbbMtBsFzZqa4dZ6DQIAfQ-TYJb49bNYKhpsl4L9xedgSxyh54yyy6Zi9Au0ifDWnsFWVxR9V1bJYNibtz25rCwkyMaUtVxdesPKrD_PruWnLBDuiFlGy_bqjcgE5nWnEVoPKLNt9yned7gxgUVNQNRSrJaiKG7wdfsE6o_mZ1TGlPjavIRJq-PCkx3dG5rquxqD6rR-Ed9UcyfFjyXGCkWDHUgx8A5v_5LcFS0D0sqRCPfGApZ-WhO2PS1kzEXUs1aEYNJgr4je6qJYzZe-CLVQFZogYxKBdugGCYeoys5V7pEw%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=6ljiHk5-39Y"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Citra Renggali Sakura",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Citra Renggali Sakura",
        "CITRA RENGGALI SAKURA",
        "RENGGALI SAKURA MARINA",
        "PROMO TERBARU",
        "Gratis",
        ": SHGB,",
        "AJB,",
        "UWTO",
        "SITE PLAN SAKURA",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "SP CRM SAKURA 27 MAR 25.pdf",
        "Price List Sakura",
        "0124.Pricelist_Renggali_Sakura_010225.pdf",
        "Persyaratan KPR"
      ],
      "local_image": "downloads/images/Citra Renggali Sakura.jpg"
    },
    {
      "project_name": "Renggali Asoka",
      "location": "Simp. Basecamp",
      "project_url": "https://sites.google.com/view/renggaliasoka/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdw6JHB3rjeOOk5cRgILprSI2sYUmZ-0qkoCTPd3U783t_9J8Um94_M-DJihFEtkuNHrOKmLbwEuqtvkwjkk_mvOaEPaZYUE6-ly2aF0vh1ydDjgmyFIh5Xu4LWTzlUviqNuOZaqROI8SXgP841DNYRrDtlsaHwtebYNJ9PjzSDqH2L9_e2YpyHYM_zyx_DQ_aJX0DyxnYXjn-jhWcm9QJU1jc5YpaLkBD6yTcoS7M=w1280",
      "promo_summary": "PROMO TERBARUu | Diskon | Gratis | : SHGB, AJB,  UWTO | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARUu",
        "Diskon",
        "Gratis",
        ": SHGB, AJB,  UWTO",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP RENGGALI ASOKA 9 OKT 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1-Wa6oeq1y04Jkc7BFY9P2VboygyHjqDd",
          "preview_url": "https://drive.google.com/file/d/1-Wa6oeq1y04Jkc7BFY9P2VboygyHjqDd/preview",
          "view_url": "https://drive.google.com/open?id=1-Wa6oeq1y04Jkc7BFY9P2VboygyHjqDd",
          "download_url": "https://drive.google.com/uc?id=1-Wa6oeq1y04Jkc7BFY9P2VboygyHjqDd&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1-Wa6oeq1y04Jkc7BFY9P2VboygyHjqDd&sz=w967-h621-p-k-nu"
        },
        {
          "title": "PL ASOKA 10 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1k2Dk4Ii40AX4DnAfF7FDFw-Olj4IFD0U",
          "preview_url": "https://drive.google.com/file/d/1k2Dk4Ii40AX4DnAfF7FDFw-Olj4IFD0U/preview",
          "view_url": "https://drive.google.com/open?id=1k2Dk4Ii40AX4DnAfF7FDFw-Olj4IFD0U",
          "download_url": "https://drive.google.com/uc?id=1k2Dk4Ii40AX4DnAfF7FDFw-Olj4IFD0U&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1k2Dk4Ii40AX4DnAfF7FDFw-Olj4IFD0U&sz=w967-h1072-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Perumahan Renggali Grup Batam",
          "video_id": "6ljiHk5-39Y",
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezmYYBksbkohY96eBUbUSSN-VmO_h46EZCvO-g-Kk-IhKpE_br273dB-0GrWQu7BGpqyrvZDAlIT5NdsCZ62DIFmA2hxRXVOayptNeVgzcYgz4-_hRMkrL0FXYye2vs3qgGr7ygI1mNf1Uy1owMS-SPv2qkdMhq88hRV_X3m8N_N0EGZ4S0wmROsAu3EZDdPstMwznoMNA56ps9eupIIaKcT2O7e_-ulVn3x1gIjH54a61meVACBvXJE37XdTp9Be4WO1ri1o0vvaUd__u5A_UAffiGB7T7EmlduhMCm3Vcu3C7yesS1-DL2KGPqbHGWYppucAeEyWjeap3jtYdFIzsLszAtqdRfCs-dKxKrJg%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=6ljiHk5-39Y"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Renggali Asoka",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Asoka",
        "Renggali Asoka",
        "Update Renggali Asoka",
        "PROMO TERBARUu",
        "Diskon",
        "Gratis",
        ": SHGB, AJB,  UWTO",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "SP RENGGALI ASOKA 9 OKT 24.pdf",
        "Hold Maksimal 24 Jam : Blok - No. -",
        "PRICE LIST"
      ],
      "local_image": "downloads/images/Renggali Asoka.jpg"
    },
    {
      "project_name": "Renggali Fantasy Namsan",
      "location": "Simp. Basecamp",
      "project_url": "https://sites.google.com/view/renggalifantasy/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQcMlGnA78PqritrAKyw3K1XRqvt3vLfMv4596ugbQmOhMWRN79ilU23i3lSQFVS8TEbyyPQYEt6q8FDnMn6eTwvtvlmA7G4KrrYeMM6HiWMit8MJCcaEdcJ-_iBqdb9TrQTynOvtY43cn9zRwoTStFRHpOCZgD7l4PU65fSRSUCGeAXapelOJ-iTvdkyRVBajdUGUp5lwn2xAKRvCmNLjw9MRRlq2jY11ptgA=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB, UWTO, FREE DAPUR & RUANG MAKAN | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB, UWTO, FREE DAPUR & RUANG MAKAN",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "PL FANTASY 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "12GYlR-hby9u5XCKSYcu7VJhZK0PMkttw",
          "preview_url": "https://drive.google.com/file/d/12GYlR-hby9u5XCKSYcu7VJhZK0PMkttw/preview",
          "view_url": "https://drive.google.com/open?id=12GYlR-hby9u5XCKSYcu7VJhZK0PMkttw",
          "download_url": "https://drive.google.com/uc?id=12GYlR-hby9u5XCKSYcu7VJhZK0PMkttw&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=12GYlR-hby9u5XCKSYcu7VJhZK0PMkttw&sz=w967-h922-p-k-nu"
        },
        {
          "title": "SITE PLAN RNM 31 MEI 25.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1QoTz42TDg7d7m35bWNsZ7TbBla0apN02",
          "preview_url": "https://drive.google.com/file/d/1QoTz42TDg7d7m35bWNsZ7TbBla0apN02/preview",
          "view_url": "https://drive.google.com/open?id=1QoTz42TDg7d7m35bWNsZ7TbBla0apN02",
          "download_url": "https://drive.google.com/uc?id=1QoTz42TDg7d7m35bWNsZ7TbBla0apN02&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1QoTz42TDg7d7m35bWNsZ7TbBla0apN02&sz=w967-h638-p-k-nu"
        },
        {
          "title": "SITE PLAN RFM 16 NOV 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "11Qzrg-0_wM7cl646l_J-rfFTuiLcVoTD",
          "preview_url": "https://drive.google.com/file/d/11Qzrg-0_wM7cl646l_J-rfFTuiLcVoTD/preview",
          "view_url": "https://drive.google.com/open?id=11Qzrg-0_wM7cl646l_J-rfFTuiLcVoTD",
          "download_url": "https://drive.google.com/uc?id=11Qzrg-0_wM7cl646l_J-rfFTuiLcVoTD&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=11Qzrg-0_wM7cl646l_J-rfFTuiLcVoTD&sz=w967-h641-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Rumah Subsidi Batu Aji",
          "video_id": "7zCvCtqLjwY",
          "embed_url": "https://www.youtube.com/embed/7zCvCtqLjwY?embed_config=%7B%22enc%22:%22AXH1ezkLIJo1o41C2nkDcHHpruYq4_24ulpWTQofSsQUOqXDGxEe286viqTpi4tJpMeJ_mpvOGyjLEY9ss__RdMEZ7_SDsVQyGlYJKD8Sih1-fooWR-_24a8PU44p1VDfk4S7yhYanRyOAuYik-_6-drp4dn6a2IJ3uJrGisIy99j9QQkI20MOg2IjjTyiHCmNt4l2ELzabllynLkFZPpSCu6NsBAd29YplVvOeR3C_Sdc8EPzoPb7_BgquBdiZUFSd19d06VFVRvuFqOg_Juykwxyj2cQ3uxHICXSAkSoY05Q67zCgVbV2721tbJ8zccWEleApr71CYvveCIvkqDar5UMSv1k7rdA0aE73BMM-6Fw%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=7zCvCtqLjwY"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Fantasy-Namsan",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Fantasy-Namsan",
        "Renggali Fantasy & Namsan",
        "Update Renggali Namsan",
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB, UWTO, FREE DAPUR & RUANG MAKAN",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "Update Renggali Renggali Fantasy",
        "rice List",
        "PL FANTASY 14 NOV 26.pdf",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek",
        "yang terjual Setelah Up Date"
      ],
      "local_image": "downloads/images/Renggali Fantasy Namsan.jpg"
    },
    {
      "project_name": "Perumahaan & Ruko Sumberindo",
      "location": "Tanjung Uncang",
      "project_url": "https://sites.google.com/view/sumberindo/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQet1l2cFVjBddDEd6Vh-keonCcCxVnCdSBbWE_uygf3qjcZIoDM2H6uvcLsAENjoiiTAVESHXgNQPSd56ytbpRjv1zFVzCkPucso757Icqjz74EDDffKYvRpNS2TyX1eDwnE_-EZD31e6wlCnB3EGKJqZE2c4hVGDDoFebIon6L4GZBqhJC6dbQqmyzTvqGGwVUSr11o5mLSehc7_o8BxLzv2URwkVmaCiEIagb=w1280",
      "promo_summary": "FREE REPAIR | Gratis | : SHGB, AJB, | BPHTB | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "FREE REPAIR",
        "Gratis",
        ": SHGB, AJB,",
        "BPHTB",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP SUMBERINDO TJ UNCANG 2026.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1DZ8VOoRwL-GshgXqwtkerWxc597Lvjc6",
          "preview_url": "https://drive.google.com/file/d/1DZ8VOoRwL-GshgXqwtkerWxc597Lvjc6/preview",
          "view_url": "https://drive.google.com/open?id=1DZ8VOoRwL-GshgXqwtkerWxc597Lvjc6",
          "download_url": "https://drive.google.com/uc?id=1DZ8VOoRwL-GshgXqwtkerWxc597Lvjc6&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1DZ8VOoRwL-GshgXqwtkerWxc597Lvjc6&sz=w967-h715-p-k-nu"
        },
        {
          "title": "PL SUMBERINDO 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1j_4plt739o4XBgR3Qm5fpZj6C1BTycGT",
          "preview_url": "https://drive.google.com/file/d/1j_4plt739o4XBgR3Qm5fpZj6C1BTycGT/preview",
          "view_url": "https://drive.google.com/open?id=1j_4plt739o4XBgR3Qm5fpZj6C1BTycGT",
          "download_url": "https://drive.google.com/uc?id=1j_4plt739o4XBgR3Qm5fpZj6C1BTycGT&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1j_4plt739o4XBgR3Qm5fpZj6C1BTycGT&sz=w967-h1141-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Sumberindo",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Sumberindo",
        "Ruko & Perumahan Sumberindo",
        "Update R",
        "uko & Perumahan Sumberindo",
        "PR",
        "OMO",
        "ERBARU",
        "FREE REPAIR",
        "Gratis",
        ": SHGB, AJB,",
        "BPHTB",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date"
      ],
      "local_image": "downloads/images/Perumahaan & Ruko Sumberindo.jpg"
    },
    {
      "project_name": "Renggali Sitalasari",
      "location": "Nongsa",
      "project_url": "https://sites.google.com/view/renggali-sitalasari/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQct3-oir-ZXoQj_pTrHqrCOnf07P-wFPad6nggNE1XlEd8RGEkUIA_OuLzmccipblAc_fS_YFJaaiovy2gcFUiRqaNNXHrrCFqlbcxMYihSIRIeAgHKcxc6OFjcQBVAVVxSXHqy_SVFJGaJdHTKr4CeqOMZS-bOV9wPIRIo_eLhC7CRTrEaQZ2QTJb8XbK2owyMX5O8zrhXRH8vUsNe7Nsoq7fllC-jwzTDjVezMwA=w1280",
      "promo_summary": "PROMO TERBARU | GRATIS: AJB, SHGB | Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "GRATIS: AJB, SHGB",
        "Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SITEPLAN SITALASARI 25-7-2026.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1uf96zcQufamiPNOQdHLuJWrBmey1ysjt",
          "preview_url": "https://drive.google.com/file/d/1uf96zcQufamiPNOQdHLuJWrBmey1ysjt/preview",
          "view_url": "https://drive.google.com/open?id=1uf96zcQufamiPNOQdHLuJWrBmey1ysjt",
          "download_url": "https://drive.google.com/uc?id=1uf96zcQufamiPNOQdHLuJWrBmey1ysjt&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1uf96zcQufamiPNOQdHLuJWrBmey1ysjt&sz=w967-h1534-p-k-nu"
        },
        {
          "title": "PL SITALASARI 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1pkgYkbKBw1FWdcG983oH3jP0-JepQHHx",
          "preview_url": "https://drive.google.com/file/d/1pkgYkbKBw1FWdcG983oH3jP0-JepQHHx/preview",
          "view_url": "https://drive.google.com/open?id=1pkgYkbKBw1FWdcG983oH3jP0-JepQHHx",
          "download_url": "https://drive.google.com/uc?id=1pkgYkbKBw1FWdcG983oH3jP0-JepQHHx&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1pkgYkbKBw1FWdcG983oH3jP0-JepQHHx&sz=w967-h1213-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [],
      "raw_text_snippets": [
        "Renggali Sitalasari",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Sitalasari",
        "Renggali Sitalasari",
        "Update Renggali Sitalasari Nongsa",
        "PROMO TERBARU",
        "GRATIS: AJB, SHGB",
        "Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "SITEPLAN SITALASARI 25-7-2026.pdf",
        "PRICE LIST",
        "PL SITALASARI 14 NOV 26.pdf",
        "GAMBAR LOKASI PROYEK RENGGALI SITALASARI",
        "GOOGLE MAPS LOKASI RENGGALI SITALASARI",
        "Solusi Hunian Terjangkau dengan Gaya Modern dan Lokasi Strategis",
        "\"Ingat Rumah Ingat Renggali\"",
        "RENGGALI GROUP"
      ],
      "local_image": "downloads/images/Renggali Sitalasari.jpg"
    },
    {
      "project_name": "Renggali Nongsa",
      "location": "Nongsa",
      "project_url": "https://sites.google.com/view/renggali-nongsa/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeOseus0UQr8aU6Ifh7I886XYUN7fZImN553CuglCiCeyAc3CAgbPVkjZoUJKgBQJ7ONiXOkkbLVuU4i8tVAAAs_yq59GsDyhUR6EoPyjCIZom__DZ8jZJdc82d8dcjTy7KJNYXy3DSXKK8Ofs0PuRxoNg87kf84mpxhBS00c3rMve_9zoYhtG0yTWfRjxK10NxW9ewyxdl1jPpSIBgIQOwWM5ARfrVbPJwY9paO5o=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB,  BPHTB | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB,  BPHTB",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP PRN 1 NOV 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1e4x1f6I1XayxO_IAM0qWiYKDgAZNHSTI",
          "preview_url": "https://drive.google.com/file/d/1e4x1f6I1XayxO_IAM0qWiYKDgAZNHSTI/preview",
          "view_url": "https://drive.google.com/open?id=1e4x1f6I1XayxO_IAM0qWiYKDgAZNHSTI",
          "download_url": "https://drive.google.com/uc?id=1e4x1f6I1XayxO_IAM0qWiYKDgAZNHSTI&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1e4x1f6I1XayxO_IAM0qWiYKDgAZNHSTI&sz=w967-h471-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Renggali Nongsa",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Nongsa",
        "Renggali Nongsa",
        "Update Renggali",
        "Nongsa",
        "PROMO TERBARU",
        "Diskon",
        "Langsung : ...",
        "Gratis",
        ": SHGB, AJB,  BPHTB",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "SP PRN 1 NOV 24.pdf"
      ],
      "local_image": "downloads/images/Renggali Nongsa.jpg"
    },
    {
      "project_name": "Renggali Khalifa",
      "location": "Batu Besar",
      "project_url": "https://sites.google.com/view/renggalikhalifa/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQd2UGTnquFgrKwjkOdgwfpARLeWAM1VpzrH5ur8Uj0LQeevIG0EQ0HDmJaTcZrwqvJGCwug7PDPUllMVCl4-wbkCZMuJ0L5vahxW7KWxQBh0XO5XUm_nOF984EI-KeWgxdlyKSPURSdSo4ZjMT-DukUPdpJH9N9C4l1JVdv62BryKnvSLwxlC7CL-jC7-RTmH71VrcFbuQSLDGVVgYqiDbxXvSVCeUE-iOaOyGbqXg=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB,  BPH | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB,  BPH",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP AL-KHALIFA 24 SEP 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1NMOG-mXsV_vbXOYwNeVICPRSui5rxr6-",
          "preview_url": "https://drive.google.com/file/d/1NMOG-mXsV_vbXOYwNeVICPRSui5rxr6-/preview",
          "view_url": "https://drive.google.com/open?id=1NMOG-mXsV_vbXOYwNeVICPRSui5rxr6-",
          "download_url": "https://drive.google.com/uc?id=1NMOG-mXsV_vbXOYwNeVICPRSui5rxr6-&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1NMOG-mXsV_vbXOYwNeVICPRSui5rxr6-&sz=w967-h918-p-k-nu"
        },
        {
          "title": "PL KHALIFA 15 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "1NkkuyNW4fqxvRwer4My5nJqkxADvPSx7",
          "preview_url": "https://drive.google.com/file/d/1NkkuyNW4fqxvRwer4My5nJqkxADvPSx7/preview",
          "view_url": "https://drive.google.com/open?id=1NkkuyNW4fqxvRwer4My5nJqkxADvPSx7",
          "download_url": "https://drive.google.com/uc?id=1NkkuyNW4fqxvRwer4My5nJqkxADvPSx7&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1NkkuyNW4fqxvRwer4My5nJqkxADvPSx7&sz=w967-h1150-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Menang Banyak",
          "video_id": "nXcY6qavGro",
          "embed_url": "https://www.youtube.com/embed/nXcY6qavGro?embed_config=%7B%22enc%22:%22AXH1eznQAUC0xto9fu0hp1T_SlYou1AORIqcsHEy0rls6g4sRAju0KzAnaEf_GWjZ8ygNY5I6oWPRSdzzFjszquaA013iAnCVlqUTsWJ3gccXyH52CDQxUPwOXPp25l_8mM6efzcDwtrlClX-QMsbF_Pk6j_lsqNXIS91mSoWfLT04s2rAjA4sQyticuQGnGl0NHY4QtEqYRtowNB4DevWpYBMLzd36oe95dLdGEWbgCkiYWSuH_ARFnVRgjbCgx-5HlQWjCRHDLSm6IcctaEQ_jLoPIcVmgLEt4fVft1W_Em1tjABv5S6tABTZ28YGNFcpn5vLDiWNTgt_p2t409U-ib8FqwbVlpo4hj8OJdgvN4A%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=nXcY6qavGro"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Renggali Khalifa",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Khalifa",
        "Renggali Khalifa",
        "Update Renggali Khalifa",
        "PROMO TERBARU",
        "Diskon",
        "Langsung",
        ": ...",
        "Gratis",
        ": SHGB, AJB,  BPH",
        "TB",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI"
      ],
      "local_image": "downloads/images/Renggali Khalifa.jpg"
    },
    {
      "project_name": "Renggali Nongsa viory",
      "location": "Nongsa",
      "project_url": "https://sites.google.com/view/renggalinongsaviory/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQd0xwtDJ4gQw17q0Ccqa1BZDCXH7cVHVchPZzfQnYXIDHos6u3855CEZVKK-EYpV8A5UUCa0gV7jQ3fM7T0cHbjBQZ5LVM9kSk7FokWi4vSWh1VEEpRLvM9x81_YCNFAuAsqz-dZo3SFvP3TOxOvEVEGv-E13GOVhCdJOg_vZ8wBTOq9bFtXbFwL4H0kOD0ZdsxxlekrjiRKjCZGbrhqCQ_WGBdQ0e-RDBR=w1280",
      "promo_summary": "PROMO TERBARU | FREE | FREE  SMART DOOR LOCK | Gratis | : SHGB, AJB,  BPHTB | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "FREE",
        "FREE  SMART DOOR LOCK",
        "Gratis",
        ": SHGB, AJB,  BPHTB",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SITEPLAN RENGGALI NONGSAVIORY.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1fhf7qfjS07lLfro1eIFU4pobEATykigZ",
          "preview_url": "https://drive.google.com/file/d/1fhf7qfjS07lLfro1eIFU4pobEATykigZ/preview",
          "view_url": "https://drive.google.com/open?id=1fhf7qfjS07lLfro1eIFU4pobEATykigZ",
          "download_url": "https://drive.google.com/uc?id=1fhf7qfjS07lLfro1eIFU4pobEATykigZ&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1fhf7qfjS07lLfro1eIFU4pobEATykigZ&sz=w967-h939-p-k-nu"
        },
        {
          "title": "PL VIORY 10 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "1jI_9fN8qmZPQrJujFUNNhlcMOgTM0iEK",
          "preview_url": "https://drive.google.com/file/d/1jI_9fN8qmZPQrJujFUNNhlcMOgTM0iEK/preview",
          "view_url": "https://drive.google.com/open?id=1jI_9fN8qmZPQrJujFUNNhlcMOgTM0iEK",
          "download_url": "https://drive.google.com/uc?id=1jI_9fN8qmZPQrJujFUNNhlcMOgTM0iEK&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1jI_9fN8qmZPQrJujFUNNhlcMOgTM0iEK&sz=w967-h913-p-k-nu"
        }
      ],
      "videos": [],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "Renggali Nongsa Viory",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "Renggali Nongsa Viory",
        "Renggali Nongsa Viory",
        "Update Renggali",
        "Nongsa Viory",
        "PROMO TERBARU",
        "FREE",
        "DAPUR",
        "FREE  SMART DOOR LOCK",
        "Gratis",
        ": SHGB, AJB,  BPHTB",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI"
      ],
      "local_image": "downloads/images/Renggali Nongsa viory.jpg"
    },
    {
      "project_name": "Renggali Visco",
      "location": "Sei Daun - Piayu",
      "project_url": "https://sites.google.com/view/renggalivisco/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdFPRab-uV2E5Q0G6Uj3uPeaWDk1Y0tOXXEOYiV23kMIreuUlEy5RFpexOHDeLtamofKklsOIF-1092i5dSCE4Hu__jZ1xcshQjDe2C2Q77IFVKX1Uf0cnI2aOPYo4nS_TJ6X3TkWaAJ0jyAvt0yREXOSlAtwhHTbqhLIhdqS5BY3jXZgKbnTzn6pb6J7f1bNX3rYN4PGXIHqG4ww1CDcBIuN_WC8vWLoK0ivnM45E=w1280",
      "promo_summary": "PROMO TERBARU | Diskon | Gratis | : SHGB, AJB Dan ( | BPHTB - Unit Hook) | : Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB Dan (",
        "BPHTB - Unit Hook)",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP PR VISCO 9 OKT 24.pdf",
          "doc_type": "Site Plan",
          "doc_id": "11QQua4aXHb4kTrzVo23Z0S5HslDpgDVZ",
          "preview_url": "https://drive.google.com/file/d/11QQua4aXHb4kTrzVo23Z0S5HslDpgDVZ/preview",
          "view_url": "https://drive.google.com/open?id=11QQua4aXHb4kTrzVo23Z0S5HslDpgDVZ",
          "download_url": "https://drive.google.com/uc?id=11QQua4aXHb4kTrzVo23Z0S5HslDpgDVZ&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=11QQua4aXHb4kTrzVo23Z0S5HslDpgDVZ&sz=w967-h656-p-k-nu"
        },
        {
          "title": "PRICE LIST_VISCO_15 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "1cV2cNDLgiEaeziQ2frFdov9qYIdCUXPg",
          "preview_url": "https://drive.google.com/file/d/1cV2cNDLgiEaeziQ2frFdov9qYIdCUXPg/preview",
          "view_url": "https://drive.google.com/open?id=1cV2cNDLgiEaeziQ2frFdov9qYIdCUXPg",
          "download_url": "https://drive.google.com/uc?id=1cV2cNDLgiEaeziQ2frFdov9qYIdCUXPg&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1cV2cNDLgiEaeziQ2frFdov9qYIdCUXPg&sz=w967-h1120-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "INGAT RUMAH, INGAT RENGGALI",
          "video_id": "uU3lWpaF7PQ",
          "embed_url": "https://www.youtube.com/embed/uU3lWpaF7PQ?embed_config=%7B%22enc%22:%22AXH1ezlbMCse1Ow78PAQEl6tRvG3279pKSbEgXVSW0c1EWDpXWGq8k2USw3s7S_hfPNK5PnBnGtVnhG1KqD2YfXzDTZQy-BXEt-ubot9q7zUxg2rp1kWJ6H4PBSbPC5y4VhVA_Eam86xjgBslf6vu1Ql_0ROa7o2JCdkHzub5oYJ5GACYfg0lSEgC5cR3biCWQKXr-92tC90zBzuFKb1G_RRNUgodDvsisvcK7B-KYoAwLqrLcf_j9zb0BRNfIGtQS_zDRpD8_UIl3Tr212FAfGHRLE9YcHbVkE1cnz2OuphX5ljgsyEglSdX95wFnOiB-6G45AaAx99q3fhe9BxDC6oxc0zUB1YoHoxYq4qE-Ea3A%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=uU3lWpaF7PQ"
        }
      ],
      "sheet_links": [
        "https://docs.google.com/spreadsheets/d/194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8/edit?gid=1761929285#gid=1761929285"
      ],
      "raw_text_snippets": [
        "RENGGALI VISCO",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "RENGGALI VISCO",
        "RENGGALI VISCO",
        "Update Renggali Visco",
        "PROMO TERBARU",
        "Diskon",
        "Gratis",
        ": SHGB, AJB Dan (",
        "BPHTB - Unit Hook)",
        "NOTE",
        ": Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "Otomatis Up Date. Untuk cek yang terjual Setelah Up Date",
        "KLIK DISINI",
        "SP PR VISCO 9 OKT 24.pdf",
        "Hold Maksimal 24 Jam : Blok - No. -"
      ],
      "local_image": "downloads/images/Renggali Visco.jpg"
    },
    {
      "project_name": "Renggali Silimakuta",
      "location": "Putri Hijau",
      "project_url": "https://sites.google.com/view/renggalisilimakuta/home",
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfxlbphuutfum_mCfmhUz_XPIMjv8CFUvh-xMR0kHtoBBfLszsN-2quHfeQ-nznCpqszgnxpW1EfMZ6inJzksM1Q6QGh1qX4_OkxgB7DhAir9BENNSQ2KbqkeFVZlqReRSqSlP_xRK68GDMvWOjse_S8gLKIxtW1Kyfm5eNNtYER7RGOFRo90SbPvvPE8NLDoOuv-rwvnG8Atq2DDA3X04UpaRykCy7PIMwiQjJl-Y=w1280",
      "promo_summary": "PROMO TERBARU | GRATIS: AJB, SHGB | Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
      "promo_details": [
        "PROMO TERBARU",
        "GRATIS: AJB, SHGB",
        "Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!"
      ],
      "documents": [
        {
          "title": "SP PUTRI HIJAU.pdf",
          "doc_type": "Site Plan",
          "doc_id": "1RsPS2ua0ruXHSDlcxN5gVivADq1l3mbG",
          "preview_url": "https://drive.google.com/file/d/1RsPS2ua0ruXHSDlcxN5gVivADq1l3mbG/preview",
          "view_url": "https://drive.google.com/open?id=1RsPS2ua0ruXHSDlcxN5gVivADq1l3mbG",
          "download_url": "https://drive.google.com/uc?id=1RsPS2ua0ruXHSDlcxN5gVivADq1l3mbG&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1RsPS2ua0ruXHSDlcxN5gVivADq1l3mbG&sz=w1218-h1079-p-k-nu"
        },
        {
          "title": "PriceList SilimaKuta.pdf",
          "doc_type": "Price List",
          "doc_id": "1jlr3UX9E1-sycXj9XBsj3iJ3r2znpuqs",
          "preview_url": "https://drive.google.com/file/d/1jlr3UX9E1-sycXj9XBsj3iJ3r2znpuqs/preview",
          "view_url": "https://drive.google.com/open?id=1jlr3UX9E1-sycXj9XBsj3iJ3r2znpuqs",
          "download_url": "https://drive.google.com/uc?id=1jlr3UX9E1-sycXj9XBsj3iJ3r2znpuqs&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1jlr3UX9E1-sycXj9XBsj3iJ3r2znpuqs&sz=w1218-h1138-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "INGAT RUMAH, INGAT RENGGALI",
          "video_id": "wHe2Pdh2DGU",
          "embed_url": "https://www.youtube.com/embed/wHe2Pdh2DGU?embed_config=%7B%22enc%22:%22AXH1ezkCjHZ9R2I5T1TlpOEijmcrbaZyfuGCpTYInCSBUO8gXaD0Lu9V7qZFYQhmpzf9o1CGZOgRfbfmDmf6bY4GxZzRAlu0PMsE5R_zvMNxPz67FGFBMie3G9mQ3znvuUFZK-ViyYq23nmNISunep5C77dXR10wdxMnfHHhOeH-qRoK7vpqZoI7MdSsmt_cdivS_yE2OZTG36M2aaA1w1hmgb1yUy-utceIw1Ak24M_gyOu6sMxN6ZFqktuimW1YJQxoyKx33CWD7cR8YGzbPoOb_KSWqoyWxDfRq8ZYthfjxkSy9thz89AIRvcGaeznZOE4pAiyZ-yhKWa6R3jE0huYHCE8j4QUfkgkZNIItQwVw%3D%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
          "watch_url": "https://www.youtube.com/watch?v=wHe2Pdh2DGU"
        }
      ],
      "sheet_links": [],
      "raw_text_snippets": [
        "SILIMAKUTA",
        "Telusuri situs ini",
        "File yang Disematkan",
        "Langsung ke konten utama",
        "Langsung ke menu navigasi",
        "SILIMAKUTA",
        "RENGGALI SILIMAKUTA",
        "UPDATE RENGGALI SILIMAKUTA",
        "PUTRI HIJAU",
        "PROMO TERBARU",
        "GRATIS: AJB, SHGB",
        "Promo & Harga Bisa Berubah Sewaktu-waktu, Cek Sesering Mungkin!",
        "SITE PLAN",
        "SP PUTRI HIJAU.pdf",
        "PRICE LIST",
        "PriceList SilimaKuta.pdf",
        "GAMBAR LOKASI PROJEK",
        "GOOGLE MAPS RENGGALI SILIMAKUTA",
        "Solusi Hunian Terjangkau dengan Gaya Modern dan Lokasi Strategis",
        "\"Ingat Rumah Ingat Renggali\""
      ],
      "local_image": "downloads/images/Renggali Silimakuta.jpg"
    }
  ],
  "booking_spreadsheet_url": "https://drive.google.com/open?id=194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8",
  "booking_records_count": 59,
  "booking_records": [
    {
      "NO": 1,
      "TANGGAL_BOOKING": "01-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "TIDAK JADI AMBIL",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 2,
      "TANGGAL_BOOKING": "01-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "ARYO",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AD",
      "NOMOR": "1",
      "KETERANGAN_PROSES": "NUNGGU KONFIRMASI PINDAH BLOK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 3,
      "TANGGAL_BOOKING": "02-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "MONIKA TAMPUBOLON",
      "PERUMAHAN": "RRT",
      "BLOK": "RW5",
      "NOMOR": "22",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 4,
      "TANGGAL_BOOKING": "02-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "SIBARANI LATUNGGUR",
      "PERUMAHAN": "CRS",
      "BLOK": "EB",
      "NOMOR": "21",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 5,
      "TANGGAL_BOOKING": "02-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "FITRAH DIAN SIDIQ",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "12A",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 6,
      "TANGGAL_BOOKING": "03-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "JEFFERSON",
      "NAMA_KONSUMEN": "TIROMSA SIBORU",
      "PERUMAHAN": "PAR",
      "BLOK": "CK",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 7,
      "TANGGAL_BOOKING": "03-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "RAJU SIRIWIJAYA SARAGIH",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "12B",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 8,
      "TANGGAL_BOOKING": "04-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "MELVA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AH",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "BELUM REKOM",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 9,
      "TANGGAL_BOOKING": "04-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "NURSANI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRV",
      "BLOK": "RDD",
      "NOMOR": "14",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 10,
      "TANGGAL_BOOKING": "05-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "MEIWITA",
      "NAMA_KONSUMEN": "NAJAMUDDIN HARAHAP",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 11,
      "TANGGAL_BOOKING": "05-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "NELSON",
      "NAMA_KONSUMEN": "ARIANTO LUMBANTORUAN",
      "PERUMAHAN": "PAR",
      "BLOK": "CJ",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 12,
      "TANGGAL_BOOKING": "06-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "ADELIA SEPTIANI",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "3A",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 13,
      "TANGGAL_BOOKING": "06-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRN",
      "BLOK": "RN2",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "TIDAK JADI AMBIL",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 14,
      "TANGGAL_BOOKING": "06-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RW5",
      "NOMOR": "28",
      "KETERANGAN_PROSES": "BI CHEKING BURUK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 15,
      "TANGGAL_BOOKING": "06-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RFM",
      "BLOK": "B1",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "BATAL, PENGAJUAN CASH TAHAP TDK ACC",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 16,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "MELVA",
      "NAMA_KONSUMEN": "MAEYSCAH DARA KINANTI",
      "PERUMAHAN": "CRM",
      "BLOK": "AJ",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 17,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "ABD MUIN",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "2",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 18,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RAM",
      "BLOK": "RA4",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "BI CHEKING BURUK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 19,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "THE HILLS",
      "BLOK": "M",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "SUDAH MASUK SISTEM",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 20,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "THE HILLS",
      "BLOK": "M",
      "NOMOR": "14",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 21,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "MELVA",
      "NAMA_KONSUMEN": "ANATASYA GINTING",
      "PERUMAHAN": "CRM",
      "BLOK": "AJ",
      "NOMOR": "9",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 22,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRA",
      "BLOK": "RSG",
      "NOMOR": "17",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 23,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "THE HILLS",
      "BLOK": "M ",
      "NOMOR": "15",
      "KETERANGAN_PROSES": "SUDAH MASUK SISTEM",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 24,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "THE HILLS",
      "BLOK": "M ",
      "NOMOR": "16",
      "KETERANGAN_PROSES": "SUDAH MASUK SISTEM",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 25,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": 8.0,
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "BUSTOMI",
      "PERUMAHAN": "KMR",
      "BLOK": "B4 ",
      "NOMOR": "33",
      "KETERANGAN_PROSES": "CICIL UM",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 26,
      "TANGGAL_BOOKING": "09-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRA",
      "BLOK": "RSG",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 27,
      "TANGGAL_BOOKING": "09-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RSN",
      "BLOK": "SSB",
      "NOMOR": "15",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 28,
      "TANGGAL_BOOKING": "09-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RW5",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "RK 10",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 29,
      "TANGGAL_BOOKING": "10-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "APRILIYANTO",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "3A",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 30,
      "TANGGAL_BOOKING": "10-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "MEKEL JEKSEN",
      "PERUMAHAN": "TAR",
      "BLOK": "D7",
      "NOMOR": "7",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 31,
      "TANGGAL_BOOKING": "10-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "KMR",
      "BLOK": "AC",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "PENGAJUAN DI TOLAK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 32,
      "TANGGAL_BOOKING": "11-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RAM",
      "BLOK": "RA4",
      "NOMOR": "4",
      "KETERANGAN_PROSES": "PENGAJUAN DI TOLAK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 33,
      "TANGGAL_BOOKING": "11-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PAR",
      "BLOK": "C6",
      "NOMOR": "12A",
      "KETERANGAN_PROSES": "BATAL ",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 34,
      "TANGGAL_BOOKING": "11-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PAR",
      "BLOK": "C6",
      "NOMOR": "2",
      "KETERANGAN_PROSES": "BATAL ",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 35,
      "TANGGAL_BOOKING": "11-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "ARYO",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AJ",
      "NOMOR": "7",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 36,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "FAZIYANA",
      "PERUMAHAN": "RFM",
      "BLOK": "B1",
      "NOMOR": "21",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 37,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": 60.0,
      "SALES": "NURSANI",
      "NAMA_KONSUMEN": "KEHLIAW PANJAITAN",
      "PERUMAHAN": "SUMBERINDO",
      "BLOK": "R",
      "NOMOR": "11",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 38,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": 60.0,
      "SALES": "NURSANI",
      "NAMA_KONSUMEN": "KEHLIAW PANJAITAN",
      "PERUMAHAN": "SUMBERINDO",
      "BLOK": "R",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 39,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": 60.0,
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "AZLIANSYAH",
      "PERUMAHAN": "PRN",
      "BLOK": "RN2",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 40,
      "TANGGAL_BOOKING": "13-11-2026",
      "JANGKA_WAKTU": 24.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "ZEPRIN HALOMUAN H",
      "PERUMAHAN": "PRN",
      "BLOK": "RN2",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 41,
      "TANGGAL_BOOKING": "14-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "ULI MILIAN BATUBARA",
      "PERUMAHAN": "PRV",
      "BLOK": "RDE",
      "NOMOR": "5",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 42,
      "TANGGAL_BOOKING": "14-11-2026",
      "JANGKA_WAKTU": 60.0,
      "SALES": "ARYO",
      "NAMA_KONSUMEN": "JUNITA HARAMA P",
      "PERUMAHAN": "KMR",
      "BLOK": "OD",
      "NOMOR": "3",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 43,
      "TANGGAL_BOOKING": "16-11-2026",
      "JANGKA_WAKTU": 18.0,
      "SALES": "JENNY",
      "NAMA_KONSUMEN": "JAYA SIRAIT",
      "PERUMAHAN": "KMR",
      "BLOK": "OC",
      "NOMOR": "28",
      "KETERANGAN_PROSES": "CICIL UM",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 44,
      "TANGGAL_BOOKING": "16-11-2026",
      "JANGKA_WAKTU": 10.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "WINDY SAPUTRI",
      "PERUMAHAN": "RSN",
      "BLOK": "SSC",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "CICIL UM",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 45,
      "TANGGAL_BOOKING": "17-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "MUHAMMAD ROJALI",
      "PERUMAHAN": "PRV",
      "BLOK": "RDA",
      "NOMOR": "19",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 46,
      "TANGGAL_BOOKING": "17-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PAR",
      "BLOK": "C3",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 47,
      "TANGGAL_BOOKING": "19-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RFM",
      "BLOK": "B1",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 48,
      "TANGGAL_BOOKING": "20-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "15",
      "KETERANGAN_PROSES": "BI CHECKING BURUK",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 49,
      "TANGGAL_BOOKING": "20-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "MEGAWATI LISTYANA",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "16",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 50,
      "TANGGAL_BOOKING": "20-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "PROPERTEAM",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRV",
      "BLOK": "RD2",
      "NOMOR": "9",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 51,
      "TANGGAL_BOOKING": "21-11-2026",
      "JANGKA_WAKTU": 1.0,
      "SALES": "PROPERTEAM",
      "NAMA_KONSUMEN": "SADDAM FAUHG SHAINI",
      "PERUMAHAN": "CRM",
      "BLOK": "AJ",
      "NOMOR": "15",
      "KETERANGAN_PROSES": "KPR EKSPRESS",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 52,
      "TANGGAL_BOOKING": "21-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RAM",
      "BLOK": "RA3",
      "NOMOR": "14",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 53,
      "TANGGAL_BOOKING": "22-11-2026",
      "JANGKA_WAKTU": 36.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "FIFIANA SIBAGARIANG",
      "PERUMAHAN": "KMR",
      "BLOK": "OF ",
      "NOMOR": "28",
      "KETERANGAN_PROSES": "CASH TAHAP",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 54,
      "TANGGAL_BOOKING": "22-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRV",
      "BLOK": "RDE",
      "NOMOR": "01",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 55,
      "TANGGAL_BOOKING": "22-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RNV",
      "BLOK": "NVC",
      "NOMOR": "32",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 56,
      "TANGGAL_BOOKING": "23-11-2026",
      "JANGKA_WAKTU": 10.0,
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "DEVATRINATA",
      "PERUMAHAN": "RSN",
      "BLOK": "SSB",
      "NOMOR": "20",
      "KETERANGAN_PROSES": "CICIL UM",
      "STATUS_BERKAS_AWAL": "✅",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 57,
      "TANGGAL_BOOKING": "",
      "JANGKA_WAKTU": "",
      "SALES": "",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "",
      "BLOK": "",
      "NOMOR": "",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 58,
      "TANGGAL_BOOKING": "",
      "JANGKA_WAKTU": "",
      "SALES": "",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "",
      "BLOK": "",
      "NOMOR": "",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 59,
      "TANGGAL_BOOKING": "",
      "JANGKA_WAKTU": "",
      "SALES": "",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "",
      "BLOK": "",
      "NOMOR": "",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    }
  ]
};
