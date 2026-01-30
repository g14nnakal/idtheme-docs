---
title: Content with Sidebar (Module) - Theme Jurnalpress
description: Dokumentasi pengaturan Content with Sidebar pada Home Top Module di Customizer theme JurnalPress untuk menampilkan daftar post dengan sidebar di homepage.
outline: deep
---

# Content with Sidebar (Module) - Theme Jurnalpress

Section **Content with Sidebar** digunakan untuk menampilkan daftar post di halaman homepage dengan layout **konten utama + sidebar**, mirip seperti tampilan **latest post archive** atau **latest post with sidebar**.

Fitur ini berada di **Customizer → Homepage → Home Top Module → Content with Sidebar** dan sangat cocok digunakan untuk menampilkan konten terbaru sekaligus widget tambahan di homepage.

## Lokasi pengaturan:
```
Appearance → Customizer → Homepage → Home Top Module → Content with Sidebar
```

## Catatan Penting

::: warning Perhatian
- Jika fitur ini diaktifkan, maka **Latest Post with Sidebar** yang berada **di bawahnya** akan **meng-offset jumlah post**.  
  Contoh:  
  Jika jumlah post diatur **3**, maka module berikutnya akan dimulai dari **post ke-4**.
- Section ini menggunakan **Sidebar Home** dan **Module Home Before 1st Post**.
  Silakan atur widget melalui:
  **Appearance → Widgets** atau **Customizer → Widgets**
:::

## Daftar Opsi

### 1. Enable Content with Sidebar

**Path:**  
`Customizer → Home Top Module → Content with Sidebar`

Mengaktifkan atau menonaktifkan tampilan **Content with Sidebar** di homepage.

- **Tipe:** Toggle
- **Default:** Off
- **Keterangan:**
  - Layout mengikuti pengaturan **Archive / Latest Post**
  - Untuk mengatur tampilan layout post (grid/list, meta, thumbnail, dll), silakan buka:

    **Customizer → Pages → Archive**

### 2. Number Posts

Menentukan jumlah post yang ditampilkan pada section **Content with Sidebar**.

- **Tipe:** Range Slider
- **Minimum:** 2
- **Maximum:** 6
- **Default:** 3
- **Catatan:**
  - Jumlah post ini akan memengaruhi urutan post pada module homepage setelahnya

### 3. Title Text

Mengatur judul section **Content with Sidebar** di homepage.

- **Tipe:** Text
- **Keterangan:**
  - Isi teks untuk menampilkan judul
  - Kosongkan field ini jika **tidak ingin menampilkan judul**

## Widget yang Digunakan

Section ini memanfaatkan widget berikut:

- **Sidebar Home**
- **Module Home Before 1st Post**

Untuk mengatur widget:

1. Buka **Appearance → Widgets**, atau
2. Buka **Customizer → Widgets**
3. Tambahkan widget ke:
   - *Sidebar Home*
   - *Module Home Before 1st Post*

## Tips Penggunaan

- Gunakan **judul section** untuk membedakan konten utama homepage (misalnya: *Latest Updates*, *Featured Content*).
- Kombinasikan dengan widget seperti:
  - Popular Posts
  - Advertisement
  - Newsletter
  - Custom HTML
- Cocok dipadukan dengan layout archive **list + sidebar** untuk tampilan blog/news yang konsisten.

## Ringkasan

| Opsi | Fungsi |
|-----|-------|
| Enable Content with Sidebar | Mengaktifkan section |
| Number Posts | Mengatur jumlah post |
| Title Text | Judul section |
| Sidebar Home | Area widget samping |
| Module Home Before 1st Post | Widget sebelum post pertama |
