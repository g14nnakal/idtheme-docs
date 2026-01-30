---
title: Sidebar (Pages) – Theme JurnalPress
description: Pengaturan sidebar untuk halaman arsip, single post, page default, dan author page termasuk opsi sticky dan ukuran.
outline: deep
---

# Sidebar (Pages) – Theme JurnalPress

Section **Sidebar** pada panel **Pages** di Customizer JurnalPress digunakan untuk mengatur tampilan dan perilaku sidebar pada berbagai jenis halaman, seperti Archive, Single Post, Page, dan Author Page. Pengaturan ini membantu menyesuaikan layout konten agar sesuai dengan kebutuhan desain dan pengalaman pengguna.

## Lokasi Pengaturan
```
Appearance → Customize → Pages → Sidebar
```

## Tab Pengaturan

Section ini terdiri dari dua tab utama:

- **General**: Mengatur posisi sidebar untuk setiap jenis halaman.
- **Style**: Mengatur perilaku dan tampilan sidebar secara visual.

## Tab: General

### Archive Sidebar

Mengatur posisi sidebar pada halaman arsip (kategori, tag, tanggal, dan arsip lainnya).

**Opsi:**
- Menggunakan kontrol visual (SVG Button).
- Default: `rightsidebar`.

**Pilihan Layout Sidebar:**
- **No Sidebar** (`nosidebar`) — Konten full width tanpa sidebar.
- **No Sidebar Simple** (`simple`) — Tanpa sidebar dengan lebar konten standar.
- **No Sidebar Narrow** (`narrow`) — Tanpa sidebar dengan konten lebih sempit.
- **Left Sidebar** (`leftsidebar`) — Sidebar di sebelah kiri konten.
- **Right Sidebar** (`rightsidebar`) — Sidebar di sebelah kanan konten.

### Single Sidebar

Mengatur posisi sidebar pada halaman single post.

**Opsi:**
- Kontrol visual dengan SVG Button.
- Default: `rightsidebar`.

**Pilihan Layout Sidebar:**
- No Sidebar
- No Sidebar Simple
- No Sidebar Narrow
- Left Sidebar
- Right Sidebar

### Default Page Sidebar

Mengatur posisi sidebar pada halaman Page (halaman statis).

**Opsi:**
- Kontrol visual dengan SVG Button.
- Default: `narrow`.

**Pilihan Layout Sidebar:**
- No Sidebar
- No Sidebar Simple
- No Sidebar Narrow
- Left Sidebar
- Right Sidebar

### Author Page Sidebar

Mengatur posisi sidebar pada halaman Author.

**Opsi:**
- Kontrol visual dengan SVG Button.
- Default: `simple`.

**Pilihan Layout Sidebar:**
- No Sidebar
- No Sidebar Simple
- No Sidebar Narrow
- Left Sidebar
- Right Sidebar

## Tab: Style

### Sticky Sidebar

Mengaktifkan atau menonaktifkan sidebar agar tetap terlihat saat halaman di-scroll.

**Opsi:**
- Toggle On/Off.
- Default: Aktif.

### Sticky Position Top

Menentukan jarak sidebar dari bagian atas viewport saat mode sticky aktif.

**Opsi:**
- Range slider.
- Nilai minimum: 1.
- Nilai maksimum: 200.
- Default mengikuti konfigurasi theme.

### Sidebar Size

Mengatur ukuran lebar sidebar.

**Opsi:**
- Kontrol visual (SVG Button).
- Pilihan ukuran Standard dan Small.

## Catatan

- Setiap opsi layout sidebar direpresentasikan dengan ikon SVG agar mudah dipahami secara visual di Customizer.
- Opsi **No Sidebar** cocok untuk landing page atau halaman fokus konten.
- **Sticky Sidebar** bekerja optimal pada layout dengan sidebar kiri atau kanan.
- Pengaturan ini bersifat global untuk masing-masing tipe halaman.
- Pastikan widget sidebar telah diatur pada menu **Appearance → Widgets**.
