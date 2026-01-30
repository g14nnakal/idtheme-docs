---
title: Global (Footer Layout) - JurnalPress
description: Pengaturan global footer untuk mengatur layout widget, copyright, serta gaya tampilan footer di tema JurnalPress.
outline: deep
---

# Global (Footer Layout) - JurnalPress

Section **Global** berada di **Customizer → Footer Layout → Global** dan digunakan untuk mengatur struktur utama footer, termasuk jumlah kolom widget, layout copyright, serta gaya visual untuk footer widget dan copyright secara terpisah.

Pengaturan pada section ini bersifat **global**, sehingga akan memengaruhi seluruh halaman situs.

## Lokasi Pengaturan

```
Appearance → Customize → Footer Layout → Global
```

## Tab Navigasi

Section ini memiliki dua tab utama:

- **General** — Mengatur struktur dan aktivasi footer
- **Style** — Mengatur tampilan visual footer widget dan copyright

## General Settings

Tab **General** berfokus pada pengaturan struktur dan elemen utama footer.

### Widget Column

Menentukan jumlah kolom dan proporsi lebar kolom pada **Footer Widget Area**.

**Opsi yang tersedia:**

| Opsi | Deskripsi |
|----|----|
| `1col` | 1 kolom (100%) |
| `2col` | 2 kolom (50 / 50) |
| `2col12` | 2 kolom (33 / 66) |
| `2col21` | 2 kolom (66 / 33) |
| `3col` | 3 kolom (33 / 33 / 33) |
| `3col121` | 3 kolom (25 / 50 / 25) |
| `3col211` | 3 kolom (50 / 25 / 25) |
| `3col112` | 3 kolom (25 / 25 / 50) |
| `4col` | 4 kolom (25 / 25 / 25 / 25) |
| `4col2111` | 4 kolom (50 / 16 / 16 / 16) |
| `4col1112` | 4 kolom (16 / 16 / 16 / 50) |
| `6col` | 6 kolom (16 / 16 / 16 / 16 / 16 / 16) |

**Default:** `4col`

### Copyright Layout

Menentukan layout area copyright di bagian bawah footer.

**Opsi layout:**

- **Style 1** — Layout standar
- **Style 2** — Variasi posisi konten
- **Style 3** — Layout terpusat
- **Style 4** — Layout alternatif dengan distribusi berbeda

**Default:** `Style 1`

### Footer Widget

Mengaktifkan atau menonaktifkan **Footer Widget Area**.

- **ON** — Footer widget ditampilkan
- **OFF** — Footer widget disembunyikan

### Copyright

Mengaktifkan atau menonaktifkan **Copyright Section**.

- **ON** — Copyright ditampilkan
- **OFF** — Copyright disembunyikan

## Style Settings

Tab **Style** memungkinkan pengaturan visual untuk masing-masing bagian footer secara terpisah.

Pengaturan style tersedia untuk:

- **Footer Widget**
- **Copyright**

Setiap bagian memiliki set pengaturan yang sama.

## Container

Menentukan lebar container untuk setiap section footer.

**Opsi container:**

| Opsi | Deskripsi |
|----|----|
| `Default` | Mengikuti pengaturan global tema |
| `In Container` | Konten berada di dalam container |
| `Fullwidth` | Konten full lebar layar |

**Default:** `Default`

## Style Type

Secara umum Anda akan menemukan pengaturan seperti:

- **Style Type**  
  Pilihan gaya header (Default / Boxed) untuk boxed maka pengaturan lainnya akan muncul.

- **Background Color**  
  Warna latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Background Image**  
  Gambar latar belakang form komentar. Required jika Style Type adalah Boxed.

- **Border Radius**  
  Membulatkan sudut field input dan tombol. Required jika Style Type adalah Boxed.

- **Border**
  Garis tepi input dan form. Required jika Style Type adalah Boxed.

> Semua perubahan pada tab Style akan langsung terlihat melalui live preview Customizer.

## Font Style

Mengatur tipografi teks pada footer widget dan copyright.

**Opsi yang tersedia:**

- Font size
- Font weight
- Text transform
- Line height
- Font style
- Text color
- Link color
- Link hover color

**Batas ukuran font:**

- Minimum: `8px`
- Maksimum: `20px`

## Catatan Penting

- Pengaturan **Widget Column** hanya berpengaruh jika **Footer Widget** diaktifkan.
- Setiap section (Footer Widget & Copyright) memiliki pengaturan style **independen**.
- Perubahan di Customizer dapat langsung dilihat melalui **live preview**.

## Ringkasan

Section **Global Footer** memungkinkan kamu untuk:

- Mengatur struktur kolom footer widget
- Mengontrol tampilan dan layout copyright
- Mengelola container dan gaya visual footer
- Menjaga konsistensi desain footer di seluruh website

Pengaturan ini sangat cocok digunakan untuk menyesuaikan footer dengan kebutuhan branding dan layout situs.
