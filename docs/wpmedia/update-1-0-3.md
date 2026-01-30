---
title: Tutorial Wpmedia Versi 1.0.3
outline: deep
---

# Tutorial Wpmedia Versi 1.0.3

Berikut adalah tutorial **WPMedia versi 1.0.3**.  
Pada update versi ini terdapat **2 fitur tambahan** yang tidak ada pada tutorial sebelumnya, yaitu:

- **Text Before & Text After in Banner Inside Content**
- **Text After Inside Content**

Fitur *Register JSON Recent Posts* memungkinkan Anda menampilkan postingan dari **domain lain atau subdomain** ke halaman utama website Anda, lengkap dengan gambar dan data lainnya.

## Video Tutorial

Sebelum memulai, silahkan lihat video tutorial berikut:

<YouTubeEmbed video-id="-nm-HBPYM2I" />

## 1. Text Before Banner Inside Content & Text After Inside Content

Untuk fitur pertama, Anda bisa melihat contohnya pada gambar berikut:

![Text Before / After Banner Inside Content](/wpmedia/v-1-0-3/text-banner-inside-content.jpg)

### Cara Pengaturan

1. Masuk ke **Customizer**
2. Pilih **Banner**
3. Masuk ke menu **Banner Inside Content**
4. Scroll ke bagian paling bawah

Silakan atur opsi sesuai dengan contoh pada gambar di atas.

Fitur ini **sangat mudah digunakan** dan tidak memerlukan konfigurasi tambahan.

## 2. Menampilkan Postingan dari Domain / Subdomain Lain

Sebelum melanjutkan, **disarankan untuk menonton video tutorial dari awal sampai selesai** agar memahami alurnya dengan benar. Jangan di-skip.

### Langkah-langkah Pengaturan

#### 1. Persiapan Theme
Pastikan:

- Domain utama dan domain target (subdomain / domain lain) **menggunakan theme WPMedia**
- Warna kategori **sama**
- Ukuran thumbnail **sama**

#### 2. Aktifkan Custom JSON
Pada **masing-masing domain target**:

- Masuk ke **Customizer → Other → Other Options**
- Aktifkan **Custom JSON Recent Posts**
- Isi **Key For Custom JSON**

Contoh pengaturan:

![Custom JSON Recent Posts](/wpmedia/v-1-0-3/custom-json-recent-posts.jpg)

#### 3. Install Plugin WPMedia WPFJ
Pada **domain utama**:

- Install plugin **WPMedia WPFJ**
- Plugin tersedia di folder `plugin` saat Anda mengekstrak file WPMedia
- Ikuti tutorial instalasi plugin yang tersedia

#### 4. Menampilkan Module Home / Top Notification

Jika ingin menampilkan **Module Home (Slider Besar di Atas)** atau **Top Notification** dari domain lain:

1. Masuk ke **Settings → WPMedia WPFJ**
2. Centang **Enable Module Home**
3. Isi:
   - **Domain Data** → domain target
   - **Key JSON** → dari domain target
   - **Cache JSON**
   - **Kategori** yang ingin ditampilkan

Pengaturan **Top Notification** sama persis dengan Module Home. Berikut adalah contoh pengaturan:

![Top Notification](/wpmedia/v-1-0-3/wpmedia-wpfj-settings.jpg)

#### 5. Menampilkan di Sidebar / Widget

Untuk menampilkan postingan dari domain lain di sidebar atau widget:

1. Masuk ke **Appearance → Widgets**
2. Gunakan widget bawaan plugin:
   - **Recent Posts (WPMedia WPFJ)**
   - **Module Posts (WPMedia WPFJ)**

Pengaturan dan tampilan **sama dengan widget bawaan theme**, dengan tambahan opsi domain eksternal.

Isi pengaturan berikut:

- **Domain Data** → domain target
- **Cache JSON**
- **Key JSON** → dari domain target
- **ID Kategori**
  - Kosongkan jika ingin menampilkan semua kategori

Berikut adalah contoh pengaturan widget WPMedia WPFJ:

![WPMedia WPFJ Widget](/wpmedia/v-1-0-3/wpmedia-wpfj-widget.jpg)

#### 6. Selesai 🎉

## Catatan Penting

::: warning Perhatian
- Jangan lupa **clear cache** setiap selesai mengatur opsi di atas
- Disarankan semua domain berada dalam **1 server**
- Domain utama dan target **harus menggunakan theme yang sama**
- Jika subdomain tidak tampil:
  - Periksa firewall
  - Pastikan konfigurasi benar
  - Lakukan **whitelist domain** pada hosting (hubungi pihak hosting)
- **Tonton video tutorial tanpa di-skip**
:::
