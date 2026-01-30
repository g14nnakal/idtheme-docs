---
title: HTML (Footer Layout)
description: "Dokumentasi opsi HTML Footer pada panel Footer Customizer untuk menampilkan konten HTML kustom di area footer website."
outline: deep
---

# HTML (Footer Layout)

Section **HTML Footer** digunakan untuk menambahkan dan mengelola konten HTML kustom pada area footer website. Opsi ini mendukung editor visual (TinyMCE), shortcode, serta placeholder dinamis seperti tahun dan informasi situs.

Section ini sangat cocok untuk menampilkan copyright, kredit tema, tautan tambahan, atau konten HTML lainnya di bagian footer.

## Lokasi Pengaturan

```
Appearance → Customize → Footer Layout → HTML
```

## Opsi

### Enable Html
**Customizer ID:** `*_enable_htmlfooter`  
**Type:** Toggle  

Mengaktifkan area HTML kustom di footer.

### Perilaku

- Jika **Enabled**, konten HTML Footer akan ditampilkan di frontend.
- Jika **Disabled**, seluruh konten HTML Footer tidak akan dirender meskipun isinya ada.

### Content
**Customizer ID:** `*_htmlfooter1`  
**Type:** TinyMCE Editor  

Mengatur konten HTML yang akan ditampilkan di footer.

**Default:** `Copyright © {current_year} - Theme: Jurnalpress`

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
© {current_year} {site_title}. All rights reserved.
```

Anda juga dapat memasukkan shortcode dari plugin Anda sendiri.

## Best Practice

- Copyright dan informasi legal
- Kredit tema atau developer
- Link kebijakan privasi dan syarat layanan
- Informasi tambahan atau banner ringan
- Shortcode sosial media atau newsletter subscription

## Catatan Penting

- Pastikan Enable Html dalam kondisi aktif agar konten tampil.
- Gunakan HTML yang valid untuk menghindari masalah layout.
- Placeholder hanya akan diproses di frontend, bukan di editor.