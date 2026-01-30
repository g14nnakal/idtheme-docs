---
title: Form (General) - Theme Jurnalpress
description: Pengaturan global tampilan form pada tema JurnalPress, termasuk warna, radius, padding, border, dan efek bayangan.
outline: deep
---

# Form (General) - Theme Jurnalpress

Section **Form** digunakan untuk mengatur **tampilan visual elemen form secara global** pada tema **JurnalPress**.  
Pengaturan ini berlaku untuk seluruh form bawaan tema, seperti **input field**, **textarea**, dan elemen form lain yang digunakan di berbagai area website (termasuk komentar, form pencarian, dan form lainnya).

Dengan pengaturan ini, Anda dapat memastikan tampilan form tetap konsisten dengan desain dan identitas visual website.

## Lokasi Pengaturan

Pengaturan ini dapat diakses melalui:

```
Appearance → Customize → General → Form
```

Semua opsi berada di dalam tab **Style**.

## Color

Opsi **Color** digunakan untuk mengatur warna dasar pada elemen form.

### Pengaturan yang tersedia

- **Background**  
  Mengatur warna latar belakang form.

- **Text**  
  Mengatur warna teks yang ditampilkan di dalam form.

### Catatan

- Jika nilai dikosongkan, warna akan mengikuti default tema atau browser.
- Disarankan menggunakan warna dengan kontras yang baik untuk menjaga keterbacaan.

## Border Radius

Opsi **Border Radius** digunakan untuk mengatur tingkat kelengkungan sudut form.

### Fitur

- Mendukung pengaturan **uniform** (semua sisi sama)
- Mendukung pengaturan **per sisi** (Top, Right, Bottom, Left)

### Kegunaan

- Radius kecil memberikan kesan tegas dan modern
- Radius besar memberikan kesan lembut dan rounded

## Padding

Opsi **Padding** digunakan untuk mengatur jarak antara konten form dan batas luar elemen.

### Pengaturan

Padding dapat diatur secara terpisah untuk:

- Top
- Right
- Bottom
- Left

### Rekomendasi

Gunakan padding yang cukup agar:
- Form nyaman digunakan
- Tampilan tetap rapi di desktop maupun mobile

## Border

Opsi **Border** digunakan untuk mengatur garis tepi form, termasuk kondisi hover.

### Pengaturan yang tersedia

- **Enable Border**  
  Mengaktifkan atau menonaktifkan border form.

- **Border Color**  
  Warna border dalam kondisi normal.

- **Hover Color**  
  Warna border saat elemen di-hover atau difokuskan.

- **Border Width**  
  Ketebalan border per sisi:
  - Top
  - Right
  - Bottom
  - Left

- **Border Style**  
  Gaya border, seperti:
  - solid
  - dashed
  - dotted

### Default

Secara bawaan, border:
- Aktif
- Memiliki ketebalan `1px`
- Menggunakan style `solid`

## Box Shadow

Opsi **Box Shadow** digunakan untuk menambahkan efek bayangan pada elemen form.

### Pengaturan yang tersedia

- **Enable**  
  Mengaktifkan atau menonaktifkan box shadow.

- **Color**  
  Warna bayangan.

- **Horizontal Offset**  
  Jarak bayangan secara horizontal.

- **Vertical Offset**  
  Jarak bayangan secara vertikal.

- **Blur**  
  Tingkat kelembutan bayangan.

- **Spread**  
  Luas sebaran bayangan.

### Catatan

- Box shadow berguna untuk memberikan efek depth
- Disarankan menggunakan nilai ringan agar tidak mengganggu fokus pengguna

## Ringkasan

Section **Form** memungkinkan Anda untuk:

- Mengatur tampilan form secara konsisten di seluruh website
- Menyesuaikan desain form dengan gaya global tema
- Meningkatkan kenyamanan dan pengalaman pengguna

Semua pengaturan bersifat **global**, sehingga perubahan akan langsung diterapkan ke seluruh elemen form yang menggunakan style bawaan tema **JurnalPress**.
