---
title: Cara Mengatur Menu di Theme Wpmedia
outline: deep
---

# Cara Mengatur Menu di Theme Wpmedia

Theme Wpmedia menggunakan sistem menu bawaan WordPress.  
Cara mengaturnya mirip dengan theme Idtheme lain.

## Video Tutorial

Pada dokumentasi asli tersedia video. Sebaiknya anda menonton video tersebut terlebih dahulu agar alur pengaturan lebih jelas.

<YouTubeEmbed video-id="XJ-nIIU3g_I" />

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
- **Secondary:** (Support 1 level menu), menu sebelah kanan pada logo grid di header.
- **Side Menu (Mobile):** (Support 2 level menu), menu mobile.
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

- **menu-dot** untuk memberi titik diatas menu bisa anda combine dengan warna yang tersedia Lihat warna class nya dibawah…
- **menu-new** untuk memberi tulisan new atau tulisan lain pada menu, untuk description wajib anda isi misalnya, hot, new, populer, dan lain sebagainya, nanti tulisan ini akan tampil diatas tulisan menu nya.
- **menu-orange-light** memberi warna orange muda pada teks menu
- **menu-green-light** memberi warna hijau muda pada teks menu
- **menu-blue-light** memberi warna biru muda pada teks menu
- **menu-red-light** memberi warna merah muda pada teks menu
- **menu-orange** memberi warna orange pada teks menu
- **menu-green** memberi warna hijau pada teks menu
- **menu-blue** memberi warna biru pada teks menu
- **menu-red** memberi warna merah pada teks menu
- **full-image** jika anda ingin menggunakan menu gambar saja tanpa title anda bisa memasukkan class ini.

Berikut ada class untuk warna yang bisa anda combine dengan **menu-dot** dan **menu-new**

- **orange** memberi warna orange pada menu, warna ini bisa harus di combine dengan **menu-dot** dan **menu-new**
- **green** memberi warna hijau pada menu, warna ini bisa harus di combine dengan **menu-dot** dan **menu-new**
- **blue** memberi warna biru pada menu, warna ini bisa harus di combine dengan **menu-dot** dan **menu-new**
- **red** memberi warna merah pada menu, warna ini bisa harus di combine dengan **menu-dot** dan **menu-new**

Selain itu anda juga bisa memasukkan class **desktop-only**, agar salah satu menu tampil cuma di desktop misalnya, primary menu yang memiliki sub-menu ingin anda hidden di mobile anda masukkan class **desktop-only**, karena primary menu akan otomatis jadi scroll menu di mobile, maka disarankan untuk menghidden menu yang ada sub menu nya pada primary menu, contoh gambar dibawah:

![Desktop Only Menu](/general/menu/wpmedia-appearance-desktop-only.jpg)

> Anda bisa memasukkan lebih dari 1 kode css, misalnya anda ingin memasukkan dot dengan warna merah maka silahkan anda memasukkan kode: menu-dot menu-red.

4. Selesai.

Berbeda dari menu lainnya, settingan side menu bisa anda lihat contohnya sebagai berikut:

![Side Menu Example](/general/menu/side-menu-example-setting.jpg)

No.1 keterangan menu, No 2. adalah menu utamanya, Nah untuk side menu, untuk kolom nya hanya support sampai 2 kolom saja, maka anda dapat memasukkan col-2 pada parent menu nya, jika anda ingin membuat submenu nya menjadi 2 kolom. Lihat contoh gambar dibawah:

![Side Menu 2 Columns Example](/general/menu/wpmedia-appearance-side-menu.jpg)

Maka menu side di mobile akan tampil seperti ini:

![Side Menu 2 Columns Mobile Example](/general/menu/wpmedia-appearance-2-kolom.jpg)

Default nya adalah 1 kolom, anda bisa juga memasukkan menu-new, menu-dot, dan lain sebagainya.

Note: Anda wajib melihat tutorial video diatas jika anda ingin paham mengatur menu pada theme ini, untuk icon bisa anda lihat divideo diatas juga, atau tutorial lama berikut:

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
