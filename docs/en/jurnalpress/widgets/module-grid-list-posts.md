---
title: Module Grid List Posts (Widget) – Theme JurnalPress
description: Dokumentasi lengkap untuk widget Module Grid List Posts dalam tema JurnalPress WordPress
outline: [2, 3]
---

# Module Grid List Posts (Widget) – Theme JurnalPress

Widget ini memungkinkan Anda menampilkan postingan dengan berbagai tata letak grid list yang menarik. Widget ini terbagi menjadi tiga tab utama: General, Query, dan Style.

## Fitur Utama

- **Tiga Tata Letak:** Grid, List, dan Number
- **Kontrol Query Lengkap:** Kategori, tag, pengurutan, dan rentang waktu
- **Kustomisasi Tampilan:** Thumbnail, kategori, meta, excerpt
- **Postingan Unggulan:** Opsi untuk menonjolkan postingan pertama
- **Kontrol Styling:** Warna, spacing, ukuran font, dan alignment
- **Sistem Tab:** Antarmuka pengaturan yang terorganisir (General, Query, Style)

## Tab General

### Title
- **Tipe**: Text field
- **Deskripsi**: Judul utama widget yang akan ditampilkan

### Link Title
- **Tipe**: URL field
- **Deskripsi**: URL target untuk judul widget. Kosongkan jika judul tidak ingin memiliki tautan
- **Format**: `https://www.domain.com/target`

### Title Image
- **Tipe**: Upload field
- **Deskripsi**: Menggantikan teks judul dengan gambar

### Description Title
- **Tipe**: Textarea
- **Deskripsi**: Deskripsi atau subtitle untuk widget
- **Baris**: 3 baris

### Layout
- **Tipe**: Radio image
- **Deskripsi**: Pilih tata letak postingan yang diinginkan
- **Pilihan**:
  - list: Tata letak dengan design list
  - grid: Tata letak dengan design grid
  - number: Tata letak dengan design number

### Column
- **Tipe**: Radio image
- **Pilihan**:
  - col2: Dua kolom
  - col3: Tiga kolom
  - col4: Empat kolom
  - col5: Lima kolom
- **Catatan**: Jumlah kolom (hanya untuk layout grid)

### Content outside thumbnail
- **Tipe**: Checkbox
- **Deskripsi**: Menampilkan konten di luar thumbnail

### Thumbnail Active
- **Tipe**: Checkbox
- **Deskripsi**: Menampilkan thumbnail postingan

### Thumbnail Position
- **Tipe**: Radio image
- **Pilihan**:
  - Left: Thumbnail di kiri
  - Right: Thumbnail di kanan
  - Zig Zag: Thumbnail bergantian kiri-kanan
- **Catatan**: Hanya berlaku untuk tata letak list

### Thumbnail Max Width (px)
- **Tipe**: Number field
- **Rentang**: 60-360px
- **Langkah**: 1px
- **Catatan**: Hanya berlaku untuk tata letak list

### Thumbnail Max Height (px)
- **Tipe**: Number field
- **Rentang**: 60-800px
- **Langkah**: 1px
- **Deskripsi**: Tinggi thumbnail untuk tata letak list, default 350px

### List Post Aspect Ratio
- **Tipe**: Select dropdown
- **Pilihan**:
  - Original: Rasio asli
  - Square - 1:1: Rasio persegi
  - Standard - 4:3: Rasio standar
  - Portrait - 3:4: Rasio portrait
  - Classic - 3:2: Rasio klasik
  - Classic Portrait - 2:3: Rasio portrait klasik
  - Wide - 16:9: Rasio lebar
  - Tall - 9:16: Rasio tinggi

### Category
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan tampilan kategori

### Category Position
- **Tipe**: Select dropdown
- **Pilihan**:
  - Default: Posisi default
  - After Title: Setelah judul

### Category Style
- **Tipe**: Select dropdown
- **Pilihan**:
  - No: Tidak ada gaya
  - Label: Tampilan label
  - Icon: Tampilan ikon
  - Color Scheme: Skema warna
  - Bg (Transparent): Background transparan
  - Bg (Solid): Background solid

### Meta
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan meta informasi
- **Catatan**: Untuk pengaturan meta, pergi ke **Customizer → General → Global**, lihat Meta Module & Widgets

### Meta Position
- **Tipe**: Select dropdown
- **Pilihan**:
  - Default: Posisi default
  - Before Title: Sebelum judul

### Excerpt
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan kutipan (excerpt)
- **Catatan**: Hanya ditampilkan di featured post atau tempat yang diperlukan. Untuk pengaturan panjang excerpt, pergi ke **Customizer → General → Global**, lihat Excerpt Length

### Featured post 
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan post unggulan (featured post)

### Featured post excerpt
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan kutipan (excerpt) untuk post unggulan

### Featured post full width
- **Tipe**: Checkbox
- **Deskripsi**: Mengaktifkan post unggulan (featured post) dengan lebar penuh
- **Catatan**: Opsi ini akan aktif jika anda mengisi background color di Style tab

### Featured post style
- **Tipe**: Radio image
- **Pilihan**:
  - Content Inside: Tampilan konten di dalam thumbnail
  - Content Outside: Tampilan konten di luar thumbnail
  - Content Left: Tampilan konten di kiri thumbnail
  - Content Right: Tampilan konten di kanan thumbnail

## Tab Query

### Order By
- **Tipe**: Select dropdown
- **Pilihan**:
  - Date: Berdasarkan tanggal
  - Title: Berdasarkan judul
  - Modified: Berdasarkan tanggal modifikasi
  - Comment Count: Berdasarkan jumlah komentar
  - View: Berdasarkan jumlah view
- **Catatan**: Untuk order by view, diperlukan plugin post view counter atau wp postviews

### Selected categories
- **Tipe**: Multiple select
- **Sumber**: Daftar kategori
- **Ukuran**: 5 item
- **Deskripsi**: Klik kategori dengan menekan tombol CTRL untuk memilih multiple kategori. Jika "All Categories" dipilih, pilihan lain akan diabaikan

### Tag ID
- **Tipe**: Text field
- **Format**: Dipisahkan dengan koma (contoh: 1,2,3,4)
- **Deskripsi**: Kosongkan jika ingin menampilkan berdasarkan kategori tanpa filter tag

### Range Post
- **Tipe**: Select dropdown
- **Pilihan**:
  - All Post: Semua postingan
  - 1 Year: 1 tahun terakhir
  - 2 Months: 2 bulan terakhir
  - 1 Months: 1 bulan terakhir
  - 7 Days: 7 hari terakhir

## Tab Style

### Post Space (px)
- **Tipe**: Number field
- **Rentang**: 0-50px
- **Langkah**: 1px

### Title Font Size (px)
- **Tipe**: Number field
- **Rentang**: 8-40px
- **Langkah**: 1px

### Alignment
- **Tipe**: Radio image
- **Pilihan**:
  - Left: Rata kiri
  - Center: Rata tengah
  - Right: Rata kanan
- **Catatan**: Hanya berlaku untuk Style 1 dan untuk post list

### Background Gradient
- **Tipe**: Gradient picker
- **Deskripsi**: Harus mengisi kedua warna dan mengubah arah untuk opsi gradient

### Background Image
- **Tipe**: Upload field
- **Deskripsi**: Gambar latar belakang widget

### Title Color
- **Tipe**: Color picker
- **Deskripsi**: Warna untuk judul postingan

### Subtitle Color
- **Tipe**: Color picker
- **Deskripsi**: Warna untuk deskripsi/subtitle

### Link Color
- **Tipe**: Color picker
- **Deskripsi**: Warna untuk tautan

### Link Hover Color
- **Tipe**: Color picker
- **Deskripsi**: Warna untuk tautan saat hover

### Meta Color
- **Tipe**: Color picker
- **Deskripsi**: Warna untuk meta informasi

## Persyaratan

Widget ini memerlukan plugin **BT Core** untuk berfungsi dengan benar. Jika plugin tidak terinstal, akan muncul pesan:

> "This widget requires BT Core plugin to be installed and activated."

## Catatan Penting

### Pengaturan Meta dan Excerpt
1. **Meta**: Pengaturan meta (seperti penulis, tanggal, komentar) dikonfigurasi melalui Customizer → General → Global → Meta Module & Widgets
2. **Excerpt**: Panjang excerpt dikonfigurasi melalui Customizer → General → Global → Excerpt Length

### Tata Letak Khusus
1. **Layout Number**: Opsi number_style hanya berpengaruh jika layout dipilih sebagai number
2. **Layout Grid**: Opsi column hanya berpengaruh jika layout dipilih sebagai grid
3. **Layout List**: Opsi thumbnail, thumbnail_width, dan alignment memiliki efek khusus pada layout list

### Postingan Unggulan
1. Postingan unggulan akan menampilkan postingan pertama dengan format yang berbeda
2. Opsi featpost_fullwidth hanya bekerja jika background color diisi dengan warna

### Banner dengan Gradien Background
1. Pilih Background Gradient
2. Atur dua warna dan arah gradien
3. Sesuaikan warna teks untuk kontras yang baik

## Tips

1. **Kombinasi Layout**: Eksperimen dengan berbagai style layout untuk tampilan yang berbeda
2. **Filter Konten**: Gunakan kombinasi kategori dan tag untuk menyaring konten spesifik
3. **Responsif**: Semua layout sudah responsif untuk berbagai ukuran layar
4. **Kustomisasi Warna**: Gunakan color picker untuk menyesuaikan dengan skema warna website Anda
5. **Performance**: Batasi jumlah postingan yang ditampilkan untuk performa optimal

## Troubleshooting

### Masalah Umum
1. **Widget tidak muncul**: Pastikan plugin BT Core terinstal dan aktif
2. **Thumbnail tidak muncul**: Periksa apakah opsi thumbnail_active diaktifkan dan postingan memiliki featured image
3. **Meta tidak muncul**: Konfigurasi meta di Customizer → General → Global
4. **View count tidak bekerja**: Install plugin post view counter atau wp postviews

### Thumbnail tidak muncul
- Pastikan postingan memiliki featured image
- Periksa pengaturan thumbnail size

### Layout tidak sesuai
- Pastikan memilih style layout yang benar
- Periksa pengaturan thumbnail position dan aspect ratio

### Warna tidak berubah
- Pastikan menggunakan color picker dengan format yang benar
- Clear cache browser setelah perubahan

## Rekomendasi
1. Untuk performa optimal, batasi numberposts maksimal 6-10 untuk layout grid
2. Gunakan caching plugin seperti WP Super Cache atau W3 Total Cache untuk meningkatkan performa
3. Optimasi ukuran thumbnail untuk loading yang lebih cepat
