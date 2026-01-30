---
title: Search (Header Layout) - Theme Jurnalpress
description: "Pengaturan Search pada panel Header di Customizer JurnalPress: enable, label teks, search slide, dan opsi style (color, radius, border, box shadow)."
outline: deep
---

# Search (Header Layout) - Theme Jurnalpress

Section **Search** mengatur tampilan dan perilaku kolom pencarian di area header tema **JurnalPress**.

## Lokasi di Customizer

```
Appearance → Customize → Header → Search
```

## Tabs

- **General** – Mengatur fitur utama pencarian
- **Style** – Mengatur tampilan visual elemen input pencarian

## General Settings

### Enable Search
**Customizer ID:** `*_search_active`  
**Type:** Toggle  

Mengaktifkan kolom pencarian pada header.

**Default:** Enabled (1)

### Search Text
**Customizer ID:** `*_search_text`  
**Type:** Text  
**Placeholder:** `Search`  
**Description:** Ubah teks default yang tampil sebagai label/placeholder pada input pencarian.

### Enable Search Slide
**Customizer ID:** `*_search_slide_active`  
**Type:** Toggle  
**Description:** Saat input fokus, menampilkan panel slide berisi **recent tags** dan **recent searches** untuk mempercepat akses pencarian.

**Default:** Enabled (1)

## Style Settings

### Color
**Customizer ID:** `*_search_color`  
**Type:** Multi Color  

Mengatur warna elemen input pencarian:
- **Background** – warna latar input
- **Text** – warna teks di dalam input

Default nilai dikosongkan agar mengikuti tema global.

### Border Radius
**Customizer ID:** `*_search_radius`  
**Type:** Box Control (radius)  

Mengatur kelengkungan sudut input pencarian. Mendukung pengaturan per sisi (Top, Right, Bottom, Left).

### Border
**Customizer ID:** `*_search_border`  
**Type:** Border Control (enable hover)  

Properti umum:
- Enable: `1` (aktif)
- Color / Hover Color
- Width per sisi: `1px` (Top, Right, Bottom, Left)
- Style: `solid`

Mengatur garis tepi input, termasuk warna saat hover.

### Box Shadow
**Customizer ID:** `*_search_boxshadow`  
**Type:** Box Shadow  

Default:
- Enable: `0` (nonaktif)
- Color: `#0b2b9e26`
- Horizontal Offset: `0px`
- Vertical Offset: `10px`
- Blur: `10px`
- Spread: `-12px`

Memberikan efek bayangan halus pada input pencarian. Aktifkan jika ingin menonjolkan elemen.

## Best Practice

- Gunakan teks placeholder yang jelas dan singkat (mis. “Search” atau “Cari…”)
- Jaga kontras warna agar teks input tetap terbaca
- Gunakan radius dan shadow secukupnya agar tidak mengganggu layout header
- Aktifkan **Search Slide** untuk meningkatkan discoverability melalui recent tags/searches

## Ringkasan

Bagian **Search (Header)** menyediakan kontrol lengkap untuk mengaktifkan kolom pencarian, mengatur label teks, menambahkan panel slide saat fokus, serta menyesuaikan tampilan melalui warna, radius, border, dan box shadow.

