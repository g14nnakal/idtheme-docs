---
title: Post Banner (Module) - Theme Jurnalpress
description: Dokumentasi pengaturan Post Banner pada panel Home Top Module di Customizer JurnalPress untuk menampilkan highlight post dengan berbagai layout, query, dan style.
outline: deep
---

# Post Banner (Module) - Theme Jurnalpress

## Pengenalan

**Post Banner** adalah module pada **Home Top Module** yang digunakan untuk menampilkan kumpulan post unggulan (featured post) di bagian atas homepage.  
Module ini mendukung berbagai **layout visual**, **pengaturan struktur konten**, **filter query**, serta **style dan tipografi** yang fleksibel.

Post Banner sangat cocok digunakan untuk:
- Highlight berita utama
- Konten editorial pilihan
- Hero section berbasis post

## Lokasi Pengaturan
```
Appearance → Customize → Homepage → Home Top Module → Post Banner
```

## Tab Pengaturan

Post Banner memiliki **3 tab utama**:

- **General** – pengaturan dasar, layout, dan struktur konten
- **Query** – pengaturan sumber dan filter postingan
- **Style** – pengaturan tampilan visual dan tipografi

## Tab General

### Enable Post Banner
**Post banner in home page**  
Mengaktifkan atau menonaktifkan module Post Banner di homepage.

### Title Module
**Title Module**  
Judul module yang ditampilkan di atas Post Banner.

### Title Image
**Title Image**  
Mengganti teks judul module dengan gambar.  
Cocok untuk branding atau heading visual.

### Layout
**Layout**  
Menentukan gaya tampilan Post Banner.  
Tersedia **8 layout style** (Style 1 – Style 8) dengan karakter visual berbeda.

Default: `Style 1`

### Featured Post Size
**Featured Post Size**  
Ukuran post unggulan (featured post):
- Medium
- Large

### Content Outside Thumbnail
**Content outside thumbnail**  
Menampilkan konten (judul/meta) di luar area thumbnail.

### Thumbnail (Style 1 – List Post Only)

> Opsi berikut **hanya berlaku untuk Style 1 dan list post**

**List Post Thumbnail Position**
- Left Thumbnail
- Right Thumbnail
- Combine Left and Right (Zigzag)

**Thumbnail Max Width**  
Mengatur lebar maksimum thumbnail (px).

**Thumbnail Height**  
Mengatur tinggi thumbnail post.  
Default layout menggunakan tinggi ±350px.

**List Post Aspect Ratio**
- Original
- 1:1 (Square)
- 4:3
- 3:4
- 3:2
- 2:3
- 16:9
- 9:16

### Posts Structure

#### Category
Menampilkan kategori post.

- **Category Position**
  - Default
  - After Title

- **Category Style**
  - Label
  - Icon
  - Color Scheme
  - Background (Transparent)
  - Background (Solid)

#### Meta
Menampilkan meta post (author, date, dll).

> Pengaturan detail meta mengikuti: `Customizer → General → Global → Meta Module & Widgets`

**Meta Position**
- Default
- Before Title

#### Excerpt
Menampilkan ringkasan post.

> Excerpt hanya tampil pada kondisi tertentu (featured post / layout tertentu).  
Panjang excerpt diatur di: `Customizer → General → Global → Excerpt Length`

### Mobile Hidden
**Mobile Hidden**  
Menyembunyikan Post Banner pada tampilan mobile.

## Tab Query

Tab ini mengatur **sumber dan filter post** yang ditampilkan.

### Order By
Mengurutkan post berdasarkan:
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
Membatasi rentang waktu post:
- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Tab Style

### Post Space
**Post Space (px)**  
Mengatur jarak antar post dalam Post Banner.

### Alignment
Mengatur perataan konten:
- Left
- Center
- Right

### Box Style

Opsi ini berasal dari fungsi `jurnalpress_customizer_options_box_style`.

**Style**
- No Style
- Add Style (Boxed)

**Background Color**
- Solid
- Gradient

**Background Image**
- Posisi
- Opacity
- Size
- Repeat
- Attachment

**Border Radius**
Mengatur sudut box (radius).

**Border**
- Enable / Disable
- Color
- Width
- Style

### Typography

Opsi tipografi berasal dari fungsi `jurnalpress_customizer_options_content_typography`.

**Post Title**
- Font size
- Weight
- Line height
- Transform
- Color
- Hover color

> Warna font hanya berlaku untuk konten di luar thumbnail.

**Excerpt Color**
Mengatur warna teks excerpt.

**Module Title Color**
Mengatur warna judul module Post Banner.

## Catatan Penting

- Beberapa opsi hanya aktif pada **layout tertentu** (terutama Style 1).
- Opsi Meta dan Excerpt bergantung pada pengaturan global.
- Untuk performa optimal, gunakan jumlah post yang wajar pada module ini.
- Query berdasarkan *View* memerlukan plugin tambahan.

> 📌 **Tips**  
> Kombinasikan **Style + Query + Typography** untuk menghasilkan Post Banner yang konsisten dengan identitas visual website.
