// Data Otomatis Hasil Scraping Renggali Group
const RENGGALI_DATA = {
  "source_url": "https://sites.google.com/view/proyekrenggali/home",
  "scraped_at": "2026-11-24 07:18:17",
  "scraped_at_formatted": "24 November 2026, 07:18 WIB",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQf-4v67A4srwavZa7ha3B9CobIk6V-6um19Cx1HSHH2f7LOSrGAolb6rL0-ayyisAs6GB5ZLVnQDo-rERYW-0mV23DDKLouqOkhnBd-YWOIEgp3xTSHuogtGRZHO8jQuNnL27DYAZ4j0lIF-aXCLXUGfC44XodICq-E8sbKpScx4ua_AKmNAHQCVrU-wlzk14lGMlBr9zT2qZvtFHDaGjo2mDFs_B1LRFabheEOe6c=w1280",
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
          "embed_url": "https://www.youtube.com/embed/xbx9cvGuuL4?embed_config=%7B%22enc%22:%22AXH1eznNZ8yWvtkolfmylKYsqLPixIEGOPKsnj5zxStJSqoEJ69N3Tfei17oz4OrdZF--GFk7yeAiLcD5_q6047-S985XJSGRVk9XfeOkph0HRc4cnJzaoB5TMNPMlhlPuNJOr2gjKBc16FH1QE3dnW7qBfm15EeNysokRoe3GExstFIpUAAcbp8Jt2Jdn-tPr4qn5Xe8c0ZT5-24E5yTmkst7y0luZa8bA5MgvXuKfvSjfw6gQ08Ax09op-hr0PzPQTD8L1X1_KdTZMmoG4h8OdLRXQDwuMLeHGWyUtbauRqDvESzH4HrZRMpTal_-LMmDt2W0bZKXW_68Wg0FEQxnptcLKe8zuMsc5dZ3WVwao7Fq8V_k%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQddpP30uXBufOHg-E-1_hR0tnEpKyzcA0ePLR3r_RJS0jMiVNuJsKavgmwknP1Lc3YmrbZAlLEhkW7mF5OX6WlINWAP22q3rP1lnbOnh-XGYHfOLGcEL3BzqKhe9UPFync-JAeQ45G1vfa5b3jeUpG32ZcUXbTVbMfa0cLRik-TbYBl1lWsyhLN0PsURJe1UY1bDpXQ4G2FJVjYNDr6UzRjphM9ewMzpuJrqgEF=w1280",
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
          "embed_url": "https://www.youtube.com/embed/KwGkTkvNbdA?embed_config=%7B%22enc%22:%22AXH1ezl4utBNA43BhvH058i8Y9Z2Hp-dhNm6MfUhmA7WswKlDmD1KLbakWho4DmmchjiJE3TdkG-uCt04Lcs3OtXGI-_2FQ0TnyjMxEepfe7paVBtZPgVcQbfD8eN-n_S1kAva7KrxNBoYr-aJWYlttBIr9NzptAdw3VoSAV77xr4CXqMPQEEoEsHqlVeAAMlz-j1GCVa5VVtwVodZ3o5ofyFfQvCuhEyEtvbwmVu0H-XOLlR_MiYAsqDcey07tLBvDcXfRwbinE1PHOIbz4lpwfbhNf7gjFhKikKpAAxwK4YCTOntz8PRtRs0UaaohmND4QDuDzB8QqCNMb64bSOUF_XwYFdkzx5ReOtqfyRrUntMn185o%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQf2pWThhWv3XU5cvv4Nk_mWZVGalGWHtbAKk85-vCDht_K-uiZ6_oclsIeTp6C6d57FfGMSYYmCater7ECD5p2RN5MfCF1P-S5QgDu6Ntyzyw-3HfFUief_SEo71dBKWlQU-tP3gdUZ6jIZ_fQWmc7Plq_VhHNDZxmxnpAAPxpsBQGydsb-NJgf8fq4lE_icxRh21vn_MgXWTOfkfgHWNHdOF8li87JEDEVtUKR5vA=w1280",
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
          "embed_url": "https://www.youtube.com/embed/8EF0oxWUfw8?embed_config=%7B%22enc%22:%22AXH1eznTn7GYqT2JxEY7_bz40Rj3aP57OA7dUchWaWWMmah2WR0JUJofmqNri3NGoDWD7XAtwhmNKB3hILEnhTerYdOCI5xW52plQNL8X_Q9AVAGtWXo98IeujFZVIP3_2rAWmxoxi1TIqr9WP4gsCL4gmpLWi78EuaAFFUH3kscUNZyFll5_k3vpT4oQ8dX3N5QL49lRlaBi3AQb7tj5tYiiqM4uiRElNic_oRaDoaZt4LsRCKwFvqNYvBs7rGUc4OWv7Arm0z3zlwXkyn5TFa_PlR6bPpuvk3VVO9ecOobzt9GvQVKYCwU7PCW0REA52yzhePV61yMIRiSXio0_KMygnVKNf8QqQpc_QFgi14lOwLF_gQ%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQck3gXY9ntMrc_rF9VXanizTzvucRx2xFHcP1INVs4vJIMYYCTJsbLljk-yr_NepspzLMh-wqXtdtAxGr_HdNtl-Szr-7vd9ICFyXlbXFfQCuS_b97uhVBeAtq5_Em72gdDg-Lszn9XzBoOhI4IMuy_zt8xDr8RDI4ydkq-peO3FDQUQ0XtrshG7fYpilMuwuDY7oOWy75_U3xI-WK_pSLe1HcMQMf8l9CqRDu0laM=w1280",
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
          "embed_url": "https://www.youtube.com/embed/mPB-jegmXGM?embed_config=%7B%22enc%22:%22AXH1ezmqPuliRyDB1B8RPFbhoIhBwcc5AxlJb19Nffrp0PPQMq2uuWUPXaZaDusl3g_GmZiqyNvOWP6_RCoj3qE43u_iKdS9Ix4ynuBFzQqWWqs1hzP2Q8grnqoE4MI_cx2KbF1cGhxG3MDfOreFz2DFgLljVUCxBh0gIAyOihZSVlu2NSoUaX0qfMLf195yRdudX6ZbyFJzy2j07lkXKNtsXKN55NeGL-VdTkQrWGU8HV96eoQniBxgadWwLpZhiPWqfEdTRtpsxRiuHojrktQu1ewAsD5wgFDlNyT-dzWTbDNp7YLangGQJ7YvIWAFpP03PwLyvkxJPn8B3HrcZB7u6j2wFhU4QWIUFiphOQLW5TcjltM%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe62etsYi26H5LunpXSjFJCAdZ4hFbyLJ19yLWO5UWHhZU6DMuWP4xCB6Q3y5AutPXpzEdSdgj_fX2WDUaxmsFZ3FB-F-w_TMKXh2WkX2ymst0nhsbGk_7JkVaqpL0e4Zj7Y1LQLswy3bPu2Kw3buYtJFYcWSO37xIqAgYwtY3kqD6FNkmBran3Uq15QVMKHSkP_z3SStvsW4HklSNNoqKH9AeSMjyg0OP_IERzz6Q=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeNzj_5_Cep03HTWlsKZoQ2VtN_IuuM5C3Bc6RdBU31vBKeEelIc5dLdm0SUxvrhzxTZzylEBC6c_9d8ckFCb0QfVAbS7tSLnoSR8J1LZtCKfN1qrmKT-mUoAuvDQH1nmHOJoJ2QN9EYp82VDjidE4dCapat9YbELfB49oUicG9VryOIF1f5_DQL37gzxcV8iYk_pXWl1ZbErIpqCRElYTUgbmNZPfDGL0PM_lPSpo=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeWaW9q62rAN1cnoDOgiWoRHc4TupciVhDO7WBCAucGtIvUCWpcBB1k1GBXcF7wYgt3h4LCHo4akVOO1ppgCYUi04YxMDXxVIplsSn0dUr_eaxS0ZU9kEG25_vDGE_GXDes3GS2cS8TcT9uDZpmm9uxqZn9eJO58uEnzK6p4DaexRxiiBZoCAuf4vDQdUW2l-8fbxjIenqqxXPzD6idNeHIPOn-Sg8C4qgVHuISSeg=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezmxf-V5gFoYuID3quDVarsF4FUFvcrG3s7GSw_7KApCWf_eKi6gMK86sadofnKKtlcxcpcnJwVFIEFElcdlsMml2Tv-F3evMld4VBJTBWJmU8GrrHiimRbyeCM2WRLC5TzSmRAAGcJ1LYprDAOrd9wW3vkIGK48boMC9YL8ApDbWDvD2rAEtdlBnjSyoAKFPYt-6fHMeS0UhDbXoSuXeahPz5y363XNDHU1oTqP_6RM2xQJSAdHRR3G0KUs6OXZvpaqEa9HLPcVk_bN-_8UI3sjoyABvBIs3ZUBf6giqnd5kB82czf21x04tVGos5-TyTpk1Qt4icaU7uiU8B55X0jfsAY3788O2jbyLeM7nNiV13k%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfnU962hKoAh07Sdirjl4SIJwJEM4LVwXI3yrgWjfZf1S2W3t3D6t6toUjSqRZbYo64Jz7S2yjtx_Hu8RMq9xjV4-f21UgQFEw4RAoSlVGfsBdlWc6XNIo3g7fIjbgLFUOfehzQPvqcutVx03kqQLdr3JHxy7vTzZuDmRFy63i0lcZViw_DUSSYanbwaFJKTvwJ8fIAPbOWmCgit6ubwxJ_75fjNKtbHxJAqHnvgHg=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezl9T9XJgO52kX7d3B28an0OUT4yLp6H6gzALpuEHdvyXN4jX7AvDgLwPhbvSK4RoPC5gH9c3pg4NNQGWWo-LKybt9C81k4mkQvlwX1ThneMoc0AE-X0MXr1F1D5un0667QrJqSGWOQxU8TxQcvlrae_KrKPvt0HVOMzBrvqKd_jBllVROZ0QD-CE5YSHd_8iojoHHmfPJOPcOicDAcHQSY1Ts3FDFxHWYr8pDs1XpUkr6iW26GCsJNQOQdhtoCF45TKp3xGCt9ehSboO9JRVOMhiB4Dre2Fj-Ya8nL1jxuNhq9Upj9sZw2JjC022rAEXOeqIeboT5B00HH4JlFc-kzO4JRhjQyNsi6Z8GHJ-mQrpOA%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdk3I2xcsiSJT-uRrZsjxcne-dJADxSkBuxGQJWV6MX3kXLn_f8eEIZG39vbFa_y0x91IHZU-rNOR0hBmjzrHGyGCj8CHGmJrsjGCHrW5lHelzSr09HiVbvaQfNnupFoqZ8vuVXASJ3ZC4Ma-kiB4Ju1JH9Vn18dBm2PJgjbvOfD4fb1su2wASShUMMIkpwDZTYbYOiElj1cluWsJUtTyKaotRBCA0F4IXQu1YnIWY=w1280",
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
          "embed_url": "https://www.youtube.com/embed/6ljiHk5-39Y?embed_config=%7B%22enc%22:%22AXH1ezloL2pMtxERgOlRrZ4zSx4iQefgKR8mWQSV0cTbuOl4JbiliaEJ7VMJHhIX728QMFKagIwXWeu0cL927hUgs2v3NoB6JJt4v0UBTv11GIG7uCjD9iyc5vdlPLEd1983mMr48wJXnecfwigTyxJPvtBmHf8xbMkOI43QqNu6VSrryqt5bBGPL1dfoopLbHloiOFIqj6Q9cS1_c3Qz9aGPuTFzxM0taCCs8wcrFTZdXG653RjonsJojdrvtsF4tkxurwbNpWKPIeDOTpShLmBVKocbSK23nanmBHj4OgzvXW_ocnp1gd79ZIUpoT99640pYS0r4qEXqPHeRCBuyDffHNM2-sZyQGhB04jszpJ_pj9re8%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfU4pcmfci4BMp2BwDhK0LBdMPii5rpVI_WclX0H0bSvX8lbsGJWATsT3S-3lGid9rvnKCgagHcW2a7RaV7OEFydsMPvPf-RCsw0EAflmZs645aPEtvTDru4HX14sB5l_TQ0Pe_zpPQhcntf9CoPRc9BvXkDB1uZsKOw5UslqFOHnQLAeN85cA1x0FV3Vo28m5rH6cA7jksrggnPLv2PLjTqJVBBidzx2hc4A=w1280",
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
          "embed_url": "https://www.youtube.com/embed/7zCvCtqLjwY?embed_config=%7B%22enc%22:%22AXH1ezkUlVqhpOuWq5FI2oUtGUsT1WiSSxnAqU88v9JTfwjAVZwJY34dOnUKnkQ2SLLb19ZwZ0Uz2CB7xIy2pz_ZqANOsOTHrAbx4DY2LPQP_QzHoouMxMweql8i54ZHy8Mn3kgnqzMstSb0dG6VRr2lIVhcsTfbVZ4rLLLFuZLnUyvz9b888MMgBq_AX4YAk7xXh9Hygn1bLVj7nEK4VZJKGUoEhn502ORlrYW4RE-bah7IrOsNEW6kQRAf0Q17mb0IC9bWk5B3HQFmBfbfv34FY9WpSMJBh4VqPFurYGJQdppQ2nDOOVaHMcrRViSg58rpvNG8AWjjgpQlMQJ4pxhPWAQK1j1Y71DzgNs1Lw2HmsJVp4U%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQd288e4AgOU-l-ri2TE-s3UyS6ujti_jOZ9PLaNcV12gsvalSscgNsBfs1M-iEHzrUf1YnKEBVxUWSwwPQtmAoxR2kZOR08l2kQcSJF98zYuhisVoc54nJ6rekuc58hntdOgqWA0sCMTriCaD-mNuJ8hZWOz9EL839q-hQKE0SWUW4Yoofhwb-JBT13fEfWkOgdKWw1X6MXOb9K6OnTBDml2I1rTdgqOrrof_if=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQciy5SXv0LZysk-us31GFXLsv5TNfmJSMXim3OrcU1EQzJx8hHFe1FBQt9V7_D3-rn8Zhs51so0OF_Ol3VIL6t3q7ry_k1WCSVFxdvVCdLcugRBd-HSKHF3PJmyTZvoqzepe395j9xFXfGSM2VR7KnNKQasHthExI0oHRt3gsnCiQAwWw6Xl3EFy50smsLv5D4XMHyuExawT9xd5GeGjBrLCL8tCri0oaZMHQF5zJE=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQe5vDiay5GjkDkE1JPC55sU2RYHwVPYoAA0ux97L1jHrGqfKKZ0HbfUjAx9OEm_gyZS2VU9QojclfqWEEtGGfZ4HjlvL-P9fc-MkMv4Ioru9yrt4lLhA3KZs3zQFbBYQfg9RDx0WdTP-5tGXrSUvmPPPqAGQjSEBavAPRJiYyuW__tVFkTrDXc_Qn78EuGSDc56DoyKxNkhYxd9EsXOm0GLm61TIy95YHoMKhqFYDc=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQfbeQZHXc-_QoZlhNlAN-Vi6zF8Ar-wA0zLiM8t_HseaA0OfNGsY3Ha7dvuyo_FnQnyB34HyE98Z-hMmO7BXYtnUszn04vCEMzig0k0GkXEkCAq6n6fF_9pP0FfGZPyxIubgoAO-Ja5OLyQhIvHrUdqD-OGX2I5woyKrTDuELoMiTehA3qU74PCap-4Lw5fsZzcqR0IifGd2UnkSkkOp2GNr2oRtCn_9mECIPVPKUA=w1280",
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
          "embed_url": "https://www.youtube.com/embed/nXcY6qavGro?embed_config=%7B%22enc%22:%22AXH1ezlNRLOp6BX5yXKZ93oc8dUXlRSkuuqKK6WjRTbr8RS_JcGdkRAlOMVY_1L_r6caAswxirEP9VSkjViXW-v94DnKX84tglK5Ou9G_KWoU-qdQGqJq1-tq2IymcY6ib0bYbb99XCP10Q5CoFz3AwfIXcEq9VJJ51jDpGR0INUUqLNtgI2SUqEPABxYaA3IqOpZlMXGEt6_j1q9QGRBiPGMs1QFurrsJdPL8cPZRrP7WKqOT07Xc4R2OrfNkQRL0ycubYrsznfe19wEcHiKq1hfgYLZEAinLvWVNHFSOUkdxrjLaPlZqn7_HugTSv3SYbf26SfeiWEZ4ylaGi7VZDWJzvJxVMHdUIYI7Hp_odZe_oAhpU%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQdNIsP4LCkzdnJDkjFvTvRshWWhDSdt7TL3tmznDC2Qt-JNfFEmkN9baMQK_fdUIy8lw5bCNTksZLfxIhTS0piiSZTLABb3REv4ksUIQINoObcC34QwOSj_lhCAGUpeTBLHmEVX5iixqKgFrf4OSYRJx70OFDqBPU0L26LJTFDNos2H5CBWJ18Vtln38VyLX8EpZImuiDBkDTHFT5UHSXQXKPltAQ6WTi_A=w1280",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeRlqNExJlQJWa5oLk-YVUXxBPL8uLUNmCKRwaDzZq9mZgJ2zYQ0GuYwanV28dvwiuF9sg0OeqJqwOsvt9qy9Dm1PQTxtKDE37sfKh1w2gLG6P0BG4JKLb2gs_J9fBjHe6QBsBpwVKMTcFE7PKtQI5kU6EaLSDbv4Mz3SRiNVAdQz6A42lW-06lCc6DUazDNJT1RNPpMhDSlff7cBztd-b5I0-cZNdmHedR47YY2TE=w1280",
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
          "embed_url": "https://www.youtube.com/embed/uU3lWpaF7PQ?embed_config=%7B%22enc%22:%22AXH1ezn3RouqzWpAxsek1MBlyWKcj1z4yy9_tmLSFY55rwgib5ZOCGcChqIwjTzfEqDjWClR_6Vln5XO3QZvVvBlmWV0X35QZaqDgpThZbQKBVzM-UqiAZoJyDOGFXfuj4guBkk8SEjtpfaEoPf3r2ui8q3yJtxqZRMa-xpYBMQGw0YGw5Rrpw1RT4ssLq23g05hWhtqJ0wtU2F5e1YYcDSKPO8tyqzP05kEyRzmbA0m_rb3CHiF5gKb-pV3mDafAS1VypzrfXabZRDVjqknm6A8KaJumnfbqTJuuKLBt3X34S3GyYxkcAKA3T62MP3F5VfW1SzxwZGxwK8rQDvQ4BvBte0dvvokRRyrvrVeG1wCeqskaak%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "image_url": "https://sites.google.com/sitesv-images-rt/APXyLQeNr6HIsjIJmIp1rObQ78g6---KS2Y7CAPa-o-di6sh-b60S5ReLmOJmTdYyIJojmrHAccmnhpYb4iju2ZDTLY_4qTTJICNzoUOd4FPzlmzdZ4mN4JKBoWGwUgfRAaxvFWnS740Y--M8TVSkAetQvQR_DrGJGHn1nrmn5wGEI3kYgaae6Xumjgl3BkYolZDivHuBHVizvn6dRFqNlqVZYemeY9SAdykQleEKoIBPgk=w1280",
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
          "embed_url": "https://www.youtube.com/embed/wHe2Pdh2DGU?embed_config=%7B%22enc%22:%22AXH1ezllYciNMk4_SvKAnkGvM1y8ioq1CNsLMtCGTE_f09wfLDnW12wQ8PhESdNfV7LLOLgUtVv-_kcb8RQutaR23QroYkTnzVw2FGIKmWS0ZAQDxHJNjSR-woThArKjdQAuSEDhLfMdJ7EpXr5yvw0mj24cTSTp_S2vbYP3Rh3jIB5nkLFYJ3-KqFrsY4frqvIHR5A0s1KSX28jqBXPr6Tng-aBKYMUH1rWkBqb-olSCaYz83yWXWjkvbJ_6azqNOq2TDKIC4rnJcSXapbBX4ZhH-O_61YGrhuOKM4R_qobYj9MU-xC9lNpC-d7222WRznj-_l-k8o4E2i-3WIN16GHF11ywnYp0opxYWRJJ3nIYAf67g8%3D%22%7D&enablejsapi=1&errorlinks=1&origin=https://sites.google.com&vl=1",
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
      "TANGGAL_BOOKING": "22-11-2026",
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "KMR",
      "BLOK": "OF ",
      "NOMOR": "28",
      "KETERANGAN_PROSES": "",
      "STATUS_BERKAS_AWAL": "",
      "STATUS_SISFORUM": "",
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
      "JANGKA_WAKTU": "",
      "SALES": "SONIA",
      "NAMA_KONSUMEN": "",
      "PERUMAHAN": "RSN",
      "BLOK": "SSB",
      "NOMOR": "20",
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
