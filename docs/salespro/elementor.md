---
title: Cara Menggunakan Page Builder Elementor di Theme Salespro
outline: deep
---

# Menggunakan Elementor di Theme Salespro

Salah satu fitur unggulan Salespro adalah dukungan penuh untuk **Elementor** sebagai page builder, sehingga anda bisa membuat landing page dengan metode drag & drop.

## Video Tutorial

Dokumentasi asli menyertakan video penggunaan Elementor di Salespro.  
Anda dapat mengisi ID video di bawah sesuai channel anda.

<YouTubeEmbed video-id="AqB-f_lhMVA" />

## 1. Pengaturan Awal Elementor

Sebelum membuat halaman menggunakan Elementor:

1. Masuk ke menu **Elementor → Settings**.
2. Di tab **General**:
   - Pastikan **Post Types** yang ingin diedit dengan Elementor sudah dicentang (misalnya Pages).
3. Di bagian **Style** atau **Advanced** (tergantung versi Elementor):
   - Centang **Disable Default Fonts**.
   - (Opsional) Centang **Disable Default Colors**.

Dengan begitu, font dan warna default akan diatur oleh theme Salespro, bukan Elementor. Screenshot:

![Disable Default Fonts dan Colors Elementor](/salespro/elementor/setting-elementor.jpg)

## 2. Membuat Halaman Builder

1. Masuk ke **Pages → Add New**.
2. Isi judul halaman (misalnya “Landing Page”).
3. Di panel **Page Attributes** atau **Template** (di editor):
   - Ubah template dari **Default Template** menjadi **Builder** (atau template khusus Salespro jika tersedia).
4. Beberapa theme settings tambahan mungkin tersedia, seperti:
   - **Disable the header**
   - **Disable the footer**
   - **Disable the section title**
   - Pilih sesuai kebutuhan. Untuk landing page penuh, biasanya header/footer dinonaktifkan.
5. Klik **Publish**.

Screenshot:

![Theme Settings](/salespro/elementor/theme-settings.jpg)

## 3. Edit Halaman dengan Elementor

Setelah halaman dipublish:

1. Klik tombol **Edit with Elementor** di atas editor.
2. Elementor akan membuka interface drag & drop.
3. Anda dapat:
   - Menambahkan section baru.
   - Menambahkan widget (Heading, Image, Button, Form, dsb).
   - Mengatur padding, margin, background, dan tipografi.

Untuk dokumentasi lengkap Elementor:  
https://developers.elementor.com

## 4. Menghubungkan Section dengan Menu (One Page)

Jika anda ingin membuat menu yang menggulir ke section tertentu:

1. Di Elementor:
   - Pilih section yang ingin dijadikan target.
   - Di tab **Advanced**, isi **CSS ID** (misalnya `features`, `pricing`).
2. Di **Appearance → Menus**:
   - Tambahkan **Custom Link**.
   - URL: `#features`
   - Link Text: “Fitur”.
3. Simpan menu.

Saat pengunjung mengklik menu “Fitur”, halaman akan scroll ke section dengan ID `features`.

## 5. Tips Kinerja

- Hindari penggunaan terlalu banyak widget berat (misalnya banyak animasi) di satu halaman.
- Kompres gambar sebelum diupload.
- Gunakan plugin cache untuk mempercepat loading.

Jika terjadi masalah tampilan:

- Pastikan template halaman sudah menggunakan template **Builder**.
- Coba clear cache (plugin maupun browser).

