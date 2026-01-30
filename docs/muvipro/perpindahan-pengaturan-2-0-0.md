---
title: Perpindahan Pengaturan di Muvipro Versi 2.0.0
outline: deep
---

# Perpindahan Pengaturan di Muvipro Versi 2.0.0

Pada versi **Muvipro 2.0.0** terdapat perubahan penting:

- Beberapa pengaturan dipindah dari **plugin Idmuvi Core** ke **Customizer** di theme.
- Ada **fitur baru** berupa widget khusus.
- Beberapa fitur lama yang dianggap kurang bermanfaat dihapus untuk meringankan theme.

Disarankan setelah update:

- Lakukan **backup** situs.
- Lakukan **clear cache** (plugin cache, CDN seperti Cloudflare, dan browser).

## Video Tutorial

Jika anda menggunakan dokumentasi ini berdampingan dengan video resmi, sebaiknya lihat videonya terlebih dahulu, lalu ikuti langkah-langkah di bawah.

<YouTubeEmbed video-id="ONzDayjmVHw" />

## Perpindahan Pengaturan ke Customizer

Pada versi ini, beberapa pengaturan yang sebelumnya berada di **Settings → Idmuvi Core** dipindahkan ke:

> **Appearance → Customize → Movie → Movie Content**

Pengaturan yang dipindahkan:

- **Social Share**
- **Breadcrumbs**
- **Related Posts**
- **Facebook Comment (termasuk FB App ID)**

Berikut screen shot dari customizer:

![Customizer Muvipro v.2.0.0](/muvipro/v-2-0-0/customizer-muvipro-v200.jpg)

### Ringkasan Pengaturan di Customizer → Movie → Movie Content

Pada panel **Movie Content**, anda dapat:

1. **Menonaktifkan Social Share**
   - Matikan tombol share jika ingin memakai plugin social share lain.
2. **Menonaktifkan Breadcrumbs**
   - Nonaktifkan breadcrumbs bawaan jika tidak ingin ditampilkan.
3. **Menonaktifkan Related Posts**
   - Nonaktifkan related posts bawaan theme jika merasa tidak diperlukan.
4. **Mengatur Jumlah Related Posts**
   - Tentukan berapa banyak posting yang tampil di bagian related posts.
5. **Mengatur Taksonomi Related Posts**
   - Pilih dasar related posts:
     - Berdasarkan **Tags**
     - Berdasarkan **Category/Genre**
     - Berdasarkan **Tahun** (year)
6. **Mengatur Facebook Comment**
   - Aktif/nonaktif komentar Facebook.
   - Mengatur **FB App ID** untuk integrasi Facebook Comment.

Dengan perpindahan ini, hampir semua pengaturan tampilan konten movie dapat diatur langsung dari **Customizer** tanpa harus masuk ke halaman Idmuvi Core.

## Fitur Baru: Tags Cloud (Muvipro) Widget

Pada Muvipro versi 2.0.0 ditambahkan widget baru **Tags Cloud (Muvipro)** yang dapat diatur di:

> **Appearance → Widgets**

Kegunaan widget ini:

- Menampilkan daftar **taksonomi**:
  - Tags
  - Category/Genre
  - Taksonomi lain yang dipakai untuk movie/TV.
- Membatasi jumlah item yang ditampilkan (misalnya hanya **10** atau **20** tag).

Keuntungan:

- Tampilan tag cloud lebih terkontrol.
- Tidak membebani tampilan dengan terlalu banyak tag/taksonomi sekaligus.

## Fitur yang Dihapus di Versi 2.0.0

Beberapa fitur dihapus karena:

- Kurang relevan untuk website movie/streaming.
- Sudah dapat digantikan oleh plugin lain (SEO, OG, dsb).

Daftar fitur yang dihapus:

1. **Widget Aweber, GetResponse, Mailchimp**
   - Widget optin/email marketing ini dirasa kurang relevan untuk kebanyakan situs movie streaming.
2. **Fitur OpenGraph bawaan theme**
   - Disarankan menggunakan OG dari plugin SEO seperti:
     - Yoast SEO
     - All in One SEO
     - Rank Math
   - Lihat juga panduan umum: [OpenGraph di Idtheme](/guide/opengraph.md).
3. **Fitur Adblock, Author Box, Google Plus Social Icon, dan YARPP Support**
   - Adblock script dan beberapa fitur tambahan dihilangkan untuk meringankan theme.
   - Google Plus sudah tidak relevan.
   - YARPP (Yet Another Related Posts Plugin) tidak lagi direkomendasikan karena sudah tidak aktif dikembangkan.
   - Jika anda masih memasang plugin YARPP, sebaiknya **dihapus**.

## Catatan Penting Setelah Update

Setelah melakukan update ke **Muvipro 2.0.0**:

1. **Clear Cache**
   - Plugin cache (misalnya WP Super Cache, W3TC, LiteSpeed, dsb).
   - Cache di CDN seperti **Cloudflare** (Purge Cache).
   - Cache browser (CTRL+F5).
2. **Tes Tampilan Utama**
   - Home movie.
   - Halaman single movie/episode.
   - Related posts, breadcrumbs, dan social share.
3. **Cek Pengaturan Customizer**
   - Pastikan semua pengaturan di **Movie → Movie Content** sesuai kebutuhan.

Jika setelah update ada tampilan yang “aneh”, biasanya terkait CSS/JS yang berubah namun masih disimpan di cache. Pastikan semua cache sudah dibersihkan terlebih dahulu sebelum menganggap ada bug di theme.

