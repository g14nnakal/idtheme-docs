---
title: Cara Install dan Pengaturan Theme Galepro
outline: deep
---

# Instalasi dan Pengaturan Galepro

## Video Tutorial

Sebelum anda melangkah install Galepro, sebaiknya anda lihat video di atas sampai selesai.

<YouTubeEmbed video-id="u6r5V6icNf4" />

## Langkah Instalasi

1. Download terlebih dahulu theme Galepro dari member area.
2. Extract paket yang anda dapatkan, lalu upload file `galepro.zip` melalui **Appearance -> Themes -> Add New -> Upload Theme**.
3. Aktifkan theme **Galepro**.
4. Instal rekomendasi dan required plugin yang diminta, lalu aktifkan semuanya.

## Aktivasi Lisensi

1. Masuk ke **Plugins -> Galepro License**.
2. Masukkan license key yang anda dapatkan dari member area kentooz: https://member.kentooz.com/softsale/license.
3. Simpan, pastikan status lisensi aktif agar update dan dukungan berjalan dengan baik.

## Import Demo Data

1. Masuk ke **Appearance -> Import Demo Data**.
2. Klik tombol **Import Demo Data**.
3. Tunggu beberapa menit hingga proses selesai.
4. Setelah selesai, tampilan website akan mirip dengan demo resmi theme Galepro.
5. Lanjutkan dengan menyesuaikan widget dan pengaturan di Customizer.

## Pengaturan Galepro Core

Plugin **galepro-core** menyediakan berbagai pengaturan fitur bawaan theme.  
Masuk ke **Settings -> Galepro Core** untuk mengaturnya.

- **Tab Author Box**
  - Mengaktifkan atau menonaktifkan author box di single post.
  - Mengatur warna dan tampilan kotak author.

- **Tab Related Posts**
  - Mengaktifkan atau menonaktifkan related posts.
  - Mengatur jumlah postingan yang tampil di bagian related.

- **Tab Breadcrumbs**
  - Mengaktifkan breadcrumbs.
  - Mengatur teks breadcrumb (misalnya label “Home” dan separator).

- **Tab Gallery**
  - Mengaktifkan gallery bawaan theme.
  - Mengatur tombol download dan auto description jika tersedia.

- **Tab Ads**
  - Mengatur kode iklan di berbagai posisi yang disediakan theme.
  - Mengaktifkan script anti adblock jika digunakan.

- **Tab Social**
  - Mengatur tombol social share.
  - Mengatur opengraph (jika belum menggunakan plugin SEO terpisah).

- **Tab Other**
  - Menambahkan script khusus di **head** dan **footer** (misalnya Google Analytics, Facebook Pixel).
  - Opsi optimasi seperti menonaktifkan script emoji, script version, dan lain-lain.

Berikut screenshot pengaturan Galepro Core:

![Galepro Core Settings](/galepro/install-pengaturan/galepro-core-settings.jpg)

## Pengaturan Style via Customizer

Pengaturan tampilan theme dilakukan melalui **Appearance -> Customize**.

### Tab General

- Mengatur layout umum (boxed/fullwidth).
- Mengatur warna utama (background, primary color).
- Mengatur gambar latar belakang website.
- Mengatur font:
  - Menggunakan Google Fonts.
  - Mengatur ukuran dan warna heading dan body text.

### Tab Header

- Mengatur logo dan site icon.
- Mengatur warna latar header.
- Mengatur gambar latar header.
- Mengatur menu header:
  - Posisi dan layout menu.
  - Warna teks menu, hover, dan aktif.

### Tab Blog

- Mengatur layout halaman blog/arsip:
  - Posisi sidebar (kiri/kanan/tanpa sidebar).
  - Jumlah posting per halaman (mengikuti pengaturan Reading WordPress).

### Tab Footer

- Mengatur warna latar footer.
- Mengatur teks copyright.
- Mengatur jumlah widget yang tampil di footer (misalnya 3 atau 4 kolom).

### Tab Menus

- Mengatur menu navigasi (lihat juga dokumentasi menu Galepro).

### Tab Widgets

- Mengatur sidebar dan module widget (sidebar utama, footer widget, dsb).

### Tab Additional CSS

- Menambahkan custom CSS untuk kustomisasi lanjutan.

## Persyaratan Server

- Apache dengan PHP versi 7.4 ke atas (mendukung PHP 7).
- WordPress versi 5 ke atas (disarankan versi terbaru).
- Curl dan Json Module di server (wajib).

Untuk alasan keamanan, sangat disarankan menggunakan versi PHP yang lebih baru daripada 7.4.

