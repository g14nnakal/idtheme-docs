---
title: Post Grid / List (Module) - Theme Jurnalpress
description: Dokumentasi opsi Post Grid/List pada panel Home Top Module atau Home Bottom Module di Customizer theme JurnalPress.
outline: deep
---

# Post Grid / List (Module) - Theme Jurnalpress

**Post Grid/List** adalah modul pada panel **Home Top Module** atau **Home Bottom Module** yang digunakan untuk menampilkan daftar postingan di halaman homepage dalam berbagai layout seperti **Grid**, **List**, atau **Numbered List**. Modul ini sangat fleksibel dan mendukung pengaturan query, struktur konten, hingga styling visual secara detail.

## Lokasi pengaturan:
```
Appearance → Customize → Homepage → Home Top Module/ Home Bottom Module → Post Grid/List
```

## Tab Pengaturan

Post Grid/List memiliki **3 tab utama**:

- **General** – pengaturan dasar, layout, dan struktur konten
- **Query** – pengaturan sumber dan filter postingan
- **Style** – pengaturan tampilan visual dan tipografi

## General Settings

### Enable Post Grid/List
Mengaktifkan atau menonaktifkan modul Post Grid/List di homepage.

### Title Module
Judul modul yang ditampilkan di atas daftar posting.

### Title Image
Mengganti judul teks dengan gambar (misalnya logo atau heading custom).

### Layout
Menentukan tipe layout daftar post:

- **Grid Layout** – Tampilan grid (default)
- **List Layout** – Daftar vertikal
- **Number Layout** – Daftar bernomor

#### Number Style
Khusus untuk layout Number:

- Default (dengan #)
- Tanpa #
- Text Stroke

### Columns
Jumlah kolom untuk layout Grid:

- 2 Kolom
- 3 Kolom (default)
- 4 Kolom
- 5 Kolom

### Thumbnail

#### Thumbnail Enable
Mengaktifkan atau menonaktifkan thumbnail posting.

#### Thumbnail Position
Posisi thumbnail (khusus layout list):

- Left Thumbnail
- Right Thumbnail
- Zigzag (kombinasi kiri & kanan)

#### Max Width (px)
Mengatur lebar maksimum thumbnail (default ±220px).

#### Aspect Ratio
Rasio gambar thumbnail:

- Original
- 1:1 (Square)
- 4:3 (Standard)
- 3:4 (Portrait)
- 3:2 (Classic)
- 2:3 (Portrait)
- 16:9 (Wide)
- 9:16 (Tall)

### Posts Structure

#### Category
Menampilkan kategori post.

- **Category Position**: Default, After Title, Inside Thumbnail
- **Category Style**: Label, Icon, Color Scheme, Background (transparent/solid)

#### Meta
Menampilkan meta post (author, date, dll).

> Pengaturan meta mengikuti: **Customizer → General → Global → Meta Module & Widgets**

- Meta Position: Default / Before Title

#### Excerpt
Menampilkan ringkasan post.

> Panjang excerpt mengikuti: **Customizer → General → Global → Excerpt Length**

### Other Options

#### Featured Post
Menandai satu post sebagai featured.

- **Featured Post Excerpt** – Menampilkan excerpt pada featured post
- **Featured Post Style**:
  - Content Inside
  - Content Outside
  - Content Left
  - Content Right

#### Mobile Hidden
Menyembunyikan modul ini pada perangkat mobile.

## Query Settings

### Number Posts
Menentukan jumlah postingan yang ditampilkan (2 – 18 post).

### Order By
Urutan post berdasarkan:

- Date
- Title
- Modified
- Comment Count
- View *(memerlukan plugin Post Views)*

### Categories
Filter post berdasarkan kategori.

### Tags
Filter post berdasarkan tag.

### Range Post
Rentang waktu postingan:

- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Post Space (px)
Mengatur jarak antar post.

### Alignment
Perataan konten:

- Left
- Center
- Right

### Box Style

Opsi styling container post:

- **Style**: Default / Boxed Style
- **Background Color**
- **Background Image** (opsional)
- **Border Radius**
- **Border** (warna, ukuran, style)

### Typography

Pengaturan tipografi konten:

- **Post Title**
  - Font size
  - Weight
  - Transform
  - Line height
  - Warna (link & hover)

- **Excerpt Color**
- **Module Title Color**

> Catatan: Warna font title hanya berlaku untuk konten di luar thumbnail.

## Catatan Teknis

- Modul ini menggunakan helper function:
  - `jurnalpress_customizer_options_query()`
  - `jurnalpress_customizer_options_box_style()`
  - `jurnalpress_customizer_options_content_typography()`

- Struktur opsi bersifat reusable dan konsisten di seluruh module JurnalPress.

## Rekomendasi Penggunaan

- Gunakan **Grid Layout + Featured Post** untuk homepage magazine/news.
- Gunakan **List Layout** untuk konten editorial atau blog.
- Aktifkan **Mobile Hidden** jika modul terlalu berat untuk tampilan mobile.

