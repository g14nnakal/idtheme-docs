---
title: Menu (Footer Layout)
description: "Dokumentasi pengaturan Menu Footer pada panel Footer di WordPress Customizer tema JurnalPress."
outline: deep
---

# Menu (Footer Layout)

Section **Footer Menu** digunakan untuk mengatur dan menampilkan komponen menu pada area footer website. Opsi ini berada di **Customizer → Footer → Menu** dan berfungsi sebagai kontrol utama untuk mengaktifkan atau menonaktifkan menu footer.

Menu footer biasanya digunakan untuk:
- Navigasi tambahan
- Link penting (About, Contact, Privacy Policy)
- Informasi pendukung di bagian bawah website

## Lokasi Pengaturan

```
Appearance → Customize → Footer Layout → Menu
```

## Deskripsi Section

Section ini memiliki deskripsi interaktif yang membantu pengguna langsung menuju pengaturan menu WordPress:

> *Allow you setting footer menu component. Please Config Footer Menu Here.*

Link **Config Footer Menu Here** akan membawa pengguna ke panel **Navigation Menus** (`nav_menus`) di Customizer untuk mengatur item menu footer.

## Opsi yang Tersedia

### Enable Menu

Mengaktifkan atau menonaktifkan tampilan menu footer pada website.

| Properti        | Keterangan |
|-----------------|------------|
| **Label**       | Enable Menu |
| **ID**          | `_enable_menufooter` |
| **Tipe Kontrol**| Toggle (`btcore-toggle`) |
| **Default**     | Aktif (`1`) |

#### Perilaku
- **ON** → Menu footer akan ditampilkan di frontend
- **OFF** → Menu footer tidak dirender sama sekali

Opsi ini berguna jika:
- Footer tidak membutuhkan navigasi
- Ingin tampilan footer lebih minimal
- Menghemat ruang pada tampilan mobile

## Integrasi dengan Navigation Menu

Pengaturan ini **tidak mengatur item menu secara langsung**.  
Untuk mengelola isi menu footer (link, urutan, label), silakan gunakan:

1. **Customizer → Navigation Menus**
2. Pilih menu footer (biasanya bernama "Footer Menu")
3. Edit item menu sesuai kebutuhan

Atau klik langsung link **Config Footer Menu Here** di dalam section ini.

## Catatan Developer

- Opsi ini biasanya digunakan sebagai **conditional render** pada template footer.
- Jika nilai `_enable_menufooter` bernilai `false`, maka:
  - Wrapper menu footer sebaiknya tidak dirender
  - Tidak perlu memuat markup HTML tambahan
- Cocok dikombinasikan dengan:
  - Grid footer
  - Multiple footer columns
  - Responsive footer layout

## Ringkasan

Section **Footer Menu** berfungsi sebagai kontrol utama untuk menampilkan menu navigasi di area footer. Dengan satu toggle sederhana, pengguna dapat mengaktifkan atau menonaktifkan menu footer tanpa perlu menghapus menu yang sudah dibuat.