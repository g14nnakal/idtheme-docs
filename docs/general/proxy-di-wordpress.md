---
title: Cara Menambahkan Proxy di WordPress Anda
outline: deep
---

# Cara Menambahkan Proxy di WordPress Anda

Disini saya akan memberikan tutorial cara menambahkan proxy pada WordPress.  

Fungsi pada theme atau plugin Idtheme banyak yang menggunakan `wp_remote_get()` (HTTP API standar WordPress) untuk grabbing data atau fungsi auto post. 

Jika anda terkendala saat proses grabbing (misalnya diblokir oleh provider atau butuh IP tertentu), anda bisa memanfaatkan **fungsi proxy** di WordPress.

## 1. Menambahkan Proxy di wp-config.php

WordPress sudah menyediakan konstanta khusus untuk mengatur proxy.  
Tambahkan kode berikut di file **`wp-config.php`**:

```php
/* Pengaturan Proxy */
define( 'WP_PROXY_HOST', '192.168.84.101' );
define( 'WP_PROXY_PORT', '8080' );
define( 'WP_PROXY_BYPASS_HOSTS', 'localhost, www.example.com, *.wordpress.org' );
define( 'WP_PROXY_USERNAME', '' );
define( 'WP_PROXY_PASSWORD', '' );
```

Penjelasan:

- `WP_PROXY_HOST`  
  Alamat host atau IP proxy yang anda gunakan (misalnya alamat proxy sewaan).
- `WP_PROXY_PORT`  
  Port proxy untuk koneksi, sesuaikan dengan port yang diberikan penyedia proxy.
- `WP_PROXY_USERNAME`  
  Username untuk autentikasi proxy (jika diperlukan).
- `WP_PROXY_PASSWORD`  
  Password untuk autentikasi proxy (jika diperlukan).
- `WP_PROXY_BYPASS_HOSTS`  
  Daftar host yang **tidak** boleh lewat proxy, dipisahkan koma.  
  Contoh: `localhost, namawebsiteanda.com, *.wordpress.org`

Daftar ini mendukung wildcard `*`, misalnya `*.wordpress.org`.

## 2. Dampak Penggunaan Proxy di WordPress

Setelah konstanta di atas ditambahkan:

- Semua proses HTTP di WordPress yang menggunakan HTTP API (`wp_remote_get`, `wp_remote_post`, curl, dsb.) akan melewati proxy tersebut.
- Termasuk:
  - Update theme dan plugin.
  - Request ke API eksternal.
  - Fungsi grabbing di theme/plugin Idtheme.

Karena itu, sangat penting untuk:

- Memastikan proxy yang digunakan **stabil dan cepat**.
- Menambahkan host tertentu ke `WP_PROXY_BYPASS_HOSTS` jika anda tidak ingin request ke host tersebut melewati proxy.

> Contoh penting: pastikan `wordpress.org` ada di daftar bypass agar update core/theme/plugin tidak bermasalah jika proxy bermasalah.

## 3. Kapan Sebaiknya Tidak Menggunakan Proxy?

Beberapa plugin mungkin juga menggunakan `wp_remote_get()` untuk berbagai proses.  
Jika banyak request penting melewati proxy yang lambat atau sering error, bisa terjadi:

- Timeout.
- Import gagal.
- Error saat update theme/plugin.

Jika setelah mengaktifkan proxy muncul banyak masalah:

- Pertimbangkan untuk **menonaktifkan pengaturan proxy** di `wp-config.php`.
- Atau gunakan proxy hanya sementara untuk proses tertentu, lalu hapus kembali konstanta tersebut.

Sebelum mengubah pengaturan ini di website produksi:

- Uji lebih dulu di staging atau subdomain.
- Pastikan anda punya akses ke file `wp-config.php` via FTP atau panel hosting untuk mengembalikan pengaturan jika terjadi error.
