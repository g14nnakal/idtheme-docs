---
title: Pengaturan Baru di Superfast Versi 1.0.9
outline: deep
---

# Pengaturan Baru di Superfast Versi 1.0.9

Pada Superfast versi **1.0.9** ke atas, dengan plugin **Idblog Core** versi **1.0.9** ke atas, terdapat beberapa pengaturan baru yang berfokus pada peningkatan performa website.

## Fitur Optimasi di Idblog Core 1.0.9

Masuk ke **Settings → Idblog Core** dan cari pengaturan berikut. Lihat screenshot berikut:

![Pengaturan Idblog Core 1.0.9](/superfast/v-1-0-9/pengaturan-superfast-versi-1.0.9.jpg)

### Remove jQuery Migrate

- Menghapus load `jquery-migrate` dari WordPress core.
- Manfaat:
  - Mengurangi beban JavaScript.
  - Meningkatkan kecepatan loading.
- Peringatan:
  - Jika anda masih menggunakan script lama yang bergantung pada jQuery Migrate, jangan aktifkan fitur ini.
  - Jika setelah diaktifkan ada script yang error, coba matikan kembali fitur ini.

### Remove WP Oembed

- Menghapus embed otomatis (oEmbed) bawaan WordPress.
- Manfaat:
  - Mengurangi script bawaan sehingga halaman lebih ringan.
- Peringatan:
  - Jika anda masih menggunakan fitur oEmbed (misalnya embed tweet, video tertentu, dsb), sebaiknya jangan diaktifkan.

### Remove WP Head Meta Tag

- Menghapus beberapa meta tag bawaan WordPress di `wp_head`, misalnya:
  - RSD, wlwmanifest.
  - Feed links.
  - Shortlink.
  - Comments feed.
- Manfaat:
  - Mengurangi output kode yang tidak diperlukan.
- Peringatan:
  - Beberapa plugin (misalnya Jetpack) mungkin membutuhkan sebagian meta ini.
  - Jika terjadi konflik, nonaktifkan kembali fitur ini.

## Pengaturan di Customizer: Blog Content

Di **Appearance → Customize → Blog → Blog Content** terdapat opsi baru:

### Disable Post Navigation in Single

- Menghilangkan link navigasi **Prev/Next post** di bawah konten single post.
- Berguna jika anda ingin tampilan single lebih minimalis.

Aktifkan opsi ini jika anda tidak membutuhkan navigasi antar posting di bagian bawah artikel.

## Catatan Setelah Update

Setelah mengaktifkan fitur-fitur di atas:

- Lakukan **clear cache** pada plugin cache yang anda gunakan.
- Jika menggunakan CDN, lakukan **purge cache**.
- Cek tampilan front-end untuk memastikan tidak ada elemen yang rusak akibat penghapusan script/meta.

