---
title: Button (General) - Theme Jurnalpress
description: Dokumentasi lengkap pengaturan Button pada WordPress Customizer tema JurnalPress.
outline: deep
---

# Button (General) - Theme Jurnalpress

Section **Button** pada Customizer JurnalPress digunakan untuk mengatur tampilan global semua elemen button di tema, seperti warna, padding, border, radius, dan efek bayangan (box shadow).  
Pengaturan ini memudahkan Anda menjaga konsistensi desain tombol di seluruh website.

## Lokasi Pengaturan

```
Appearance → Customize → General → Button
```

## Color

Mengatur warna dasar dan hover pada button.

### Opsi Warna
- **Background**  
  Warna latar belakang button pada kondisi normal.
- **Text Color**  
  Warna teks/link button pada kondisi normal.
- **Background Hover**  
  Warna latar belakang button saat kursor diarahkan (hover).
- **Text Hover Color**  
  Warna teks button saat hover.

> Tips: Gunakan kontras warna yang cukup agar button tetap terbaca dan menarik perhatian.

## Border Radius

Mengatur tingkat lengkungan sudut button.

### Pengaturan
- Mendukung pengaturan per sisi (top, right, bottom, left).
- Nilai umum yang sering digunakan:
  - `0px` → sudut tajam
  - `4px – 6px` → sedikit membulat (recommended)
  - `20px+` → button pill / rounded

## Padding

Mengatur jarak antara konten (teks/icon) dengan tepi button.

### Pengaturan
- **Top**
- **Right**
- **Bottom**
- **Left**

Padding yang tepat akan membuat button lebih nyaman diklik dan terlihat proporsional.

## Border

Mengatur garis tepi button, termasuk efek hover.

### Opsi Border
- **Enable Border**  
  Mengaktifkan atau menonaktifkan border.
- **Border Color**  
  Warna border normal.
- **Border Hover Color**  
  Warna border saat hover.
- **Border Width**  
  Ketebalan border per sisi.
- **Border Style**  
  Jenis garis border (`solid`, `dashed`, `dotted`, dll).

> Catatan: Border hover aktif jika `enablehover` diaktifkan.

## Box Shadow

Menambahkan efek bayangan pada button untuk memberikan kedalaman visual.

### Opsi Box Shadow
- **Enable**  
  Mengaktifkan atau menonaktifkan bayangan.
- **Shadow Color**  
  Warna bayangan.
- **Horizontal Offset**  
  Posisi bayangan secara horizontal.
- **Vertical Offset**  
  Posisi bayangan secara vertikal.
- **Blur**  
  Tingkat blur bayangan.
- **Spread**  
  Penyebaran bayangan.

### Contoh Penggunaan
- Shadow ringan untuk button modern & minimalis
- Shadow lebih besar untuk button CTA (Call To Action)

## Rekomendasi Desain

- Gunakan warna konsisten dengan **Global Color**.
- Jangan terlalu besar memberi box shadow agar tidak mengganggu fokus.
- Pastikan padding cukup untuk pengalaman klik yang nyaman di mobile.

## Penutup

Dengan pengaturan Button Customizer ini, Anda dapat menyesuaikan tampilan tombol secara global tanpa perlu menulis CSS tambahan. Sangat cocok untuk menjaga konsistensi UI dan branding website Anda.
