---
title: Cara Posting Movie, TV Show dan Episode di Theme Muvipro
outline: deep
---

# Posting Movie, TV Show dan Episode di Muvipro

## Video Tutorial

<YouTubeEmbed video-id="pdp-mxr7JZo" />

## Struktur Konten di Muvipro

Secara umum Muvipro membagi konten menjadi:

- **Movies**: film tunggal.
- **TV Show**: serial.
- **Episode**: episode per serial. Ini berada di sub menu **TV Show**.
- **Blog**: postingan blog.

Nama menu bisa berbeda tergantung versi (misalnya Movie, TV Show, Episode), namun konsepnya sama.

## Posting Movie

### Membuat Post Movie
1. Masuk ke menu **Movies -> Add New** (atau custom post type sejenis).
2. Pada bagian **Movie Settings**, temukan field:
   ```
   Enter IMDB/TMDB ID
   ```

3. Masukkan **TMDB ID Movie**.

   Contoh link TMDB:
   ```
   https://www.themoviedb.org/movie/135397-jurassic-world
   ```

   TMDB ID:
   ```
   135397
   ```

Contoh screenshot:

![Membuat Post Movie](/muvipro/post/auto-post-movie-muvipro.jpg)

4. Klik **Retrieve Information**, tunggu hingga data terisi otomatis.
5. Publish.

### Player & Download Movie

- Tersedia di tab **Player Settings** dan **Download Settings** pada Find Movie di bawah editor.
- Mendukung hingga **15 Player** dan **15 Download Link**
- Player harus di-embed secara manual

::: info Catatan
Theme Muvipro tidak menyediakan player bawaan.
:::

## Posting TV Show

### Membuat Post TV Show
1. Masuk ke menu **TV Show -> Add New** (atau Series).
2. Isi **TMDB ID** pada **TV Shows Settings**.

   Contoh:
   ```
   https://www.themoviedb.org/tv/16420
   ```

   TMDB ID:
   ```
   16420
   ```

Contoh screenshot:

![Membuat Post TV Show](/muvipro/post/auto-post-tvshow-muvipro.jpg)

3. Klik **Retrieve Information** lalu **Publish**.

::: tip Info
TV Show tidak memiliki Player dan Download. Fitur tersebut tersedia di Episode.
:::

## Posting Episode

1. Masuk ke menu **TV Show -> All Episodes -> Add New** (atau Episode di bawah TV Show).
2. Isi **TMDB ID**, **Season**, dan **Episode**.

   Contoh link:
   ```
   https://www.themoviedb.org/tv/16420/season/1/episode/1
   ```

   Isian:
   ```
   TMDB ID : 16420
   Season  : 1
   Episode : 1
   ```

Contoh screenshot:

![Membuat Post Episode](/muvipro/post/auto-post-episode-muvipro.jpg)

3. Klik **Retrieve Information** lalu **Publish**.

### Player & Download Episode

- Tersedia hingga **15 Player** dan **15 Download Link**
- Embed player secara manual

::: warning Penting
Theme Muvipro tidak menyediakan player bawaan. Pastikan tmdbID Episode sama dengan tmdbID TV Show.
:::

## Posting Blog

1. Masuk ke menu:
   ```
   Blog → Add New
   ```

2. Isi konten seperti posting WordPress biasa.

3. Klik **Publish**.

## Catatan Penting

- Pastikan Custom field **tmdbID:** sesuai dengan **tmdbid TV Show**.
- Jika anda menggunakan TMDB scraping seharus nya langsung sama antara **TMDB ID TV Show** dengan **TMDB ID Episode**.
- Jika anda posting manual maka anda harus memasukkan manual **tmdbID:** dan samakan dengan **tmdbID:** pada **TV Show** yang sesuai.

Contoh Screenshot:

Di Tv Show:
![Contoh tmdbID TV Show](/muvipro/post/tmdbid-tvshow-muvipro.png)

Di Episode:
![Contoh tmdbID Episode](/muvipro/post/tmdbid-episode-muvipro.png)

## Penutup

Dengan integrasi TMDB, theme **Muvipro** memungkinkan pembuatan konten Movie, TV Show, dan Episode secara cepat dan efisien.

Untuk daftar referensi player yang pernah direkomendasikan, lihat dokumentasi: [Daftar Player Muvipro](/muvipro/daftar-player.md).

