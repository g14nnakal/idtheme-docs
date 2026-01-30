---
title: Banner (Customizer) – Theme JurnalPress
description: Pengaturan panel Banner untuk berbagai lokasi iklan (Top Parallax, After Header, Between Posts, Before/Inside/After Content, Sticky Content, After Content Element, Floating Left/Right/Bottom, Footer, Popup). Mencakup tipe banner, media, URL, HTML, AMP, dan posisi.
outline: deep
---

# Banner (Customizer) – Theme JurnalPress

Panel **Banner** pada WordPress Customizer digunakan untuk mengelola berbagai jenis banner atau iklan yang ditampilkan di posisi strategis pada website. Panel ini mendukung banner berbasis **Image** maupun **HTML/Ads Code**, kompatibel dengan **AMP**, dan fleksibel untuk kebutuhan monetisasi modern.

## Lokasi Pengaturan
```
Appearance → Customize → Banner
```

## Informasi Panel

- **Nama Panel**: Banner  
- **Panel ID**: `panel-banner`  
- **Prioritas**: 50  
- **Fungsi Utama**:  
  Mengatur banner global yang dapat ditampilkan di berbagai lokasi website, baik di halaman archive, single post, maupun secara floating.

## Struktur Umum Banner

Setiap section banner pada panel ini memiliki pola opsi yang hampir sama:

### Opsi Dasar
- **Banner Type**
  - `Image` → Menggunakan gambar banner
  - `HTML` → Menggunakan kode HTML / Adsense / shortcode
- **Upload Image**
  - Muncul jika Banner Type = Image
- **Target URL**
  - URL tujuan ketika banner diklik
- **HTML Code**
  - Muncul jika Banner Type = HTML
  - Mendukung:
    - HTML
    - Google Adsense
    - Shortcode
- **HTML Code (AMP)**
  - Digunakan khusus untuk halaman AMP
  - Menggunakan komponen `<amp-ad>`

## Daftar Section Banner

### 1. Top Parallax Banner (Mobile Only)

Banner parallax yang muncul di posisi **paling atas halaman**, khusus untuk **perangkat mobile**. Dilengkapi tombol close.

**Karakteristik**
- Hanya tampil di mobile
- Efek parallax
- Dapat ditutup oleh user

**Rekomendasi Ukuran**
- Maksimal: `325px x 300px`

**Opsi Tambahan**
- **Text Before Close**  
  Teks instruksi sebelum banner ditutup  
  Contoh: `Scroll to read post.`

### 2. After Header Banner

Banner yang ditampilkan tepat **setelah header** website.

**Use Case**
- Branding
- Iklan utama
- Pengumuman penting

**Opsi Tambahan**
- **Banner Position**
  - Left
  - Right
  - Center

### 3. Between Posts Banner

Banner yang disisipkan **di antara daftar post** pada halaman archive (blog, kategori, tag).

**Posisi Banner**
- After First Post
- After Second Post
- After Third Post *(default)*
- After Fourth Post

**Catatan**
- Sangat efektif untuk meningkatkan CTR
- Tidak mengganggu alur baca

### 4. Before Content Banner

Banner yang tampil **sebelum konten utama** pada single post.

**Posisi**
- Default
- Float Left
- Float Right
- Center

### 5. Inside Content Banner

Banner yang disisipkan **di dalam isi artikel**.

**Posisi**
- Left
- Right
- Center
- Center (Parallax)
- Center (Sticky)

**Catatan**
- Cocok untuk native ads
- Parallax & sticky meningkatkan visibilitas

### 6. After Content Banner

Banner yang tampil **setelah konten artikel selesai**.

**Posisi**
- Left
- Right
- Center

### 7. Sticky Content Banner

Banner yang bersifat **sticky** di sisi kiri atau kanan konten artikel.

**Rekomendasi Ukuran**
- 120x600
- Maksimal lebar 120px

**Posisi**
- Left
- Right *(default)*

### 8. After Content Element Banner

Banner yang ditampilkan **setelah elemen tertentu** di dalam konten (misalnya setelah paragraf atau komponen).

**Posisi**
- Left
- Right
- Center

### 9. Floating Left Banner

Banner mengambang di **sisi kiri layar** pada seluruh halaman.

**Rekomendasi Ukuran**
- 120x600
- 160x600
- Maksimal lebar 160px

### 10. Floating Right Banner

Banner mengambang di **sisi kanan layar**.

**Rekomendasi Ukuran**
- 120x600
- 160x600
- Maksimal lebar 160px

### 11. Floating Bottom Banner

Banner yang mengambang di **bagian bawah layar** pada semua halaman.

**Catatan**
- Cocok untuk promo atau CTA
- Perlu dibatasi agar tidak mengganggu UX

### 12. Footer Banner

Banner yang tampil **sebelum widget footer**.

**Use Case**
- Iklan penutup halaman
- Affiliate banner
- CTA tambahan

### 13. Popup Banner

Banner berbentuk **popup** yang muncul di layar.

**Catatan**
- Tidak direkomendasikan untuk AMP
- Gunakan secara bijak agar tidak mengganggu UX

## AMP Compatibility

Beberapa banner mendukung versi **AMP HTML**:
- Gunakan `<amp-ad>`
- Pastikan ukuran dan tipe iklan valid
- Floating & popup tertentu tidak direkomendasikan untuk AMP

::: info Info
Opsi ini akan aktif jika anda mengaktifkan plugin **[AMP Official](https://wordpress.org/plugins/amp/)** pada WordPress anda.
:::

## Tips & Best Practice

- Gunakan ukuran banner sesuai rekomendasi untuk performa optimal
- Hindari penggunaan popup & floating berlebihan
- Gunakan posisi **Between Posts** untuk CTR lebih tinggi
- Pastikan HTML AMP valid untuk menghindari error AMP
- Kombinasikan Image dan HTML banner sesuai kebutuhan monetisasi

## Penutup

Panel **Banner** pada tema **JurnalPress** dirancang fleksibel dan modular, memungkinkan pengelolaan iklan yang powerful langsung dari WordPress Customizer tanpa perlu modifikasi kode tambahan.
