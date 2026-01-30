---
title: Related Posts (Module) - Theme JurnalPress
description: Dokumentasi pengaturan Related Posts pada panel Single Posts di Customizer JurnalPress, mencakup opsi tampilan, query konten, dan styling lanjutan.
outline: deep
---

# Related Posts (Module) - Theme JurnalPress

Section **Related Posts** digunakan untuk menampilkan artikel terkait di bagian **After Content Element** pada halaman single post.

Fitur ini membantu meningkatkan engagement dengan menampilkan konten relevan berdasarkan kategori, tag, atau topik.

## Lokasi Pengaturan
```
Customizer → Single Posts → After Content Element → Related Posts**
```

## Tipe Related Posts

Theme menyediakan hingga **3 modul Related Posts**:

- **Related Posts**
- **Related Posts 2**
- **Related Posts 3**

Masing-masing modul memiliki pengaturan independen, namun struktur opsinya sama.

## Tabs Overview

Setiap modul Related Posts memiliki 3 tab utama:

- **General** – Pengaturan tampilan & struktur konten
- **Query** – Pengaturan sumber & logika post
- **Style** – Styling visual & typography

## General Settings

### Enable Related Posts
Mengaktifkan atau menonaktifkan modul Related Posts pada single post.

### Title Related
Judul modul yang ditampilkan di atas daftar related posts.  
Contoh: `Related Posts`, `You May Also Like`.

### Layout
Menentukan layout daftar post:

- **List** – Daftar vertikal
- **Number** – List bernomor
- **Grid** – Grid kolom (default)

### Number Style
Khusus untuk layout **Number**:

- **Default (With #)** – Nomor dengan simbol #
- **Without #**
- **Text Stroke**

### Columns
Jumlah kolom untuk layout Grid:

- 2 kolom
- 3 kolom (default)
- 4 kolom
- 5 kolom

### Thumbnail

#### Thumbnail Toggle
Mengaktifkan atau menonaktifkan thumbnail post.

#### Thumbnail Position
- **Left Thumbnail**
- **Right Thumbnail**
- **Zigzag** – Kombinasi kiri & kanan

#### Max Width (px)
Mengatur lebar maksimum thumbnail untuk posisi kiri/kanan  
(Default: 220px)

#### Aspect Ratio
Menentukan rasio thumbnail:

- Original
- 1:1 (Square)
- 4:3
- 3:4
- 3:2
- 2:3
- 16:9
- 9:16

### Post Structure

#### Category
Menampilkan kategori post.

**Category Position**
- Default
- After Title
- Inside Thumbnail

**Category Style**
- Label
- Icon
- Color Scheme
- Background (Transparent / Solid)

### Meta
Menampilkan meta post (author, date, dll).  
Konfigurasi meta mengikuti:
**Customizer → General → Global → Meta Related Posts**

**Meta Position**
- Default
- Before Title

### Excerpt
Menampilkan ringkasan post.  
Panjang excerpt mengikuti:
**Customizer → General → Global → Excerpt Length**

### Featured Post
Menandai post pertama sebagai featured.

**Featured Post Style**
- Content Inside
- Content Outside
- Content Left
- Content Right

**Featured Post Excerpt**
Menampilkan excerpt khusus pada featured post.

### Mobile Hidden
Menyembunyikan modul Related Posts di perangkat mobile.

## Query Settings

### Number Related Posts
Jumlah post yang ditampilkan (2–18).

### Related Posts By
Menentukan dasar relasi post:

- Tags
- Categories (default)
- Topics

### Categories / Tags Filter
Memilih kategori atau tag tertentu sebagai sumber related posts.

### Order By
Urutan post:

- Date
- Title
- Modified
- Comment Count
- View *(butuh plugin post view counter)*

### Range Post
Rentang waktu post:

- All Time
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Alignment
Alignment konten modul:

- Left
- Center
- Right

### Box Style
Opsi styling container modul:

- **No Style**
- **Boxed Style**

### Background
- Background Color (solid / gradient)
- Background Image (opsional)

### Border & Radius
- Border aktif/nonaktif
- Warna & ketebalan border
- Border radius per sisi

### Typography

#### Post Title
- Font size
- Weight
- Transform
- Line height
- Link color & hover color

> Catatan: Warna font hanya berlaku untuk konten di luar thumbnail.

#### Excerpt Color
Mengatur warna teks excerpt.

#### Module Title Color
Warna judul modul Related Posts.

## Catatan Developer

- Semua modul Related Posts menggunakan struktur opsi yang sama.
- Modul dapat diaktifkan secara selektif melalui `active_callback`.
- Helper functions memastikan konsistensi UI & UX antar modul.

## Tips Penggunaan

- Gunakan **Grid + Category by Category** untuk blog berita.
- Gunakan **Number layout + Tags** untuk artikel tutorial.
- Aktifkan **Featured Post** untuk highlight konten penting.