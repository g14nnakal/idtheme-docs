---
title: Author Box (Module) – Theme JurnalPress
description: Pengaturan Author Box pada halaman Single Post JurnalPress untuk menampilkan informasi penulis setelah konten artikel. Ini adalah module After Content Element.
outline: deep
---

# Author Box (Module) – Theme JurnalPress

Author Box adalah fitur pada **Single Post** yang berfungsi menampilkan informasi penulis artikel setelah konten utama. Section ini dapat dikonfigurasi melalui **Customizer → Single Posts → After Content Element → Author Box**.

Fitur ini berguna untuk meningkatkan kredibilitas penulis, memperkenalkan author kepada pembaca, serta menampilkan profil dan sosial media penulis.


## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → Author Box
```

## Tab Pengaturan
Section **Author Box** memiliki dua tab utama:

- **General** – Pengaturan dasar dan fitur Author Box
- **Style** – Pengaturan tampilan (box style & typography)

## General Settings

### Enable Author Box

Mengaktifkan atau menonaktifkan Author Box pada halaman Single Post.

- **Default:** Off
- **Tipe:** Toggle

Jika dinonaktifkan, Author Box tidak akan ditampilkan sama sekali.

### Avatar

Menampilkan avatar penulis (menggunakan avatar WordPress / Gravatar).

- **Default:** On
- **Tipe:** Toggle

Jika dimatikan, avatar penulis tidak akan muncul.

### Avatar Width (px)

Mengatur lebar avatar penulis dalam satuan piksel.

- **Default:** 80px
- **Minimum:** 40px
- **Maximum:** 100px
- **Step:** 1px
- **Tipe:** Range slider

Pengaturan ini hanya berpengaruh jika opsi **Avatar** diaktifkan.

### Verify Icon?

Menampilkan ikon verifikasi pada nama penulis.

- **Default:** On
- **Tipe:** Toggle

Biasanya digunakan untuk menandai penulis resmi, editor, atau author terverifikasi.

### Social Author

Menampilkan daftar sosial media penulis di dalam Author Box.

- **Default:** On
- **Tipe:** Toggle

Sosial media diambil dari **profile user WordPress** (User Profile).

### Box Style

Opsi ini berasal dari fungsi `jurnalpress_customizer_options_box_style`.

**Style**
- No Style
- Add Style (Boxed)

**Background Color**
- Solid
- Gradient

**Background Image**
- Posisi
- Opacity
- Size
- Repeat
- Attachment

**Border Radius**
Mengatur sudut box (radius).

**Border**
- Enable / Disable
- Color
- Width
- Style

### Typography

Opsi tipografi berasal dari fungsi `jurnalpress_customizer_options_content_typography`.

**Post Title**
- Font size
- Weight
- Line height
- Transform
- Color
- Hover color

> Warna font untuk title author box

**Excerpt Color**
Mengatur warna teks excerpt.

## Catatan Tambahan

- Author Box hanya muncul pada Single Post
- Informasi penulis diambil dari User Profile WordPress
- Pastikan bio dan sosial media author sudah diisi agar tampil optimal
- Author Box muncul setelah konten artikel

## Tips Penggunaan

- Aktifkan Verify Icon untuk meningkatkan trust pada artikel editorial
- Gunakan ukuran avatar 64–80px untuk tampilan yang seimbang
- Aktifkan Social Author untuk meningkatkan engagement pembaca
