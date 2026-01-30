---
title: Pertanyaan Mengenai Kunci Lisensi Idtheme
outline: deep
---

# Pertanyaan Mengenai Kunci Lisensi Idtheme

Berikut beberapa hal yang sering ditanyakan terkait kunci lisensi theme Idtheme.

## 1. Di Mana Saya Bisa Mendapatkan Kunci Lisensi?

Kunci lisensi bisa anda dapatkan di **member area Kentooz/Idtheme**.

Langkah-langkah:

1. Login ke member area: `http://member.kentooz.com/`
2. Masuk ke menu **License** atau menu **License Key**. Atau link lengkap: http://member.kentooz.com/softsale/license
3. Di halaman tersebut akan tampil daftar lisensi untuk produk yang anda beli.

![License Key Kentooz](/general/lisensi/menu-lisense-key-kentooz.png)

Catatan:

- Pastikan anda login menggunakan akun yang sama dengan saat melakukan pembelian.
- Jika lisensi tidak muncul, cek juga riwayat pembelian dan metode pembayaran.

## 2. Di Mana Saya Memasukkan Kunci Lisensi dan Bagaimana Cara Menonaktifkannya?

Setiap theme Idtheme umumnya memiliki plugin lisensi tersendiri. Contoh:

- Jika anda membeli theme **Muvipro**:
  - Menu lisensinya ada di **Plugins → Muvipro License**.
- Jika anda membeli theme **Newkarma**:
  - Menu lisensinya ada di **Plugins → Newkarma License**.
- Theme lain akan memiliki menu serupa, misalnya **NamaTheme License**.

### Mengaktifkan Lisensi

1. Masuk ke dashboard WordPress.
2. Buka **Plugins → [Nama Theme] License**.
3. Masukkan **License Key** yang anda dapatkan dari member area.
4. Klik tombol **Activate / Actived**.

Jika berhasil:

- Status lisensi akan berubah menjadi aktif.
- Fitur update otomatis dan pengaturan terkait lisensi akan berjalan normal. Screen shot:

![License Activated](/general/lisensi/memasukkan-lisensi-idtheme.png)

### Menonaktifkan Lisensi

Jika anda ingin menonaktifkan lisensi pada domain tersebut:

1. Masuk ke menu lisensi theme yang sama.
2. Masukkan kembali **License Key** anda.
3. Klik tombol **Deactivate / Deactivated**.

## 3. Setelah Memasukkan Kunci Lisensi, Kenapa Copyright Theme di Footer Tidak Hilang?

Beberapa kemungkinan penyebab:

1. **Cache plugin / CDN**
   - Jika anda menggunakan:
     - Plugin **Autoptimize**.
     - Plugin cache (WP Fastest Cache, W3TC, LiteSpeed Cache, dsb.).
     - CDN (misalnya Cloudflare).
   - Solusi:
     - Lakukan **clear/purge cache** di semua plugin cache.
     - Lakukan purge cache di CDN.

2. **Pengaturan HTTP/HTTPS tidak konsisten**
   - Jika website anda sudah menggunakan **HTTPS**, pastikan:
     1. Masuk ke **Settings → General**.
     2. Cek **WordPress Address (URL)** dan **Site Address (URL)**.
     3. Keduanya harus menggunakan `https://` (bukan `http://`).

![Settings -> general](/general/lisensi/settings-general-wordpress-lisensi.png)

Setelah memperbaiki hal di atas, clear cache lagi dan cek ulang bagian copyright.

## 4. Setelah Update Theme, Kenapa Lisensi Harus Diaktifkan Lagi?

Dalam beberapa kasus, setelah update theme:

- Opsi lisensi di theme perlu disesuaikan (misalnya ada perbaikan bugs pada sistem lisensi).
- Akibatnya, anda mungkin diminta untuk **mengaktifkan kembali** lisensi.

Solusi:

1. Masukkan lagi **License Key** anda di halaman lisensi theme.
2. Klik **Activate** seperti saat aktivasi pertama kali.

Jika theme diinstal oleh developer untuk anda:

- Anda bisa meminta developer tersebut untuk:
  - Mengaktifkan ulang lisensi.
  - Atau memberikan license key (jika perjanjian memungkinkan) agar anda bisa mengaktifkannya sendiri.

Kejadian ini tidak sering, namun bisa terjadi jika ada perubahan besar atau perbaikan pada sistem lisensi.

## 5. Bisakah Saya Request Menonaktifkan atau Menghapus Domain dari Kode Lisensi?

Secara umum, **bisa**, dengan syarat-syarat tertentu.

Syarat utama:

- Pembelian lisensi **belum melebihi 1 tahun** sejak tanggal pembelian.
  - Cek tanggal pembelian di menu lisensi (kolom `created / dibuat`).
- Domain lama sudah:
  - Mati (expired/tidak aktif), atau
  - Di-redirect ke domain lain, atau
  - Diparking dan **sudah tidak menginstall WordPress**.

Jika domain masih aktif menggunakan WordPress dan theme Idtheme:

- Anda diharapkan **menonaktifkan sendiri lisensi via dashboard WordPress**, sesuai langkah di poin 2.
- Tim Idtheme tidak akan menghapus domain secara paksa jika WordPress dan theme masih aktif, karena:
  - Kode lisensi masih tersimpan di database.
  - Demi keamanan dan konsistensi data lisensi.

Jika domain sudah diganti theme lain:

1. Install kembali theme Idtheme yang terkait lisensi tersebut (sementara).
2. Masuk ke halaman lisensi theme.
3. Lakukan **deactivate** lisensi dari dashboard.

Pertanyaan lain terkait lisensi dapat ditambahkan seiring waktu. Jika anda memiliki pertanyaan tambahan:

- Silakan ajukan melalui helpdesk atau kontak resmi Idtheme/Kentooz.
