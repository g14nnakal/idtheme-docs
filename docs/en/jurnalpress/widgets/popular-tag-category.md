---
title: Popular Tags/Category (Widget) – Theme JurnalPress
description: "Widget Popular Tags/Category untuk tema JurnalPress WordPress memungkinkan Anda menampilkan daftar tag dan kategori populer dengan berbagai opsi kustomisasi."
outline: deep
---

# Popular Tags/Category (Widget) – Theme JurnalPress

Widget "Popular Tags/Category" untuk tema JurnalPress WordPress memungkinkan Anda menampilkan tag, kategori, atau topik populer di sidebar atau widget area situs Anda. Widget ini menawarkan berbagai opsi penyesuaian termasuk tata letak, gaya tampilan, dan pengaturan konten.

## Gambaran Umum

Widget ini memberikan fleksibilitas untuk menampilkan elemen taksonomi (tag, kategori, topic) dengan berbagai konfigurasi. Anda dapat mengontrol tampilan, urutan, jumlah item, dan banyak parameter lainnya.

## Pengaturan Widget

### Title (Judul)

- **Label:** Title
- **Tipe:** Text field
- **Deskripsi:** Judul utama widget yang akan ditampilkan.

### Link Title (Tautan Judul)

- **Label:** Link Title
- **Tipe:** URL field
- **Deskripsi:** URL target untuk judul (contoh:` https://www.domain.com/target`). Kosongkan jika ingin judul tanpa tautan.

### Title Image (Gambar Judul)

- **Label:** Title Image
- **Tipe:** Upload field
- **Deskripsi:** Gambar yang akan ditampilkan sebagai bagian dari judul.

### Description Title (Deskripsi Judul)

- **Label:** Description Title
- **Tipe:** Textarea (3 baris)
- **Deskripsi:** Deskripsi atau subtitle untuk judul widget.

### Taksonomi (Taxonomy)

- **Label:** Taxonomy
- **Tipe:** Select
- **Opsi:**
  - **Tag:** Tag
  - **Category:** Kategori
  - **Topic:** Topik
- **Deskripsi:** Pilih elemen taksonomi yang ingin ditampilkan (tag, kategori, atau topik).

### Urut Berdasarkan (Order By) 

- **Label:** Order By
- **Tipe:** Select
- **Opsi:**
  - **Count:** Berdasarkan jumlah penggunaan
  - **Name:** Berdasarkan nama
- **Deskripsi:** Pilih urutan pengurutan item (berdasarkan jumlah penggunaan atau nama).

### Gaya (Style)

- **Label:** Style
- **Tipe:** Select
- **Opsi:**
  - **None:** Tanpa gaya khusus
  - **scheme:** Skema warna
  - **bg-transparent:** Latar belakang transparan
  - **bg-solid:** Latar belakang solid
- **Deskripsi:** Gaya tampilan item taksonomi

### Tata Letak (Layout)

- **Label:** Layout
- **Tipe:** Select
- **Opsi:**
  - **List:** Tampilkan sebagai daftar
  - **Grid:** Tampilkan sebagai grid
- **Deskripsi:** Pilih tata letak tampilan item taksonomi (daftar atau grid).

### Kolom (Columns)

- **Label:** Columns
- **Tipe:** Select
- **Opsi:**
  - **1:** Satu kolom
  - **2:** Dua kolom
  - **3:** Tiga kolom
  - **4:** Empat kolom
  - **5:** Lima kolom
- **Deskripsi:** Pilih jumlah kolom (hanya berlaku untuk layout grid).

### Minimal Post (Minimal Posts)

- **Deskripsi**: Jumlah item taksonomi yang akan ditampilkan
- **Catatan**: Isi 0 untuk menampilkan semua item
- **Rentang**: 0-50
- **Default**: 5

### Sertakan ID (Include ID)

- **Deskripsi**: Menyertakan tag/kategori tertentu berdasarkan ID
- **Format**: ID dipisahkan dengan koma (contoh: 1,2,3,4)
- **Catatan**: Kosongkan untuk menampilkan tag default

### Tampilkan Jumlah Post (Show Post Count)

- **Deskripsi**: Menampilkan jumlah post di samping setiap tag/kategori
- **Tipe**: Checkbox
- **Default**: Tidak aktif

### Tampilkan # Sebelum Label (Show # before label)

- **Deskripsi**: Menambahkan tanda "#" sebelum setiap label tag
- **Tipe**: Checkbox
- **Default**: Tidak aktif

## Persyaratan
**Plugin BT Core** terinstall dan aktif. Widget tidak akan berfungsi tanpa plugin ini. Jika plugin tidak terinstall, akan muncul pesan peringatan

## Cara Penggunaan

1. Buka Appearance → Widgets di dashboard WordPress
2. Cari widget Popular Tags/Category (JurnalPress)
3. Drag & drop widget ke area sidebar/widget yang diinginkan
4. Isi semua field yang diperlukan
5. Klik Save untuk menyimpan pengaturan

## Contoh Penggunaan

### Contoh 1: Menampilkan Tag Populer
1. Judul: Trending Topics
2. Taksonomi: Tag
3. Urut Berdasarkan: Count
4. Jumlah Tampilan: 10
5. Tampilkan Jumlah Post: ✓

### Contoh 2: Menampilkan Kategori dengan Layout Khusus
1. Judul: Categories
2. Taksonomi: Category
3. Urut Berdasarkan: Count
4. Layout: Grid
5. Kolom: 3
6. Gaya: Bg (Solid)
7. Minimal Post: 3

## Catatan Penting

- **Plugin BT Core**: Pastikan plugin BT Core sudah terinstal dan aktif sebelum menggunakan widget ini
- **Kinerja**: Pengaturan "Jumlah Tampilan" yang terlalu tinggi (mendekati 50) dapat mempengaruhi kinerja halaman
- **Kustomisasi**: Opsi "Include ID" berguna untuk menampilkan tag/kategori tertentu secara eksklusif
- **Responsif**: Layout grid akan menyesuaikan dengan lebar layar perangkat

## Troubleshooting

### Widget tidak menampilkan opsi pengaturan
Pastikan plugin BT Core sudah terinstall dan aktif

### Tag/kategori tidak muncul
  - Periksa pengaturan "Minimal Posts"
  - Verifikasi taksonomi yang dipilih sesuai dengan konten situs
  - Cek apakah tag/kategori tersebut memiliki postingan

### Layout grid tidak berfungsi
Pastikan opsi "Layout" diatur ke "Grid" dan "Columns" sudah dipilih

Widget ini memberikan kontrol penuh atas tampilan elemen taksonomi di situs WordPress Anda, meningkatkan navigasi dan engagement pengguna dengan konten yang relevan.
