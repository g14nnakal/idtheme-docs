---
title: Post Slider (Module) - Theme Jurnalpress
description: Dokumentasi lengkap pengaturan Post Slider pada panel Home Top Module atau Home Bottom Module di Customizer theme JurnalPress.
outline: deep
---

# Post Slider (Module) - Theme Jurnalpress

Post Slider adalah modul pada **Home Top Module** atau **Home Bottom Module** yang digunakan untuk menampilkan daftar postingan dalam bentuk slider atau carousel di halaman depan. Modul ini sangat fleksibel dan mendukung pengaturan layout, query konten, struktur post, hingga styling dan tipografi.

## Lokasi Pengaturan
```
Appearance → Customizer → Homepage → Home Top Module/ Home Bottom Module → Post Slider
```

## Tab Pengaturan

Post Slider memiliki **3 tab utama**:

- **General** – pengaturan dasar, layout, dan struktur konten
- **Query** – pengaturan sumber dan filter postingan
- **Style** – pengaturan tampilan visual dan tipografi

## General Settings

### Enable Post Slider
**Post slider in homepage**

Mengaktifkan atau menonaktifkan modul Post Slider di homepage.

### Title Module
Menentukan judul modul Post Slider.

### Title Image
Mengganti judul teks dengan gambar.

> Jika diisi, gambar akan menggantikan Title Module (teks).

### Layout
Menentukan jenis tampilan slider.

Pilihan layout:
- **Slider** – slider standar satu baris
- **Slider With Thumbnail Nav** – slider dengan navigasi thumbnail
- **Carousel** – slider multi item (carousel)

### Columns
Menentukan jumlah kolom item post (khusus layout carousel).

Pilihan:
- 2 Kolom
- 3 Kolom (default)
- 4 Kolom
- 5 Kolom

### Slider Options

#### Arrow
Menampilkan navigasi panah (prev / next).

#### Pagination
Menampilkan pagination (dot indicator).

#### Autoplay
Mengatur perilaku autoplay slider.

Pilihan:
- **None** – tanpa autoplay
- **Autoplay** – berpindah otomatis per interval
- **Auto Scroll** – scroll otomatis berkelanjutan

### Thumbnail

#### Aspect Ratio
Mengatur rasio thumbnail gambar.

Pilihan rasio:
- Original
- 1:1 (Square)
- 4:3 (Standard)
- 3:4 (Portrait)
- 3:2 (Classic)
- 2:3 (Classic Portrait)
- 16:9 (Wide)
- 9:16 (Tall)

### Posts Structure

#### Category
Menampilkan kategori post.

- **Category Position**
  - Default
  - After Title
  - Inside Thumbnail

- **Category Style**
  - No
  - Label
  - Icon
  - Color Scheme
  - Background Transparent
  - Background Solid

#### Meta
Menampilkan meta post (tanggal, author, komentar, dll).

> Pengaturan meta mengikuti konfigurasi global:
> Customizer → General → Global → Meta Module & Widgets

- **Meta Position**
  - Default
  - Before Title

#### Excerpt
Menampilkan ringkasan (excerpt) post.

> Panjang excerpt mengikuti pengaturan global:
> Customizer → General → Global → Excerpt Length

### Mobile Hidden
Menyembunyikan Post Slider pada tampilan mobile.

## Query Settings

Pengaturan ini menentukan postingan apa saja yang akan ditampilkan.

### Number Posts
Menentukan jumlah post yang ditampilkan (2 – 18).

### Order By
Mengatur urutan post berdasarkan:

- Date
- Title
- Modified
- Comment Count
- View *(memerlukan plugin Post View Counter / WP PostViews)*

### Categories
Memfilter post berdasarkan kategori tertentu.

### Tags
Memfilter post berdasarkan tag.

### Range Post
Menyaring post berdasarkan rentang waktu.

Pilihan:
- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Post Space
Mengatur jarak antar item post (dalam pixel).

### Alignment
Mengatur perataan konten:
- Left
- Center
- Right

### Box Style

#### Style
- **No Style** – tanpa box
- **Add Style** – menggunakan box styling

#### Background Color
Mengatur warna latar belakang box (solid / gradient).

#### Background Image
Menambahkan background image pada box.

#### Border Radius
Mengatur radius sudut box.

#### Border
Mengatur garis tepi box (warna, ukuran, dan style).

### Typography

#### Post Title
Mengatur tipografi judul post:
- Font size
- Weight
- Line height
- Transform
- Warna link & hover

> Warna font hanya berlaku untuk judul di luar thumbnail.

#### Excerpt Color
Mengatur warna teks excerpt.

#### Module Title Color
Mengatur warna judul modul Post Slider.

## Catatan

- Post Slider menggunakan sistem query dinamis sehingga dapat digunakan berulang di berbagai modul.
- Seluruh pengaturan bersifat real-time preview melalui Customizer.
- Sangat cocok untuk konten unggulan, headline berita, atau featured post di homepage.
