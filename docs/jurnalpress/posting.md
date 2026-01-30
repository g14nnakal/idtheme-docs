---
title: Cara Posting di Theme JurnalPress
description: Panduan lengkap cara membuat postingan di WordPress menggunakan theme JurnalPress, mendukung post format Standard, Video, dan Gallery, custom taxonomy Topic, serta custom field bawaan theme.
outline: deep
---

# Cara Posting di Theme JurnalPress

Dokumentasi ini menjelaskan langkah-langkah membuat dan mengelola postingan di WordPress menggunakan **theme JurnalPress**. Theme ini dirancang untuk kebutuhan portal berita dan blog profesional dengan dukungan **post format**, **custom taxonomy**, serta **custom metabox** tambahan.

Mendukung gutenberg block editor ataupun classic editor dengan menginstall plugin [Classic Editor](https://wordpress.org/plugins/classic-editor/). Keduanya sama baiknya dan preview postingan di editor akan sama dengan di frontend.

## 1. Membuat Post Baru

1. Masuk ke **Dashboard WordPress**.
2. Pilih menu **Posts → Add New**.
3. Masukkan **Judul Post**.
4. Isi konten utama menggunakan **Block Editor (Gutenberg)**.

## 2. Post Format yang Didukung

Theme JurnalPress mendukung beberapa post format berikut:

### 2.1 Standard

Post format default untuk artikel berita atau tulisan biasa.

**Langkah:**
- Pilih format **Standard**.
- Gunakan editor untuk menulis konten artikel.
- Gunakan custom field tambahan (lihat bagian 4).

### 2.2 Video

Digunakan untuk postingan video (YouTube, Vimeo, atau server lain).

**Langkah:**
1. Pilih **Post Format: Video**.
2. Isi konten deskripsi video pada editor.
3. Atur pengaturan video pada **Video Settings** (lihat bagian 5).

### 2.3 Gallery

Digunakan untuk postingan galeri foto.

**Langkah:**
1. Pilih **Post Format: Gallery**.
2. Tambahkan block **Gallery** pada editor.
3. Upload atau pilih beberapa gambar.

## 3. Custom Taxonomy: Topic

Selain tag dan category, jurnalPress juga menyediakan **custom taxonomy `Topic`** untuk mengelompokkan konten berdasarkan topik.

**Cara Menggunakan Topic:**
1. Pada sidebar editor, cari panel **Topic**.
2. Pilih topic yang tersedia atau tambahkan topic baru.
3. Topic akan digunakan untuk:
   - Navigasi konten
   - Filter query post
   - Tampilan arsip khusus topic

## 4. Post Settings (Custom Field Umum)

Pada halaman editor, tersedia metabox **Post Settings** dengan field berikut:

### 4.1 Subtitle

- **Field:** `Idt_Core_Subtitle`
- **Fungsi:** Menampilkan subjudul sebelum atau sesudah judul utama.
- **Contoh:**
  > Breaking News Hari Ini

### 4.2 News Writer

- **Field:** `Idt_Core_Writer`
- **Fungsi:** Nama penulis berita.
- **Contoh:**
  > John Doe

### 4.3 News Editor

- **Field:** `Idt_Core_Editor`
- **Fungsi:** Nama editor berita.
- **Contoh:**
  > Jane Smith

## 5. Video Settings (Khusus Post Format Video)

Panel ini hanya digunakan jika post format **Video** dipilih.

### 5.1 Video Duration

Digunakan untuk menampilkan durasi video.

- **Hour** → `_durh`
- **Minutes** → `_durm`
- **Seconds** → `_durs`

**Contoh:**
- 00 : 05 : 30 (5 menit 30 detik)

### 5.2 Video Source

JurnalPress mendukung dua sumber video:

#### a. OEmbed

- **Field:** `Idt_Core_Oembed`
- **Isi:** URL penuh dari YouTube, Vimeo, atau layanan oEmbed lainnya.
- **Contoh:**
  ```
  https://www.youtube.com/watch?v=xxxx
  ```

> Jika OEmbed diisi, iframe tidak akan digunakan. Mengenai oEmbed, bisa dipelajari di [WordPress Codex](https://codex.wordpress.org/Embeds).

#### b. Iframe

- **Field:** `Idt_Core_Iframe`
- **Isi:** Kode HTML iframe.
- **Contoh:**
  ```html
  <iframe src="https://example.com/embed/video" width="560" height="315"></iframe>
  ```

> Gunakan iframe hanya jika tidak menggunakan OEmbed.

## 6. Featured Image

Wajib untuk selalu menambahkan **Featured Image** karena digunakan pada:

- Thumbnail listing
- Homepage section
- Social share preview

## 7. Publish Post

Setelah semua data diisi:

1. Periksa kembali konten dan pengaturan.
2. Klik **Publish** atau **Update**.

## 8. Catatan Developer

- **Custom Field:** Semua custom field yang digunakan oleh theme JurnalPress dimulai dengan prefix `Idt_Core_`.
- **Post Format:** Pilih format video jika postingan berisi video. Pilih format gallery jika postingan berisi galeri foto.

## 8. Tips Best Practice

- Gunakan **Subtitle** untuk headline tambahan.
- Pastikan **Writer** dan **Editor** terisi untuk kredibilitas berita.
- Gunakan **Topic** secara konsisten.
- Gunakan **Featured Image** setiap kali membuat postingan.
- Untuk video, **pilih salah satu** antara OEmbed atau Iframe.

Dengan mengikuti panduan ini, postingan Anda akan tampil optimal dan konsisten sesuai desain theme **JurnalPress**.