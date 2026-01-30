---
title: Cara Install dan Pengaturan Theme Newkarma
outline: deep
---

# Instalasi dan Pengaturan Newkarma

## Video Tutorial

Sebelum anda melangkah install Newkarma, sebaiknya anda lihat video di atas sampai selesai.

<YouTubeEmbed video-id="uvi5r7k33iw" />

## Langkah Instalasi
- Download file theme dari member area.
- Extract package yang sudah anda unduh, lalu anda upload newkarma.zip melalui **Appearance > Themes > Upload Theme**.
- Activate theme **Newkarma**.
- Install dan activate plugin rekomendasi/required yang diminta.

Setelah semua plugin yang dibutuhkan terinstall dan aktif, lanjut ke aktivasi lisensi dan import demo.

## Aktivasi Lisensi

1. Masuk ke **Plugins → Newkarma License**.
2. Masukkan **license key** yang anda dapatkan dari member area:
   - Login ke https://member.kentooz.com
   - Masuk ke menu **License**:  
     `https://member.kentooz.com/softsale/license`
3. Copy license key untuk theme Newkarma, lalu paste di halaman **Newkarma License**.
4. Simpan, dan pastikan status lisensi **aktif** agar update dan dukungan berjalan normal.

## Import Demo
- Masuk ke **Appearance > Import Demo Data**.
- Klik Import Demo Data, install plugin required dan tunggu hingga selesai.
- Layout akan mengikuti demo, lanjutkan dengan menyesuaikan menu, widget dan customizer.

## Pengaturan Plugin Newkarma Core

Theme Newkarma menggunakan plugin **Newkarma Core** untuk mengatur fitur-fitur utama. Screen shot pengaturan:

![Newkarma Core Settings](/newkarma/install-pengaturan/newkarma-core-settings.jpg)

Masuk ke **Settings → Newkarma Core**. Beberapa tab penting:

### Tab Author Box

- Mengaktifkan/menonaktifkan **author box** di single post.
- Mengatur teks dan tampilan author box.

### Tab Related Posts

- Mengaktifkan fitur **related posts**.
- Menentukan jumlah posting terkait yang ditampilkan.
- Mengatur dasar related posts (kategori, tag, dll jika tersedia).

### Tab Breadcrumbs

- Mengaktifkan **breadcrumbs**.
- Mengatur teks dan separator breadcrumb.

### Tab Ads

- Mengatur kode iklan di berbagai lokasi:
  - Atas/bawah konten.
  - Sidebar.
  - Lokasi lain yang disediakan theme.
- Menyediakan opsi **anti adblock script** jika diperlukan.

### Tab Social

- Mengatur **social share button**.
- Mengatur **OpenGraph** jika belum menggunakan plugin SEO untuk OG.

### Tab Ajax & Content

- Mengatur navigasi **infinite scroll** (jika didukung).
- Mengatur perilaku konten yang dimuat via Ajax.

### Tab Other

- Menentukan script yang ditampilkan di:
  - **Head**
  - **Footer**
- Bisa digunakan untuk:
  - Google Analytics
  - Facebook Pixel
  - Script optimasi lainnya (misalnya menonaktifkan emoji, query string version, dll).

## Pengaturan Tampilan via Customizer

Semua pengaturan tampilan utama diatur melalui **Appearance → Customize**. Screen shot pengaturan:

![Newkarma Customize Settings](/newkarma/install-pengaturan/newkarma-customizer.jpg)

### Tab General

- Pengaturan umum theme:
  - Layout umum (boxed / fullwidth).
  - Warna utama (primary color), background.
  - Gambar latar (background image).
  - Pengaturan **font**:
    - Memilih font Google Fonts.
    - Mengatur ukuran font heading dan body.
    - Mengatur warna teks.

### Tab Header

- Pengaturan area header:
  - Icon dan logo situs.
  - Warna latar header.
  - Gambar latar header (jika digunakan).
  - Pengaturan menu utama:
    - Layout menu.
    - Warna menu (normal, hover, aktif).

### Tab Homepage

- Mengatur tampilan **Headline Carousel**.
- Mengatur **module homepage** (blok-blok konten di halaman utama).

### Tab Blog

- Mengatur layout blog:
  - Sticky sidebar.
  - Navigasi situs.
  - Blog content.

### Tab Footer

- Mengatur bagian footer:
  - Warna latar footer.
  - Teks copyright.
  - Jumlah widget yang tampil di footer.

### Tab Menus

- Mengatur menu navigasi (shortcut ke Appearance → Menus).

### Tab Widgets

- Mengatur sidebar dan module widget:
  - Widget pada sidebar utama.
  - Widget pada footer.

### Tab Additional CSS

- Menambahkan **custom CSS** untuk kustomisasi lanjutan.

## Persyaratan Server

Rekomendasi server untuk menjalankan Newkarma dengan baik:

- Apache dengan PHP minimal **7.2 ke atas**.
- WordPress versi **5 ke atas** (disarankan versi terbaru).
- Modul **Curl** dan **OpenSSL** aktif (wajib).

Jika anda masih menggunakan PHP versi di bawah 7.2, sangat disarankan untuk upgrade karena alasan keamanan dan kompatibilitas.

