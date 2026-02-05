---
title: Mengatur Kategori WordPress Pada Theme Jurnalpress
description: Panduan lengkap mengelola kategori WordPress Pada Theme Jurnalpress dengan custom field seperti warna dan gambar menggunakan metabox taxonomy. Mendukung pengembangan theme dan plugin custom.
outline: deep
---

# Mengatur Kategori WordPress Pada Theme Jurnalpress

Dokumentasi ini menjelaskan cara mengatur **kategori (Category)** di WordPress, termasuk penambahan **custom field** berupa **warna kategori** dan **gambar kategori** menggunakan pendekatan **taxonomy metabox**.

Fitur ini cocok digunakan untuk kebutuhan theme atau plugin custom, seperti:
- Warna kategori pada overlay post
- Category tag widget
- Meta kategori
- Styling visual berbasis taxonomy

## Video Tutorial

Berikut adalah video tutorial untuk Pengaturan Kategori di WordPress Pada Theme JurnalPress:

<YouTubeEmbed video-id="S26u7YvfRiY" />

Untuk detail tutorial teks bisa anda lihat dibawah.

## Mengatur Kategori di WordPress

1. Masuk ke **Posts > Categories**.
2. Klik dan edit tiap kategori yang ingin diatur.
3. Di halaman edit kategori, Anda akan melihat dua custom field baru:
   - **Category Color**
   - **Category Image**

## Pengertian Kategori di WordPress

Kategori adalah salah satu **taxonomy bawaan WordPress** yang digunakan untuk mengelompokkan konten (post) berdasarkan topik tertentu.

Secara default, kategori hanya memiliki:
- Nama
- Slug
- Deskripsi
- Parent category

Namun dalam pengembangan lanjutan, kita sering membutuhkan **data tambahan**, misalnya:
- Warna kategori
- Gambar kategori
- Icon kategori

## Fitur Custom Category Field

Pada implementasi ini, tersedia dua custom field:

### 1. Category Color
Digunakan untuk:
- Warna overlay kategori
- Background category badge
- Styling widget kategori
- Penanda visual taxonomy

Nilai disimpan sebagai **HEX color** (`#ff0000`).

### 2. Category Image
Disediakan sebagai opsi tambahan untuk theme custom.

Catatan penting:
- **Belum digunakan langsung di frontend**
- Disiapkan agar theme developer bisa memanfaatkannya sesuai kebutuhan
- Cocok untuk widget kategori, hero section, atau taxonomy archive

## Struktur Kode

Custom field kategori ini diimplementasikan menggunakan class:

```php
class Btcore_Metabox_Category
```

Class ini:
- Menambahkan field pada halaman Add Category
- Menambahkan field pada halaman Edit Category
- Menyimpan metadata taxonomy
- Meng-load color picker dan media uploader WordPress

## Penyimpanan Data (Term Meta)

Data kategori disimpan menggunakan Term Meta API:

### Category Color
```php
update_term_meta( $term_id, '_idt_category_color', $value );
```

### Category Image
```php
update_term_meta( $term_id, '_idt_category_image', $value );
```

## Mengambil Data Category Color di Frontend

Contoh penggunaan di theme:
```php
$color = get_term_meta( $term_id, '_idt_category_color', true );
```

Contoh implementasi:
```php
$color = get_term_meta( $term_id, '_idt_category_color', true );

echo '<span class="category-badge" style="background-color: ' . esc_attr( $color ) . '">';
single_cat_title();
echo '</span>';
```

## Mengambil Data Category Image di Frontend

Karena belum diimplementasikan secara default, kamu bisa menggunakannya sesuai kebutuhan:
```php
$image = get_term_meta( $term_id, '_idt_category_image', true );
```

Contoh penggunaan custom:
```php
$image = get_term_meta( $term_id, '_idt_category_image', true );

if ( $image ) {
	echo '<img src="' . esc_url( $image ) . '" alt="' . single_cat_title( '', false ) . '" />';
}
```

## Studi Kasus Penggunaan

Beberapa contoh penggunaan nyata:

- Overlay kategori pada featured post
- Background badge kategori di loop
- Widget kategori dengan icon atau gambar
- Styling archive kategori

## Catatan Tambahan untuk Theme Developer

- Field ini tidak mempengaruhi core WordPress
- Mendukung integrasi Gutenberg & Query Loop
- Aman digunakan pada production
- Sangat cocok untuk theme berbasis visual / magazine / news

## Penutup

Dengan pendekatan ini, kategori di WordPress menjadi jauh lebih fleksibel dan powerful.
Custom field pada taxonomy memungkinkan theme dan plugin memiliki identitas visual yang lebih kuat.