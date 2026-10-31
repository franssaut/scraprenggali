import argparse
import sys
import os
import webbrowser
import http.server
import socketserver
from renggali_scraper import RenggaliScraper


def print_banner():
    print("=" * 65)
    print("   🌐 WEB SCRAPER & PORTAL RENGGALI GROUP (GOOGLE SITES) 🌐   ")
    print("   https://sites.google.com/view/proyekrenggali/home       ")
    print("=" * 65)


def start_local_server(port: int = 8000):
    """Menjalankan HTTP server lokal dan membuka browser secara otomatis."""
    handler = http.server.SimpleHTTPRequestHandler
    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            url = f"http://localhost:{port}/index.html"
            print(f"\n[SERVER] Server web aktif di: {url}")
            print("[INFO] Tekan Ctrl+C di terminal untuk menghentikan server.")
            webbrowser.open(url)
            httpd.serve_forever()
    except OSError:
        with socketserver.TCPServer(("", port + 80), handler) as httpd:
            url = f"http://localhost:{port + 80}/index.html"
            print(f"\n[SERVER] Server web aktif di: {url}")
            print("[INFO] Tekan Ctrl+C di terminal untuk menghentikan server.")
            webbrowser.open(url)
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[STOP] Server web dihentikan.")


def run_telegram_bot():
    """Menjalankan bot Telegram."""
    from bot import main as bot_main
    bot_main()


def run_interactive_menu():
    print_banner()
    scraper = RenggaliScraper()

    while True:
        print("\nPilih operasi yang ingin Anda jalankan:")
        print("  [1] Scrape LENGKAP (Katalog + Detail Proyek + Data Booking) -> Excel, JSON & CSV")
        print("  [2] Scrape KATALOG Proyek saja (Nama, Lokasi, Link, Thumbnail)")
        print("  [3] Scrape Data BOOKING UNIT Terkini saja (Google Spreadsheet)")
        print("  [4] Unduh Semua Dokumen PDF (Site Plan & Price List dari Google Drive)")
        print("  [5] Unduh Semua Gambar Banner Proyek")
        print("  [6] Jalankan Web Server & Buka Website di Browser (http://localhost:8000)")
        print("  [7] Jalankan Bot Telegram (bot.py)")
        print("  [0] Keluar")

        pilihan = input("\nMasukkan nomor pilihan (0-7) [default 6]: ").strip()
        if pilihan == "1":
            print("\n>> Memulai Scraping Lengkap...")
            scraper.fetch_all_projects(deep=True)
            scraper.fetch_booking_data()
            scraper.export_to_excel("hasil_scraping_renggali.xlsx")
            scraper.export_to_json("hasil_scraping_renggali.json")
            scraper.export_to_csv("output_csv")
            print("\n[SUKSES] Semua data berhasil diekstrak dan disimpan!")
            break
        elif pilihan == "2":
            print("\n>> Mengambil Katalog Proyek...")
            catalog = scraper.fetch_catalog()
            scraper.export_to_json("katalog_renggali.json")
            scraper.export_to_csv("output_csv")
            print("\n[SUKSES] Katalog berhasil disimpan ke 'katalog_renggali.json' & 'output_csv/'!")
            break
        elif pilihan == "3":
            print("\n>> Mengambil Data Booking Unit...")
            df = scraper.fetch_booking_data()
            df.to_excel("info_booking_unit.xlsx", index=False)
            df.to_csv("info_booking_unit.csv", index=False, encoding="utf-8-sig")
            print("\n[SUKSES] Data booking unit berhasil disimpan ke 'info_booking_unit.xlsx' & 'info_booking_unit.csv'!")
            break
        elif pilihan == "4":
            print("\n>> Mengunduh Dokumen PDF...")
            scraper.fetch_all_projects(deep=True)
            scraper.download_documents("downloads/pdf")
            print("\n[SUKSES] Dokumen PDF tersimpan di 'downloads/pdf/'!")
            break
        elif pilihan == "5":
            print("\n>> Mengunduh Gambar Banner...")
            scraper.fetch_catalog()
            scraper.download_images("downloads/images")
            print("\n[SUKSES] Gambar tersimpan di 'downloads/images/'!")
            break
        elif pilihan == "" or pilihan == "6":
            print("\n>> Membuka Website...")
            start_local_server()
            break
        elif pilihan == "7":
            print("\n>> Menjalankan Bot Telegram...")
            run_telegram_bot()
            break
        elif pilihan == "0":
            print("\nKeluar. Sampai jumpa!")
            sys.exit(0)
        else:
            print("[!] Pilihan tidak valid. Silakan coba lagi.")


def main():
    parser = argparse.ArgumentParser(
        description="Web Scraper & Portal untuk Proyek Renggali Group (Google Sites)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--all", "-a", action="store_true", help="Scrape lengkap (Katalog + Detail Proyek + Booking Unit) & simpan Excel, JSON, CSV")
    parser.add_argument("--catalog", "-c", action="store_true", help="Hanya scrape katalog proyek utama")
    parser.add_argument("--booking", "-b", action="store_true", help="Hanya unduh data booking unit terkini dari spreadsheet")
    parser.add_argument("--download-pdf", action="store_true", help="Unduh seluruh file PDF (Price List & Site Plan)")
    parser.add_argument("--download-img", action="store_true", help="Unduh seluruh gambar banner")
    parser.add_argument("--serve", "-s", action="store_true", help="Jalankan server web lokal & buka website di browser")
    parser.add_argument("--bot", action="store_true", help="Jalankan Bot Telegram")
    parser.add_argument("--port", type=int, default=8000, help="Port untuk server web lokal (default: 8000)")
    parser.add_argument("--excel", default="hasil_scraping_renggali.xlsx", help="Nama file output Excel (default: hasil_scraping_renggali.xlsx)")
    parser.add_argument("--json", dest="json_path", default="hasil_scraping_renggali.json", help="Nama file output JSON (default: hasil_scraping_renggali.json)")
    parser.add_argument("--csv-dir", default="output_csv", help="Folder output CSV (default: output_csv)")

    args = parser.parse_args()

    if len(sys.argv) == 1:
        run_interactive_menu()
        return

    print_banner()
    scraper = RenggaliScraper()

    if args.all:
        scraper.fetch_all_projects(deep=True)
        scraper.fetch_booking_data()
        scraper.export_to_excel(args.excel)
        scraper.export_to_json(args.json_path)
        scraper.export_to_csv(args.csv_dir)
        print("\n[SUKSES] Seluruh proses scraping selesai!")

    elif args.catalog:
        scraper.fetch_catalog()
        scraper.export_to_json(args.json_path)
        scraper.export_to_csv(args.csv_dir)
        print(f"\n[SUKSES] Katalog disimpan ke {args.json_path} & {args.csv_dir}/")

    elif args.booking:
        df = scraper.fetch_booking_data()
        df.to_excel(args.excel, sheet_name="Info_Booking_Unit", index=False)
        df.to_csv(os.path.join(args.csv_dir, "info_booking_unit.csv"), index=False, encoding="utf-8-sig")
        print(f"\n[SUKSES] Data booking disimpan ke {args.excel} & {args.csv_dir}/info_booking_unit.csv")

    if args.download_pdf:
        if not scraper.projects_detailed:
            scraper.fetch_all_projects(deep=True)
        scraper.download_documents("downloads/pdf")

    if args.download_img:
        if not scraper.catalog_data:
            scraper.fetch_catalog()
        scraper.download_images("downloads/images")

    if args.serve:
        start_local_server(args.port)

    if args.bot:
        run_telegram_bot()


if __name__ == "__main__":
    main()
