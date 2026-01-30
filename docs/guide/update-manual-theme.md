---
title: Cara Update Manual WordPress Theme di Idtheme
outline: deep
---

# Cara Update Manual WordPress Theme di Idtheme

Panduan ini dapat digunakan untuk semua theme Idtheme, termasuk Superfast.

Metode update manual menggunakan plugin **Easy Theme and Plugin Upgrades** untuk wordpress version 6.8 ke kebawah, untuk versi terbaru atau lebih baru, tidak diperlukan lagi plugin cukup anda upload saja, dan klik Replace.

## Video Tutorial

Sebelumnya, silahkan tonton video tutorial berikut untuk panduan lengkap:
<YouTubeEmbed video-id="ESTUnK3SGis" />

## 1. Instal Plugin Easy Theme and Plugin Upgrades

1. Masuk ke **Plugins → Add New**.
2. Di kolom pencarian ketik: `Easy Theme and Plugin Upgrades`.
3. Klik **Install Now** lalu **Activate**.

Link plugin: https://id.wordpress.org/plugins/easy-theme-and-plugin-upgrades/

Plugin ini memungkinkan anda mengupload file theme dengan nama yang sama dan langsung melakukan overwrite secara aman.

## 2. Download Versi Theme Terbaru

1. Masuk ke member area Idtheme/Kentooz.
2. Cek apakah ada versi theme yang lebih baru dari yang anda gunakan saat ini.
3. Download file ZIP theme terbaru.
4. Ekstrak file jika perlu, dan pastikan anda mendapatkan file:
   - `namatheme.zip`  
     Contoh: `superfast.zip`, `muvipro.zip`, dsb.

## 3. Upload Theme Baru via Appearance → Themes

1. Masuk ke **Appearance → Themes**.
2. Klik **Add New** lalu **Upload Theme**.
3. Pilih file theme ZIP terbaru (misalnya `superfast.zip`).
4. Klik **Install Now**.

Karena plugin Easy Theme and Plugin Upgrades sudah aktif:

- WordPress akan mengenali bahwa theme dengan nama yang sama sudah ada.
- Akan muncul proses update yang menggantikan file lama dengan yang baru.

## 4. Aktivasi dan Verifikasi

Setelah upload selesai:

1. Pastikan theme yang aktif adalah versi terbaru (cek di halaman Themes).
2. Buka halaman depan website dan beberapa halaman penting (single post, arsip, dsb).
3. Jika anda menggunakan plugin cache:
   - Lakukan **clear cache**.
   - Jika memakai CDN, lakukan **purge cache**.

## 5. Tips Sebelum dan Sesudah Update

- Selalu lakukan backup:
  - Backup file theme (opsional).
  - Backup database (sangat disarankan).
- Catat perubahan kode custom:
  - Jika anda mengedit langsung file theme (bukan child theme), perubahan tersebut bisa hilang saat update.
  - Pertimbangkan penggunaan child theme untuk modifikasi custom.

Jika mengalami kesulitan:

- Dokumentasikan error (screenshot atau pesan error).
- Hubungi support Idtheme dan sertakan versi theme, URL website, dan detail masalah.

