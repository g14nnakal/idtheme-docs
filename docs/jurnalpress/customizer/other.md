---
title: Other (Customizer) – Theme JurnalPress
description: Pengaturan Head/Footer Script, Analytic & Pixel, dan opsi lain (hapus emoji, cache dynamic CSS). Cocok untuk menyisipkan script global dan optimasi performa.
outline: deep
---

# Other (Customizer) – Theme JurnalPress

## Video Tutorial

Berikut adalah video tutorial untuk panel Other pada Customizer tema JurnalPress:

<YouTubeEmbed video-id="SB3tbdH_pEY" />

Untuk detail tutorial teks bisa anda lihat dibawah.

## Lokasi Pengaturan
```
Appearance → Customize → Other
```

## Head Script
- HTML code (textarea)
  - sanitize_callback: btcore_customizer_sanitize_textareajsallowed
  - deskripsi: menambahkan script di dalam tag &lt;head&gt;…&lt;/head&gt;
- HTML code (AMP version) (textarea)
  - muncul bila plugin AMP aktif
  - deskripsi: sisipkan versi AMP dari script Anda

## Footer Script
- HTML code (textarea)
  - sanitize_callback: btcore_customizer_sanitize_textareajsallowed
  - deskripsi: menambahkan script sebelum penutup &lt;/body&gt;
- HTML code (AMP version) (textarea)
  - muncul bila plugin AMP aktif
  - deskripsi: sisipkan versi AMP dari script Anda

## Analytic & Pixel
- Google Analytics ID (text)
  - placeholder: UA-XXXXX-X atau G-XXXXXXXXXX
- Facebook Pixel ID (text)
  - placeholder: 12345678910

## Other Options
- Remove emoji script (btcore-toggle)
  - Default: On (1)
- Enable cache dynamic css (btcore-toggle)
  - Default: Off (0)
  - deskripsi: seluruh CSS dari opsi disatukan dan disimpan di satu entri database untuk kecepatan
