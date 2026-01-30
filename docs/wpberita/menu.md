---
title: Cara Mengatur Menu di Theme Wpberita
outline: deep
---

# Cara Mengatur Menu di Theme Wpberita

Theme Wpberita menggunakan sistem menu bawaan WordPress.  
Cara mengaturnya mirip dengan theme Idtheme lain.

## Video Tutorial

Pada dokumentasi asli tersedia video. Sebaiknya anda menonton video tersebut terlebih dahulu agar alur pengaturan lebih jelas.

<YouTubeEmbed video-id="E8e_fkxSWGE" />

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
- **Primary:** (Support 3 level menu), menu utama di header.
- **Secondary:** (Support 3 level menu), menu setelah menu utama di header.
- **Side menu:** (Support 2 level menu), menu mobile.
- **Scroll Mobile Menu:** (Support 1 level menu), navigasi scroll pada mobile.
- **Footer menu:** (Support 1 level menu), navigasi di footer.

Atur di **Appearance > Menus > Manage Locations**, pilih menu untuk tiap lokasi lalu Save Changes.

## Opsi Tambahan Item Menu
Note: Disini sudah support simple mega menu atau menu kolom. Cara pengaturannya:

1. Silahkan anda aktifkan terlebih dahulu CSS Classes nya, klik Screen Options pada kanan atas. Maka akan muncul setingan nya, lihat gambar dibawah:

![Screen Options Menu](/general/menu/screen-options-menu.jpg)

2. Lalu anda centang pilihan CSS Classes nya. Setelah itu Edit Parent Menu nya, atau menu utama (silahkan anda lihat video diatas).

![Megamenu Settings](/general/menu/megamenu-settings.jpg)

3. Pada CSS Classes, silahkan anda masukkan kode:

- **col-2** untuk 2 kolom submenu
- **col-3** untuk 3 kolom submenu
- **col-4** untuk 4 kolom submenu

atau:

untuk kode class warna, new dan dot, silahkan anda masukkan kode:

- **menu-dot** untuk memberi titik diatas menu
- **menu-new** untuk memberi tulisan new pada menu
- **menu-orange** memberi warna orange pada menu
- **menu-green** memberi warna hijau pada menu
- **menu-blue** memberi warna biru pada menu
- **menu-red** memberi warna merah pada menu

Pada versi 2.0.0+ terdapat 4 warna menu baru:

- **menu-orange-light** memberi warna orange muda pada menu
- **menu-green-light** memberi warna hijau muda pada menu
- **menu-blue-light** memberi warna biru muda pada menu
- **menu-red-light** memberi warna merah muda pada menu

> Anda bisa memasukkan lebih dari 1 kode css, misalnya anda ingin memasukkan dot dengan warna merah maka silahkan anda memasukkan kode: menu-dot menu-red.

4. Selesai.

Berbeda dari menu lainnya, settingan side menu bisa anda lihat contohnya sebagai berikut:

![Side Menu Example](/general/menu/side-menu-example-setting.jpg)

Lihat nomor 1, nomor 1 adalah judul menu yang nanti letak nya akan paling atas, sedangkan nomor 2 adalah submenu yang secara otomatis akan terbagi menjadi 2 kolom dibawah judul menu.

Note: Untuk theme Wpberita support sampai 5 lokasi menu, silahkan lihat tutorial video diatas.

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
