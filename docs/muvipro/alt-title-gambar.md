---
title: Cara Mengganti ALT dan Title pada Gambar di Theme Muvipro
outline: deep
---

# Mengganti ALT dan Title Gambar di Muvipro

ALT dan Title pada gambar penting untuk SEO dan aksesibilitas.  
Theme Muvipro memanfaatkan nilai ALT/Title dari media library dan/atau pengaturan khusus di theme.

## Mengatur ALT dan Title di Media Library

1. Masuk ke **Media -> Library**.
2. Pilih gambar yang ingin diatur.
3. Isi field:
   - **Title**: judul gambar.
   - **Alt Text**: teks alternatif (deskripsi singkat gambar).
4. Klik **Save** atau **Update**.

Theme Muvipro biasanya akan mengambil:

- ALT dari **Alt Text** media.
- Title dari **Title** atau judul posting tergantung template.

## Mengganti ALT/Title di Featured Image

Untuk featured image:

- Pastikan gambar yang dipilih sudah memiliki ALT dan Title di Media Library.
- Saat memilih featured image:
  - Klik gambar dan cek informasinya di panel kanan (Alt Text, Title).

Jika template theme memanggil fungsi bawaan WordPress (`the_post_thumbnail`), maka ALT biasanya mengikuti Alt Text gambar.

## Via Custom Code

Beberapa versi Muvipro menyediakan pengaturan tambahan untuk:

### Child theme
- Install child theme jika belum ada.
- Edit file `functions.php` jika belum ada buat file tersebut pada child theme.
- Masukkan kode berikut di `functions.php` child theme:

```php
<?php

if ( ! function_exists( 'gmr_add_img_title' ) ) :
function gmr_add_img_title( $attr, $attachment = null ) {
$attr['title'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
$attr['alt'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
return $attr;
}
endif;
add_filter( 'wp_get_attachment_image_attributes','gmr_add_img_title', 5, 2 );
```
- Simpan perubahan.

### Parent theme
- Buka file `functions.php` pada theme Muvipro.
- Kode diatas tidak berfungsi jika di theme parent. Masukkan kode berikut di `functions.php` parent theme:

```php
if ( ! function_exists( 'gmr_new_add_img_title' ) ) :
function gmr_new_add_img_title( $attr, $attachment = null ) {
$attr['title'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
$attr['alt'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
return $attr;
}
endif;
add_filter( 'wp_get_attachment_image_attributes','gmr_new_add_img_title', 10, 2 );
```
- Simpan perubahan.