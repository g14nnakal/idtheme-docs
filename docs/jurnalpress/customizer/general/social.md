---
title: Social (General) - Theme Jurnalpress
description: Mengatur daftar social network dan tampilan ikon sosial secara global di theme JurnalPress.
outline: deep
---

# Social (General) - Theme Jurnalpress

Dokumentasi ini menjelaskan **Social Section** pada WordPress Customizer theme **JurnalPress**. Opsi-opsi di bagian ini digunakan untuk mengatur daftar ikon media sosial beserta tampilan (style)‑nya secara global.

> Cocok untuk digunakan pada header, footer, atau area lain yang menampilkan social icons.

## Lokasi Pengaturan
```
Appearance → Customize → General → Social
```

Section ini memiliki dua tab utama:

- **General** → Pengaturan data & daftar social network
- **Style** → Pengaturan tampilan visual ikon

## Tab: General

### Social Network

**ID:** `_socialicon`  
**Type:** `btcorereact-sortable`

Digunakan untuk mengelola daftar media sosial yang akan ditampilkan.

**Fitur:**
- Menambah social network baru dengan tombol **( + )**
- Mengubah urutan ikon dengan drag & drop
- Mengatur label dan URL tiap social network

**Default Value:**
```json
{
  "facebook": {
    "label": "Facebook",
    "url": "#"
  },
  "twitter": {
    "label": "Twitter",
    "url": "#"
  },
  "youtube": {
    "label": "Youtube",
    "url": "#"
  }
}
```

> Daftar social network yang tersedia berasal dari variable `$choicesocial`.

## Tab: Style

Tab ini digunakan untuk mengatur tampilan ikon sosial.

### Color Type

**ID:** `_socialicon_colortype`  
**Type:** `btcore-svgbutton`

Menentukan sumber warna ikon sosial.

**Opsi:**
- **Default** (`idt-provider`)  
  Menggunakan warna bawaan masing‑masing provider (Facebook, Twitter, dll)

- **Custom** (`idt-custom`)  
  Menggunakan warna manual dari opsi **Color**

**Default:** `Default`

### Color

**ID:** `_socialicon_color`  
**Type:** `btcorereact-multicolor`

Mengatur warna ikon dan background secara manual.

**Opsi Warna:**
- **Icon** → Warna icon SVG
- **Background** → Warna background icon

> Opsi ini efektif jika **Color Type** diset ke **Custom**.

### Style

**ID:** `_socialicon_style`  
**Type:** `btcore-svgbutton`

Menentukan gaya tampilan ikon.

**Pilihan Style:**
- **Background** (`idt-bgcolor`)  
  Icon dengan background penuh

- **No Background** (`idt-nobg`)  
  Icon tanpa background

- **Border** (`idt-border`)  
  Icon dengan garis border

**Default:** `Background`

### Border Radius

**ID:** `_socialicon_radius`  
**Type:** `btcore-boxcontrol`

Mengatur tingkat kelengkungan sudut icon.

Contoh penggunaan:
- Radius kecil → icon kotak
- Radius besar → icon membulat / lingkaran

### Padding

**ID:** `_socialicon_padding`  
**Type:** `btcore-boxcontrol`

Mengatur jarak antara icon dengan background atau border.

> Berguna untuk menyesuaikan ukuran visual icon tanpa mengubah ukuran SVG.

### Icon Size

**ID:** `_socialicon_size`  
**Type:** `btcore-range`

Mengatur ukuran icon SVG.

**Range:**
- **Min:** 10px
- **Max:** 40px
- **Step:** 1px

### Gap

**ID:** `_socialicon_gap`  
**Type:** `btcore-range`

Mengatur jarak antar icon sosial.

**Range:**
- **Min:** 5px
- **Max:** 30px
- **Step:** 1px

> Cocok untuk mengatur kerapatan icon pada area header atau footer.

## Catatan Developer

- Semua pengaturan ini bersifat **global**
- Output style biasanya dikonversi ke CSS variables atau inline style

## Contoh Penggunaan

- Social icon di header
- Social follow di footer
- Author social links
- Sticky social bar

