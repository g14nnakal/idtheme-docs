---
title: Menambahkan Optin Form di Theme Salespro
outline: deep
---

# Menambahkan Optin Form di Salespro

Salespro sering digunakan untuk mengumpulkan leads (email).  
Anda bisa menambahkan optin form dari layanan seperti **GetResponse**, **Mailchimp**, atau layanan email marketing lainnya.

## Video Tutorial

Pada dokumentasi asli, contoh yang digunakan adalah form **GetResponse**.  
Silakan tambahkan ID video anda di bawah ini.

<YouTubeEmbed video-id="Z1DfZvBa4c4" />

## 1. Mendapatkan Kode Form dari Layanan Email

Contoh dengan **GetResponse** (konsepnya mirip untuk layanan lain):

1. Login ke akun GetResponse.
2. Buat form (web form) baru.
3. Setelah selesai, ambil **HTML form code** atau **JavaScript code** yang disediakan.

Untuk Mailchimp / layanan lain:

- Buat form signup.
- Ambil embed code yang disediakan (HTML/JS).

## 2. Menempatkan Form di Halaman (Elementor)

Jika anda menggunakan Elementor untuk landing page:

1. Buka halaman landing page dengan **Edit with Elementor**.
2. Tambahkan widget **HTML** atau **Shortcode**:
   - Jika menggunakan HTML embed: gunakan widget **HTML** dan paste kode form.
   - Jika layanan menyediakan shortcode (via plugin resmi): gunakan widget **Shortcode**.
3. Sesuaikan posisi form:
   - Misalnya di hero section, di bawah penjelasan produk, atau di sidebar (jika layout mendukung).
4. Salespro terdapat Optin form widget yang bisa anda gunakan. Berikut adalah screenshot widget Optin form:

![Optin Form Widget](/salespro/optin-form/optin-form-widget.jpg)

Keterangan:

- Form Method itu digunakan untuk method=”” pada tag form HTML, terdiri dari post atau get.
- Form Action itu digunakan untuk action=”” pada tag form HTML, biasanya berupa link atau URL.
- Form Name itu digunakan untuk name=”” pada tag form HTML.
- Form ID itu digunakan untuk id=”” pada tag form HTML.
- Form Class itu digunakan untuk class=”” pada tag form HTML.
- Form accept-charset itu digunakan untuk accept-charset=”” pada tag form HTML.
- Form enctype itu digunakan untuk enctype=”” pada tag form HTML.

> Untuk mengubah urutan input anda tinggal drag dan drop saja, dan pastikan Type submit berada di paling bawah karena itu adalah button.

## 3. Menempatkan Form di Widget Area

Jika ingin menempatkan optin form di sidebar atau footer:

1. Masuk ke **Appearance → Widgets**.
2. Pilih area widget (Sidebar, Footer, dsb).
3. Tambahkan widget **Custom HTML** atau **Text**.
4. Paste embed code form (HTML/JS).
5. Simpan.

## 4. Penyesuaian Desain

Beberapa tips agar form menyatu dengan desain Salespro:

- Gunakan warna tombol yang senada dengan warna utama theme.
- Sesuaikan teks call-to-action (misalnya “Dapatkan Ebook Gratis”, “Daftar Sekarang”, dsb).
- Hindari form terlalu panjang; cukup minta nama dan email jika memungkinkan.

Jika layanan memungkinkan, anda juga bisa:

- Menghapus branding bawaan form (GetResponse/Mailchimp) agar tampilan lebih bersih.
- Mengatur redirect setelah submit ke halaman terima kasih (Thank You page).

## 5. Testing

Setelah menempatkan form:

1. Lakukan **uji submit**:
   - Masukkan alamat email uji coba.
   - Pastikan data masuk ke list di layanan email anda.
2. Pastikan tidak ada error JavaScript di console browser.
3. Cek tampilan di perangkat mobile dan desktop.

Jika form tidak tampil:

- Pastikan kode HTML/JS tidak difilter oleh WordPress (kadang editor klasik memodifikasi kode).
- Coba gunakan widget **Custom HTML** atau gunakan plugin resmi dari layanan email marketing.

