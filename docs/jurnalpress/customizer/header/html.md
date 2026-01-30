---
title: HTML (Header Layout) - Theme Jurnalpress
description: "Pengaturan HTML Header pada Customizer theme JurnalPress. Mengaktifkan area HTML kustom dan mengatur kontennya via editor TinyMCE dengan dukungan placeholder dan shortcode."
outline: deep
---

# HTML (Header Layout) - Theme Jurnalpress

Section **HTML** memungkinkan Anda menampilkan **konten kustom** di area header menggunakan editor **TinyMCE**. Cocok untuk teks singkat, tautan, atau informasi dinamis (tanggal, tahun, dsb).

## Lokasi di Customizer

```
Appearance → Customize → Header → HTML
```

## Opsi

### Enable Html
**Customizer ID:** `*_enable_htmlheader`  
**Type:** Toggle  

Mengaktifkan area HTML kustom di header.

**Default:** Enabled (1)

### Content
**Customizer ID:** `*_htmlheader1`  
**Type:** TinyMCE Editor  

Mengatur konten HTML yang akan ditampilkan di header.

**Default:** `{current_date}`

**Description:**  
Masukkan konten di dalam editor TinyMCE. Opsi ini mendukung **placeholder dinamis** dan **shortcode**.

**Placeholder yang tersedia:**

| Placeholder | Keterangan |
|------------|------------|
| `{current_date}` | Tanggal hari ini |
| `{current_year}` | Tahun berjalan |
| `{site_title}` | Judul website |
| `{site_description}` | Deskripsi website |
| `{site_url}` | URL website |

**Input Attrs:**
- `mediaButtons: true` – tombol unggah media aktif

## Contoh Penggunaan

```html
<span>© {current_year} {site_title}</span>
```

Anda juga dapat memasukkan shortcode dari plugin Anda sendiri.

## Best Practice

- Gunakan konten singkat agar tidak mengganggu layout header
- Pastikan tautan penting menggunakan HTTPS
- Manfaatkan placeholder untuk konten dinamis tanpa perlu mengubah teks setiap tahun

## Ringkasan

Bagian **HTML (Header)** memberi Anda kebebasan menampilkan konten kustom di header melalui editor TinyMCE dengan dukungan placeholder dan shortcode.

