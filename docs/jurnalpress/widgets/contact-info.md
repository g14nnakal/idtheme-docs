---
title: Contact Info (Widget) – Theme JurnalPress
description: "Widget Contact Info untuk tema JurnalPress WordPress memungkinkan Anda menampilkan informasi kontak lengkap dengan berbagai opsi kustomisasi."
outline: deep
---

# Contact Info (Widget) – Theme JurnalPress

Widget Contact Info untuk tema JurnalPress WordPress memungkinkan Anda menampilkan informasi kontak lengkap dengan berbagai opsi kustomisasi. Widget ini memerlukan plugin BT Core untuk berfungsi dengan optimal.

## Fitur Utama

- Menampilkan informasi kontak perusahaan/organisasi
- Dukungan gambar judul dan tautan
- Opsi alamat, telepon, dan email
- Integrasi ikon sosial media
- Tombol download aplikasi (Play Store & Apple Store)
- Pengaturan alignment (kiri, tengah, kanan)

## Pengaturan Widget

### Title (Judul)

- **Label:** Title
- **Tipe:** Text field
- **Deskripsi:** Judul utama widget yang akan ditampilkan.

### Link Title (Tautan Judul)

- **Label:** Link Title
- **Tipe:** URL field
- **Deskripsi:** URL target untuk judul (contoh: `https://www.domain.com/target`). Kosongkan jika ingin judul tanpa tautan.

### Title Image (Gambar Judul)

- **Label:** Title Image
- **Tipe:** Upload field
- **Deskripsi:** Gambar yang akan ditampilkan sebagai bagian dari judul.

### Description Title (Deskripsi Judul)

- **Label:** Description Title
- **Tipe:** Textarea (3 baris)
- **Deskripsi:** Deskripsi atau subtitle untuk judul widget.

### Address (Alamat)

- **Label:** Address
- **Tipe:** Textarea (3 baris)
- **Deskripsi:** Alamat lengkap yang akan ditampilkan.

### Phone (Telepon)

- **Label:** Phone
- **Tipe:** Text field
- **Deskripsi:** Nomor telepon kontak.

### Email

- **Label:** Email
- **Tipe:** Text field
- **Deskripsi:** Alamat email kontak (akan divalidasi sebagai format email).

### Social Icon (Ikon Sosial Media)

- **Label:** Social Icon
- **Tipe:** Checkbox
- **Deskripsi:** Centang untuk menampilkan ikon sosial media. Untuk pengaturan daftar sosial media, pergi ke Customizer → General → Social.

### Social Title (Judul Sosial Media)

- **Label:** Social Title
- **Tipe:** Text field
- **Deskripsi:** Judul untuk bagian sosial media.

### Link Playstore

- **Label:** Link Playstore
- **Tipe:** URL field
- **Deskripsi:** Jika memiliki aplikasi Android, masukkan link untuk menampilkan tombol Play Store.

### Link Apple Store

- **Label:** Link Apple Store
- **Tipe:** URL field
- **Deskripsi:** Jika memiliki aplikasi Apple, masukkan link untuk menampilkan tombol Apple Store.

### Link Download Title (Judul Download)

- **Label:** Link Download Title
- **Tipe:** Text field
- **Deskripsi:** Judul untuk bagian download aplikasi.

### Alignment (Penataan)

- **Label:** Alignment
- **Tipe:** Radio Image
- **Opsi:**
  - **Left:** Rata kiri (ikon: alignleft)
  - **Center:** Rata tengah (ikon: aligncenter)
  - **Right:** Rata kanan (ikon: alignright)
- **Deskripsi:** Pengaturan ini hanya berlaku untuk style1 dan untuk list post.

## Persyaratan
**Plugin BT Core** terinstall dan aktif. Widget tidak akan berfungsi tanpa plugin ini. Jika plugin tidak terinstall, akan muncul pesan peringatan

## Cara Penggunaan

1. Buka Appearance → Widgets di dashboard WordPress
2. Cari widget Contact Info (JurnalPress)
3. Drag & drop widget ke area sidebar/widget yang diinginkan
4. Isi semua field yang diperlukan
5. Klik Save untuk menyimpan pengaturan

## Catatan Penting

- **Field email** akan secara otomatis divalidasi format email
- **Semua URL field** akan divalidasi sebagai URL yang valid
- Untuk ikon sosial media, pastikan telah mengatur daftar sosial media di **Customizer → General → Social**
- Widget ini menggunakan helper class **Btcore_Widget_Options_Helper** dari plugin BT Core

## Troubleshooting

### Widget tidak menampilkan opsi pengaturan
Pastikan plugin BT Core sudah terinstall dan aktif

### Ikon sosial media tidak muncul
  - Centang opsi "Social Icon" di widget
  - Konfigurasi sosial media di **Customizer → General → Social**

### Tombol store tidak muncul
Pastikan telah mengisi URL Play Store dan/atau Apple Store dengan benar
