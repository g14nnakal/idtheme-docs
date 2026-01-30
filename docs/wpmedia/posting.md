---
title: Cara Posting di Theme Wpmedia
outline: deep
---

# Cara Posting di Theme Wpmedia

## Format Post
- Standard: posting biasa dengan featured image.
- Video: gunakan post format Video, isi sumber video via Oembed atau Iframe di Video Settings.
- Gallery: gunakan block Gallery Gutenberg atau insert gallery di Classic Editor.

Berikut contoh pengaturan post format:

![Post Format Settings](/general/post/post-format-video.png)

## Posting Standard

Posting standard digunakan untuk artikel biasa (tanpa format video/galeri khusus).

Langkah-langkah:

1. Masuk ke **Posts → Add New**.
2. Isi:
   - **Title** (judul artikel).
   - **Content** (isi artikel).
   - **Category**, **Topic**, dan **Tags** jika digunakan.
3. Pastikan **Post Format** tetap pada **Standard** (default).
4. Pilih **Featured Image**:
   - Klik **Set featured image**.
   - Pilih atau upload gambar yang ingin dijadikan thumbnail utama.
   - [Tutorial featured image.](https://wordpress.com/support/featured-images/)
5. Klik **Publish** untuk menerbitkan artikel.

## Posting Video

Posting video memanfaatkan **Post Format: Video** dan pengaturan **Video Settings**.

Langkah-langkah:

1. Masuk ke **Posts → Add New**.
2. Isi judul, konten, kategori, topic, dan tag seperti biasa.
3. Ubah **Post Format** menjadi **Video**.
4. Cari metabox **Video Settings** (biasanya di bawah editor):
   - Terdiri dari 2 tab:
     - **Oembed**
     - **Iframe**
5. Jika menggunakan **Oembed**:
   - Masukkan URL video dari platform yang didukung WordPress, misalnya:
     - YouTube
     - Dailymotion
   - WordPress akan otomatis melakukan embed.
   - Daftar layanan oEmbed dapat dilihat di:  
     https://codex.wordpress.org/Embeds
6. Jika menggunakan **Iframe**:
   - Masukkan kode `<iframe>` yang disediakan oleh platform video.
7. Pilih **Featured Image** untuk thumbnail.
   - [Tutorial featured image.](https://wordpress.com/support/featured-images/)
8. Klik **Publish**.

Berikut contoh video settings:

![Video Settings](/general/post/video-settings.jpg)

## Posting Galeri

Posting galeri memungkinkan anda menampilkan beberapa gambar dalam satu posting dengan layout galeri.

Langkah-langkah:

1. Masuk ke **Posts → Add New**.
2. Isi judul, konten, kategori, topic, dan tag seperti biasa.
3. Ubah **Post Format** menjadi **Gallery**.
4. Upload gambar-gambar yang ingin ditampilkan:
   - Klik **Add Media**.
   - Upload semua gambar yang ingin ditampilkan pada postingan tersebut.
   - Tidak perlu menekan **Insert into post** untuk masing-masing gambar jika theme otomatis menampilkan sebagai galeri.
5. Pilih salah satu gambar sebagai **Featured Image**.
6. Klik **Publish**.

Theme Wpmedia akan menampilkan gambar-gambar tersebut sebagai galeri sesuai layout yang sudah diatur.

## Split Post (Membagi Artikel Menjadi Beberapa Halaman)

Jika artikel anda sangat panjang, anda dapat membaginya menjadi beberapa halaman.

Caranya:

1. Buka editor dalam mode **Text** (HTML) atau blok yang mendukung.
2. Di antara paragraf yang ingin dipisah halamannya, masukkan tag:

   ```html
   <!--nextpage-->
   ```

3. Ulangi di beberapa bagian jika ingin lebih dari dua halaman.

WordPress akan menampilkan pagination (halaman 1, 2, 3, ...) di bagian bawah artikel.

Referensi tambahan:  
https://wordpress.com/support/wordpress-editor/blocks/page-break-block/

## Focus News (Layout Khusus)

Theme Wpmedia menyediakan fitur **Focus News** untuk menonjolkan berita tertentu dengan layout berbeda pada halaman index dan archive.

Pengaturan biasanya tersedia di metabox **Theme Settings** di sisi kanan atau bawah editor:

- Centang opsi **Focus News** (atau nama serupa).

Setelah disimpan, posting dengan opsi Focus News akan muncul dengan tampilan berbeda di halaman index/archive, misalnya lebih besar atau dengan gaya highlight.

