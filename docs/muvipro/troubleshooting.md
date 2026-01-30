---
title: Troubleshooting di Theme Muvipro
outline: deep
---

# Troubleshooting di Theme Muvipro

Halaman ini berisi ringkasan masalah yang sering terjadi di **theme Muvipro** beserta langkah penyelesaiannya, diambil dari dokumentasi resmi Idtheme.

Fokus utama:

- Masalah **TMDB Post** (gagal grab / data tidak lengkap).
- Masalah **instalasi** theme.
- Masalah **player**.

## Masalah TMDB Post

Masalah umum yang sering terjadi:

- Data dari TMDB tidak lengkap (judul/description kosong).
- Hanya kategori/tags yang masuk.
- Proses grab error atau tidak berjalan.

### 1. Cek Pengaturan TMDB API

Pastikan pengaturan API sudah benar:

1. Masuk ke **Settings → Idmuvi Core → TMDB Settings**.
2. Centang **Enable TMDB API**.
3. Masukkan **TMDB API Key** anda (bukan milik orang lain).
4. Untuk bahasa:
   - Disarankan pilih **Default (English)**.
   - Jika anda memilih bahasa lain (misalnya Indonesia), pastikan film tersebut memang memiliki terjemahan bahasa tersebut di TMDB.

Jika judul/description tidak muncul:

- Coba kembali ke **Default (English)**.
- Tes grab ulang.

Untuk panduan mendapatkan API key baru, lihat:

- [Mendapatkan TMDB API Key](/general/api-key-tmdb.md)

### 2. Cek Apakah API TMDB Diblokir

Ada kemungkinan API key anda diblokir oleh TMDB, misalnya:

- Terlalu banyak request dalam waktu singkat.
- Pelanggaran aturan penggunaan API.

Solusi:

1. Buat **API Key TMDB baru**.
2. Masukkan ke **TMDB Settings**.
3. Tes posting/grab ulang.

### 3. Konflik JavaScript / JSON dengan Plugin Lain

Kadang proses JSON dari TMDB tidak berjalan karena konflik JavaScript dari plugin lain.

Langkah pengecekan:

1. Nonaktifkan semua plugin **kecuali**:
   - Plugin bawaan theme.
   - Idmuvi Core (dan plugin yang diwajibkan theme).
2. Tes fitur TMDB Post.
3. Jika sudah normal:
   - Aktifkan plugin lain satu per satu.
   - Setiap kali mengaktifkan plugin, tes kembali TMDB Post.
4. Jika ketemu plugin penyebab error:
   - Biarkan nonaktif, atau
   - Cari alternatif plugin lain.

### 4. Cek Dukungan CURL dan JSON di Hosting

TMDB Post membutuhkan:

- Modul **CURL** aktif.
- Ekstensi **JSON** aktif.

Jika ragu:

- Hubungi pihak hosting dan minta pengecekan **CURL** dan **JSON**.
- Pastikan keduanya aktif dan tidak diblokir firewall.

## Masalah Instalasi Theme Muvipro

Sebelum troubleshooting, pastikan anda sudah mengikuti panduan instalasi:

- [/muvipro/install-pengaturan](/muvipro/install-pengaturan)

### 1. Blank Screen Saat Install

Jika saat install theme muncul **blank screen** atau error:

- Pastikan hosting memenuhi **requirement WordPress**:
  - PHP minimal **5.6 ke atas** (disarankan versi baru, misalnya 7.x+).
  - WordPress versi terbaru.
- Jika masih menggunakan PHP lama, minta hosting untuk **upgrade versi PHP**.
- Setelah upgrade PHP dan WordPress, coba install ulang theme.

### 2. Grid/Kotak Movie Tidak Lurus

Jika tampilan kotak grid movie/episode berantakan:

- Sering disebabkan error JavaScript (misalnya dari plugin).
- Atau masalah **permissions** file/folder di server.

Langkah pengecekan:

1. Nonaktifkan semua plugin **kecuali** plugin bawaan theme.
2. Refresh halaman arsip/home movie, lihat apakah grid sudah normal.
3. Jika normal:
   - Aktifkan plugin lain satu per satu sampai ketemu plugin penyebab konflik.
4. Jika masih bermasalah:
   - Cek dengan pihak hosting mengenai **permissions** file/folder.
   - Jika menggunakan Nginx atau VPS, masalah permission kadang perlu dibahas di forum/provider server.

## Masalah Player Muvipro

Perlu dicatat:

- Theme Muvipro **tidak menyediakan player bawaan**.
- Umumnya user menggunakan player dari **provider pihak ketiga** (gdriveplayer, haxhits, dan lain-lain).

Jika terjadi masalah player:

- Diskusikan di grup komunitas/dukungan yang digunakan Idtheme.
- Cek dokumentasi resmi dari provider player yang anda pakai.
- Pastikan embed code benar dan tidak diblokir oleh browser/Adblock.

## Tips Umum Troubleshooting

- Selalu **backup** sebelum melakukan perubahan besar (update theme, ganti versi PHP, dsb).
- Jika muncul error:
  - Cek console browser untuk pesan error JavaScript.
  - Cek error log PHP di hosting.
- Lakukan pengujian secara bertahap:
  - Nonaktifkan plugin non-esensial saat debugging.
  - Aktifkan kembali satu per satu setelah masalah selesai.

Jika semua langkah di atas sudah dicoba namun masalah masih terjadi, silakan hubungi dukungan Idtheme dengan menyertakan:

- Versi WordPress.
- Versi Muvipro.
- Versi PHP.
- Daftar plugin aktif.
- Screenshot error/tampilan yang bermasalah.

