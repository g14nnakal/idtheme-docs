---
title: Comments (General) - Theme Jurnalpress
description: Dokumentasi lengkap pengaturan Comments di WordPress Customizer tema JurnalPress, mencakup pilihan tipe komentar, pengaturan form komentar, integrasi Facebook Comments, serta opsi styling.
outline: deep
---

# Comments (General) - Theme Jurnalpress

Section **Comments** pada Customizer JurnalPress digunakan untuk mengatur perilaku, tampilan, dan integrasi sistem komentar pada halaman single post. Melalui menu ini, Anda dapat memilih jenis komentar (default WordPress atau Facebook Comments), menyesuaikan teks pada form komentar, serta mengatur gaya (style) form komentar agar selaras dengan desain tema.

Pengaturan ini sangat berguna untuk:

- Mengontrol pengalaman pengguna saat berinteraksi melalui komentar
- Mengintegrasikan komentar pihak ketiga (Facebook Comments)
- Menyederhanakan form komentar agar lebih user‑friendly
- Menyesuaikan tampilan komentar tanpa perlu menulis CSS manual

## Lokasi Pengaturan

Pengaturan ini dapat diakses melalui:

```
Appearance → Customize → General → Comments
```

Di dalam section ini tersedia dua tab utama:

- **General** – Pengaturan umum dan fungsional komentar
- **Style** – Pengaturan tampilan (visual) form komentar

## Tab: General

Tab **General** berisi pengaturan inti yang menentukan jenis komentar dan teks‑teks yang tampil pada form komentar.

### 1. Single Comment

**Label:** Single Comment  
**Tipe:** Pilihan tombol (SVG Button)

Opsi ini digunakan untuk menentukan sistem komentar yang digunakan pada halaman single post.

Pilihan yang tersedia:

- **Default**  
  Menggunakan sistem komentar bawaan WordPress.

- **Facebook**  
  Menggunakan Facebook Comments Plugin untuk menampilkan komentar berbasis akun Facebook.

**Default:** Default

> Catatan: Jika memilih Facebook Comments, pastikan Facebook App ID telah diisi pada opsi berikutnya.

### 2. Facebook App ID

**Label:** Facebook App ID  
**Tipe:** Text

Opsi ini digunakan untuk memasukkan **Facebook App ID** yang diperlukan agar Facebook Comments dapat berfungsi dengan baik.

- Jika diisi, sistem akan menggunakan App ID milik Anda sendiri
- Jika dikosongkan, tema akan menggunakan Facebook App ID bawaan dari JurnalPress

**Contoh isi:**

`12345678910`

> Disarankan menggunakan App ID sendiri untuk performa dan kontrol yang lebih baik (moderasi, insight, dan API limit).

### 3. Comment Form Title

**Label:** Comment Form Title  
**Tipe:** Text

Mengatur judul form komentar yang tampil di atas kolom input komentar.

**Default teks:**

`Leave a Reply.`

Contoh penggunaan:

- Leave a Reply
- Tulis Komentar
- Diskusi

Opsi ini membantu menyesuaikan bahasa dan tone sesuai target audiens.

### 4. Remove Comments Website Field

**Label:** Remove Comments Website field  
**Tipe:** Toggle (On / Off)

Menghapus field **Website / URL** pada form komentar WordPress.

Manfaat mengaktifkan opsi ini:

- Mengurangi spam komentar
- Menyederhanakan form komentar
- Fokus pada nama, email, dan isi komentar

**Status:**

- **Off** → Field website ditampilkan (default WordPress)
- **On** → Field website dihapus

### 5. Comment Button Title

**Label:** Comment Button Title  
**Tipe:** Text

Mengatur teks pada tombol submit komentar.

**Default teks:**

`Post Comment`

Contoh alternatif:

- Kirim Komentar
- Submit
- Publish Comment

Pengaturan ini berguna untuk lokalisasi bahasa atau penyesuaian gaya UI.

## Tab: Style

Tab **Style** digunakan untuk mengatur tampilan visual form komentar tanpa perlu menulis kode CSS secara manual.

Secara umum Anda akan menemukan pengaturan seperti:

- **Style Type**  
  Pilihan gaya form komentar (Default / Boxed) untuk boxed maka pengaturan lainnya akan muncul.

- **Background Color**  
  Warna latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Background Image**  
  Gambar latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Border Radius**  
  Membulatkan sudut field input dan tombol. Required jika Style Type adalah Boxed.

- **Border**
  Garis tepi input dan form. Required jika Style Type adalah Boxed.

> Semua perubahan pada tab Style akan langsung terlihat melalui live preview Customizer.

## Tips & Rekomendasi

- Gunakan **Default Comment** jika ingin performa ringan dan kontrol penuh melalui WordPress
- Gunakan **Facebook Comment** jika audiens Anda aktif di Facebook dan ingin komentar yang lebih sosial
- Aktifkan **Remove Website Field** untuk meminimalkan spam
- Sesuaikan **Style** agar form komentar konsisten dengan desain global tema

## Ringkasan

Section **Comments** di JurnalPress memberikan kontrol penuh terhadap:

- Sistem komentar yang digunakan
- Teks dan label pada form komentar
- Integrasi Facebook Comments
- Tampilan visual form komentar

Dengan pengaturan ini, Anda dapat menciptakan pengalaman diskusi yang lebih bersih, menarik, dan sesuai dengan kebutuhan website Anda.

