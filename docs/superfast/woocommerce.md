---
title: Cara Import dan Pengaturan WooCommerce di Superfast
outline: deep
---

# Cara Import dan Pengaturan WooCommerce di Superfast

Dokumentasi ini menjelaskan langkah-langkah mengaktifkan layout WooCommerce di Superfast, mulai dari instalasi plugin sampai pengaturan halaman toko.

## Video Tutorial

Sebelumnya, silahkan tonton video tutorial berikut untuk panduan lengkap:

<YouTubeEmbed video-id="vDOeM8AMn2Y" />

## 1. Persiapan

- Pastikan theme Superfast sudah terinstal dan aktif.

## 2. Instalasi Plugin WooCommerce

1. Masuk ke **Plugins → Add New**.
2. Di kolom pencarian, ketik **WooCommerce**.
3. Pilih plugin resmi WooCommerce (biasanya muncul di posisi teratas).
4. Klik **Install Now** lalu **Activate**.

Setelah aktif, WooCommerce akan menjalankan wizard setup.

## 3. Melewati Setup Halaman Otomatis

Pada wizard WooCommerce:

- Isi data toko sesuai kebutuhan.
- Saat sampai pada bagian pembuatan halaman (Shop, Cart, Checkout, My Account), anda bisa **skip** pembuatan halaman otomatis karena:
  - Halaman tersebut akan diimport melalui **Import Demo Data** Superfast.

## 4. Import Demo Layout WooCommerce

1. Masuk ke **Appearance → Import Demo Data**.
2. Setelah WooCommerce terinstal, akan muncul pilihan tambahan:
   - Misalnya **WooCommerce Layout** atau layout khusus toko.
3. Pilih demo WooCommerce tersebut.
4. Klik **Import** lalu konfirmasi pada popup yang muncul.
5. Tunggu hingga proses selesai.

Setelah selesai, Superfast akan:

- Menambahkan halaman toko (Shop), Cart, Checkout, dan My Account.
- Menambahkan pengaturan layout produk sesuai demo.

## 5. Mengatur Halaman di Pengaturan WooCommerce

Masuk ke **WooCommerce → Settings**.

### Tab Products → Display

- Pada opsi **Shop page**, pilih halaman **Shop**.
- Atur tampilan produk di halaman shop sesuai kebutuhan:
  - Layout grid/list.
  - Jumlah produk per halaman.

### Tab Checkout

Di bagian **Checkout pages**:

- **Cart page**: pilih halaman **Cart**.
- **Checkout page**: pilih halaman **Checkout**.

### Tab Accounts

Di bagian **My Account Page**:

- Pilih halaman **My Account**.

Simpan perubahan setelah mengatur setiap tab.

## 6. Menambahkan Produk

Setelah halaman WooCommerce siap:

1. Masuk ke **Products → Add New**.
2. Isi judul produk, deskripsi, harga, kategori, dan gambar produk.
3. Pilih tipe produk (simple, variable, dsb).
4. Klik **Publish**.

Produk akan tampil di halaman shop sesuai layout Superfast.

## 7. Penutup

Jika terjadi error atau halaman tidak sesuai:

- Cek kembali pengaturan halaman di WooCommerce Settings.
- Lakukan **re-save permalinks** di **Settings → Permalinks**.
- Pastikan tidak ada plugin lain yang konflik dengan WooCommerce atau Superfast.

