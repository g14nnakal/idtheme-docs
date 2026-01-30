---
title: Widget (Home Top Module) - Theme Jurnalpress
description: Pengaturan Widget Top pada Home Top Module di theme JurnalPress untuk menampilkan widget fullwidth di bagian atas halaman beranda.
outline: deep
---

# Widget (Home Top Module) - Theme Jurnalpress

Section **Widget Top** digunakan untuk menampilkan widget berbasis WordPress Widget Area pada bagian **Home Top Module**. Area ini cocok digunakan untuk banner, iklan, CTA, short info, atau widget kustom lainnya dengan tampilan **fullwidth**.

Pengaturan ini **tidak memiliki banyak opsi konfigurasi**, karena seluruh konten dikontrol langsung dari **Widget Manager WordPress**.

## Lokasi Pengaturan
```
Appearance → Customize → Homepage → Home Top Module → Widgets
```

## Cara Menggunakan Widget Top

1. Masuk ke **Appearance → Widgets**  
   atau  
   **Appearance → Customize → Widgets**
2. Cari widget area bernama: **Module Home Top Fullwidth**
3. Tambahkan widget yang diinginkan dengan metode **drag & drop**
4. Simpan perubahan

Widget akan langsung tampil di bagian **atas halaman home**, sesuai urutan widget yang ditambahkan.
## Catatan Penting

::: tip Note
Untuk menambahkan widget, **tidak dilakukan di panel ini**, melainkan melalui menu **Widgets**.
:::

Panel ini hanya berfungsi sebagai **informasi dan shortcut** ke pengaturan widget.

## Hook yang Tersedia

Theme **JurnalPress** menyediakan hook untuk developer agar dapat menambahkan atau memodifikasi output widget Home Top secara programatis.

### Before Widget Home Top
```php
do_action( 'jurnalpress_before_widget_module_home_top' );
```

Digunakan untuk:

- Menambahkan wrapper tambahan
- Menyisipkan elemen sebelum widget
- Tracking atau custom markup

### After Widget Home Top
```php
do_action( 'jurnalpress_after_widget_module_home_top' );
```

Digunakan untuk:

- Menutup wrapper tambahan
- Menambahkan elemen tambahan setelah widget
- Inject script atau layout lanjutan

## Kegunaan Umum Widget Top

Widget Top sangat cocok untuk:
- List Widget grid
- Iklan Google AdSense
- Pengumuman penting
- CTA (Call To Action)

## Ringkasan

| Fitur | Keterangan |
| ------------- | :-----------: |
| Posisi | Home Top (Fullwidth) |
| Pengaturan Konten | Appearance → Widgets |
| Support Hook | Ya |
