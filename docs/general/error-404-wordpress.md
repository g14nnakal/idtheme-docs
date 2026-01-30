---
title: Cara Memperbaiki Error 404 di WordPress
outline: deep
---

# Cara Memperbaiki Error 404 di WordPress

Error 404 biasanya muncul ketika permalink tidak terbaca dengan benar atau .htaccess tidak sesuai, terutama pada server Apache.

## 1. Re-save Permalinks (Flush Rewrite Rules)

1. Masuk ke **Settings → Permalinks**.
2. Tanpa mengubah apa pun, klik **Save Changes**.

Langkah ini akan memaksa WordPress untuk menulis ulang aturan permalink ke file `.htaccess`.

Dalam banyak kasus, langkah sederhana ini sudah cukup untuk menghilangkan error 404.

## 2. Periksa File .htaccess (Apache)

Jika langkah di atas tidak menyelesaikan masalah, lanjutkan dengan memeriksa file `.htaccess`.

1. Login ke **cPanel / panel hosting / FTP**.
2. Masuk ke folder root instalasi WordPress (biasanya `public_html` atau folder tempat WordPress dipasang).
3. Cari file bernama `.htaccess`.
4. Jika tidak terlihat, aktifkan opsi **Show Hidden Files** di file manager atau atur agar file tersembunyi ditampilkan di FTP.
5. Jika masih tidak menemukan `.htaccess`, hubungi support hosting untuk memastikan file tersebut bisa dibuat.

Jika file `.htaccess` kosong atau belum ada, isi dengan aturan standar WordPress berikut:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

Simpan perubahan, lalu coba buka kembali halaman yang sebelumnya menampilkan error 404.

## 3. Pastikan Modul mod_rewrite Aktif (Apache)

Pada server Apache, WordPress membutuhkan modul `mod_rewrite` agar permalink cantik (`/post-name/`) bisa bekerja.

- Pastikan modul `mod_rewrite` aktif di server.
- Jika anda tidak memiliki akses ke konfigurasi server:
  - Hubungi support hosting.
  - Minta mereka memastikan `mod_rewrite` aktif dan mendukung aturan WordPress di `.htaccess`.

Tanpa `mod_rewrite`, permalink custom akan sering berujung error 404.

## 4. Catatan untuk Pengguna Nginx

Jika hosting anda menggunakan **Nginx**:

- File `.htaccess` dan modul `mod_rewrite` **tidak digunakan**.
- Semua aturan rewrite diatur langsung pada konfigurasi server (blok server Nginx).
- Jika langkah re-save permalinks tidak memperbaiki error 404:
  - Hubungi support hosting.
  - Jelaskan bahwa anda menggunakan WordPress dan mengalami error 404 pada permalink.
  - Minta mereka memastikan konfigurasi Nginx sudah sesuai untuk WordPress.

## 5. Periksa Plugin yang Mengelola URL (Opsional)

Beberapa plugin dapat mengubah perilaku URL dan permalink, misalnya:

- Plugin redirect.
- Plugin security.
- Plugin multilingual.

Jika error 404 mulai muncul setelah menginstal atau mengubah pengaturan plugin tertentu:

1. Nonaktifkan sementara plugin yang dicurigai.
2. Lakukan lagi langkah **Re-save Permalinks**.
3. Cek apakah error 404 hilang.

Jika masalah hilang setelah plugin dinonaktifkan, kemungkinan besar plugin tersebut menjadi penyebabnya dan perlu dikonfigurasi ulang atau diganti.
