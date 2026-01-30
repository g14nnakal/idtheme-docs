---
title: Cara Mengatur Menu di Theme Newkarma
outline: deep
---

# Pengaturan Menu Newkarma

Theme Newkarma menggunakan sistem menu bawaan WordPress.  
Cara mengaturnya mirip dengan theme Idtheme lain.

## Video Tutorial

Pada dokumentasi asli tersedia video. Sebaiknya anda menonton video tersebut terlebih dahulu agar alur pengaturan lebih jelas.

<YouTubeEmbed video-id="VXnLXEHnnFk" />

## Membuat Menu Utama

1. Masuk ke **Appearance -> Menus**.
2. Jika belum memiliki menu:
   - Klik **create a new menu**.
   - Beri nama (misalnya *Main Menu*).
   - Klik **Create Menu**.
3. Tambahkan item ke menu:
   - Dari panel kiri (Pages, Posts, Custom Links, Categories).
   - Centang item yang ingin dimasukkan.
   - Klik **Add to Menu**.
4. Susun struktur menu dengan drag & drop.
5. Untuk membuat submenu (dropdown), geser item sedikit ke kanan di bawah parent menu.

## Lokasi Menu
- **Primary:** menu utama di header.
- **Secondary:** menu kedua di bawah/atas primary.
- **Top Navigation:** menu navigasi pada top bar.
- **Copyright Navigation:** navigasi di footer sebelah kanan copyright.
- **Scroll Mobile Menu:** navigasi scroll pada mobile.

Atur di **Appearance > Menus > Manage Locations**, pilih menu untuk tiap lokasi lalu Save Changes.

## Opsi Tambahan Item Menu
Note: Disini sudah support simple mega menu atau menu kolom. Cara pengaturannya:

1. Silahkan anda aktifkan terlebih dahulu CSS Classes nya, klik Screen Options pada kanan atas. Maka akan muncul setingan nya, lihat gambar dibawah:

![Screen Options Menu](/general/menu/screen-options-menu.jpg)

2. Lalu anda centang pilihan CSS Classes nya. Setelah itu Edit Parent Menu nya, atau menu utama (silahkan anda lihat video diatas).

![Megamenu Settings](/general/menu/megamenu-settings.jpg)

3. Pada CSS Classes, silahkan anda masukkan kode:

- col-2 untuk 2 kolom submenu
- col-3 untuk 3 kolom submenu
- col-4 untuk 4 kolom submenu

4. Selesai.

Note: Untuk theme newkarma support sampai 5 lokasi menu, silahkan lihat tutorial video diatas.

## Tips Struktur Menu
- Solusi menambahkan icon pada menu:
[Tambahkan Icon Pada Menu](/general/icon-menu-theme-idtheme.md)
- Gunakan struktur menu yang sederhana dan mudah dipahami pengunjung:
  - Menu utama berisi kategori atau halaman penting (Home, Blog, Contact, dsb).
  - Submenu untuk pengelompokan lanjutan (misalnya kategori berita).
- Untuk tampilan mobile:
  - Pastikan jumlah level dropdown tidak terlalu dalam.
  - Gunakan label yang singkat dan jelas.

## Catatan
- Pastikan struktur menu sederhana dan mudah dipahami pengunjung.
- Untuk tampilan mobile, gunakan menu khusus agar navigasi tetap nyaman.
- Gunakan menu footer untuk link kebijakan, kontak, atau informasi penting lainnya.
