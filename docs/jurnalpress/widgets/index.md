---
title: Pengaturan Widget JurnalPress
description: Dokumentasi lengkap pengaturan widget dan widget area yang tersedia pada theme JurnalPress beserta posisi dan fungsinya.
outline: deep
---

# Pengaturan Widget

Theme ini mendukung fitur Widget WordPress standar yang memungkinkan Anda menambahkan konten ke sidebar dan area widget lainnya.

## Video Tutorial

Berikut adalah video tutorial untuk Widgets pada tema JurnalPress:

<YouTubeEmbed video-id="i_UYZ5fdMMA" />

Untuk detail tutorial teks bisa anda lihat dibawah.

## Menambahkan Widget

1. Login ke dashboard WordPress.
2. Masuk ke menu **Appearance > Widgets**.
3. Di sisi kiri, Anda akan melihat daftar widget yang tersedia.
4. Di sisi kanan (atau tengah pada editor blok baru), Anda akan melihat area widget (misalnya: *Sidebar*, *Footer 1*, *Footer 2*, dll).
5. Klik dan geser (drag & drop) widget yang diinginkan ke area widget yang tersedia.
6. Atau klik widget, pilih area tujuan, lalu klik **Add Widget**.
7. Isi pengaturan widget sesuai kebutuhan, lalu klik **Save** atau **Update**.

## Widget Area

Theme **JurnalPress** menyediakan berbagai **widget area** yang fleksibel untuk menempatkan konten tambahan seperti iklan, banner, newsletter, atau widget bawaan WordPress lainnya. Widget ini dapat dikelola melalui menu **Appearance → Widgets** atau **Customizer** sesuai konteks penggunaannya.

### Sidebar Widgets

#### Sidebar
**ID:** `sidebar-1`  
Widget utama yang muncul di halaman dengan layout sidebar.

**Catatan:**
- Disarankan **tidak menggunakan module widget** pada area ini.
- Cocok untuk widget standar seperti kategori, arsip, atau custom HTML.

#### Sidebar Home
**ID:** `sidebar-home`  
Widget khusus untuk halaman homepage.

**Posisi:**
- Ditampilkan **sebelum post pertama** di homepage.

**Catatan:**
- Post terbaru harus tersedia agar widget ini tampil optimal.

### Home Module Widgets

Widget bertipe *module* biasanya digunakan untuk konten khusus seperti banner, iklan, atau custom block.

#### Module Home Top
**ID:** `module-home-top`  
**Posisi:**  
- Sebelum daftar post dan sidebar di homepage.

**Kegunaan:**
- Banner utama
- Highlight konten
- Iklan besar

#### Module Home Bottom
**ID:** `module-home-bottom`  
**Posisi:**  
- Setelah daftar post dan sidebar di homepage.

#### Module Home Before 1st Post
**ID:** `module-home-first-post`  
**Posisi:**  
- Tepat sebelum post pertama di homepage.

**Syarat Aktif:**
- Konten dan sidebar homepage **tidak dinonaktifkan**
- Pengaturan berada di:  
  **Customizer → Homepage → Home Top Module**

### Post Loop Module Widgets

Widget ini muncul **di tengah daftar post** pada homepage dan halaman arsip (kategori).

#### Module After 6th Post
**ID:** `module-sixth-post`  
**Posisi:**  
- Setelah post ke-6.

**Kondisi:**
- Homepage:  
  - Latest Post tidak dinonaktifkan  
  - Menggunakan layout **Latest Post With Sidebar**
- Archive:  
  - Hanya tampil pada **list layout**
  - Tidak tampil pada **grid layout**

#### Module After 9th Post
**ID:** `module-ninth-post`  
**Posisi:**  
- Setelah post ke-9.

**Kondisi sama seperti Module After 6th Post.**

### Single Post Widget

#### Module After Single
**ID:** `module-after-single`  
**Posisi:**  
- Setelah konten artikel di halaman single post.

**Syarat Aktif:**
- Opsi **After Single Element** diaktifkan pada:  
  **Customizer → Single Posts**

### Footer Widgets

Footer widget bersifat **dinamis**, jumlah kolom mengikuti pengaturan Customizer.

**Pengaturan:**  
`Customizer → Footer → Widget Column`

#### Jumlah Kolom yang Didukung

| Opsi Layout | Jumlah Widget |
|------------|---------------|
| 1col       | 1 widget      |
| 2col / 2col12 / 2col21 | 2 widget |
| 3col / 3col121 / 3col211 / 3col112 | 3 widget |
| 4col / 4col2111 / 4col1112 | 4 widget |
| 6col       | 6 widget      |

#### Footer Widget IDs
- `footer-1`
- `footer-2`
- `footer-3`
- `footer-4`
- `footer-5`
- `footer-6` *(jika 6 kolom aktif)*

**Catatan:**
- Widget akan otomatis terdaftar sesuai jumlah kolom yang dipilih.
- Setiap widget menggunakan struktur HTML standar `<section class="widget">`.

## Struktur HTML Widget

Semua widget di JurnalPress menggunakan markup berikut:

```html
<section id="widget-id" class="widget widget-class">
  <h3 class="widgettitle">Judul Widget</h3>
  <!-- Konten Widget -->
</section>