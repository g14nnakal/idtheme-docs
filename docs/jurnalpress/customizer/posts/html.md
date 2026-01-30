---
title: HTML After Content (Module) - Theme JurnalPress
description: Dokumentasi opsi HTML pada panel Single Posts di Customizer untuk menambahkan konten HTML setelah isi artikel.
outline: deep
---

# HTML After Content (Module) - Theme JurnalPress

Section **HTML** pada panel **Single Posts → After Content** digunakan untuk menambahkan konten HTML kustom yang akan ditampilkan **setelah isi artikel (post content)**. Opsi ini sangat berguna untuk menampilkan banner, CTA, iklan, notifikasi, atau konten tambahan lainnya tanpa perlu mengedit template PHP.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → HTML
```

## Ringkasan Fitur

- Menambahkan konten HTML setelah konten postingan
- Menggunakan editor **TinyMCE (visual editor)**
- Mendukung **shortcode WordPress**
- Mendukung **placeholder/dynamic tag** bawaan tema
- Mendukung media (gambar, embed, dll)

## Opsi yang Tersedia

### Content

Opsi ini berfungsi sebagai area utama untuk memasukkan konten HTML atau visual yang akan ditampilkan setelah artikel.

**Tipe Input:**
- TinyMCE Editor (`idt_tinymce`)

**Default Value:**
```
Welcome to our website
```

**Deskripsi:**

Konten yang dimasukkan dapat berupa teks, HTML, media, maupun shortcode. Editor ini mendukung beberapa sintaks dinamis yang akan otomatis digantikan dengan nilai aktual dari situs.

## Placeholder yang Didukung

Anda dapat menggunakan placeholder berikut di dalam konten:

| Placeholder | Deskripsi |
|------------|----------|
| `{current_date}` | Menampilkan tanggal saat ini |
| `{current_year}` | Menampilkan tahun saat ini |
| `{site_title}` | Judul situs WordPress |
| `{site_description}` | Tagline / deskripsi situs |
| `{site_url}` | URL utama situs |

**Contoh Penggunaan:**

```html
<p>&copy; {current_year} {site_title}. All rights reserved.</p>
```

## Dukungan Shortcode

Opsi ini **mendukung shortcode WordPress**, termasuk shortcode dari plugin pihak ketiga.

**Contoh:**

```html
[contact-form-7 id="123"]
```

Atau:

```html
[custom_ads id="after-content"]
```

## Media & Visual Editor

Karena menggunakan TinyMCE:

- Anda dapat menambahkan **gambar** langsung dari Media Library
- Mendukung embed (YouTube, iframe, dll)
- Mendukung formatting visual (bold, link, list, heading)

## Catatan Teknis

- Konten akan dirender **setelah `the_content()`** pada single post
- Cocok untuk:
  - CTA (Call to Action)
  - Banner promosi
  - Iklan
  - Informasi tambahan
- Pastikan shortcode yang digunakan **tersedia dan aktif**

## Best Practice

- Gunakan HTML sederhana agar konsisten dengan tema
- Hindari script berat jika tidak diperlukan
- Gunakan shortcode untuk logika kompleks
- Uji tampilan di berbagai jenis postingan

## Ringkasan

Section **HTML After Content** memberikan fleksibilitas tinggi untuk menambahkan konten dinamis setelah artikel tanpa menyentuh kode template. Dengan dukungan TinyMCE, shortcode, dan placeholder, fitur ini cocok untuk kebutuhan konten tambahan yang reusable dan mudah dikelola melalui Customizer.
