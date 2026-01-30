---
title: Cara Posting Software di Theme DLPRO
outline: deep
---

# Posting Software di DLPRO

## Video Tutorial

Silahkan lihat video tutorial di atas agar lebih memahami alur posting.

<YouTubeEmbed video-id="gDFw-cUMBgg" />

## Metode Posting
DLPRO mendukung dua metode: posting manual dan posting otomatis.

### Posting Manual
1. Masuk ke **Software -> Add New**.
2. Isi judul, deskripsi, rating (mis. Rate My Posts untuk rich snippet), **Software Settings**, kategori, dan tag.
3. Untuk link download, masuk ke **Download Settings**:
   - Title Button: teks pada tombol download.
   - Download URL: URL sumber file/aplikasi Anda.
   - Delete: hapus tombol.
   - Add another: menambahkan tombol tambahan (bisa banyak).
   - Anda bisa memasukkan URL sumber (misal APK di Google Play) atau URL file yang sudah Anda upload di layanan hosting pihak ketiga. Lihat daftar referensi hosting di halaman: [/dlpro/hosting-file](../dlpro/hosting-file). Contoh gambar Download Settings:

![Download Settings](/dlpro/posting/download-settings-dlpro.jpg)

4. Set **Featured Image** untuk thumbnail.
5. Galeri gambar: di **Software Settings** bagian **Shortcode Gallery**.
   - Gunakan shortcode bawaan theme:
   - `[dlpro-gallery image_url="urlimage1,urlimage2,urlimage3"]`
   - Pisahkan URL gambar dengan koma, hanya mendukung URL gambar (bukan ID gambar).
   - Contoh:
     `[dlpro-gallery image_url="https://lh3.googleusercontent.com/TZu0ke_Vwo6Z3dsLH43658PWSc_ibiivKQbmmnDCOYJ4-P395Fyf50a6gzZkVG_j-C54,https://lh3.googleusercontent.com/REaX6zbOih7NFbvvnErCua4bfnCG8TvEaceKVrhpT4I7jYTeu9jfHUva21w0c1CYK3c,https://lh3.googleusercontent.com/w1RokPPVwjkgc2_GQh_HLIR7QVJnlJOKv0c-OB5yn3SvMvKuEr-jKmXQnr6oft0WNvM"]`
   - Jika anda menggunakan auto post, gallery akan otomatis terisi dengan link gambar dari Google Play.
6. Publish.

### Posting Otomatis (Dlpro Autopost)
1. Instal plugin **Dlpro Autopost** via **Plugins -> Add New -> Upload Plugin**.
   - File plugin tersedia di folder plugin dalam paket DLPRO (setelah extract).
2. Aktifkan plugin.
3. Masuk ke **Software -> Add New**.
4. Di custom field **Dlpro Autopost**, masukkan **ID** dari Google Play. Contoh:
   - URL: `https://play.google.com/store/apps/details?id=com.whatsapp`
   - Masukkan ID: `com.whatsapp`
   - Klik **Grab Now**, tunggu proses selesai, lalu **Publish**.
5. Pengaturan Bahasa Plugin:
   - Masuk ke **Settings -> Dlpro Autopost** untuk memilih bahasa konten yang di-grab.
6. Selesai.

### Posting Blog
1. Masuk ke **Blog -> Add New**.
2. Isi seperti posting biasa (judul, konten, kategori, tag, featured image).

## Catatan Penting
- Menginstal plugin Dlpro Autopost akan mengubah Gutenberg Editor menjadi Classic Editor secara otomatis.
- Wajib: module **CURL** dan **JSON** aktif pada hosting Anda.
- Minimal **PHP 7** dan gunakan **WordPress terbaru**.
- Google Play dapat memblokir IP server jika melakukan posting berlebihan (karena tidak menggunakan API resmi, melainkan scraping). Plugin autopost tidak dijamin selalu bekerja di semua server.

