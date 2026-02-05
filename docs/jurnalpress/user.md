---
title: Pengaturan User WordPress Pada Theme Jurnalpress
description: Dokumentasi lengkap cara menambahkan dan mengelola custom field user WordPress untuk Author Page dan Author Box menggunakan kode Btcore.
outline: deep
---

# Pengaturan User WordPress Pada Theme Jurnalpress

Dokumentasi ini menjelaskan cara menambahkan **custom field pada user WordPress** untuk kebutuhan Author Page dan Author Box, seperti:

- Gambar header author
- Status user terverifikasi
- Tautan sosial media

Semua pengaturan dilakukan melalui halaman **Edit Profile User** di dashboard WordPress, tanpa perlu plugin tambahan, karena seluruh fungsionalitas sudah disediakan oleh kode `Btcore_Metabox_User_Profile`.

## Video Tutorial

Berikut adalah video tutorial untuk Pengaturan User tema JurnalPress:

<YouTubeEmbed video-id="DgXa9lCuwRE" />

Untuk detail tutorial teks bisa anda lihat dibawah.

## Lokasi Pengaturan

Semua field dapat diakses melalui:

- **Users → Profile** (untuk user sendiri)
- **Users → All Users → Edit** (untuk admin)

## Tujuan

Dengan implementasi ini, Anda dapat:

- Menampilkan informasi author yang lebih kaya dan profesional
- Mengontrol tampilan author page langsung dari user profile
- Menyediakan data author yang konsisten untuk theme atau plugin

Data yang diinput akan tersimpan sebagai **user meta** dan dapat digunakan di:

- Halaman arsip author (`archive.php`)
- Author box pada single post

## Fitur Custom Field User

### 1. Image Author Page

Field ini digunakan untuk menampilkan gambar header pada halaman author.

**Lokasi:**
User Profile → *Add Image In Author Page*

**Spesifikasi:**
- Direkomendasikan ukuran: **1100×250 px**
- Menggunakan WordPress Media Library
- Disimpan sebagai user meta: `image_authorpage`

**Kegunaan umum:**
- Background header author
- Banner profil penulis

### 2. Verify User

Fitur ini digunakan untuk menandai user sebagai **verified author**.

**Lokasi:**
User Profile → *Add verify user*

**Tipe Field:**
- Checkbox

**User meta:**
- `user_check` (boolean)

**Contoh penggunaan:**
- Menampilkan icon centang (✓) di author name
- Menandai penulis resmi atau kontributor utama

### 3. Social Media User

Field sosial media memungkinkan setiap user memiliki profil sosial masing-masing.

**Daftar Field:**

| Meta Key | Keterangan |
|--------|-----------|
| `user_facebook` | URL Facebook |
| `user_instagram` | URL Instagram |
| `user_twitter` | URL Twitter / X |
| `user_youtube` | URL YouTube |
| `user_tiktok` | URL TikTok |
| `user_whatsapp` | URL WhatsApp (wa.me) |

**Tipe Input:**
- URL

**Contoh:**
```
https://instagram.com/username
https://wa.me/628xxxxxxxxx
```

## Keamanan Data

Implementasi ini sudah dilengkapi dengan:

- Nonce verification (`wp_nonce_field`)
- Permission check (`current_user_can`)
- Sanitasi URL (`esc_url_raw`)

Sehingga aman digunakan pada environment produksi.

## Cara Mengambil Data di Theme

### Image Author Page

```php
$image = get_user_meta( get_the_author_meta( 'ID' ), 'image_authorpage', true );
```

### Verify User

```php
$is_verified = get_user_meta( get_the_author_meta( 'ID' ), 'user_check', true );
```

### Social Media

```php
$instagram = get_the_author_meta( 'user_instagram' );
$facebook  = get_the_author_meta( 'user_facebook' );
```

## Contoh Implementasi di Author Box

Biasanya data ini digunakan untuk:

- Menampilkan foto header author
- Menampilkan nama + badge verified
- Menampilkan icon sosial media

Struktur umum:

- Avatar + nama author
- Badge verified (jika aktif)
- Bio author
- Social media list

## Catatan Penting

- Field hanya muncul di halaman profile user
- Script media hanya diload pada `profile.php` dan `user-edit.php`
- Tidak mempengaruhi performa frontend

## Penutup

Dengan sistem ini, pengelolaan user WordPress menjadi lebih fleksibel dan powerful, terutama untuk website berbasis **content creator, blog, dan portal berita**.
