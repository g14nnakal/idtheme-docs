---
title: Cara Mengoptimalkan Kecepatan WordPress dengan Plugin dan Pengaturan
outline: deep
---

# Optimasi Kecepatan WordPress

Kecepatan loading website sangat berpengaruh pada pengalaman pengguna, SEO, dan konversi. Panduan ini menjelaskan langkah teknis dan praktis untuk mempercepat WordPress menggunakan kombinasi plugin dan pengaturan server/theme.

Panduan ini bersifat umum dan dapat diterapkan pada berbagai theme WordPress.

## 1. Pilih Hosting yang Tepat

- Gunakan penyedia hosting yang memiliki reputasi baik dan support responsif.
- Untuk shared hosting, pilih paket yang spesifikasinya cukup (CPU, RAM, IO) agar tidak mudah “menggembos” saat trafik naik.
- Jika menggunakan VPS, penyedia yang umum direkomendasikan:
  - DigitalOcean
  - Vultr
  - OVH
- Lokasi server dan kualitas jaringan juga berpengaruh pada Time To First Byte (TTFB).

## 2. Gunakan Theme yang Ringan

- Hindari theme yang terlalu banyak memanggil gambar besar di halaman depan.
- Pastikan gambar di theme tidak di-resize hanya dengan CSS/HTML (misalnya menampilkan gambar 2000px dalam box 300px) karena akan memperlambat loading.
- Perhatikan jumlah file CSS dan JavaScript yang digunakan theme:
  - Terlalu banyak file dan request akan menambah waktu load.
  - Theme yang rapi biasanya menggabungkan dan meminimalkan aset.
- Untuk situs tipe blog/magazine, pilih theme yang fokus pada konten dan performa.

## 3. Kurangi Penggunaan Plugin

- Semakin banyak plugin, semakin banyak script dan query yang jalan di background.
- Instal plugin hanya jika benar-benar diperlukan.
- Hindari memasang beberapa plugin dengan fungsi mirip (misalnya beberapa plugin SEO atau security sekaligus).

### Page Builder

- Semua page builder akan menambah overhead, apa pun jenisnya.
- Untuk website murni blog/magazine, disarankan tidak menggunakan page builder.
- Jika butuh builder, gunakan Gutenberg (editor blok bawaan WordPress) karena:
  - Sudah terintegrasi dengan core WordPress.
  - Banyak plugin blok tambahan tersedia.

## 4. Optimasi Gambar

Gambar biasanya menjadi beban terbesar dalam ukuran halaman.

### 4.1 Kompres Gambar Sebelum Upload

- Sebelum upload, kompres gambar secara manual.
- Rekomendasi layanan online:
  - JPEG: http://www.compressjpeg.com/
  - PNG: http://compresspng.com/

### 4.2 Scaled Images (Ukuran Gambar vs Layout)

- Sesuaikan ukuran gambar dengan layout yang digunakan.
- Contoh:
  - Jika thumbnail halaman depan berukuran 300×150 px, jangan gunakan gambar 2000×1000 px lalu dikecilkan pakai CSS.
- Pada layanan seperti GTmetrix, masalah ini muncul sebagai “Serve scaled images”.
- Solusi:
  - Atur fungsi image size di theme agar memanggil ukuran yang sesuai.
  - Pastikan fungsi `add_image_size` dan pemanggilan `the_post_thumbnail` atau sejenisnya sudah menggunakan size yang tepat.

### 4.3 Plugin Optimasi Gambar

Jika Anda sudah terlanjur mengupload banyak gambar, gunakan plugin optimasi:

- Smush it: https://wordpress.org/plugins/wp-smushit/
- EWWW Image Optimizer: https://wordpress.org/plugins/ewww-image-optimizer/
- Compress JPEG & PNG images (TinyPNG): https://wordpress.org/plugins/tiny-compress-images/

Catatan:
- Plugin gratis kadang hasil kompresnya tidak semaksimal layanan online, tetapi tetap membantu menurunkan ukuran file.

## 5. Minify HTML, CSS, dan JS dengan Autoptimize

Salah satu langkah penting untuk mempercepat WordPress adalah memperkecil (minify) dan menggabungkan (combine) file HTML, CSS, dan JavaScript.

### 5.1 Instalasi Autoptimize

- Instal plugin Autoptimize: https://wordpress.org/plugins/autoptimize/
- Aktifkan plugin.

Masuk ke **Settings -> Autoptimize** untuk pengaturan.

### 5.2 Pengaturan Dasar Autoptimize

1. Klik **Hide advanced settings** atau **Show advanced settings** (tergantung versi) untuk menampilkan semua opsi.
2. Di bagian **HTML Options**:
   - Centang **Optimize HTML Code?**
   - Jangan centang **Keep HTML comments?** agar komentar HTML ikut dibersihkan.
3. Di bagian **JavaScript Options**:
   - Centang **Optimize JavaScript Code?**
   - Centang opsi untuk menggabungkan JS jika situs dan plugin Anda kompatibel.
   - Jika terjadi error, coba nonaktifkan kombinasi JS atau exclude file tertentu.
4. Di bagian **CSS Options**:
   - Centang **Optimize CSS Code?**
   - Centang **Aggregate CSS-files?** untuk menggabungkan CSS.
   - Anda bisa mengaktifkan inline critical CSS jika diperlukan.

### 5.3 Catatan Penting tentang jQuery

- Jangan sembarangan menghapus atau mengecualikan `jquery.js`.
- Banyak script theme dan plugin bergantung pada jQuery bawaan WordPress.
- Jika Anda mengisi opsi **Exclude scripts from Autoptimize**, pastikan jQuery tetap diproses dengan benar atau diexclude sesuai rekomendasi plugin/theme, bukan dihapus total.

### 5.4 Contoh Hasil Minify

- Autoptimize dapat mengubah HTML/CSS/JS menjadi 1 baris panjang.
- Hal ini normal dan membantu mengurangi ukuran file serta mempercepat loading.

Untuk visual, Anda bisa lihat contoh setting autoptimize yang saya terapkan:

![Pengaturan Autoptimize](/guide/optimasi-kecepatan/autoptimize-settings.jpg)

## 6. Plugin Cache

Selain minify, plugin cache akan menyajikan halaman statis ke pengunjung sehingga mengurangi beban server.

Beberapa plugin cache populer:

- WP Fastest Cache: https://wordpress.org/plugins/wp-fastest-cache/
- WP Super Cache: https://wordpress.org/plugins/wp-super-cache/
- W3 Total Cache: https://wordpress.org/plugins/w3-total-cache/
- Litespeed Cache: https://wordpress.org/plugins/litespeed-cache/
- Wp Rocket: https://wp-rocket.me/

Rekomendasi umum:
- WP Fastest Cache cukup mudah disetting dan efektif untuk banyak kasus.

Screenshot wp fastest cache yang saya terapkan dengan syarat combine dengan plugin autoptimize:
![Pengaturan Wp Fastest Cahe](/guide/optimasi-kecepatan/wp-fastest-cache-settings.jpg)

### 6.1 Prinsip Pengaturan Cache

- Aktifkan:
  - Page cache (caching halaman).
  - Browser cache (expired headers).
  - GZIP compression (bila tidak diaktifkan di level server).
- Jangan mengaktifkan semua fitur “ekstrim” sekaligus tanpa uji coba, karena bisa bentrok dengan plugin lain.
- Setelah mengubah pengaturan, selalu:
  - Clear cache plugin.
  - Uji website dalam mode incognito / device lain.

## 7. Script, Iklan, dan Plugin Lain

### 7.1 Kompatibilitas Plugin

- Beberapa plugin tidak “ramah” terhadap optimasi agresif (misalnya minify dan combine JS/CSS).
- Contoh: beberapa builder atau plugin page builder bisa bentrok jika JS-nya digabung/ditunda terlalu agresif.
- Jika setelah mengaktifkan optimasi ada bagian layout yang rusak:
  - Coba exclude file JS/CSS tertentu.
  - Nonaktifkan fitur combine hanya untuk sementara, lalu uji lagi.

### 7.2 Script Iklan (Google AdSense, dsb.)

- Gunakan script dengan atribut `async` agar script iklan tidak menghambat render.
- Gunakan unit iklan responsif.
- Hindari terlalu banyak unit iklan dalam satu halaman karena sangat mempengaruhi kecepatan dan CLS (layout shift).

### 7.3 Kurangi Plugin yang Tidak Perlu

- Hapus atau nonaktifkan plugin yang tidak digunakan.
- Gunakan satu plugin untuk satu fungsi utama (misalnya satu plugin cache, satu plugin SEO).

## 8. Server, GZIP, dan CDN

### 8.1 Pengaturan Server

- Pastikan server mendukung:
  - GZIP compression atau Brotli.
  - `mod_expires` untuk pengaturan cache header (pada Apache).
  - `mod_pagespeed` jika tersedia (tidak wajib).
- Banyak panel hosting saat ini sudah menyediakan toggle GZIP/Compress dalam cPanel atau panel bawaan.

### 8.2 CDN (Content Delivery Network)

- CDN membantu menyajikan konten statis (gambar, CSS, JS) dari server yang lebih dekat dengan pengunjung.
- Contoh CDN gratis:
  - Cloudflare (paket free sudah cukup untuk banyak website).
- Manfaat CDN:
  - Mengurangi beban server utama.
  - Meningkatkan kecepatan di lokasi geografis lain.

## 9. Checklist Praktis

Gunakan checklist berikut sebagai panduan saat mengoptimasi:

- [ ] Hosting sudah dipilih dengan spesifikasi memadai.
- [ ] Theme yang digunakan ringan dan tidak berlebihan memuat script.
- [ ] Jumlah plugin sudah diminimalkan, tanpa duplikasi fungsi.
- [ ] Gambar dikompres sebelum upload.
- [ ] Ukuran gambar sudah disesuaikan dengan layout (scaled images).
- [ ] Plugin optimasi gambar diaktifkan jika diperlukan.
- [ ] Autoptimize sudah disetting untuk minify dan combine CSS/JS/HTML.
- [ ] jQuery tidak dihapus atau di-disable sembarangan.
- [ ] Plugin cache terpasang dan dikonfigurasi (WP Fastest Cache / lainnya).
- [ ] Script iklan menggunakan async dan tidak berlebihan.
- [ ] GZIP/kompresi aktif di server.
- [ ] CDN digunakan (opsional tapi disarankan).

## 10. Referensi

- Cara mempercepat WordPress dengan plugin dan optimasi: https://www.idtheme.com/cara-percepat-loading-wordpress-dengan-plugin/

