---
title: Cara Install dan Pengaturan Theme Muvipro
outline: deep
---

# Instalasi dan Pengaturan Muvipro

## Video Tutorial

Sebelum anda melangkah install Muvipro, sebaiknya lihat video di atas sampai selesai.

<YouTubeEmbed video-id="8dBs7gc1rBc" />

## Langkah Instalasi

1. Download terlebih dahulu theme Muvipro dari member area.
2. Extract paket yang anda unduh.
3. Upload file `muvipro.zip` melalui **Appearance -> Themes -> Add New -> Upload Theme**.
4. Aktifkan theme **Muvipro**.
5. Instal rekomendasi dan required plugin yang diminta, kemudian aktifkan semuanya.

Jika anda membutuhkan alternatif iklan selain AdSense, dokumentasi asli menyarankan salah satunya menggunakan Galaksion.

## Aktivasi Lisensi

1. Masuk ke **Plugins -> Muvipro License**.
2. Masukkan **license key** yang anda dapatkan dari member area Kentooz:  
   https://member.kentooz.com/softsale/license
3. Simpan dan pastikan lisensi berstatus aktif.

## Import Demo Data

1. Masuk ke **Appearance -> Import Demo Data**.
2. Klik **Import Demo Data**.
3. Tunggu beberapa menit hingga proses selesai.
4. Setelah selesai, tampilan website akan mirip dengan demo resmi Muvipro.
5. Lanjutkan dengan menyetel widget dan pengaturan lainnya.

## Pengaturan Permalink

Setelah import demo:

1. Masuk ke **Settings -> Permalinks**.
2. Atur struktur permalink sesuai kebutuhan (misalnya Post name).
3. Ubah **Category Base** menjadi `genre` (contoh rekomendasi dokumentasi Muvipro).
4. Simpan perubahan.

## Mengatur TMDB API (Idmuvi Core)

Muvipro terintegrasi dengan TMDB untuk data film.  
Pengaturan ada di plugin **Idmuvi Core**:

1. Masuk ke **Settings -> Idmuvi Core -> TMDB Settings**.
2. Centang **Enable TMDB API**.
3. Masukkan **TMDB API Key** anda sendiri.
4. Simpan pengaturan.

Contoh pengaturan TMDB:

![Contoh pengaturan TMDB](/muvipro/install-pengaturan/tmdb-setting-muvipro.jpg)

Untuk tutorial mendapatkan TMDB API Key, lihat:  
[Cara Mendaftar Akun dan Mendapatkan API Key TMDB](/general/api-key-tmdb.md)

Contoh pengaturan TMDB dapat anda lihat langsung di halaman
**Settings -> Idmuvi Core -> TMDB Settings** pada dashboard WordPress anda.

## Pengaturan Idmuvi Core

Masuk ke **Settings -> Idmuvi Core**. Lihat contoh screenshot berikut:

![Pengaturan Idmuvi Core Muvipro](/muvipro/install-pengaturan/setting-idmuvi-core.jpg)

- **Tab Related Posts**
  - Mengaktifkan/menonaktifkan related posts.
  - Mengatur jumlah post terkait yang tampil.

> [!WARNING]
> Opsi ini sudah dipindahkan ke **Customize -> Movie -> Movie Content**.

- **Tab Breadcrumbs**
  - Mengaktifkan breadcrumbs.
  - Mengatur teks label dan separator breadcrumbs.

> [!WARNING]
> Opsi ini sudah dipindahkan ke **Customize -> Movie -> Movie Content**.

- **Tab Ads**
  - Mengatur kode iklan di berbagai lokasi yang disediakan theme (atas, bawah, dalam konten, dsb).
  - Mengaktifkan script anti adblock jika diperlukan.

- **Tab Social**
  - Mengatur social share button.
  - Mengatur OpenGraph (jika belum menggunakan plugin SEO untuk OG).

- **Tab TMDB Settings**
  - Mengaktifkan dan mengisi TMDB API Key (wajib diisi untuk fitur otomatis TMDB).

- **Tab Other**
  - Mengatur script di **head** dan **footer** (Google Analytics, Facebook Pixel, script custom).
  - Beberapa opsi optimasi (menonaktifkan script emoji, version query, dll).

## Pengaturan Style via Customizer

Masuk ke **Appearance -> Customize**. Lihat screenshot berikut:

![Pengaturan Customizer Muvipro](/muvipro/install-pengaturan/customizer-theme-muvipro.jpg)

### Tab General

- Mengatur layout umum (boxed / fullwidth).
- Mengatur warna umum (background, warna utama, link).
- Mengatur gambar latar.
- Mengatur font (Google Fonts) dan ukuran heading/body.

### Tab Header

- Mengatur icon, logo.
- Mengatur warna latar header.
- Mengatur gambar latar header.
- Mengatur menu header dan warna menu.

### Tab Movie

- Mengatur layout halaman movie:
  - Tampilan daftar movie.
  - Tampilan single movie (related post, breadcrumbs, poster, detail film, dsb).

### Tab Footer

- Mengatur warna latar footer.
- Mengatur teks copyright.
- Mengatur jumlah widget footer.

## Tambahan: Top Navigation (Versi 1.0.4+)

Pada versi 1.0.4 terdapat fitur baru **Top Navigation**:

- Pengaturan lengkapnya ada di dokumentasi khusus:  
  [Top Navigation Muvipro](/muvipro/top-navigation.md)

## Persyaratan Server

- Apache dengan PHP versi 7.2 ke atas.
- WordPress versi 5 ke atas (disarankan versi terbaru).
- Modul **Curl** dan **Json** aktif (wajib).

Demi keamanan, disarankan menggunakan versi PHP yang lebih baru dari 7.2.
Versi PHP 7.4+ sangat disarankan untuk keamanan dan performa yang lebih baik.