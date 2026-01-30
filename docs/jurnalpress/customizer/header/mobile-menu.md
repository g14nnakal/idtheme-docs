---
title: Mobile Menu (Header Layout) - Theme Jurnalpress
description: Pengaturan Mobile Menu pada panel Header memungkinkan Anda mengontrol struktur, tampilan, dan perilaku menu navigasi khusus untuk perangkat mobile di tema JurnalPress.
outline: deep
---

# Mobile Menu (Header Layout) - Theme Jurnalpress

Section **Mobile Menu** digunakan untuk mengatur navigasi khusus pada tampilan mobile. Menu ini biasanya tampil sebagai *side navigation* (off-canvas) yang dapat diakses melalui ikon menu (hamburger).  
Melalui Customizer, Anda dapat menentukan komponen apa saja yang ditampilkan, ikon menu, warna, background, hingga lebar maksimum menu.

## Lokasi di Customizer

```
Appearance → Customize → Header → Mobile Menu
```

## Tabs

Section ini dibagi menjadi dua tab utama:

- **General** – Mengatur struktur dan konten Mobile Menu
- **Style** – Mengatur tampilan visual Mobile Menu

## General Settings

### Side Navigation

**Customizer ID:** `*_mobilemenu`  
**Type:** Sortable (Drag & Drop)

Opsi ini digunakan untuk menentukan **komponen apa saja** yang akan ditampilkan di dalam Mobile Menu serta urutannya.

#### Komponen yang tersedia

- **Menu** (`sidenav_menu`)  
  Menampilkan menu navigasi WordPress (primary/mobile menu).

- **Search** (`sidenav_search`)  
  Menampilkan form pencarian di dalam mobile menu.

- **Social** (`sidenav_social`)  
  Menampilkan ikon media sosial yang sudah dikonfigurasi di section Social.

- **HTML** (`sidenav_html`)  
  Menampilkan konten HTML custom dari editor.

#### Cara penggunaan

1. Klik tombol **( + )** untuk menambahkan komponen ke dalam daftar
2. Gunakan **drag & drop** untuk mengatur urutan tampilan
3. Komponen akan ditampilkan dari atas ke bawah sesuai urutan

### HTML Content

**Customizer ID:** `*_htmlmenu1`  
**Type:** TinyMCE Editor

Digunakan untuk menambahkan konten HTML kustom ke dalam Mobile Menu.

#### Fitur

- Mendukung **TinyMCE editor**
- Mendukung **shortcode**
- Mendukung **dynamic placeholder** berikut:

| Placeholder | Keterangan |
|-----------|-----------|
| `{current_date}` | Tanggal hari ini |
| `{current_year}` | Tahun berjalan |
| `{site_title}` | Judul website |
| `{site_description}` | Deskripsi website |
| `{site_url}` | URL website |

Contoh penggunaan:

```html
<p>© {current_year} {site_title}</p>
```

> Catatan: Opsi ini akan aktif ketika komponen **HTML** ditambahkan pada Side Navigation.

## Style Settings

### Display On

**Customizer ID:** `*_mobilemenu_displayin`  
**Type:** SVG Button

Menentukan di mana ikon Mobile Menu akan ditampilkan.

Contoh pilihan:
- Mobile only
- Mobile & Tablet
- All devices

(Default: **Mobile**)

### Icon

**Customizer ID:** `*_mobilemenu_icon`  
**Type:** SVG Button

Menentukan ikon Mobile Menu (hamburger).  
Tersedia beberapa variasi ikon bawaan:

- Icon 1
- Icon 2
- Icon 3
- Icon 4

Ikon ini akan digunakan sebagai tombol pembuka *side navigation*.

### Background

**Customizer ID:** `*_mobilemenu_bg`  
**Type:** Background Control

Mengatur background Mobile Menu.

Opsi yang tersedia:
- **Solid Color**
- **Gradient**

Background ini akan diterapkan pada seluruh area side navigation.

### Color

**Customizer ID:** `*_mobilemenu_color`  
**Type:** Multi Color

Mengatur warna elemen di dalam Mobile Menu.

| Opsi | Fungsi |
|----|------|
| Text | Warna teks |
| Link | Warna link |
| Link Hover | Warna link saat hover |

### Max Width

**Customizer ID:** `*_mobilemenu_width`  
**Type:** Range Slider

Mengatur lebar maksimum Mobile Menu.

- Minimum: **250px**
- Maksimum: **600px**

Cocok untuk menyesuaikan kenyamanan tampilan menu pada layar mobile dan tablet.

### Gap

**Customizer ID:** `*_mobilemenu_gap`  
**Type:** Range Slider

Mengatur jarak (spacing) antara:
- Komponen menu
- Padding bagian dalam side navigation

Semakin besar nilai, semakin lega jarak antar elemen.

- Minimum: **5px**
- Maksimum: **80px**

## Tips & Best Practice

- Gunakan **urutan sederhana** (Search → Menu → Social) untuk UX yang optimal
- Batasi lebar menu agar tidak menutupi seluruh layar pada tablet
- Gunakan warna kontras untuk meningkatkan keterbacaan
- Manfaatkan **HTML Content** untuk menambahkan copyright, promo, atau CTA

## Ringkasan

Mobile Menu di JurnalPress memberikan kontrol penuh terhadap:
- Struktur menu mobile
- Konten tambahan
- Tampilan visual
- Responsivitas

Dengan kombinasi pengaturan ini, Anda dapat menciptakan navigasi mobile yang fleksibel, rapi, dan user-friendly.
