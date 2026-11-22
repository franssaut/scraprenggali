// Data Otomatis Hasil Scraping Renggali Group
const RENGGALI_DATA = {
  "source_url": "https://sites.google.com/view/proyekrenggali/home",
  "scraped_at": "2026-11-22 10:26:36",
  "scraped_at_formatted": "22 November 2026, 10:26 WIB",
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
      "description": "Skema: Booking Unit • Sales: ARYO • Status Sisforum: ",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe27KValgewdfQu37Mc5W6lI-E4kgUYEFz5AKYDppuF0O7n3O-V9BMcCLgEWwyoTla92n7_9BDaAQki-oMsWeOMj46yz9YssyrCNbSiRp-9mWRuur3mokLw6JajXke3epXh0cGvzemVtY564RNBswigiTEpnX0Duwcu6OylyIY2VFykIuj8bQwvFMZMCJihGaYpk3GUe7dKqGP_LZDyfaIH7qYUjLGpXkUCdSrZG0Q=w1280",
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
          "embed_url": "https://www.youtube.com/embed/xbx9cvGuuL4?embed_config=%7B%22enc%22:%22AXH1eznbOwnxFfJSAFfHstyhU9TK3SBUQvaNbB5S6W9RCefUGdu23c6zFlkg6rgKIq3FDJoeu0egW69PveyKB6Monc43hJik6BvN22GmI3dlucK7nGW6SNDZb72TO3ecOJfCiJ1c6KgFuev31FpNQiC7FGZWk6ByHWkZk7sILPCXXYfy%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQegJaqP3h6TqyDwvOMtry2ogRbAEsZjM9_YDqfFUBfkq2ENtkSYZVmudCk_QNmxzISRWOYDhKKSaL7fEOpxAd3gJzCJWMii1HscK3ZowGVzF1SbDqszthkcBlAv1_mA3lj7-AXC4TGSrVFWVv815PGRXFAdg7XxXWAPUUiwOiBTGZ6Dmt5t7jRiZzg3L5yF4_yJI1idYr4qfYNNrKfkzQOWSnpakpN712kXjsat=w1280",
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
          "embed_url": "https://www.youtube.com/embed/KwGkTkvNbdA?embed_config=%7B%22enc%22:%22AXH1ezn6jSTO1s1Lb4rCwG0eVstRymRspbKkMlK8Pst9IG6Tfs9LUrSbMDou0LKnDKQeGGtFAbjOd-ndB4CetKuZyLJ41X5PBArpiqPLjSbeuXq5L0ylyiU4dC1z7DAwsBAvM-hohpWuG-D0AwrNj6boXniYtydc1xUebp0KVOoh82Tn%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdfWcpdNY2omSy0ZrD3xlwr9zHd5cYtrM6crEj_JL93fIb7lmWivaB77jyEBlXV0mP3NJiPwpO0hSPLINvo8tN4saYIk6oNfRQYCrWDnlJqpP_aUbYpONMq4Dot_sebcHRaVXTCb15AVuY8yNwnY0SW-nA9SrEu8z9AQKq4rkjWxL-x238mLzXrFqRQoUHXm-YKpEDa94WyQaJ45J5dHfrDNeOtglT58Zv2_OFOyIg=w1280",
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
          "embed_url": "https://www.youtube.com/embed/8EF0oxWUfw8?embed_config=%7B%22enc%22:%22AXH1eznEyMjb3yT5UEwbb8Gdh2iEdL4MsVkSTVjT8UgOaUicbsfi0U9Owcil5B3t6iHc_TSKXVuuKNGWRxOdY3a8OZXxX2KK1ziZoDU5DuojCH5mMQ81BTFcWYjIm8UHWa3YETZFuTtO04zISZTqAD0olpIcM-Uxechqo6itZNOY6NdB%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQenYNGFFutWjxQOQqBJPtHXxrSPh1rCEJnWeXH-mtUF-pPlGUmJW8wBqyuSGEPg1Sxs8Bqa1anUP9LUGfGeeBuDZ8SoTItJ7BS5GfEyxORRRAdoveTSFNBEMBDYkzWY-fZA9ilpEADxSRSRSQVElwvSIZNHsgPhUABnYNEP2qCFwwEp6lvFGGKzNyXwbxNp0sFW6l7t_BY7rgeFWSGLtLt7xubN4aN3TA58tqoQFxQ=w1280",
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
          "embed_url": "https://www.youtube.com/embed/mPB-jegmXGM?embed_config=%7B%22enc%22:%22AXH1ezkDj2iCs-KIHqUIWa-q2aqtiZnjdaqnYYugVT4l2C3zEvlPBFyF7ilm5mCDQoXlIh0m1xE2GX15dRhIghUi-885eKIZ3niAEC0C52YDaFjdi2EYxU2e2rRq1nw2DIkGEMsOljQW1O7o6ZN52oDjLTm84_22XNvlDTkQpESo6TnA%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQf7UN7dXPbsGUgS0_kEiTVltt8XrxsYd0jMYrz-HAGe4BwrPd1ht7XAna2cI2SNcGxgrr4Mjf6V6S9Uu4WBlXH3RovFGR-eDm3HqP1_CFVHX0Z5mEcJQ_QPpZpeUo8Fd95lHg4KWROwEGuA-nkw_XdV-onE9MtLmjUGZNVX_0uSFuAoHD-HDfowFlS1gV5l1aC3_FewamftdPg1y4IOlNxRWkq1vxt0SzmQjNOGuUg=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeoQIoZUpzgtLf3yV1pmRXqbY5XfWpBoTdxoOH_vAf945omm73c3noVaxAEsBtSKbi6Rls4pmgvrfUtZYRYRaqZAHWA0WvZJ2jDdisRjOPPmA9o7_SDXaYa0-YssEGywBfRpHYLqjePufLegD5RAF0Lz41M05Bc5O289qZtDhS9rTbNJSvV6t-kFjeaW385HqKGCJL1_xRhgIgzVDBFiZPe7882eRjcX1un6NtAHH8=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeatoEcF9sZDEaI9-4rpZG_nuQ5HMkkmYfayShFCjf9v6VHkkolYYBdCZVSyPoe8N3Ey96QCm1cw28_w44MPX5obaq657Jo2kPigIH8pdeo_TQHYt59aSUUy7ezol_vWgM2Uymll6L9b-IgpEmath4fSXcErjopzDh0hm4lF8YlR_dfeayUGEF0noaYsiPOBVTXOyosQls8ZW7RB3yVXpAHYUVCLFNyz-zCTYikb90=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezmLH9JcJyU9mfw0GNTf7CLhkuDfCIr7EFJ8nue7f2FqR3KGCK7IW-gR9fEBLKyQufU_vecJ7oLLSSDUdyX2j6NvzGiA4PvOSOa0RmCZ2MUNWrqYvZL-q4O6Wg97989vdKKwKc9AFMTxauWm_p1jxN7rpsFg5Lf49CTjE7emFhvf%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdE5AflwCoOLKIpis0E1_ZV9fvtaajbFHErb8exP2io7YsH-m_bPpB6ZfYfuB83C8wtMVvsUaLWdI6azylZ60Hq8_eKqR2nQT86hvZ6cfmvVT0s9VEZQUZ1SSGBVGdKnt3KVUpLW8SKYTXRTErGijr8YuqchPrFzc7egxoWdsjn0UcdoFx7eqsy5AP30jidYisAYJXeTvEtRcvMtOhvveoermrVPxl5mjL1F7jF-EA=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1eznHZ9A8rdEpyF1O0ayzyctKFTVkTmXLSFfSlM5JsBMwOTkKcrhu9eZKyRQPikT1evKhoaWff1kxkNKKN_7mY4iLwiy9ALvVOKTfmMAuyebX4kUjEZ40taxuFb_QuvJxjR4sKYP4UfKUQKuiB6mWSEx8m45nCqBGj5sUhSjnGCIt%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQcuZWSTYofVZPew9m61GaiHtd08TrVDdLKt0aJP-tF4KVHbkG8cGyHq-GeJ-0i5piKgQEe-LYi__JqUL_kn55nVXq4w41swRhiJsom6s2UvAQRHK9VXYRGb6_8-i28hRI5V-QlC1mKrVtZYk-wYYZ8U4sBr58LIjGs81ritTPI4jOGtThuadLJ8TtKXk4zqlC3HcR_DcvbJohDtXphaGIuKjQhvBC_YnU2dSbYJchM=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezna7Bd-SC6byGu8jNB4eidNMu2N-HxfFXwoU-m18Nfpdt6ZWZpnI7H-8jzuw75makGrOuXZZYjvYju6Ff1O8-GFf5ycXbpMha3kOEyKmaB-0uNZoJKtqaR3qjJdFS6LGm0GpPX67NraAhqVJaR8DxHiVO6LmCg9xLbXDWQ2-jeX%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQflRJoN2xXP1LcuIwOCtTJhgFxCG56YfimtakewqytqNHe0vL8MCy4hhjALuqo5hZ0GiLckEjwXL7TEApAHJSGLpuMaIKjt8yv3bAH1af_8R29cnQhp5GKROusGIy56D30AaNbkA-a5FRCt_2TA_fPPZX6OIfo69C49qdIHaJt-9g66MN3ak2sDCroHFwntP08A6Rl2FMKi8OK87m-e4krH37xhpLK_T_clBQ=w1280",
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
          "embed_url": "https://www.youtube.com/embed/7zCvCtqLjwY?embed_config=%7B%22enc%22:%22AXH1ezkZHZBmcVTvnNvUpNAWG2Ww0WgStp5zH4VwYRPIoos5Sq9m9VtRYD2i9V5g-6BmOA1PrbcJQnx2DJh1lfM_lSyaz_6eCZ09itWmBMQMzf98Lbh7isytzmFmpHIgsFWLdLRnBj_zMCj_EFzgdX6tLw1_sEUYrbyW1H2Xj6PvjKl5%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdOsknzvRaeDzS1F82JZ7w86InOYeAMLJHHHK7Jh1LzmxT76h0L60aLbojmlXwo5iWxjyj8mmfhsSYz4qY2-7o5THpKjLj9RWf03mR-viH2yXa-79fTIyuyRGR8LGr-BvZLe6NwwL_MvVeTr56mEkWm-WiR2oITBoYjXG8NebR0F5lgmCnL8-T39WBfo_AXk3TNsUaoUUEPYJEyKCS3gB3UJqOyD_uUGkpp_J0K=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQea6xCKW8JJSdeeIN8btRSFaCXM6YMdTCftIx_gcupR3qFbBIsQE0axzEAB3cgCpUJtJEXMpirdyAHAHHeWl3GwXonhxCEX7Kg9q96oerrlohoQLEjPkzVDsf2B9sh4f9NjNdblrwQepkLUMB9vPfskug-yDeamKNzvQYnlUhWcI9HXOAQSUb_ef5mco6by4NbCD8QwkD9ce3fApr_4yIXgquPVOh-i43T7SVN4PX0=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQea6ztruBcQaz8KTvQF7b5g8o9E-th7EcmzFIFKQu42NCKSCDLNkyo2ePVfUgAbr3xtssBJDiD-dYxXOFR9Hs5rRE5qUXASt9bj7qfLIRIQjtaGJvcS8bTEQSrASnMMz8xis3x7lm6ycBusmAZsWFoFhHA8ZBSyDeQFOGdMHuKCNVjgyiDsEjG-2_gLHbwWc90U4Anc-xirs0uuucZ4-PT8JgM1UdbduVEbvkfLMbU=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQcBQBmQxI5a8a4S68D7QkOGpVDmJkWLPkGvUHbhDAJNXND8J1llocUlidiAK1qUirDB4loA24Nr4EF_5Mc2y_hX38WLMqztA1crI9wJib9h-qL3sgd4JcXHcspfTbfGIdKCcJ7T1r3ZBUKXXPSQWVGfU9QkRwEjWm_VJK3UHjlswAvfziiFpS_FsmoIvALCCmcdzeHz89t60dfQaFaHGs5-4Nf0Z0LP460iBz2NYoA=w1280",
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
          "embed_url": "https://www.youtube.com/embed/nXcY6qavGro?embed_config=%7B%22enc%22:%22AXH1ezkp8H5rmfyy2h-u-BChdSjiohYFL-sUABBpK5Nc96hKSWfKLgZw7sS_ih0XVQBLzR1SHkiP2QYtJ-sbO13rPxQQND6giAYbKV4f3qvfrdPcuFZSGReXSQ0eiWiO4UpHJSwjGSlWg_O1q0t46H4-V1naeG1ZJSTb1HL7gWM8qE9D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdoqEmqkm4bTK2m5IM6ZgF1x7-owj6Fab-tWGzj7QtZ0Y93yCYN0wXWtZ8oFnz2EJp7JaUVFL_Mmn9_Wtov4AtMn20_vhqsmKSkJ233yTIbK4IvqN4nNdsG9hc4KQiOQHCGWb9RrPqOVgtkyy5hJM9dkgDdjHoiPB8eLLFuwM7PcC6QTm1bRuTdaBmEYRzDwf3o-3deOr_xMTlx2DHFYiYHzUsEOqc9ZGyc=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe49YgYFtWl-2JADWIibU_yvhm0DiKYaJr7_wJ8vuCPwrEkGFq0Xs59VwbfZ3fUc9Yh_CbKH6oDv2ET9_ViNotQlSKiWxwuYAQ5pkzz7CTP9hNhjJf6FLrjFuTzHyC4m4uZTlJC0fodO0g-4Gi3MIQ1i8p-CFVCRyx8yHiakgYsSWobCnG2aeoOKrdm1sO_Amkh1MSo5mWOAV8RuL3XkrkNnLW9Egz-_QsDqIiZLXk=w1280",
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
          "embed_url": "https://www.youtube.com/embed/uU3lWpaF7PQ?embed_config=%7B%22enc%22:%22AXH1ezmrOh4qh8Cl90NhdpB18bgW7bHL5H9fvsPzXU670nbyXvQt5a0LWFVlFtobgssfc3o9L9uCRWCCSg434kuVXsbVY74h2BhZIbJrxMseuuyLbSagoXm_9xBBcn3L4FA6Tr0eBLHxMIUgJ_CrW4LCHFsYfRf7IrjhHH04Gd2LPZ5p%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfDRJm_Zljfbxyt0BmMyrOajaXvubuavg5SoDYc9OMTnDI1oRWV0oeuCuUPQKZJouw_bcbXnTZx-J3hp5OUu-kRBsXwcbekCy6kZAVH3UrZqNSA-cgDD8VUQCzERl5_EfD8_aXg8n1WpIoyH_3IhMEldoIB13-MFcKM5-pd1nlwgrZIX9aaBq1U5aFERPE0HcPHMotwnA1JmYeoPWiLX_Lb2A2ZnYTVVrN4FI3khh8=w1280",
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
          "embed_url": "https://www.youtube.com/embed/wHe2Pdh2DGU?embed_config=%7B%22enc%22:%22AXH1eznp3yAhL6Uk2_XSCiYxk_W9gQwfULP_6DwwElReMFJyZ0_yUeK6UD8L7AMuzrVRB86TZys6IzCiUeU1HRtlYtDAtZBS516HznQF8vl0W5rOJXj05dj2-r6YJMd72ke91el8w_INJTKUUbjWswjPKyzcPzTudbNhUcsKBXU7ltgB%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "KETERANGAN_PROSES": "",
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
      "KETERANGAN_PROSES": "",
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
      "KETERANGAN_PROSES": "",
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
      "KETERANGAN_PROSES": "",
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
      "KETERANGAN_PROSES": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRV",
      "BLOK": "RDE",
      "NOMOR": "5",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "JENNY",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "KMR",
      "BLOK": "OC",
      "NOMOR": "28",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 44,
      "TANGGAL_BOOKING": "16-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RSN",
      "BLOK": "SSC",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 45,
      "TANGGAL_BOOKING": "17-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRV",
      "BLOK": "RDA",
      "NOMOR": "19",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 49,
      "TANGGAL_BOOKING": "20-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "16",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "PROPERTEAM",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AJ",
      "NOMOR": "15",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "NO": 54,
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
      "NO": 55,
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
      "NO": 56,
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
