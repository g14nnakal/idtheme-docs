---
title: After Content Element (Single Posts) – Theme JurnalPress
description: "Pengaturan elemen yang ditampilkan setelah konten utama pada halaman Single Post di theme JurnalPress."
outline: deep
---

# After Content Element (Single Posts) – Theme JurnalPress

**After Content Element** adalah section di **Customizer → Single Posts** yang digunakan untuk mengatur elemen apa saja yang muncul *setelah isi artikel* (post content). Elemen-elemen ini dapat diatur urutannya, diaktifkan atau dinonaktifkan, serta dikombinasikan sesuai kebutuhan layout dan strategi engagement pembaca.

Section ini menggunakan komponen **sortable list**, sehingga urutan elemen bisa diubah dengan drag & drop langsung dari Customizer.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element
```

## Kontrol
- **btcorereact-sortable** — menyusun urutan modul dan mengaktifkan modul.

## List After Content

### Deskripsi

Opsi **List After Content** menampilkan daftar elemen yang tersedia untuk ditampilkan setelah konten post. Anda dapat:

- Menambahkan elemen baru dengan tombol **( + )**
- Mengatur ulang urutan elemen (drag & drop)
- Menonaktifkan elemen tertentu dengan menghapus dari list

Beberapa elemen inti **tidak dapat dihapus sepenuhnya** untuk menjaga struktur halaman tetap konsisten.

## Elemen Default

Secara bawaan, elemen berikut sudah aktif:

1. **Author Box**
2. **Post Navigation**
3. **Related Posts**
4. **Banner**
5. **Comments**
6. **Widgets**

Elemen-elemen ini ditandai sebagai *mandatory elements* dan tidak bisa dihapus sepenuhnya dari daftar.

## Daftar Elemen yang Tersedia

Berikut adalah elemen yang bisa digunakan pada After Content Element:

### 1. Author Box
Menampilkan informasi penulis artikel, seperti nama, avatar, dan bio singkat.

**Setting terkait:** `author_box_aftercontentposts`

### 2. Navigation Posts
Menampilkan navigasi ke post sebelumnya dan berikutnya.

**Setting terkait:** `navigation_posts_aftercontentposts`

### 3. Related Posts
Menampilkan daftar artikel terkait berdasarkan kategori, tag, atau taxonomy lain.

Tersedia beberapa variasi:

- **Related Posts** (utama)
- **Related Posts 2**
- **Related Posts 3**

Setiap variasi memiliki pengaturan masing-masing.

**Setting terkait:**
- `related_posts_aftercontentposts`
- `related_posts_2_aftercontentposts`
- `related_posts_3_aftercontentposts`

### 4. Banner
Digunakan untuk menampilkan banner iklan atau promosi setelah konten artikel.

**Setting terkait:** `banner_aftercontentposts`

### 5. Comments
Menampilkan area komentar WordPress di bawah artikel.

**Setting terkait:** `comments_aftercontentposts`

### 6. Widgets
Menampilkan widget area khusus yang ditempatkan setelah konten post.

Cocok untuk:
- Iklan
- Newsletter
- Shortcode khusus

**Setting terkait:** `widgets_aftercontentposts`

### 7. HTML (Custom HTML)
Memungkinkan Anda menambahkan **kode HTML custom** setelah konten artikel.

Biasanya digunakan untuk:
- Script pihak ketiga
- CTA custom
- Embed tertentu

**Setting terkait:** `html_aftercontentposts`

## Catatan Penting

- Urutan elemen sangat berpengaruh terhadap UX dan engagement pembaca
- Elemen inti seperti **Author Box, Navigation, Related Posts, Comments** tidak dapat dihapus total
- Pastikan elemen berat (seperti related posts atau widget iklan) tidak terlalu banyak agar performa tetap optimal

## Tips Penggunaan

- Letakkan **Author Box** dan **Related Posts** sebelum **Comments** untuk meningkatkan eksplorasi konten
- Gunakan **Banner** atau **HTML** sebagai CTA setelah artikel selesai dibaca
- Jika menggunakan banyak elemen, prioritaskan urutan berdasarkan tujuan (SEO, ads, engagement)
