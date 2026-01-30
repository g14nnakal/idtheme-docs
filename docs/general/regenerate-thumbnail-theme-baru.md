---
title: Cara Meregenerate Thumbnail di Theme Baru
outline: deep
---

# Cara Meregenerate Thumbnail di Theme Baru

Tutorial kali ini tentang cara **regenerate thumbnail** ke ukuran baru pada theme yang baru anda gunakan.

## Video Tutorial

Berikut video yang menjelaskan langkah-langkah regenerate thumbnail setelah ganti theme.

<YouTubeEmbed video-id="x9D_DEYoatI" />

Regenerate thumbnail diperlukan ketika:

- Anda mengganti theme dan ukuran gambar (thumbnail) di theme baru berbeda.
- Sudah ada banyak posting dan gambar di media library sebelumnya.

Dengan regenerate, gambar-gambar lama akan dibuatkan ulang ukuran baru yang sesuai dengan theme.

## 1. Instal Plugin Regenerate Thumbnails

1. Masuk ke **Plugins → Add New**.
2. Di kolom pencarian, ketik: `regenerate thumbnails`.
3. Instal dan aktifkan plugin.

Link plugin Regenerate Thumbnails: https://wordpress.org/plugins/regenerate-thumbnails/

![Regenerate Thumbnails Plugin](/general/regenerate/regenerate-thumbnail.jpg)

## 2. Menjalankan Regenerate Thumbnails

Setelah plugin aktif, ada beberapa cara untuk menjalankan regenerate.

### a. Via Tools → Regenerate Thumbnails

1. Masuk ke **Tools → Regenerate Thumbnails**.
2. Anda akan melihat halaman dengan beberapa pilihan, misalnya:
   - Regenerate semua thumbnail.
   - Regenerate hanya thumbnail untuk featured image.
3. Klik tombol **Regenerate Thumbnails For All Attachments** jika ingin meng-generate ulang semua gambar.
4. Tunggu proses sampai selesai.

### b. Via Media → Library

1. Masuk ke **Media → Library**.
2. Jika menggunakan mode **List**:
   - Akan muncul link **Regenerate Thumbnails** di setiap item gambar.
3. Jika plugin menyediakan opsi bulk:
   - Anda bisa memilih beberapa gambar sekaligus lalu menjalankan regenerate hanya untuk gambar tersebut.

Pendekatan ini berguna jika anda hanya ingin regenerate untuk gambar tertentu.

## 3. Waktu Proses dan Resource

- Jika jumlah media banyak, proses regenerate bisa memakan waktu cukup lama.
- Semakin besar jumlah dan ukuran gambar, semakin berat beban server.
- Pastikan:
  - Koneksi internet stabil jika anda memantau proses via browser.
  - Resource server (CPU/RAM) cukup, terutama di shared hosting.

Jika proses sering timeout:

- Coba regenerate dalam batch kecil (misalnya via Media Library).
- Atau hubungi hosting untuk melihat apakah ada batasan eksekusi yang terlalu ketat.

## 4. Setelah Selesai

- Cek beberapa posting (home, single post, arsip) untuk memastikan:
  - Gambar tampil dengan ukuran dan crop yang sesuai dengan theme baru.
  - Tidak ada gambar yang tampak pecah atau terlalu kecil/besar.

Jika masih ada gambar yang tidak sesuai:

- Pastikan pengaturan ukuran image di theme sudah benar.
- Jalankan regenerate ulang jika sebelumnya proses belum selesai 100%.
