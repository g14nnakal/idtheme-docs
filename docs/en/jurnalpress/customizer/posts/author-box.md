---
title: Author Box (Module) – JurnalPress Theme
description: Author Box settings on JurnalPress Single Post pages to display author information after article content. This is an After Content Element module.
outline: deep
---

# Author Box (Module) – JurnalPress Theme

Author Box is a **Single Post** feature that displays author information after the main content. Configure this via **Customizer → Single Posts → After Content Element → Author Box**.

This feature helps increase author credibility, introduce the author to readers, and display the author’s profile and social media.


## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → Author Box
```
## Tabs
The **Author Box** section has two main tabs:
Section **Author Box** memiliki dua tab utama:
- **General** – Basic settings and features
- **Style** – Appearance settings (box style & typography)
- **Style** – Pengaturan tampilan (box style & typography)

## General Settings

### Enable Author Box
Enable or disable Author Box on Single Post pages.
Mengaktifkan atau menonaktifkan Author Box pada halaman Single Post.
- **Default:** Off
- **Type:** Toggle
- **Tipe:** Toggle
If disabled, Author Box will not be displayed.
Jika dinonaktifkan, Author Box tidak akan ditampilkan sama sekali.

### Avatar
Display the author’s avatar (WordPress / Gravatar).
Menampilkan avatar penulis (menggunakan avatar WordPress / Gravatar).
- **Default:** On
- **Type:** Toggle
- **Tipe:** Toggle
If turned off, the author’s avatar will not appear.
Jika dimatikan, avatar penulis tidak akan muncul.

### Avatar Width (px)
Set avatar width in pixels.
Mengatur lebar avatar penulis dalam satuan piksel.

- **Default:** 80px
- **Minimum:** 40px
- **Maximum:** 100px
- **Type:** Range slider
- **Tipe:** Range slider
This only applies if **Avatar** is enabled.
Pengaturan ini hanya berpengaruh jika opsi **Avatar** diaktifkan.

### Verify Icon?
Display a verification icon next to the author’s name.
Menampilkan ikon verifikasi pada nama penulis.
- **Default:** On
- **Type:** Toggle
- **Tipe:** Toggle
Typically used to mark official authors, editors, or verified authors.
Biasanya digunakan untuk menandai penulis resmi, editor, atau author terverifikasi.

### Social Author
Display the author’s social media list within the Author Box.
Menampilkan daftar sosial media penulis di dalam Author Box.
- **Default:** On
- **Type:** Toggle
- **Tipe:** Toggle
Social media data comes from the **WordPress user profile** (User Profile).
Sosial media diambil dari **profile user WordPress** (User Profile).

### Box Style
This option is provided by the `jurnalpress_customizer_options_box_style` function.
Opsi ini berasal dari fungsi `jurnalpress_customizer_options_box_style`.

**Style**
- No Style
- Add Style (Boxed)

**Background Color**
- Solid
- Gradient

- Position
- Opacity
- Size
- Repeat
- Attachment
- Attachment

Configure box corner radius.
Mengatur sudut box (radius).

**Border**
- Enable / Disable
- Color
- Width
- Style

### Typography
Typography options come from the `jurnalpress_customizer_options_content_typography` function.
Opsi tipografi berasal dari fungsi `jurnalpress_customizer_options_content_typography`.

**Post Title**
- Font size
- Weight
- Line height
- Transform
- Color
- Hover color
> Font color applies to the author box title
> Warna font untuk title author box

Set excerpt text color.
Mengatur warna teks excerpt.

## Catatan Tambahan
- Author Box appears only on Single Posts
- Author information is sourced from the WordPress User Profile
- Ensure the author’s bio and social media are filled for optimal display
- Author Box appears after the article content
- Author Box muncul setelah konten artikel

## Tips Penggunaan
- Enable the Verify Icon to increase trust for editorial articles
- Use avatar sizes of 64–80px for balanced visuals
- Enable Social Author to increase reader engagement
