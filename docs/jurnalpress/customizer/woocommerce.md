---
title: WooCommerce (Customizer) – Theme JurnalPress
description: "Pengaturan WooCommerce pada Customizer untuk mengatur layout, fitur header, dan warna elemen toko di tema JurnalPress."
outline: deep
---

# WooCommerce (Customizer) – Theme JurnalPress

Panel **WooCommerce** pada Customizer memungkinkan Anda mengatur berbagai aspek tampilan dan perilaku toko, mulai dari jumlah kolom produk, integrasi elemen WooCommerce di header, hingga warna elemen penting seperti harga, badge, dan tombol.

Semua pengaturan di panel ini dirancang agar mudah disesuaikan tanpa perlu menulis kode. Panel ini muncul di Customizer dengan nama **WooCommerce** dan menjadi pusat pengaturan yang berkaitan langsung dengan fitur toko.

::: info Info
Opsi ini akan aktif jika anda mengaktifkan plugin **[Woocommerce](https://wordpress.org/plugins/woocommerce/)** pada WordPress anda.
:::

## Lokasi Pengaturan
```
Appearance → Customize → WooCommerce
```

Panel ini mencakup beberapa section utama:
- Product Catalog
- Theme Settings
- WooCommerce Color

## Product Catalog

Section ini terhubung langsung dengan pengaturan katalog produk WooCommerce.

### Related Columns

**Label:** Related Columns  
**Deskripsi:** How many products should be shown per row?  
**Tipe:** Select  
**Default:** `3 Columns`  

**Fungsi:**  
Mengatur jumlah kolom produk *Related Products* yang ditampilkan dalam satu baris pada halaman detail produk.

**Pilihan yang tersedia:**
- 2 Columns
- 3 Columns
- 4 Columns
- 5 Columns
- 6 Columns

**Catatan:**
- Semakin besar jumlah kolom, ukuran kartu produk akan semakin kecil.
- Disarankan menyesuaikan dengan lebar konten dan perangkat target (desktop vs mobile).

## Theme Settings

Section **Theme Settings** berisi pengaturan integrasi elemen WooCommerce dengan layout tema, khususnya di area header dan menu.

### Cart Button from Header

**Label:** Cart button from header  
**Tipe:** Toggle  
**Default:** Aktif  

**Fungsi:**  
Menampilkan atau menyembunyikan tombol **Cart (Keranjang)** WooCommerce pada header tema.

**Penggunaan umum:**
- Aktifkan untuk toko online yang fokus pada transaksi.
- Nonaktifkan jika ingin tampilan header lebih minimalis.

### Login Button from Menu

**Label:** Login button from menu  
**Tipe:** Toggle  
**Default:** Aktif  

**Fungsi:**  
Menampilkan tombol **Login / My Account** WooCommerce di menu navigasi.

**Catatan:**
- Berguna untuk toko dengan sistem akun pelanggan.
- Tombol biasanya akan berubah sesuai status user (login / logout).

## WooCommerce Color

Section ini memungkinkan Anda menyesuaikan warna elemen-elemen utama WooCommerce agar selaras dengan branding tema.

### Price Color

**Label:** Price Color  
**Tipe:** Color Picker  

**Fungsi:**  
Mengatur warna teks harga produk di seluruh halaman WooCommerce.

### Badge Text Color

**Label:** Badge Text Color  
**Tipe:** Color Picker  

**Fungsi:**  
Mengatur warna teks badge produk, seperti:
- Sale
- Featured
- Out of Stock

### Badge Background Color

**Label:** Badge Background Color  
**Tipe:** Color Picker  

**Fungsi:**  
Mengatur warna latar belakang badge produk.

**Tips:**  
Gunakan warna kontras agar badge tetap terbaca dengan jelas.

### Second Button Color

**Label:** Second Button Color  
**Tipe:** Color Picker  

**Fungsi:**  
Mengatur warna teks tombol sekunder WooCommerce, misalnya:
- View Cart
- Wishlist
- Secondary Action Button

### Second Button Background Color

**Label:** Second Button Background Color  
**Tipe:** Color Picker  

**Fungsi:**  
Mengatur warna latar belakang tombol sekunder WooCommerce.

**Rekomendasi:**  
Gunakan warna yang masih satu palet dengan warna utama tema agar konsisten secara visual.

## Ringkasan

Panel WooCommerce di Customizer memberikan kontrol penuh terhadap:
- Tata letak produk
- Integrasi fitur toko di header dan menu
- Konsistensi warna elemen WooCommerce

Dengan pengaturan ini, Anda dapat menyesuaikan tampilan toko tanpa perlu melakukan kustomisasi kode tambahan.