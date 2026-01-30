---
title: Global (Header Layout) - Theme Jurnalpress
description: Dokumentasi lengkap opsi Header Global pada panel Header di WordPress Customizer theme JurnalPress, mencakup pengaturan layout, aktivasi bar header, serta pengaturan style untuk Main Header dan Additional Bar.
outline: deep
---

# Global (Header Layout) - Theme Jurnalpress

## Deskripsi
Section **Header Global** pada panel **Header** di WordPress Customizer theme **JurnalPress** digunakan untuk mengatur struktur utama header website.  
Pengaturan ini mencakup:

- Pemilihan layout header.
- Aktivasi area header (Main Header dan Additional Bar).
- Pengaturan style tiap area header (container, height, background, border, spacing, typography, dan warna).

Pengaturan ini sangat penting karena header merupakan area utama navigasi dan branding website.

## Lokasi Pengaturan
```
Appearance → Customize → Header → Global
```

Di dalam section ini terdapat dua tab utama:
- **General**
- **Style**

# Tab General

## 1. Header Layout
**ID Option:** `header_layout`  
**Type:** SVG Button Selector  

### Deskripsi
Menentukan layout visual header yang digunakan pada website.

### Pilihan Layout
- **Style 1** – Layout standar (default).
- **Style 2** – Variasi layout header modern.
- **Style 3** – Layout fokus logo & menu.
- **Style 4** – Layout header minimal.
- **Style 5** – Layout header kompleks / multi-row.

### Default
`Style 1`

### Dampak
Mengubah struktur HTML dan posisi elemen:
- Logo
- Menu navigasi
- Search bar
- Button / icon header
- Secondary menu

## 2. Main Header
**ID Option:** `header_active`  
**Type:** Toggle  

### Deskripsi
Mengaktifkan atau menonaktifkan **Main Header** (header utama website).

### Default
`Enabled (1)`

### Catatan
Jika dinonaktifkan, hanya bar tambahan yang akan tampil (jika aktif).

## 3. Additional Bar 1
**ID Option:** `addheader1_active`  
**Type:** Toggle  

### Deskripsi
Mengaktifkan **Additional Bar 1** (bar tambahan di atas atau bawah main header).

### Contoh Penggunaan
- Top info bar
- Promo banner
- Secondary navigation
- Breaking news bar

## 4. Additional Bar 2
**ID Option:** `addheader2_active`  
**Type:** Toggle  

### Deskripsi
Mengaktifkan **Additional Bar 2** sebagai bar tambahan lain.

### Contoh Penggunaan
- Utility bar
- Social bar
- User account bar

# Tab Style

Pengaturan style diterapkan pada tiga area header:

- **Main Header**
- **Additional Bar 1**
- **Additional Bar 2**

Setiap area memiliki opsi konfigurasi yang sama.

## 1. Container
**ID Option:** `{key}_container`  

### Pilihan
- **Default** – Mengikuti global layout.
- **In Container** – Konten berada dalam container terpusat.
- **Fullwidth** – Header full width (edge to edge).

### Dampak
Menentukan lebar area konten header.

## 2. Height
**ID Option:** `{key}_height`  
**Type:** Range Slider  

### Range
- Min: **20px**
- Max: **100px**
- Step: **1px**

### Fungsi
Mengatur tinggi area header.

## 3. Style Type
Secara umum Anda akan menemukan pengaturan seperti:

- **Style Type**  
  Pilihan gaya header (Default / Boxed) untuk boxed maka pengaturan lainnya akan muncul.

- **Background Color**  
  Warna latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Background Image**  
  Gambar latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Border Radius**  
  Membulatkan sudut field input dan tombol. Required jika Style Type adalah Boxed.

- **Border**
  Garis tepi input dan form. Required jika Style Type adalah Boxed.

> Semua perubahan pada tab Style akan langsung terlihat melalui live preview Customizer.

### Default Behavior
- **Main Header:** default style
- **Additional Bar:** boxed style

## 4. Typography (Font Style)
**ID Option:** `{key}_typo`  
**Type:** React Font Control  

### Properti Font
- Font size
- Font weight
- Text transform
- Line height
- Font style (italic/normal)

### Warna Teks
- Text color
- Link color
- Hover color

### Range Font Size
- Min: 8px
- Max: 20px

# Struktur Area Header

### Main Header
Area utama branding dan navigasi:
- Logo
- Primary menu
- Search
- CTA / Button
- Icons

### Additional Bar 1
Bar tambahan pertama:
- Informasi penting
- Promo banner
- Secondary navigation

### Additional Bar 2
Bar tambahan kedua:
- Social icons
- User login
- Utility menu

## Best Practice Penggunaan

### Layout
- Gunakan **Style 1 / 2** untuk blog & magazine.
- Gunakan **Style 3 / 5** untuk corporate / portal besar.

### Performance
- Hindari terlalu banyak bar header.
- Gunakan height minimal.
- Gunakan container jika layout boxed.

### UX
- Pastikan navigasi mudah diakses.
- Jangan sembunyikan main menu.
- Gunakan contrast warna yang baik.

## Tips Developer (JurnalPress Theme)
- Semua opsi tersimpan sebagai theme_mod.
- Layout header mempengaruhi markup template `header.php`.
- Styling dinamis di-handle via Customizer CSS output.
- Option typography menggunakan React control custom.

## Ringkasan
Section **Header Global** memungkinkan pengaturan struktur, tampilan, dan style header secara fleksibel.  
Fitur ini mendukung kebutuhan layout modern seperti multi‑row header, top bar, utility bar, serta kontrol penuh terhadap typography dan spacing.
