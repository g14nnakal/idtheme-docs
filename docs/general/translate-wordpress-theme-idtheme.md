---
title: Terjemahkan Bahasa WordPress dan Theme Idtheme ke Bahasa Indonesia
outline: deep
---

# Terjemahkan Bahasa WordPress dan Theme Idtheme ke Bahasa Indonesia

Untuk pengguna di Indonesia, menerjemahkan WordPress, plugin, dan theme (termasuk Idtheme) ke bahasa Indonesia akan memudahkan pengelolaan situs.

## Video Tutorial (Placeholder)

Berikut video yang menjelaskan langkah-langkah pengaturan bahasa dan penggunaan Loco Translate.

<YouTubeEmbed video-id="nu89ml-dfdk" />

## 1. Menggunakan Pengaturan Bahasa WordPress

1. Masuk ke **Settings → General**.
2. Cari opsi **Site Language**.
3. Pilih **Indonesia**.
4. Simpan perubahan.

![Site Language WordPress](/general/translate/site-language-wordpress.jpg)

WordPress akan mencoba mengunduh paket bahasa Indonesia untuk core dan plugin/theme yang mendukung.

Setelah langkah ini:

- Banyak teks bawaan WordPress akan otomatis berubah ke Bahasa Indonesia.
- Theme Idtheme yang sudah menyediakan file terjemahan bahasa Indonesia akan ikut berubah.

## 2. Menggunakan Plugin Loco Translate

Plugin populer untuk menerjemahkan string theme/plugin adalah **Loco Translate**.

1. Masuk ke **Plugins → Add New**.
2. Cari `Loco Translate`.
3. Instal dan aktifkan plugin Loco Translate.

Link plugin Loco Translate: https://wordpress.org/plugins/loco-translate/

### Menerjemahkan Theme Idtheme

1. Masuk ke **Loco Translate → Themes**.
2. Pilih theme Idtheme yang ingin diterjemahkan.
3. Klik **New language** (jika belum ada).
4. Pilih bahasa **Indonesian** dan lokasi file terjemahan (disarankan di folder `languages/loco` agar aman saat update).
5. Klik **Start translating**.
6. Cari string yang ingin diterjemahkan dan isi terjemahannya.
7. Klik **Save**.

### Menerjemahkan Plugin

Langkahnya sama, tetapi masuk ke **Loco Translate → Plugins** dan pilih plugin yang ingin diterjemahkan.

## 3. Jangan Mengedit File Core Theme/Plugin Langsung

Disarankan:

- **Jangan** mengedit file bahasa langsung di folder core theme/plugin, karena:
  - File tersebut bisa tertimpa saat update.
- Gunakan selalu Loco Translate dan simpan terjemahan di lokasi yang disarankan (misalnya `languages/loco` atau direktori custom yang aman).

Dengan cara ini, ketika theme Idtheme di-update:

- File terjemahan anda tetap aman.
- Anda hanya perlu melakukan sinkronisasi jika ada string baru.

## 4. Sinkronisasi Setelah Update

Setelah update theme atau plugin:

- Kadang terdapat string baru.
- Buka kembali di Loco Translate dan klik **Sync** untuk mengambil string terbaru.

## 5. Tips Terjemahan

- Gunakan istilah yang konsisten (misalnya “Beranda” untuk Home, “Artikel” untuk Posts).
- Hindari terjemahan yang terlalu panjang agar tidak merusak layout.
