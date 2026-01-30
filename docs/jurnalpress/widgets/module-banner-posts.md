---
title: Module Banner Posts (Widget) – Theme JurnalPress
description: Dokumentasi lengkap untuk widget Module Banner Posts dalam tema JurnalPress WordPress
outline: [2, 3]
---

# Module Banner Posts (Widget) – Theme JurnalPress

Widget ini memungkinkan Anda menampilkan postingan dengan berbagai tata letak banner yang menarik. Widget ini terbagi menjadi tiga tab utama: General, Query, dan Style.

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
- **Pilihan**:
  - Style 1: Tata letak banner dengan ikon khusus
  - Style 2: Tata letak alternatif 1
  - Style 3: Tata letak alternatif 2
  - Style 4: Tata letak alternatif 3
  - Style 5: Tata letak alternatif 4
  - Style 6: Tata letak alternatif 5
  - Style 7: Tata letak alternatif 6
  - Style 8: Tata letak alternatif 7

### Featured Post Size
- **Tipe**: Radio image
- **Pilihan**:
  - Medium: Ukuran sedang
  - Large: Ukuran besar
- **Catatan**: Berlaku untuk semua style kecuali Style 8

### Content outside thumbnail
- **Tipe**: Checkbox
- **Deskripsi**: Menampilkan konten di luar thumbnail

### List Post Thumbnail Position
- **Tipe**: Radio image
- **Pilihan**:
  - Left: Thumbnail di kiri
  - Right: Thumbnail di kanan
  - Zig Zag: Thumbnail bergantian kiri-kanan
- **Catatan**: Hanya berlaku untuk Style 1 dan untuk post list

### Thumbnail Max Width (px)
- **Tipe**: Number field
- **Rentang**: 60-360px
- **Langkah**: 1px
- **Catatan**: Hanya berlaku untuk Style 1 dan untuk post list

### Thumbnail Max Height (px)
- **Tipe**: Number field
- **Rentang**: 60-800px
- **Langkah**: 1px
- **Deskripsi**: Tinggi thumbnail untuk post layout, default 350px

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
- **Catatan**: Hanya berlaku untuk Style 1 dan untuk post list

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

## Contoh Penggunaan

### Banner dengan Layout Style 1
1. Pilih Layout: Style 1
2. Atur Featured Post Size: Large
3. Aktifkan Category dan Meta
4. Atur Order By: Date
5. Pilih kategori yang diinginkan

### Banner dengan Gradien Background
1. Pilih Background Gradient
2. Atur dua warna dan arah gradien
3. Tambahkan Background Image jika diperlukan
4. Sesuaikan warna teks untuk kontras yang baik

## Tips

1. **Kombinasi Layout**: Eksperimen dengan berbagai style layout untuk tampilan yang berbeda
2. **Filter Konten**: Gunakan kombinasi kategori dan tag untuk menyaring konten spesifik
3. **Responsif**: Semua layout sudah responsif untuk berbagai ukuran layar
4. **Kustomisasi Warna**: Gunakan color picker untuk menyesuaikan dengan skema warna website Anda
5. **Performance**: Batasi jumlah postingan yang ditampilkan untuk performa optimal

## Troubleshooting

### Widget tidak muncul
- Pastikan plugin BT Core terinstal dan aktif
- Periksa konflik dengan plugin lain

### Thumbnail tidak muncul
- Pastikan postingan memiliki featured image
- Periksa pengaturan thumbnail size

### Layout tidak sesuai
- Pastikan memilih style layout yang benar
- Periksa pengaturan thumbnail position dan aspect ratio

### Warna tidak berubah
- Pastikan menggunakan color picker dengan format yang benar
- Clear cache browser setelah perubahan