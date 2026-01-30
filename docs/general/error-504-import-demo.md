---
title: Error 504 Ketika Import Demo Data
outline: deep
---

# Error 504 Ketika Import Demo Data

Error 504 (Gateway Timeout) biasanya muncul ketika proses import demo data memakan waktu terlalu lama sehingga koneksi antara server dan memory mengalami timeout.

## 1. Penyebab Umum Error 504 Saat Import Demo

Beberapa penyebab yang sering muncul:

- Resource server terbatas (CPU/RAM kecil).
- Batas eksekusi PHP terlalu pendek (`max_execution_time`).
- Batas memory PHP terlalu kecil (`memory_limit`).
- Batas upload atau post size terlalu kecil.
- Proses import demo data memuat banyak gambar dan konten sehingga melebihi batas waktu atau memory server.

## 2. Tambah Limit Memory dan Cron Lock di wp-config.php

Langkah pertama yang disarankan adalah menambah batas memory WordPress dan mengatur timeout cron lock.

1. Buka file **`wp-config.php`** di root instalasi WordPress anda.
2. Tambahkan baris berikut pada baris baru (sebelum komentar `/* That's all, stop editing! */` atau bagian serupa):

```php
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_CRON_LOCK_TIMEOUT', 360 );
```

Penjelasan singkat:

- `WP_MEMORY_LIMIT` meningkatkan batas memory yang dapat digunakan WordPress sampai **256 MB**.
- `WP_CRON_LOCK_TIMEOUT` mengatur lamanya lock cron (dalam detik) sebelum dianggap timeout.

Simpan file tersebut, lalu coba ulangi proses import demo data.

## 3. Coba Ulangi Import Setelah Perubahan

Terkadang error 504 hanya muncul karena import pertama kali terlalu berat atau koneksi sempat terputus.

- Coba ulangi proses import demo data setelah menambah konfigurasi di `wp-config.php`.
- Pastikan koneksi internet anda stabil selama proses import berlangsung.

Jika masih terjadi error, lanjutkan dengan cara import manual.

## 4. Import Demo Data Secara Manual

Jika import otomatis tetap gagal (terutama karena timeout dan keterbatasan memory), anda bisa melakukan import manual.

1. Ekstrak file **packed download** theme Idtheme yang anda gunakan.
2. Masuk ke folder **`demo-data`** di dalam file yang sudah diextract.
3. Di dalamnya biasanya terdapat beberapa file:
   - File dengan ekstensi **`.xml`**.
   - File dengan ekstensi **`.dat`**.
   - File dengan ekstensi **`.json`** (untuk widget, nanti di-rename).

### a. Import File .xml (Konten)

1. Masuk ke **Tools → Import** di dashboard WordPress.
2. Pilih **WordPress** (jika belum, install terlebih dahulu *WordPress Importer*).
3. Upload file **`.xml`** dari folder `demo-data`.
4. Ikuti wizard import sampai selesai.

> Tips: jika server sering kehabisan memory, ketika import konten anda bisa mencoba *tidak* mencentang opsi **Download and import file attachments** agar tidak mengimport semua gambar.

### b. Import File .dat (Customizer)

1. Install dan aktifkan plugin **Customizer Export/Import**.
2. Masuk ke **Appearance → Customize**.
3. Cari menu **Export/Import** (atau nama serupa).
4. Import file **`.dat`** dari folder `demo-data`.

### c. Import Widget (.json → .wie)

1. Di folder `demo-data` biasanya ada file dengan ekstensi **`.json`** yang berisi konfigurasi widget.
2. Rename file tersebut menjadi ekstensi **`.wie`**, misalnya:  
   - Dari: `widgets.json`  
   - Menjadi: `widgets.wie`
3. Install dan aktifkan plugin **Widget Importer & Exporter**.
4. Masuk ke menu plugin tersebut di dashboard.
5. Import file **`.wie`** yang sudah anda rename.

## 5. Catatan Penting Saat Import

- Jika gagal mengimport file **`.xml`**, penyebab yang sering muncul adalah:
  - Terlalu banyak gambar yang diupload sekaligus.
  - Server kehabisan memory ketika melakukan import attachment.
- Solusi:
  - Coba ulangi import tanpa mengimport attachment.
  - Atau import konten dulu, gambar bisa anda upload/manual belakangan jika perlu.

## 6. Jika Masih Terjadi Masalah

Jika semua langkah di atas sudah dilakukan namun error 504 tetap muncul:

- Hubungi **support hosting** dan jelaskan bahwa error terjadi saat import demo data WordPress.
- Sertakan:
  - Waktu kejadian.
  - Jenis paket hosting yang dipakai.
  - Perkiraan ukuran demo yang diimport.
- Jika menggunakan produk Idtheme:
  - Silakan submit ticket atau kontak tim Idtheme.
  - Sertakan informasi login sementara (jika diminta) agar tim bisa membantu mengecek langsung.
