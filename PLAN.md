# Rencana Kerja: One Letter for Your Day

Kompetisi: `u-puan-one-letter-for-your-day-e54e9c36` (`program/v1`, runtime `node22`).
Target: Program menulis tepat 1 huruf (`A`–`Z`, 1 karakter UTF-8, tanpa newline/spasi) ke `/output/entry.txt` agar unggul dalam penilaian berpasangan hakim LLM (vivid, lucu/mengejutkan, jujur, dan huruf cocok dengan kata tersembunyinya).

## Rencana Kerja
1. **Analisis Kriteria & Pemilihan Huruf**
   - Evaluasi kandidat huruf `A`–`Z` terhadap 5 kriteria hakim di `competition.yaml`: validitas kata harian, gambaran vivid & spesifik, unsur lucu/mengejutkan, kejujuran laporan hari nyata, serta kecocokan bunyi/bentuk huruf (hindari klise dan obscuritas).
   - Bandingkan kandidat teratas secara berpasangan (urutan A/B dan B/A) untuk menentukan 1 huruf final yang paling konsisten unggul.
2. **Inisialisasi Lisensi & Dokumentasi**
   - Buat `LICENSE` (MIT, `SPDX-License-Identifier: MIT`) sesuai syarat lisensi OSI.
   - Buat `README.md` ringkas berisi ringkasan solusi dan cara eksekusi.
3. **Implementasi Program (`main.ts`)**
   - Tulis `main.ts` (Node 22 native TypeScript, nol dependensi, tanpa jaringan).
   - Pastikan direktori `/output` (atau jalur uji lokal) tersedia, lalu tulis tepat 1 huruf terpilih (1 byte UTF-8, tanpa trailing newline) ke `/output/entry.txt`.
   - Commit tiap milestone pengerjaan.
4. **Pengujian & Verifikasi Gate**
   - Buat `test/verify.mjs` untuk memverifikasi: berkas tercipta, UTF-8 valid, tepat 1 karakter (`^[A-Z]$`), ukuran 1 byte, deterministik pada 2 kali run, dan waktu eksekusi jauh di bawah 60 detik.
   - Jalankan verifikasi lokal hingga semua cek lolos.
5. **Finalisasi Repo**
   - Bersihkan berkas sementara, periksa `git status`, dan commit final siap submisi.

## Daftar Berkas yang Akan Dibuat
- `PLAN.md` — Rencana kerja dan daftar berkas ini.
- `LICENSE` — Lisensi OSI (MIT) wajib untuk submisi.
- `README.md` — Ringkasan solusi, alasan pemilihan huruf, dan panduan menjalankan program.
- `main.ts` — Entrypoint `program/v1` (Node 22) yang menulis tepat 1 huruf ke `/output/entry.txt`.
- `test/verify.mjs` — Skrip uji lokal untuk memvalidasi gate 1-karakter, ukuran 1 byte, dan determinisme.
