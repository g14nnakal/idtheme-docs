---
title: Navigation Posts (Module) – Theme JurnalPress
description: Pengaturan navigasi post sebelumnya dan selanjutnya yang ditampilkan setelah konten artikel pada Single Post.
outline: deep
---

# Navigation Posts (Module) – Theme JurnalPress

Section **Navigation Posts** digunakan untuk mengatur tampilan navigasi artikel **Previous Post** dan **Next Post** yang muncul setelah konten utama pada halaman **Single Post**.

Fitur ini membantu meningkatkan pengalaman membaca dengan memudahkan pengunjung berpindah ke artikel lain secara berurutan.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → Navigation Posts
```

## Opsi yang Tersedia

### 1. Navigation Post

Mengaktifkan atau menonaktifkan navigasi artikel sebelumnya dan selanjutnya pada halaman Single Post.

- **Tipe**: Toggle
- **Default**: Aktif (`On`)
- **ID Opsi**: `{prefix}_single_post_navigation`

**Perilaku:**
- Jika **aktif**, navigasi Previous & Next Post akan ditampilkan setelah konten artikel.
- Jika **nonaktif**, seluruh elemen navigasi post tidak akan dirender.

### 2. Thumbnail In Navigation

Menampilkan thumbnail (featured image) pada navigasi Previous dan Next Post.

- **Tipe**: Toggle
- **Default**: Aktif (`On`)
- **ID Opsi**: `{prefix}_single_post_navigation_thumb`

**Perilaku:**
- Jika **aktif**, setiap item navigasi akan menampilkan thumbnail dari post terkait.
- Jika **nonaktif**, navigasi hanya menampilkan judul dan informasi teks tanpa gambar.

## Catatan Tambahan

- Section **Navigation Posts** merupakan bagian dari **After Content Element**, sehingga hanya muncul setelah konten utama artikel.
- Opsi thumbnail bergantung pada post yang memiliki **featured image**.
- Pengaturan ini cocok digunakan untuk meningkatkan **internal linking** dan **time on site**.