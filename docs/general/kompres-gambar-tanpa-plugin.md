---
title: Kompres Gambar Otomatis di WordPress Tanpa Plugin
outline: deep
---

# Kompres Gambar Otomatis di WordPress Tanpa Plugin

Mengoptimalkan ukuran gambar adalah salah satu cara penting untuk mempercepat website.  
Tutorial ini merangkum panduan **“Kompres Gambar Otomatis di WordPress Tanpa Plugin”** dari Idtheme.

## 1. Kompres Sebelum Upload

Cara paling aman dan universal adalah mengompres gambar **sebelum** diupload ke WordPress.

- Gunakan layanan online seperti:
  - `compressjpeg.com` untuk gambar JPEG.
  - `compresspng.com` untuk gambar PNG.
  - Atau layanan/aplikasi desktop pengompres gambar lainnya.
- Kompres gambar sebelum diupload ke WordPress.

## 2. Menggunakan Fitur Kompresi Bawaan Server

Beberapa server menyediakan:

- Modul kompresi gambar.
- Atau integrasi dengan layanan CDN yang otomatis mengompres gambar (misalnya Cloudflare Polish, dsb).

Jika tersedia:

- Aktifkan fitur tersebut di panel hosting/CDN.

## 3. Menggunakan Script/CLI Eksternal (Advanced)

Jika anda memiliki akses server:

- Menggunakan tool seperti `jpegoptim`, `optipng`, dsb., untuk mengompres gambar di folder `uploads`.

Langkah konsep:

1. Login ke server via SSH.
2. Masuk ke folder `wp-content/uploads`.
3. Jalankan perintah kompresi sesuai tool yang digunakan.

Pendekatan ini membutuhkan akses SSH dan pengetahuan dasar sistem operasi server.

## 4. Via Custom Code (Recommended)

Jika anda ingin mengkompress semua file image JPEG atau PNG anda bisa memasukkan kode berikut di file `functions.php` theme:

```php
function idt_prefix_image_quality( $quality, $image_mime_type ) {
    return 70;
}
add_filter( 'wp_editor_set_quality', 'idt_prefix_image_quality', 10, 2 );
```

Pengguna photon Jetpack, berikut adalah kode untuk merubah kualitas gambar pada photon: 

```php
add_filter( 'jetpack_photon_pre_args', function( $args, $image_url, $scheme ) {
    if ( empty( $args['quality'] ) ) {
         $args['quality'] = 70;
    }
    return $args;
}, 10, 3 );
```

## 5. Kapan Perlu Plugin Optimasi Gambar?

Meskipun judulnya “tanpa plugin”, dalam beberapa kasus:

- Jika jumlah gambar sangat banyak.
- Jika anda tidak memiliki akses server (SSH) atau panel dengan fitur kompresi.

Maka penggunaan plugin optimasi gambar tetap bisa dipertimbangkan sebagai solusi praktis. Namun:

- Pilih plugin yang ringan dan terpercaya.
- Hindari memasang banyak plugin yang fungsinya sama.

Fokus utama dari panduan ini adalah:

- Membiasakan **kompres gambar sebelum upload**.
- Memanfaatkan fitur server/CDN terlebih dahulu sebelum menambah plugin baru.
