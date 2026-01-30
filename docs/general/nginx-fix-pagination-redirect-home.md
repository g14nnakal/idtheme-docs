---
title: Nginx, Fix Pagination Halaman 2 Redirect ke Halaman Home
outline: deep
---

# Nginx: Fix Pagination Halaman 2 Redirect ke Halaman Home

Pada beberapa konfigurasi Nginx, halaman pagination seperti `/?paged=2` atau `/page/2/` bisa redirect ke halaman home jika rule tidak benar, terutama pada halaman **search** atau arsip.

## 1. Gejala

- Ketika mengakses halaman 2 (atau 3, dst.) dari arsip:
  - URL berubah benar, tetapi konten tetap halaman pertama.
  - Atau diarahkan ke halaman home.

## 2. Pastikan Struktur Permalink Benar

1. Masuk ke **Settings → Permalinks**.
2. Pilih struktur yang diinginkan.
3. Klik **Save Changes**.

## 3. Cek Konfigurasi Nginx

Pastikan di blok server terdapat rule utama WordPress:

```nginx
location / {
  try_files $uri $uri/ /index.php?$args;
}
```

Link tutorial configure Nginx:

- https://developer.wordpress.org/advanced-administration/server/web-server/nginx/

Jika anda menggunakan konfigurasi custom:

- Pastikan tidak ada rule lain yang memaksa redirect `page/2` ke root.
- Hindari redirect generik yang mengarahkan semua request yang tidak dikenali ke halaman home tanpa memeriksa query `paged`.

## 4. Restart Nginx

Setelah mengubah konfigurasi:

- Reload atau restart Nginx agar perubahan berlaku.

Jika anda tidak memiliki akses ke konfigurasi:

- Hubungi pihak hosting dan jelaskan masalah pagination di WordPress.
