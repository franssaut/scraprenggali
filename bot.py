import os
import sys
import json
import logging
from dotenv import load_dotenv

# Konfigurasi Logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Load Environment Variables
load_dotenv()
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN") or os.getenv("BOT_TOKEN")

if not BOT_TOKEN:
    print("\n" + "=" * 65)
    print("❌ PERHATIAN: TELEGRAM_BOT_TOKEN belum disetel di file '.env'")
    print("=" * 65)
    print("Langkah cepat mengaktifkan bot:")
    print("1. Buka aplikasi Telegram dan cari @BotFather")
    print("2. Kirim pesan /newbot dan beri nama bot Anda")
    print("3. Buat file '.env' di folder scraprenggali lalu isi:")
    print("   TELEGRAM_BOT_TOKEN=token_rahasia_dari_botfather")
    print("4. Jalankan kembali: python bot.py")
    print("=" * 65 + "\n")

import telebot
from telebot import types

# Gunakan token atau placeholder aman berformat token jika belum disetel
SAFE_TOKEN = BOT_TOKEN if BOT_TOKEN and ":" in BOT_TOKEN else "123456789:AAFakeTokenForValidationOnlyRenggali"
bot = telebot.TeleBot(SAFE_TOKEN, parse_mode="HTML")

DATA_FILE = "hasil_scraping_renggali.json"
WEBSITE_URL = "https://scraprenggali.vercel.app"
SPREADSHEET_URL = "https://drive.google.com/open?id=194exWHm5wMBM-xMicWFcSmn_PesODCq0Wf7Dx7tPyH8"


def load_data():
    """Memuat data JSON hasil scraping."""
    if not os.path.exists(DATA_FILE):
        return {"projects": [], "booking_records": []}
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logger.error(f"Gagal membaca data: {e}")
        return {"projects": [], "booking_records": []}


# -------------------------------------------------------------
# KEYBOARDS & MENUS
# -------------------------------------------------------------

def main_menu_keyboard():
    """Menu Utama Inline Keyboard."""
    markup = types.InlineKeyboardMarkup(row_width=2)
    btn_katalog = types.InlineKeyboardButton("🏢 Katalog 17 Proyek", callback_data="menu_katalog")
    btn_wilayah = types.InlineKeyboardButton("📍 Filter Wilayah", callback_data="menu_wilayah")
    btn_booking = types.InlineKeyboardButton("📊 Info Booking Unit", callback_data="menu_booking")
    btn_stats = types.InlineKeyboardButton("📈 Ringkasan & Promo", callback_data="menu_stats")
    btn_web = types.InlineKeyboardButton("🌐 Buka Website", url=WEBSITE_URL)
    btn_sheet = types.InlineKeyboardButton("📑 Google Sheets", url=SPREADSHEET_URL)
    
    markup.add(btn_katalog, btn_wilayah)
    markup.add(btn_booking, btn_stats)
    markup.add(btn_web, btn_sheet)
    return markup


def back_to_main_keyboard():
    """Tombol kembali ke menu utama."""
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))
    return markup


# -------------------------------------------------------------
# COMMAND HANDLERS
# -------------------------------------------------------------

@bot.message_handler(commands=["start", "menu"])
def cmd_start(message):
    """Menampilkan sambutan dan menu utama."""
    data = load_data()
    total_proj = len(data.get("projects", []))
    total_book = len(data.get("booking_records", []))

    text = (
        f"👋 <b>Halo, {message.from_user.first_name}!</b>\n\n"
        f"Selamat datang di <b>Bot Resmi Informasi Properti Renggali Group Batam</b>. 🏡\n\n"
        f"<i>\"Ingat Rumah, Ingat Renggali\"</i>\n\n"
        f"📊 <b>Data Terkini:</b>\n"
        f"• <b>{total_proj}</b> Proyek Perumahan & Ruko\n"
        f"• <b>7</b> Wilayah Strategis Batam\n"
        f"• <b>{total_book}</b> Transaksi Booking Unit Tercatat\n\n"
        f"Silakan pilih menu di bawah ini untuk memulai:"
    )
    bot.send_message(message.chat.id, text, reply_markup=main_menu_keyboard())


@bot.message_handler(commands=["help"])
def cmd_help(message):
    """Panduan penggunaan bot."""
    text = (
        "📖 <b>Panduan Penggunaan Bot Renggali Group:</b>\n\n"
        "• /start atau /menu - Membuka menu navigasi utama\n"
        "• /katalog - Menampilkan daftar 17 proyek perumahan\n"
        "• /wilayah - Filter proyek berdasarkan kawasan di Batam\n"
        "• /booking - Cek status transaksi booking unit hari ini\n"
        "• /cari <code>&lt;kata kunci&gt;</code> - Cari perumahan (contoh: <code>/cari tembesi</code> atau <code>/cari asoka</code>)\n"
        "• /web - Tautan menuju portal website interaktif\n"
        "• /refresh - Memperbarui data langsung dari Google Sites\n"
    )
    bot.send_message(message.chat.id, text, reply_markup=back_to_main_keyboard())


@bot.message_handler(commands=["katalog"])
def cmd_katalog(message):
    """Menampilkan daftar katalog proyek."""
    send_katalog_menu(message.chat.id)


@bot.message_handler(commands=["wilayah"])
def cmd_wilayah(message):
    """Menampilkan pilihan wilayah."""
    send_wilayah_menu(message.chat.id)


@bot.message_handler(commands=["booking"])
def cmd_booking(message):
    """Menampilkan ringkasan status booking unit."""
    send_booking_summary(message.chat.id)


@bot.message_handler(commands=["web"])
def cmd_web(message):
    """Tautan website Vercel."""
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("🌐 Kunjungi Website Sekarang", url=WEBSITE_URL))
    bot.send_message(
        message.chat.id,
        f"🚀 <b>Website Portal Properti Renggali Group</b>:\n{WEBSITE_URL}\n\n"
        "Tersedia fitur pencarian interaktif, unduh PDF Price List, pemutar video YouTube, dan tabel live tracker lengkap!",
        reply_markup=markup
    )


@bot.message_handler(commands=["cari"])
def cmd_cari(message):
    """Mencari proyek perumahan."""
    query = message.text.replace("/cari", "").strip().lower()
    if not query:
        bot.reply_to(message, "Ketikkan kata kunci yang dicari. Contoh:\n<code>/cari tembesi</code>\n<code>/cari asoka</code>")
        return

    data = load_data()
    results = [
        p for p in data.get("projects", [])
        if query in p["project_name"].lower()
        or query in p["location"].lower()
        or query in (p.get("promo_summary") or "").lower()
    ]

    if not results:
        bot.send_message(message.chat.id, f"❌ Tidak ditemukan proyek dengan kata kunci: <b>{query}</b>")
        return

    markup = types.InlineKeyboardMarkup(row_width=1)
    for p in results[:10]:
        markup.add(types.InlineKeyboardButton(f"🏡 {p['project_name']} ({p['location']})", callback_data=f"proj_{p['project_name'][:25]}"))
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))

    bot.send_message(message.chat.id, f"🔍 <b>Ditemukan {len(results)} proyek untuk '{query}':</b>", reply_markup=markup)


@bot.message_handler(commands=["refresh", "update"])
def cmd_refresh(message):
    """Menjalankan scraping ulang secara live."""
    msg = bot.send_message(message.chat.id, "⏳ <i>Sedang mengambil data terbaru dari Google Sites & Spreadsheet Renggali Group...</i>")
    try:
        from renggali_scraper import RenggaliScraper
        scraper = RenggaliScraper()
        scraper.fetch_all_projects(deep=True)
        scraper.fetch_booking_data()
        scraper.export_to_excel("hasil_scraping_renggali.xlsx")
        scraper.export_to_json("hasil_scraping_renggali.json")
        scraper.export_to_csv("output_csv")
        
        bot.edit_message_text(
            "✅ <b>Data Berhasil Diperbarui!</b>\n\nKatalog 17 proyek dan 116+ data booking unit telah disinkronkan ke versi paling mutakhir.",
            message.chat.id,
            msg.message_id,
            reply_markup=main_menu_keyboard()
        )
    except Exception as e:
        logger.error(f"Gagal refresh data: {e}")
        bot.edit_message_text(f"❌ Terjadi kesalahan saat refresh data: {e}", message.chat.id, msg.message_id)


# -------------------------------------------------------------
# CALLBACK QUERY HANDLERS (INLINE BUTTONS)
# -------------------------------------------------------------

@bot.callback_query_handler(func=lambda call: True)
def handle_callbacks(call):
    chat_id = call.message.chat.id
    message_id = call.message.message_id
    data = call.data

    if data == "menu_main":
        bot.answer_callback_query(call.id)
        bot.edit_message_text(
            "🏡 <b>Menu Utama Portal Renggali Group Batam:</b>\n\nSilakan pilih menu yang ingin Anda akses:",
            chat_id,
            message_id,
            reply_markup=main_menu_keyboard()
        )

    elif data == "menu_katalog":
        bot.answer_callback_query(call.id)
        send_katalog_menu(chat_id, message_id)

    elif data == "menu_wilayah":
        bot.answer_callback_query(call.id)
        send_wilayah_menu(chat_id, message_id)

    elif data == "menu_booking":
        bot.answer_callback_query(call.id)
        send_booking_summary(chat_id, message_id)

    elif data == "menu_stats":
        bot.answer_callback_query(call.id)
        send_stats_summary(chat_id, message_id)

    elif data.startswith("wil_"):
        wilayah_name = data.replace("wil_", "")
        bot.answer_callback_query(call.id)
        send_projects_by_wilayah(chat_id, wilayah_name, message_id)

    elif data.startswith("proj_"):
        short_name = data.replace("proj_", "")
        bot.answer_callback_query(call.id)
        send_project_details(chat_id, short_name)


# -------------------------------------------------------------
# HELPER FUNCTIONS UNTUK MENAMPILKAN DATA
# -------------------------------------------------------------

def send_katalog_menu(chat_id, message_id=None):
    """Menampilkan keyboard daftar 17 proyek."""
    data = load_data()
    projects = data.get("projects", [])

    markup = types.InlineKeyboardMarkup(row_width=1)
    for p in projects:
        btn_text = f"🏡 {p['project_name']} ({p['location']})"
        markup.add(types.InlineKeyboardButton(btn_text, callback_data=f"proj_{p['project_name'][:25]}"))
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))

    text = "🏢 <b>Daftar 17 Proyek Properti Renggali Group:</b>\n\nKlik nama proyek di bawah ini untuk melihat foto, promo, dan download Price List/Site Plan:"

    if message_id:
        bot.edit_message_text(text, chat_id, message_id, reply_markup=markup)
    else:
        bot.send_message(chat_id, text, reply_markup=markup)


def send_wilayah_menu(chat_id, message_id=None):
    """Menampilkan daftar 7 kawasan wilayah."""
    areas = [
        ("Tembesi", "6 Proyek"),
        ("Simp. Basecamp", "4 Proyek"),
        ("Nongsa", "3 Proyek"),
        ("Tanjung Uncang", "1 Proyek"),
        ("Batu Besar", "1 Proyek"),
        ("Sei Daun - Piayu", "1 Proyek"),
        ("Putri Hijau", "1 Proyek"),
    ]

    markup = types.InlineKeyboardMarkup(row_width=2)
    buttons = []
    for a, count in areas:
        buttons.append(types.InlineKeyboardButton(f"📍 {a} ({count})", callback_data=f"wil_{a}"))
    markup.add(*buttons)
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))

    text = "📍 <b>Pilih Kawasan / Wilayah di Batam:</b>\n\nTemukan hunian terbaik berdasarkan lokasi yang Anda inginkan:"

    if message_id:
        bot.edit_message_text(text, chat_id, message_id, reply_markup=markup)
    else:
        bot.send_message(chat_id, text, reply_markup=markup)


def send_projects_by_wilayah(chat_id, wilayah_name, message_id=None):
    """Menampilkan proyek di wilayah tertentu."""
    data = load_data()
    filtered = [p for p in data.get("projects", []) if p["location"].lower() == wilayah_name.lower()]

    markup = types.InlineKeyboardMarkup(row_width=1)
    for p in filtered:
        markup.add(types.InlineKeyboardButton(f"🏡 {p['project_name']}", callback_data=f"proj_{p['project_name'][:25]}"))
    markup.add(types.InlineKeyboardButton("🔙 Kembali ke Pilihan Wilayah", callback_data="menu_wilayah"))

    text = f"📍 <b>Proyek di Wilayah {wilayah_name} ({len(filtered)} Properti):</b>\n\nSilakan pilih salah satu untuk melihat rincian:"

    if message_id:
        bot.edit_message_text(text, chat_id, message_id, reply_markup=markup)
    else:
        bot.send_message(chat_id, text, reply_markup=markup)


def send_project_details(chat_id, short_name):
    """Mengirim rincian lengkap satu proyek beserta foto banner dan dokumen."""
    data = load_data()
    target = None
    for p in data.get("projects", []):
        if p["project_name"].startswith(short_name) or short_name in p["project_name"]:
            target = p
            break

    if not target:
        bot.send_message(chat_id, "❌ Proyek tidak ditemukan.")
        return

    promo_text = target.get("promo_summary") or "Promo sesuai brosur & pricelist resmi."
    docs = target.get("documents", [])
    videos = target.get("videos", [])

    caption = (
        f"🏡 <b>{target['project_name']}</b>\n"
        f"📍 <b>Lokasi:</b> {target['location']}, Batam\n\n"
        f"🎁 <b>Promo & Penawaran Terbaru:</b>\n"
        f"{promo_text}\n\n"
        f"📄 <b>Dokumen Tersedia:</b> {len(docs)} Berkas PDF\n"
        f"🎬 <b>Video Unit:</b> {'Ada (YouTube)' if videos else 'Belum tersedia'}\n"
    )

    markup = types.InlineKeyboardMarkup(row_width=1)
    for d in docs:
        d_title = d.get("title", "Dokumen")
        d_url = d.get("download_url") or d.get("view_url")
        if d_url:
            markup.add(types.InlineKeyboardButton(f"📥 Download {d_title}", url=d_url))

    if videos:
        markup.add(types.InlineKeyboardButton("🎬 Tonton Video YouTube", url=videos[0]["watch_url"]))

    markup.add(types.InlineKeyboardButton("🌐 Lihat di Website Portal", url=f"{WEBSITE_URL}#katalog-section"))
    markup.add(types.InlineKeyboardButton("🔙 Kembali ke Katalog", callback_data="menu_katalog"))

    # Cek Foto Lokal
    local_img = target.get("local_image")
    if local_img and os.path.exists(local_img):
        try:
            with open(local_img, "rb") as photo:
                bot.send_photo(chat_id, photo, caption=caption, reply_markup=markup)
                return
        except Exception as e:
            logger.warning(f"Gagal kirim foto lokal: {e}")

    # Fallback foto URL
    img_url = target.get("image_url")
    if img_url:
        try:
            bot.send_photo(chat_id, img_url, caption=caption, reply_markup=markup)
            return
        except Exception:
            pass

    bot.send_message(chat_id, caption, reply_markup=markup)


def send_booking_summary(chat_id, message_id=None):
    """Menampilkan ringkasan status live booking unit."""
    data = load_data()
    records = data.get("booking_records", [])

    total = len(records)
    kpr = len([r for r in records if "kpr" in (r.get("KETERANGAN_PROSES") or "").lower()])
    cash = len([r for r in records if "cash" in (r.get("KETERANGAN_PROSES") or "").lower()])
    batal = len([r for r in records if "batal" in (r.get("KETERANGAN_PROSES") or "").lower()])
    sisforum = len([r for r in records if "oke" in (r.get("STATUS_SISFORUM") or "").lower()])

    sample_text = ""
    for r in records[:5]:
        sample_text += (
            f"• <b>Unit {r.get('PERUMAHAN')}</b> Blok {r.get('BLOK')}/{r.get('NOMOR')} | "
            f"Sales: {r.get('SALES')} | <i>{r.get('KETERANGAN_PROSES')}</i>\n"
        )

    text = (
        f"📊 <b>Info Book Unit Hari Ini (Live Tracker):</b>\n\n"
        f"📈 <b>Statistik Transaksi:</b>\n"
        f"• Total Booking Tercatat: <b>{total} Unit</b>\n"
        f"• Skema KPR Ekspress: <b>{kpr} Unit</b>\n"
        f"• Skema Cash Tahap: <b>{cash} Unit</b>\n"
        f"• Verifikasi Sisforum OKE: <b>{sisforum} Unit</b>\n"
        f"• Status Batal / Cancel: <b>{batal} Unit</b>\n\n"
        f"🕒 <b>5 Transaksi Terkini:</b>\n"
        f"{sample_text}\n"
        f"<i>Untuk tabel lengkap 116 data, buka website atau Google Spreadsheet resmi di bawah ini:</i>"
    )

    markup = types.InlineKeyboardMarkup(row_width=1)
    markup.add(types.InlineKeyboardButton("🌐 Buka Live Table di Website", url=f"{WEBSITE_URL}#booking-section"))
    markup.add(types.InlineKeyboardButton("📑 Buka Google Spreadsheet Asli", url=SPREADSHEET_URL))
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))

    if message_id:
        bot.edit_message_text(text, chat_id, message_id, reply_markup=markup)
    else:
        bot.send_message(chat_id, text, reply_markup=markup)


def send_stats_summary(chat_id, message_id=None):
    """Menampilkan rangkuman keunggulan dan promo."""
    text = (
        "📈 <b>Ringkasan Keunggulan & Promo Renggali Group:</b>\n\n"
        "✨ <b>Promo Populer:</b>\n"
        "• <b>Diskon Langsung</b> hingga Rp 50 Juta pada cluster tertentu\n"
        "• <b>Gratis Biaya-Biaya:</b> BPHTB, SHGB, AJB, dan Saldo Bank 4-5%\n"
        "• <b>Kemudahan KPR:</b> Kerjasama dengan bank rekanan terpercaya\n\n"
        "📍 <b>Sebaran Proyek Unggulan:</b>\n"
        "1. Kawasan Tembesi (Pusat Pendidikan & Akses Barelang)\n"
        "2. Simp. Basecamp (Pertigaan Emas Batu Aji & Marina)\n"
        "3. Kawasan Nongsa (Destinasi Wisata & KEK Digital)\n"
        "4. Sei Daun Piayu & Putri Hijau (Hunian Asri & Akses Industri)"
    )
    markup = types.InlineKeyboardMarkup(row_width=1)
    markup.add(types.InlineKeyboardButton("🏢 Lihat Katalog Proyek", callback_data="menu_katalog"))
    markup.add(types.InlineKeyboardButton("🔙 Menu Utama", callback_data="menu_main"))

    if message_id:
        bot.edit_message_text(text, chat_id, message_id, reply_markup=markup)
    else:
        bot.send_message(chat_id, text, reply_markup=markup)


# -------------------------------------------------------------
# MAIN ENTRYPOINT
# -------------------------------------------------------------

def main():
    if not BOT_TOKEN:
        print("\n[!] Program bot tidak dapat dijalankan karena TELEGRAM_BOT_TOKEN belum disetel.")
        print("Silakan ikuti instruksi di atas untuk menyetel token dari @BotFather di file '.env'.\n")
        return

    print("=" * 65)
    print("🤖 BOT TELEGRAM RENGGALI GROUP AKTIF!")
    print("Mendengarkan pesan dan perintah dari pengguna...")
    print("Tekan Ctrl+C untuk menghentikan bot.")
    print("=" * 65)

    try:
        bot.infinity_polling(timeout=20, long_polling_timeout=20)
    except KeyboardInterrupt:
        print("\n[STOP] Bot dihentikan oleh pengguna.")
    except Exception as e:
        logger.error(f"Terjadi error pada polling: {e}")


if __name__ == "__main__":
    main()
