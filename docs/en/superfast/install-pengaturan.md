---
title: Cara Instalasi dan Setting Theme Superfast
outline: deep
---

# Cara Instalasi dan Setting Theme Superfast

Theme Superfast dirancang untuk blog dan website berita yang cepat dan ringan.  
Berikut panduan lengkap mulai dari instalasi sampai pengaturan dasar.

## Video Tutorial

Sebelumnya, silahkan tonton video tutorial berikut untuk panduan lengkap:

<YouTubeEmbed video-id="MbDFiXahjxA" />

## Persiapan Sebelum Instalasi

- Pastikan WordPress sudah terinstal dan dapat diakses.
- Gunakan versi WordPress terbaru.
- Server minimal:
  - PHP 7.2 ke atas (disarankan PHP 7.4 atau lebih baru).
  - Modul standar WordPress aktif (MySQL, cURL, dll).

## Langkah Instalasi

1. Download terlebih dahulu theme Superfast dari member area.
2. Extract paket yang anda unduh.
3. Upload file `superfast.zip` melalui **Appearance -> Themes -> Add New -> Upload Theme**.
4. Aktifkan theme **Superfast**.
5. Instal rekomendasi dan required plugin yang diminta lalu aktifkan semuanya.

Setelah theme aktif, tampilan bawaan akan muncul namun belum sama seperti demo.

## Instalasi Plugin Rekomendasi dan Wajib

Setelah mengaktifkan theme, biasanya akan muncul notifikasi untuk menginstal plugin:

- Plugin rekomendasi.
- Plugin yang wajib (required) untuk fitur tertentu.

Langkah-langkah:

1. Klik tautan **Begin installing plugins** atau masuk ke **Appearance → Install Plugins**.
2. Centang semua plugin yang diperlukan.
3. Pilih **Install** lalu **Apply**.
4. Setelah selesai, aktifkan plugin yang sudah terinstal.

Tunggu hingga proses instalasi plugin selesai sebelum melanjutkan ke langkah berikutnya.

## Import Demo Data

Agar tampilan website mirip dengan demo:

1. Masuk ke **Appearance → Import Demo Data**.
2. Pilih layout demo yang anda inginkan (default atau layout lain yang tersedia).
3. Klik tombol **Import Demo Data**.
4. Konfirmasi jika muncul popup peringatan.
5. Tunggu beberapa menit sampai proses selesai.

Setelah import selesai:

- Struktur halaman, menu, widget, dan konten demo akan terpasang.
- Tampilan website akan mendekati demo Superfast.

## Pengaturan Plugin Idblog Core untuk Superfast

Superfast menggunakan plugin **Idblog Core** untuk beberapa pengaturan penting. Berikut adalah screenshot dari pengaturan Idblog Core:

![Screenshot Idblog Core Superfast](/superfast/install-pengaturan/superfast-idblog-core.jpg)

Masuk ke **Settings → Idblog Core**.

### Tab Author Box

- Mengatur tampilan author box di bawah postingan.
- Aktifkan fitur jika ingin menampilkan info penulis.
- Pastikan setiap user memiliki data yang lengkap di **Users → All Users → Edit**.

### Tab Related Posts

- Mengaktifkan related posts di bawah artikel.
- Menentukan jumlah post yang muncul.
- Mengatur kriteria related posts (kategori/tag jika tersedia).

### Tab Breadcrumbs

- Mengaktifkan breadcrumbs di bagian atas konten.
- Mengatur teks yang digunakan serta pemisah (separator).

### Tab Ads

- Mengatur script iklan di berbagai posisi theme:
  - Atas konten.
  - Tengah konten.
  - Bawah konten.
  - Area lain yang disediakan.
- Tersedia juga pengaturan **anti adblock script** jika anda ingin menggunakannya.

### Tab Social

- Mengatur tombol share sosial media.
- Mengatur OpenGraph jika anda belum menggunakan plugin SEO yang mengelola OG.

### Tab Other

- Mengatur script tambahan di **head** dan **footer**:
  - Google Analytics.
  - Facebook Pixel.
  - Script custom lain.
- Opsi optimasi:
  - Menonaktifkan emoji script.
  - Menonaktifkan query string versi pada file CSS/JS.
  - Opsi lain untuk meringankan load.

## Pengaturan Tampilan via Customizer

Sebagian besar tampilan Superfast dikontrol lewat **Appearance → Customize**. Contoh pengaturan:

![Screenshot Customizer Superfast](/superfast/install-pengaturan/superfast-customizer.jpg)

### Tab General

- Layout umum (full width, boxed, dsb).
- Warna utama (primary color) dan warna background.
- Gambar background jika digunakan.
- Pengaturan font:
  - Pilihan font dari Google Fonts.
  - Ukuran font heading dan body.
  - Warna teks.

### Tab Header

- Pengaturan logo dan site icon.
- Warna background header.
- Gambar background header jika digunakan.
- Pengaturan menu utama di header:
  - Warna teks.
  - Warna hover.
  - Layout menu.

### Tab Blog

- Pengaturan layout halaman blog/arsip:
  - Jumlah kolom atau layout sidebar.
  - Menentukan elemen apa saja yang ditampilkan (thumbnail, excerpt, meta, dsb).
- Memilih gaya daftar posting yang tersedia di Superfast.

### Tab Footer

- Jumlah kolom widget footer.
- Warna background dan warna teks.
- Teks copyright di bagian paling bawah.

Setelah melakukan perubahan di Customizer:

1. Gunakan tombol **Publish** untuk menyimpan.
2. Lihat hasilnya di front-end.

## Penutup

Jika setelah mengikuti langkah-langkah di atas anda masih mengalami kendala:

- Cek kembali versi WordPress, theme, dan plugin apakah sudah terbaru.
- Nonaktifkan plugin yang tidak diperlukan jika terjadi konflik.
- Hubungi support Idtheme dengan menyertakan:
  - URL website.
  - Versi theme dan WordPress.
  - Screenshot error (jika ada).

