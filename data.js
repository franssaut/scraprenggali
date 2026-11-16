// Data Otomatis Hasil Scraping Renggali Group
const RENGGALI_DATA = {
  "source_url": "https://sites.google.com/view/proyekrenggali/home",
  "scraped_at": "2026-11-16 00:30:06",
  "scraped_at_formatted": "16 November 2026, 00:30 WIB",
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
      "description": "Skema: Booking Unit • Sales: SONIA • Status Sisforum: SISFORUM OKE",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQcK0kkwfN24rimvQZSag5hkwmLJqVVProqncAPVhkxcWmKWWyv_RNrjMb8jQBeWm_ZY5f-_DRQQgPs0e4VBNSw6m35E9mpHFu5PBfgfj72w0W-4-_FJ1K9TU4EztD8KrhQABpbCNkqd4yRLQLcrR1DNixXU1HbBHyxSso5BazFzJ94eQphfXf_LRjYKubKlxFWiHeWHGjmvsOgxoD2STn9SLvcQp0MrXTHyv1GeK9M=w1280",
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
          "title": "PL RR 14 NOV 26.pdf",
          "doc_type": "Price List",
          "doc_id": "13OS7voV9QlLFyiGQUynYEmTe_e9OJaEr",
          "preview_url": "https://drive.google.com/file/d/13OS7voV9QlLFyiGQUynYEmTe_e9OJaEr/preview",
          "view_url": "https://drive.google.com/open?id=13OS7voV9QlLFyiGQUynYEmTe_e9OJaEr",
          "download_url": "https://drive.google.com/uc?id=13OS7voV9QlLFyiGQUynYEmTe_e9OJaEr&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=13OS7voV9QlLFyiGQUynYEmTe_e9OJaEr&sz=w967-h1255-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "RENGGALI RESIDENCE",
          "video_id": "xbx9cvGuuL4",
          "embed_url": "https://www.youtube.com/embed/xbx9cvGuuL4?embed_config=%7B%22enc%22:%22AXH1ezk_Nfml-bv9vgASV2OuCMi1yhQerRc62E9XsU4_V-mxU3pCJJvqu4Nh2IGAi66fhM4C6uE7dyqUOoeaNywci5PddllBMof5oaXHmCoEusRpcRNWlUu01SVdVD_jSgc55xY5iDDWtCc4yjk4OTqdKqzU2PLF78uZj8PnqGS8fHpnuyyEOWiWPT8QDrwUZXUOWNeKoL_ikZB0dogKkg7MyHu6Gth8SvO7y2TULV6b6VWaeD83Pe-lYz6UNvlPHZd9SYVvqJAK8kK70g52AVQewN99CnGx581D3FZvxMRWOPEetzcf5xjWYkaQtgfx3p4fCOxbt85UUf2AUt7IwN7d7MQIKUKjmQ021bfF_Pb5UdyV%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQerVXLu1hbUUEicv3i_gfLC8FAf2TbR3lY4pf5030S1GbDHPq0d5y9Fg-cAT5gFYOY4KSRsmQvt_Tchkze58I_XhFEyroJSj2Qj3_bMov6nzEIiTMhkgsgG7vMx0x4Zq5Oweu9-IWXpxAjNdZA9o9jBp8F3h04ZL2inhIgUFT06lKTF-EFfGGNg_WczIuvKoKzpN3yGKY9vlmIuaJUjyGN0gDPUvGf5kF6gta2r=w1280",
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
          "embed_url": "https://www.youtube.com/embed/KwGkTkvNbdA?embed_config=%7B%22enc%22:%22AXH1eznr17ES_ijHdZKsXRpPDV3o7vgixvyEZwREOCbD4-VpBgwpZb4Gasw4oL0l7At0nxpagxMPZ4HgQHqco5328CA-H4DIKWWbzICyIOkEbNdrzQ8T4rEJ0OUNDh9rWYqufaxe3QXBK75MzX1ExOsKSHTRVbfLv-sclYhl85n8xfDHfHOEVc_M2HAbzxi_qoJV3E2SWjH98-aCgqYl2iQ7FTPo-ca8q4eF0zgtvSYkuSDZpFPDe8FWev0ScwIZWgau0W8G1LKeVbPryC7tiOOaEsJ__FzIbEC-ypEeV7Uk0pRTatSJ6xfpc4HjuMUVN6t57A2GJZMWhuaZL3db0F0fjohhmPCBDoLEnDxhUTQxNg6Q%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfr63fTuxmJV6IuHZUk65gqk5J30hMjrIYzPf9b6kXxurbB2zQaLKDLM7z0Wv5BBTs-HEXlZe8dWToe_FH-y83LQvasNKV1sZklaTFWkekm0P6U-7LQ5aMQEIl9geFr8Q_46hs9r4Y_l2ddMeS36Fuv7YNE9vowb-C3OUQ9phJNP5Wym-8X1vyUO2pEHwzlXiPb1vKiFJ-95dj2zEHrRGIfWErfyG3r9xxyvpb_tTk=w1280",
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
          "embed_url": "https://www.youtube.com/embed/8EF0oxWUfw8?embed_config=%7B%22enc%22:%22AXH1ezmRX_QRyqqiiPLmVrATfhsIHYDlu6Ouyzkq3JtmDFkCNk9Kc4Vh971C9bjzjXiRnAh7myzbU3nWvh5JWiFX7p871PtoTf1_1nHZ5FhF5SBAAfJnS4NseDOqiXV-IkYNyU6ZjEODbgfdzeWh4HonDRSC_iKvjDy-u7uLjZs2clLn4T6C5yswMa7dbL4EV1sdvdaT25YveC7NE2v8ZiwtY6uzpqe_p2MPJs60vknLihnC9qs8ahM17lPUs16FLHrsOPKo7GQEA8UbMKaoFR68J0HXMcKIbZnQXA_T9nVpaKT-dF93VXNVEs_uP8yWCA--qSBoSZGm4dsJMJcvwd0YQy9mzn6lqI3QWPNOhjY2R7aD%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfdE3fVZfVhwLfFdOjcseBDk5OrSOvmW1S0h0Wr8ap1AiRzNXEeAmqSfQ5RB1yG4wOVfayPqKsjYtiGEiV_4S5aE38mRu7T31zL1kkaOlRLF9YcFCRZzTzpx44IgD9JrT0bbDF-mCyddTiXWU6mDVqxAomRyShXAzQSiXCueBvHEcVoKo7nyCP-kKaQPpbP0gXzZtYKpQIutqgagTDtuagvMLkwH-uv3XdqUH9q2YI=w1280",
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
          "title": "PL IVORY 14 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "1lHp0g9pUDdSNu0Oc1ZCCS7NcRhZWvy7T",
          "preview_url": "https://drive.google.com/file/d/1lHp0g9pUDdSNu0Oc1ZCCS7NcRhZWvy7T/preview",
          "view_url": "https://drive.google.com/open?id=1lHp0g9pUDdSNu0Oc1ZCCS7NcRhZWvy7T",
          "download_url": "https://drive.google.com/uc?id=1lHp0g9pUDdSNu0Oc1ZCCS7NcRhZWvy7T&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1lHp0g9pUDdSNu0Oc1ZCCS7NcRhZWvy7T&sz=w967-h1312-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "PERUMAHAN KOTA MANDIRI RENGGALI",
          "video_id": "mPB-jegmXGM",
          "embed_url": "https://www.youtube.com/embed/mPB-jegmXGM?embed_config=%7B%22enc%22:%22AXH1eznKRykYiqfS_c7gcS1pBT782U7i9N8N8AARxwIHnvE_UYvtUaoQEVy4n6ROxZ9Dp8X8CNYNe4xKygFEQwoPxzsmATfa_3q59UPa4zSWrac1U-Bpgo9V2alzB653hHpbSGrb1fohNpT9d_hGeuW3ZLBpUpstGQ7d3l91rf4QlX5ll6K0rkn58e1anAKt-FZTEnJ_EbDcZjSpfFlVWHr9RgcQ-0E4Rc8tHOYid1ePwTZ3GLmXgFLOTchWkHd69dwQByHH0_6GwU29wBcBMczU40dB2NbWnzoXPG0XITgLHrqJrE0VEWarJDHBymk-g0nQoLqd1jQhGzW8soHTfXppaaMWzqfVLXhhpER9lbHz-un2%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfunMz5XbQcHG28jGx2GPqL2nCCJVC76hySVbFib4FyBuUX2C5X2HL3BaswRt4WtT4kFSlODHQe8UV4b2P_eOSRwVcXqtcQrNL6TBVUKXuPWaIbEBOVqrtwe47i2w5gRs1Mc_QK-SjV0p1BFTxzA0ckX6IgD39e_X39wcF7dYn2-fhxCIE0bR-c62RgPNpvNr7BNucmWQ-IT52_DQdeMPGxcKKB0_3cegiQFjJEWs0=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeoawkomwxR0vQxzN8k6ymsLbTSLf2zA4Glo7uY1D9IlOYiEcM3zVKyWoH2yY100YfeMnSl6lIQ1B5x2E6kUrlaw8CXFuz8SQM3I6H4okzN-fyDXk8uD7Iu2p9c9Awxn91xCsZ6AlT1Tw7CvLpZww7x-71qUyVQ5xjDhde2pTFmBA_AgPYZ_5034cfwKGrjiafIgYSSXM-j3rAFdTMNn39e5q_t-p_03zri5isJigw=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQc4aBR8gZMiwmpGjE2dsFkikt9Atfo2beSJEPztH3jDWLsnLoo9A3T9FK1YeAq5efm3cnKJiYRqkcgKfCDU-x_a_DFvIW2k5LHTR2B8H8BoAJo9-cqhaCJdfIeb6zyR80He2BPYZGsU-pxqQ4YPJASQvhj06nqVXYSqTBnlofapfZ6VYvwvZNxr_IOquX6zBxvoX0uBN-f6IZVcjDHBfHOVvkBFFmG910nV8J51lIo=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezmKpN5oBvTOAxFLT00zr68bXJvgZgc9pX1F-9v0dErvYKsf3UrHKLwyej_cNFTH5TPeM-Tcw-jde-vXBGeGRwXlzwtNkh-WPYIr5Ko2dyJQCR1qTBrgVKOVHqAUSLKnMlPlwHKge6WX8aVggg1b_H7Zek8VTYotJkQmCIsmwp6oGBF5smO4SXIjzFJFVER8vv2Vv0H2nV53Jw1FxnpCUdGVbB2wfLlEpOo4FYRtf9kKNizQ4KOUkUReuKmEq6P9SJK-2t7EH1AfsxMlQyZDIp25es3RbrypfOaE65icDNf2FF55B3YvgrbIbn8z0c9sCIzoTXr-KITrDMXS8hZCE3jxnFhEUW_4L7yYER3h-Rnf%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQd2UbBaP40V7ID7hdbUTZc_bnr0DGTRIU9CN0mlO6_z59_5zoucWn2_pcsXxcpmKYExFJw6nXqM4ZUEhZPaVtMSNDS6JWbcg0AX0LNMaBit27_xPitp0K3haREvmNGOJbSSQoE1F4uI6cdEGJXJepzQrd_6sV1A3V4C2JXdXKRXHHZz8bMjYGOzgrt-KeDI-d9DX9bHhDxOhnATvbpOUPoO-mbBHR7yZ3nQFcMp4cg=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezm_QJnYCjAS9OgfZTGDM4--amoUwWnbFZZShJUv-KEQfmsHizY7M3TDs_dJUtjr_ONUvxMT8IynXpRbHhqSGZnLS3Hguyj-qwiQMwhz_-9RFaj01Qo-Bz5IUWimHXuRCF8xMf-e_JgkvTdAF3iHYx25pl7nUQkA6RVr1dXdnOBWaxr6Cuy13JfISfbK3wqUYk-I0NUPJ7pYRtOY0i_bUvPeVbtDVsT5D4a8e6luTSsIgiJSljS9XSnUpn6m8w1mHETq8ssAcy3_5hcGSy3AJFZBK2G3Xa6zsCHVzgFhSzsMTx39kcCam2_D8czOyzEtCRQgXwTyUrSs9_euyKne5CNbh_h9csh7zxiwzaO8U2ff%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQenFnk8pjFl4LZFY1aQiamWoGlC4KepA7pNXz0oO8xe2WbFSka7-arRwNOvueaIK67GLhJDoVOkCHKjQ06U7GjT3pimjReNDMoMMeaftLfsu1_zk-SKVIPevjjgMhjHNcL4cFf2rGFQ-bsFg79YVo7Kj2BxShhtdT9SsMhWSJdowXTD07jdBSm6n5RHP7dvy7IW2b4zKaVDQNLAmq_pQmAx5vM_UX3xBjyL88hzAnk=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezmhPkn16Hi0OsTiD5yyWZiKX6VrjHGESUbMOxXwicYqHTSqB1RCXc3LXQmcWDOIZTSUI3cDdIOlszmhTG9fCfNA1PmN6cn8C1IvXFT8R-FTzexVjSD_1G-0iAJmlHyLsG1chHZX4ucnhcL7wAdT5V0LtSlUttD6_iknUSUapBD4yDhdfAWxmHeKJBJeNb4858L85c592Rx_zztHLzIDqMJYtotAvr_l3HyTCMw-K2q8vcALTqpvwyKfbxj2S3p6Fts-vzudeGhKL_ryeZiABeGwss-p7Jd-yuO_rBZcltN5sd29OXyVWOsrkAmPH6-bI84Qr36OmZIDTaVFtojnFV9HSzPwdLXgM_XkDzP1vZj6%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQea1LNS9-LFylEqcTNqQ9-w-SQRAqV-WhKCnCyAr61AOf3-JgpkyLd3Dn6wnIDJoO1R2nFc2uNuUOvIY6OcRnMfIinNxmPHvOP89-IL3nzIGqvvzBJ7xqm75t4e2geYo2T_VQkRSMa9pHXDInqtu13hFK_lfoINqu_mDIxV7ct457KT_OseVkn82vUifL5ZZCf7nWSOzlYYeHBReJidL5Z8bvDG3MW0mWYU4w=w1280",
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
          "embed_url": "https://www.youtube.com/embed/7zCvCtqLjwY?embed_config=%7B%22enc%22:%22AXH1ezk4s2FGTYB8vrH-VnAJcNoR5yjusnTPJVkzFP1fDExVVtashqbcpNzJ8kRVSs2Bg0zbbnh54X1i8r3xeiP3as-EFjVYnzTHBBlfPjxGqS5P4noZZEvQEj3O_34zZd-MpEetHB9aloq6G0-8l0FI7JKm3iYoh-zy66YchsXrVGhzVGqtQ-zEnVlmgEQj-7yBUElPruvkjlEahUUVeyOIdG2_8Oz__y4voREdqSEMk-8oRzDeGFIqmqJvR5b39NtU6I92BlSsoo4yRv9fO-ik6OQpJXbEaIqnE2C0yiKpfIdfa3ZEdVFB4aqD0d3IXDtJ03-h1AaPyuDl3wwJdnppZKR65Iy_B2ekrJkMilVvQE1f%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdWQv2wktNu6AeAVRNDzrc0Ji1ZG-2uY9JcfTRvZSdQby0qsyp3-kPqfsXwdUT5IeinOna4GfCzlunbaxmKTBBs-DBhpFBK2Ku4n9uk-eYZ9OVsfN0-SPFafkBZzfLtwyfTD8CHNUJ2xILH1E2D_khN7eH8tRP8gbJpVhRD3jjzYhz7CFDAANSdg1OcB3UvFSXBESjQv_8PPCN71s8Xvt2r5N9YQW59kA7nYzgk=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfPfbC1McWWziceZuUMieI-w6O_wU9gBjCJ-9N_ejoxps3Ho-tzhgcI-K6Lr2qfKcvqsUjv_X7HuHfzLv8JWQiyzYM2HUs8Dx3VQggd8UEig9KBEsYcSAZ39pO7ff_mOC0Ier4pTtMQ3kQqJkCsWG0OF2yWtR3o8yLfeVROt_6jPjnz8cjeVsYbUJ9h9jeS36hGGPpw3M_eaLoJpxYDSxwCy2ivP6dHF-2mMywNzJE=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQf3ZDhOj12r__2Jcgt6aeJnWt6OW2Ne7v12tfTrd_V8VXmPQKnOgbo_qPDAC_-CWEK1ERvr2RE9IsGjOZo7MWTeZNJ0_v78mFURC6DMLy3yWzOrnHKsbLV8L8T-rQTQf2-8jKiOzGKSw6W7szWxATK5VXSSK5faMZKeIZgR0bjxKLZkWt2t3jnXIKn9s4TwzEOuRMEKf6H5xTGbTrkh1g560oyl6Y5l-cbOru_cGwA=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfFhqRMEs5YcxsI9tyb0OIlaeTawmQ2IzFrRT6FFdJ98oG2Inm2OFT_aZZLlI08Z-pIjoh3rXlNwa97Uj7aW_nTM_uvbTYVmCiGiYhW51oyeAPirAeS3dz7QJvYwV62A6CiIVK7tMaXF7zhLm1Ky3Nd3OYdSl3AFzyZkcHtAeJBFV3ggNKxd1QwBvMHSlCiYkNyl34yE4dGLsjWzwLNIQZj9fx-THOuiGbeZG3xhN0=w1280",
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
          "title": "PL KHALIFA 14 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "1V8LgxdLogSF36YC_Jcrcffi-FHK_az09",
          "preview_url": "https://drive.google.com/file/d/1V8LgxdLogSF36YC_Jcrcffi-FHK_az09/preview",
          "view_url": "https://drive.google.com/open?id=1V8LgxdLogSF36YC_Jcrcffi-FHK_az09",
          "download_url": "https://drive.google.com/uc?id=1V8LgxdLogSF36YC_Jcrcffi-FHK_az09&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=1V8LgxdLogSF36YC_Jcrcffi-FHK_az09&sz=w967-h1193-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "Menang Banyak",
          "video_id": "nXcY6qavGro",
          "embed_url": "https://www.youtube.com/embed/nXcY6qavGro?embed_config=%7B%22enc%22:%22AXH1ezkJE7ubi1-XfsrQ4rlQhDtW7R6BSJgGfAN4BDJcdEDICGTXgc_Px5aUs5_KruN1QzlEUt0eh49B2omeMYfxdljtvwRE0oI3HGqxB54kI_U_qKssJYlJUuJ5cziM4nVsoOfho_vVjajBv2-7dZ292pAuo-7egmd7R6BGONu9oWkZzwzivr83oqSSg5dxry4QBSPT2xkpLdwpL-B9qZZciyXVGTn6vMO6r7zAlXstzfpSZU4B7lvyngfIof426YMkRT-VL03Qe4XqOT7WMPX78P6T_Gvh1R_gX0eNGPsQA9jBrHGVU6uVls58nN1Ln2rdaEmOQ5tdxCRpHVl_9WG97866kgZ0PcsLGlfhP0Ije_QT%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdwMAFcLK55sVkfL9gsKAwyLDuDSyjn1pZ-gIO2r5upltrBC06EwGAetCXV7dfPF8xdLWnmvSKOkfgBXC5yBIl3wc_35RJSWIKEc5KPpS7YSDfyW23TGc-hi5Y9MBV9GkPZoJG-L_8HdIe2U7D08nu9rDTx8iIXJO0cW-Kd4EVN2OOCzPa3H9NFTujYtlcAx0sa6qukNZEA4qWahKTNmgwQw0BX-zbsTzg-=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe2R4rXSvfWcD-Vup1Ci6rMiICl-jchbW7lAPZL-4L9_z-HINzvBjlqK2TKxZS6S8njVJOh6u2O5EgxTPozgi5jEt5HbYuQ2QcCyIc9zokUvFoldA8omzmHbIj0MueU3t3P4APKJzL0QPQwqiiDzWUC5cFSgLIK3U8-blss1uH1MokQfmnXXslyWzAz4fUOMDXQ7I0DYX14nxyKv2nf88EAKar52B46qnNtALpnBH8=w1280",
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
          "title": "PRICE LIST_VISCO_14 NOV 2026.pdf",
          "doc_type": "Price List",
          "doc_id": "12-6zVFBt4n_JIo-JjK5pG3Xe-7zoyCM2",
          "preview_url": "https://drive.google.com/file/d/12-6zVFBt4n_JIo-JjK5pG3Xe-7zoyCM2/preview",
          "view_url": "https://drive.google.com/open?id=12-6zVFBt4n_JIo-JjK5pG3Xe-7zoyCM2",
          "download_url": "https://drive.google.com/uc?id=12-6zVFBt4n_JIo-JjK5pG3Xe-7zoyCM2&export=download",
          "thumbnail_url": "https://drive.google.com/thumbnail?id=12-6zVFBt4n_JIo-JjK5pG3Xe-7zoyCM2&sz=w967-h1167-p-k-nu"
        }
      ],
      "videos": [
        {
          "title": "INGAT RUMAH, INGAT RENGGALI",
          "video_id": "uU3lWpaF7PQ",
          "embed_url": "https://www.youtube.com/embed/uU3lWpaF7PQ?embed_config=%7B%22enc%22:%22AXH1ezm91OyV-gLcDNAUEAy9ltl1wsGJ1Oz0_2kwTq_vLGqwcYlbZKakNfrzuJWtSOBZwK6IuheB-71y5fvTQkcfvB4ej4C84WRIzNSpLKvpKeLbfkinzFtBsz6PxO0G1IcWA9kOTg6hDAt-GHT6hqhLB59eeU8MW8ziZg7mMIWOlZ5aFbnDeXcYr7l2m121Yd6xrgKVd3_A-L4sIPvia1d66FguZPOcv9r-DUPGnHdLXMqtoGoVYBlEhfPYjPhVPMgSGjXpH6EAUIvwxTBDEtV-jeBP_C8od_wj2vJXBXCpN55ZfEvMzwGb622e85uV1Dz9rneLFlJJOi8AQC_qDO9uhtEuehLPgz_8yB8X5-8uLtZ0%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeewH09riA2ZMOaVfyVx_rD_HW_bcn4ztBFrz7ywLEY-BHhRN9wrxB4WQ7N-C0UkmTFqU3cdQcUMrpJAuiQnW9zeCC1VyJvpZZFi16dhOZYyh3Kl8zK6kl9Wba0tpq9EJbTaNq3hM2JEPTtEX6wlK7bDTTWc8bmgjYjK2vQMTltv4xYxgZNEOg0Fnrmb-6XArx-N_mcfH8GrBvCbkJ-e1g35bfFfGDdccey5_caOrg=w1280",
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
          "embed_url": "https://www.youtube.com/embed/wHe2Pdh2DGU?embed_config=%7B%22enc%22:%22AXH1ezkEpZb6S9Fguj_fNQrq8GXhAbjn-yyP9rXS-4Q1pG1BF3OUfd-r5YOn1av41RXwQe8OiftkKV_RxB7mLFeCw6gqv7pGO7BdIF3w-nnUxeymNcjbgz8ZWP1Y-CshBGkiEfYDBdjMcN-ouea5P3HN8uXO-jnYYUmOUnU5jIDrLEt-f8THjzx0u7JTWojW8ubIRE-I-rT_Tsg1axoGyRTqGE_GcvUXweT8cCRvPm4j2Ppw2HAf3_axG4oMuvGTlvTMPUGw_nDgmvxW9GYGtljAH9fzy3zAxoFOUD7zTReLyUmqoJSSU4cA8bpqTmk5HdCWneA_fTpT0x_TEvFK7jIgG8Xs12d8tqFU1aTR1NDDlatk%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
  "booking_records_count": 42,
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
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RW5",
      "NOMOR": "22",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 4,
      "TANGGAL_BOOKING": "02-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRS",
      "BLOK": "EB",
      "NOMOR": "21",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 5,
      "TANGGAL_BOOKING": "02-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "YEYEN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "12A",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 6,
      "TANGGAL_BOOKING": "03-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "JEFFERSON",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PAR",
      "BLOK": "CK",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 7,
      "TANGGAL_BOOKING": "03-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "12B",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
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
      "KETERANGAN_PROSES": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "MEIWITA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "6",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 11,
      "TANGGAL_BOOKING": "05-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "NELSON",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PAR",
      "BLOK": "CJ",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 12,
      "TANGGAL_BOOKING": "06-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "3A",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
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
      "KETERANGAN_PROSES": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "MELVA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AH",
      "NOMOR": "40",
      "KETERANGAN_PROSES": "PINDAH AJ 10",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 17,
      "TANGGAL_BOOKING": "07-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RL",
      "NOMOR": "2",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
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
      "KETERANGAN_PROSES": "",
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
      "STATUS_SISFORUM": "SISFORUM OKE",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 21,
      "TANGGAL_BOOKING": "08-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "MELVA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "CRM",
      "BLOK": "AG",
      "NOMOR": "7",
      "KETERANGAN_PROSES": "PINDAH AJ 9",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "FANDI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "KMR",
      "BLOK": "B4 ",
      "NOMOR": "33",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RRT",
      "BLOK": "RK",
      "NOMOR": "3A",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 30,
      "TANGGAL_BOOKING": "10-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "TAR",
      "BLOK": "D7",
      "NOMOR": "7",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "KETERANGAN_PROSES": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RFM",
      "BLOK": "B1",
      "NOMOR": "21",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 37,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "NURSANI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "SUMBERINDO",
      "BLOK": "R",
      "NOMOR": "11",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 38,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "NURSANI",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "SUMBERINDO",
      "BLOK": "R",
      "NOMOR": "12",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 39,
      "TANGGAL_BOOKING": "12-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "IRVAN",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRN",
      "BLOK": "RN2",
      "NOMOR": "10",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    },
    {
      "NO": 40,
      "TANGGAL_BOOKING": "13-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "PRN",
      "BLOK": "RN2",
      "NOMOR": "13",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "ARYO",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "KMR",
      "BLOK": "OD",
      "NOMOR": "3",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
      "KETERANGAN_TAMBAHAN": ""
    }
  ]
};
