---
title: Redirect UC Browser ke Google Chrome di Semua Theme Idtheme
outline: deep
---

# Redirect UC Browser ke Google Chrome di Semua Theme Idtheme

Kali ini saya membuat sebuah tutorial cara redirect UC Browser. Pemain AdSense tentu sangat terganggu dengan adanya adblock, karena dapat mengurangi earning.

Di beberapa theme Idtheme sudah ada deteksi adblock, dan untuk pengguna UC Browser di mobile anda bisa menambahkan script khusus untuk mengarahkan ke Google Chrome.

## 1. Letak Pengaturan Script di Theme Idtheme

Untuk theme Idtheme yang menggunakan plugin core (misalnya **Idblog Core** atau **Idmuvi Core**):

1. Masuk ke **Settings** di dashboard WordPress.
2. Cari menu pengaturan plugin core, contoh:
   - **Settings → Idblog Core** (untuk theme Superfast dan sejenisnya).
   - **Settings → Idmuvi Core** (untuk theme movie seperti Muvipro).
3. Masuk ke tab **Other** atau tab yang memiliki pengaturan **Head Script**.

Di sana biasanya ada kolom untuk memasukkan script tambahan di bagian `<head>` website.

> Placeholder gambar: tampilan pengaturan Head Script di plugin core Idtheme.

## 2. Script Redirect UC Browser ke Google Chrome

Masukkan script berikut ke kolom **Head Script**:

```html
<script type='text/javascript'>
//<![CDATA[
var noUC = navigator.userAgent;
var redirect = noUC.search("UCBrowser");
if (redirect > 1) {
  var axefo = window.location.assign("googlechrome://navigate?url=" + window.location.href);
  var activity = axefo;
  document.getElementsByTagName('head')[0].appendChild(activity);
}
//]]>
</script>
```

Penjelasan singkat:

- Script mendeteksi **user agent** yang mengandung kata `UCBrowser`.
- Jika terdeteksi:
  - Browser diinstruksikan membuka URL yang sama menggunakan **Google Chrome** melalui skema `googlechrome://navigate?url=...`.

Script ini ditujukan untuk pengunjung mobile yang memiliki Google Chrome terpasang.

> Placeholder gambar: contoh kode script yang ditempel di kolom Head Script.

## 3. Clear Cache Setelah Menambahkan Script

Setelah menambahkan script:

1. Clear cache di semua plugin cache (WP Fastest Cache, W3 Total Cache, LiteSpeed, dsb.).
2. Jika menggunakan CDN atau Nginx dengan cache:
   - Lakukan **purge cache** di level server/CDN.
3. Coba akses website menggunakan UC Browser di perangkat mobile untuk mengetes redirect.

## 4. Catatan Penting

- Gunakan script ini hanya jika anda benar-benar membutuhkan (misalnya terkait pengiklanan).
- Jangan lupa menguji di beberapa perangkat dan browser agar pengunjung lain tidak terganggu.
- Kebijakan redirect seperti ini sepenuhnya opsional dan tergantung strategi masing-masing website.
