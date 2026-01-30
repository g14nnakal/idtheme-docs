---
title: Text Marquee (Header Layout) - Theme Jurnalpress
description: "Dokumentasi opsi Text Marquee pada panel Header di Customizer theme JurnalPress: tipe konten (Text/Post), posisi, judul, konten, query posting, serta pengaturan style (container, height, font, warna, background, radius)."
outline: deep
---

# Text Marquee (Header Layout) - Theme Jurnalpress

Section **Text Marquee** menampilkan bar berjalan (ticker) untuk informasi singkat seperti breaking news, promo, atau pengumuman penting. Konten dapat berupa **teks statis** atau **daftar posting** yang diambil otomatis dari query.

## Lokasi di Customizer

```
Appearance → Customize → Header → Text Marquee
```

## Tabs

- **General** – Mengatur jenis konten, posisi, judul, dan isi marquee
- **Query** – Mengatur sumber dan filter posting (saat tipe konten “Post”)
- **Style** – Mengatur tampilan visual marquee dan label judulnya

## General Settings

### Enable Marquee
**Customizer ID:** `*_marquee_active`  
**Type:** Toggle  

Mengaktifkan atau menonaktifkan tampilan marquee.

**Default:** Enabled (1)

### Type Marquee
**Customizer ID:** `*_marquee_type`  
**Type:** SVG Button  

Menentukan sumber konten marquee:
- **Text** – Menampilkan teks dari editor (lihat “Text Notification”)
- **Post** – Menampilkan judul posting berdasarkan pengaturan di tab Query

**Default:** `post`

### Marquee Position
**Customizer ID:** `*_marquee_position`  
**Type:** Select  

Menentukan posisi marquee relatif terhadap header:
- **After Header** – Ditampilkan di bawah header (default)
- **After Header (Margin Top)** – Di bawah header dengan margin top tambahan
- **Before Header** – Ditampilkan di atas header

**Default:** `after`

### Title Marquee
**Customizer ID:** `*_marquee_title`  
**Type:** Text  
**Placeholder:** `Breaking News`  

Mengatur label/teks judul kecil yang tampil di sisi kiri marquee.

### Text Notification
**Customizer ID:** `*_marquee_text`  
**Type:** TinyMCE Editor  

Konten teks untuk marquee ketika **Type Marquee = Text**.

**Default Content:**  
`This is a notification. You can use shortcodes, links, and any text you want.`

**Fitur editor:**

| Toolbar | Keterangan |
|--------|------------|
| bold, italic, underline | Format teks dasar |
| link | Menambahkan tautan |
| forecolor, backcolor | Warna teks & highlight |

Media buttons: `false` (tidak menampilkan tombol unggah media).

> Konten mendukung shortcode. Anda bisa memasukkan shortcode dari plugin Anda sendiri.

## Query Settings

Tab **Query** aktif saat **Type Marquee = Post**. Opsi-opsi query disediakan oleh utilitas standar tema (helper) untuk memilih dan memfilter posting.

Pengaturan yang umum tersedia mencakup:
- Filter kategori dan/atau tag
- Jumlah posting yang ditampilkan
- Urutan dan kriteria pengurutan (mis. berdasarkan tanggal)
- Mengabaikan sticky post atau offset hasil

Catatan: Opsi dibuat melalui helper `jurnalpress_customizer_options_query` dengan konteks `marquee`.

## Style Settings

### Container
**Customizer ID:** `*_marquee_container`  
**Type:** SVG Button  

Pilihan:
- **Default** – Mengikuti lebar global/header
- **In Container** – Konten marquee dibatasi dalam container terpusat
- **Fullwidth** – Marquee melebar penuh dari tepi ke tepi

**Default:** `default`

### Height
**Customizer ID:** `*_marquee_height`  
**Type:** Range Slider  

**Range:**
- Min: `20px`
- Max: `60px`
- Step: `1px`

Mengatur tinggi bar marquee.

### Style Type (Marquee Area)
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

### Font Style (Typography)
**Customizer ID:** `*_marquee_typo`  
**Type:** React Font Control  

Properti:
- Size, Weight, Transform, Line Height, Style  
- Color, Link Color, Hover Color

**Range Size:** Min `8px` – Max `20px`

### Title Marquee (Style)
Kelompok pengaturan untuk label judul pada sisi kiri marquee:

- **Content Group**  
  **Customizer ID:** `*_marquee_title_content`  
  Menandai awal grup pengaturan untuk gaya judul.

- **Border Radius**  
  **Customizer ID:** `*_marquee_title_radius`  
  Mengatur lengkungan sudut label judul.

- **Color**  
  **Customizer ID:** `*_marquee_title_color`  
  Mengatur warna teks label.

- **Background**  
  **Customizer ID:** `*_marquee_title_bg`  
  **Type:** Background Control  
  **Default:** `type: solid`  
  Mengatur latar belakang label judul (solid/gradient).

## Best Practice

- Gunakan **height** yang rendah agar header tetap ringkas.
- Pilih warna teks dan background dengan kontras yang baik.
- Jika menggunakan **Post**, batasi jumlah item agar tidak terlalu cepat atau terlalu panjang.
- Gunakan **Title Marquee** yang singkat (“Breaking News”, “Update”, “Promo”).

## Ringkasan

Text Marquee memberikan bar informasi berjalan yang fleksibel untuk menampilkan pengumuman atau judul posting terbaru. Anda dapat memilih tipe konten (Text/Post), menentukan posisi terhadap header, serta mengatur gaya (container, tinggi, font, warna, background, dan radius) termasuk label judulnya.
