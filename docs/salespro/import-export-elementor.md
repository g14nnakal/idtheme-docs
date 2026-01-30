---
title: Cara Import Export File JSON Elementor di Theme Salespro
outline: deep
---

# Import dan Export Template Elementor di Salespro

Salespro menggunakan Elementor untuk mengatur layout landing page.  
Anda dapat menyimpan dan memindahkan layout dengan fitur **Import/Export** file JSON Elementor.

## Video Tutorial

Sebelumnya, silahkan tonton video tutorial berikut untuk panduan lengkap:

<YouTubeEmbed video-id="LpiQuAfhANQ" />

## 1. Export Template Elementor

Jika anda sudah memiliki halaman atau section yang ingin disimpan sebagai template:

1. Buka halaman dengan **Edit with Elementor**.
2. Klik ikon folder di bawah area konten (Library).
3. Pilih tab **My Templates**.
4. Simpan layout saat ini sebagai template:
   - Klik panah di sebelah tombol **Update** (atau gunakan opsi **Save as Template**).
   - Beri nama template, lalu simpan.
5. Setelah template tersimpan, kembali ke tab **My Templates**.
6. Cari template yang ingin di-export.
7. Klik tiga titik (options) di sebelah template, lalu pilih **Export**.
8. Elementor akan mendownload file `.json` ke komputer anda.

File JSON ini dapat anda gunakan untuk:

- Backup layout.
- Memindahkan layout ke website lain yang juga menggunakan Elementor + Salespro.

## 2. Import Template Elementor

Untuk mengimport layout ke website baru:

1. Pastikan:
   - Theme Salespro sudah aktif.
   - Plugin Elementor sudah terinstall dan aktif.
2. Masuk ke **Elementor → Templates → Saved Templates** (nama menu bisa sedikit berbeda).
3. Klik tombol **Import Templates**.
4. Pilih file `.json` yang sudah anda export sebelumnya.
5. Klik **Import**.

Template sekarang akan muncul di daftar **My Templates**.

## 3. Menggunakan Template di Halaman

1. Buat halaman baru (Pages → Add New) dan atur sebagai template **Builder** (atau template khusus Salespro).
2. Klik **Edit with Elementor**.
3. Klik ikon folder **Add Template**.
4. Buka tab **My Templates**.
5. Pilih template yang sudah anda import, klik **Insert**.
6. Sesuaikan teks, gambar, dan link sesuai kebutuhan.
7. Klik **Update** untuk menyimpan perubahan.

## 4. Tips Kompatibilitas

- Usahakan versi Elementor di situs lama dan baru tidak terlalu jauh berbeda untuk menghindari masalah kompatibilitas.
- Jika setelah import layout terlihat “berantakan”:
  - Cek pengaturan **Global Fonts** dan **Global Colors** di Elementor.
  - Pastikan pengaturan **Disable Default Fonts/Colors** sudah benar (agar mengikuti theme).

## 5. Backup Rutin

Untuk menjaga keamanan layout landing page:

- Biasakan melakukan **export template** setelah melakukan perubahan besar.
- Simpan file JSON di tempat aman (cloud storage atau version control).

Dengan demikian, jika terjadi masalah pada situs, anda bisa dengan cepat mengembalikan layout menggunakan template yang sudah di-export.

