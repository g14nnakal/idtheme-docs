---
title: Archive (Pages) – Theme JurnalPress
description: Pengaturan tampilan halaman arsip (kategori, tag, author, dan tanggal) pada theme JurnalPress melalui Customizer.
outline: deep
---

# Archive (Pages) – Theme JurnalPress

Section **Archive** digunakan untuk mengatur tampilan halaman arsip pada theme **JurnalPress**, seperti **Category Archive**, **Tag Archive**, **Author Archive**, dan **Date Archive**.  
Semua opsi dapat diakses melalui **Customizer → Pages → Archive**.

Pengaturan ini mencakup layout, struktur post, thumbnail, meta, featured post, pagination, serta style tipografi.

## Lokasi Pengaturan
```
Appearance → Customize → Pages → Archive
```

## Tabs Overview

Section **Archive** memiliki dua tab utama:

- **General** → Pengaturan struktur dan perilaku konten
- **Style** → Pengaturan tipografi dan tampilan visual

## General Settings

### Breadcrumb

Mengaktifkan atau menonaktifkan breadcrumb pada halaman arsip.

- **Type**: Toggle  
- **Default**: Disabled  
- **Fungsi**: Menampilkan navigasi breadcrumb di bagian atas halaman archive

### Archive Description

Menampilkan deskripsi arsip (misalnya deskripsi kategori atau tag).

- **Type**: Toggle  
- **Default**: Enabled  
- **Contoh**: Deskripsi category akan muncul di bawah judul archive

### Recent Text

Teks tambahan untuk label *Recent Posts*.

- **Type**: Text  
- **Catatan**:  
  - Kosongkan jika tidak ingin menampilkan teks
  - Awalnya digunakan untuk homepage, namun tetap tersedia di konfigurasi archive

### Posts per Page

Menentukan jumlah post yang ditampilkan per halaman archive.

- **Type**: Range  
- **Min**: 1  
- **Max**: 50  
- **Default**: Mengikuti pengaturan WordPress (`posts_per_page`)  
- **Catatan**: Reset dinonaktifkan karena menggunakan opsi global WordPress

### Layout

Menentukan tata letak daftar post pada halaman archive.

- **Type**: Layout Selector (SVG Button)
- **Pilihan**:
  - **List Layout**
  - **Grid Layout**
- **Default**: List

### Columns

Jumlah kolom untuk layout grid.

- **Type**: SVG Button  
- **Pilihan**: Mengikuti konfigurasi kolom theme  
- **Default**: 2 Kolom (`col2`)  
- **Catatan**: Efektif saat menggunakan layout grid

## Thumbnail Settings

### Thumbnail (Enable)

Mengaktifkan atau menonaktifkan thumbnail post.

- **Type**: Toggle  
- **Default**: Enabled

### Thumbnail Position

Menentukan posisi thumbnail pada layout list.

- **Type**: SVG Button  
- **Pilihan**:
  - **Left Thumbnail**
  - **Right Thumbnail**
  - **Zigzag (Kombinasi Kiri & Kanan)**
- **Default**: Left Thumbnail

### Thumbnail Max Width

Lebar maksimum thumbnail (dalam pixel).

- **Type**: Range  
- **Min**: 100px  
- **Max**: 360px  
- **Default**: 220px  
- **Catatan**: Berlaku untuk posisi kiri atau kanan

### Thumbnail Aspect Ratio

Mengatur rasio aspek gambar thumbnail.

- **Type**: Select  
- **Pilihan**:
  - Original
  - 1:1 (Square)
  - 4:3 (Standard)
  - 3:4 (Portrait)
  - 3:2 (Classic)
  - 2:3 (Classic Portrait)
  - 16:9 (Wide)
  - 9:16 (Tall)
- **Default**: Original

## Posts Structure

### Category

Menampilkan kategori post pada archive.

- **Type**: Toggle  
- **Default**: Enabled

#### Category Position

- **Default** → Mengikuti struktur standar
- **After Title** → Setelah judul post
- **Inside Thumbnail** → Di dalam thumbnail

#### Category Style

- **No** → Tanpa style
- **Label**
- **Icon**
- **Color Scheme**
- **Background (Transparent)**
- **Background (Solid)**  
- **Default**: Background (Transparent)

### Meta

Menampilkan meta informasi post.

- **Type**: Toggle  
- **Default**: Enabled

#### Meta Position

- **Default**
- **Before Title**

#### Meta List

Menentukan jenis meta yang ditampilkan dan urutannya.

- **Contoh Meta**:
  - Author (dengan avatar)
  - Date
- **Fitur**:
  - Drag & drop
  - Opsi hide di mobile
  - Style per item

### Excerpt

Menampilkan ringkasan isi post.

- **Type**: Toggle  
- **Default**: Disabled  
- **Catatan**:  
  Panjang excerpt diatur melalui  
  **Customizer → General → Global → Excerpt Length**

## Featured Post

### Featured Post (Archive)

Menampilkan post unggulan pada halaman archive.

- **Type**: Toggle  
- **Default**: Enabled

### Featured Post in Homepage

Mengaktifkan featured post juga di homepage.

- **Type**: Toggle  
- **Default**: Enabled

### Featured Post Excerpt

Menampilkan excerpt khusus untuk featured post.

- **Type**: Toggle  
- **Default**: Disabled

### Featured Post Style

Menentukan tata letak featured post.

- **Type**: SVG Button  
- **Pilihan**:
  - Content Inside
  - Content Outside
  - Content Left
  - Content Right
- **Default**: Content Inside

## Navigation Type

Menentukan jenis navigasi halaman archive.

- **Type**: SVG Button  
- **Pilihan**:
  - **Number** → Pagination angka
  - **Auto Load** → Infinite scroll
  - **Button** → Load more button
- **Default**: Button

## Style Settings

### Post Title Typography

Mengatur tipografi judul post pada halaman archive.

- **Type**: Font Control  
- **Opsi**:
  - Font size
  - Font weight
  - Text transform
  - Line height
  - Font style
  - Link color & hover color
- **Default**:
  - Weight: Bold

## Catatan

- Semua pengaturan di section Archive berlaku untuk **semua halaman arsip** (category, tag, author, date).
- Perubahan dapat dipratinjau secara real-time melalui Customizer.
- Beberapa opsi mengikuti pengaturan global theme untuk konsistensi desain.

