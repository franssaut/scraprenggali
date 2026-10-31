@echo off
chcp 65001 > nul
title Auto-Scraper Renggali Group

echo =======================================================
echo    🌐 AUTO-SCRAPER OTOMATIS RENGGALI GROUP 🌐
echo =======================================================
echo.
echo Mode: Otomatis Scrape & Sinkronisasi Berkala
echo Tekan Ctrl+C di terminal ini untuk berhenti kapan saja.
echo.

:: Menjalankan auto-scraper setiap 60 menit (dapat disesuaikan)
python main.py --schedule 60

pause
