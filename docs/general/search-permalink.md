---
title: Cara Mengganti Search Permalink atau URL di WordPress
outline: deep
---

# Cara Mengganti Search Permalink atau URL di WordPress

Secara default, halaman pencarian WordPress menggunakan format URL:

- `https://domainanda.com/?s=kata+kunci`

Pada beberapa theme, termasuk theme Idtheme, anda mungkin ingin menggantinya menjadi:

- `https://domainanda.com/search/kata-kunci`

## 1. Mengatur Permalink WordPress

1. Masuk ke **Settings → Permalinks**.
2. Pilih struktur permalink yang SEO friendly, misalnya:
   - `Post name` (`/%postname%/`).
3. Simpan perubahan.

Langkah ini memastikan struktur URL posting sudah rapi sebelum mengubah URL pencarian.

## 2. Mengubah URL Pencarian dengan Kode (Tutorial 1: dengan .html)

Pada tutorial asli, disediakan dua contoh:  
- URL dengan ekstensi `.html` di belakang.  
- URL tanpa `.html`.

### a. Tutorial pertama (dengan ekstensi .html)

Contoh format yang diinginkan:

- `https://domainanda.com/info/kata-kunci.html`

Langkah-langkah:

1. Buka file `functions.php` pada **child theme** (disarankan) atau theme aktif anda.
2. Tambahkan kode sesuai snippet yang disediakan di dokumentasi Idtheme (link gist):
   - https://gist.github.com/g14nnakal/6086351162a55213abc08c2d1380e891
3. Simpan perubahan. Lihat contoh berikut:

![Search Permalink dengan .html](/general/search-permalink/search-permalink.jpg)

Setelah menambahkan kode:

1. Masuk ke **Settings → Permalinks**.
2. Klik **Save Changes** untuk melakukan **flush rewrite rules**.

Ini penting agar struktur URL baru dikenali oleh WordPress dan server.

### b. Tutorial kedua (tanpa ekstensi .html)

Jika anda menginginkan format:

- `https://domainanda.com/info/kata-kunci/`

Langkah-langkah:

1. Buka kembali `functions.php` di child theme atau theme anda.
2. Ganti kode sebelumnya dengan snippet lain:
   - https://gist.github.com/g14nnakal/89e67cf4c468f9cbd11a5aaa823af375
3. Simpan perubahan.

Setelah itu **ulang** langkah flush rewrite rules:

1. Masuk ke **Settings → Permalinks**.
2. Klik **Save Changes** tanpa mengubah apa pun.

## 3. Mengganti Prefix “info” ke Nama Lain

Pada contoh di atas, prefix `info` digunakan sebagai contoh.  
Anda bisa menggantinya dengan kata lain sesuai kebutuhan (misalnya `search`, `cari`, dsb.).

Prinsipnya:

- Buka kode snippet yang anda pakai.
- Cari teks `info`.
- Ganti dengan prefix yang anda inginkan.
- Simpan file dan lakukan flush rewrite rules lagi melalui **Settings → Permalinks**.

## 4. Mengganti Action Form Pencarian di Theme

Pada beberapa theme, form search bisa diarahkan langsung ke URL `/search/`.

Contoh konsep:

- Ubah action form dari:
  - `action="<?php echo home_url('/'); ?>"`
- Menjadi:
  - `action="<?php echo home_url('/search/'); ?>"`

Pastikan parameter `name="s"` tetap ada agar WordPress tetap mengenali kata kunci.

## 5. Flush Rewrite Rules

Setelah menambahkan rewrite rule (baik lewat plugin atau kode):

- Kunjungi kembali **Settings → Permalinks**.
- Klik **Save Changes** tanpa mengubah apa pun.

Ini akan memaksa WordPress untuk me-refresh aturan permalink.

## 6. Pengujian

- Coba gunakan form pencarian di front-end.
- Pastikan:
  - URL berubah menjadi `/search/kata-kunci`.
  - Hasil pencarian tetap tampil normal.

Jika terjadi error 404:

- Periksa ulang aturan rewrite/redirect.
- Pastikan server (Apache/Nginx) mengizinkan penggunaan mod_rewrite atau rules yang anda pasang.
