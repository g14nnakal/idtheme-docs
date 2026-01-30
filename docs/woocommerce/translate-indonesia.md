---
title: Cara Translate/Ubah Bahasa WooCommerce ke Bahasa Indonesia
outline: deep
---

# Cara Translate/Ubah Bahasa WooCommerce ke Bahasa Indonesia

## 1. Ubah Bahasa Situs WordPress
1. Masuk ke **Settings → General**.
2. Pada **Site Language**, pilih **Indonesia**.
3. Klik **Save Changes**.

WordPress akan mengunduh paket bahasa bila tersedia.

## 2. Pastikan Paket Bahasa Terunduh
1. Masuk ke **Dashboard → Updates**.
2. Gulir ke bagian **Translations**.
3. Klik **Update Translations** jika tersedia.

## 3. Lengkapi Terjemahan via Loco Translate
Jika masih ada string belum diterjemahkan:
1. Instal plugin **Loco Translate**.
2. Masuk ke **Loco Translate → Plugins → WooCommerce**.
3. Buat/lihat bahasa **Indonesian (id_ID)**.
4. Cari string yang ingin diubah dan isi terjemahannya.
5. Simpan perubahan.

## 4. Alternatif Manual (PO/MO)
- Anda dapat mengunggah file **.po/.mo** Indonesia ke:
  - `wp-content/languages/plugins/woocommerce-id_ID.po` dan `woocommerce-id_ID.mo`
- Gunakan **cPanel/File Manager** atau **FTP** untuk mengunggah file.
- Pastikan versi file sesuai dengan versi WooCommerce yang digunakan.

## 5. Verifikasi
- Bersihkan cache situs (jika menggunakan plugin cache).
- Buka halaman **Shop** dan **Checkout** untuk memastikan string sudah tampil dalam bahasa Indonesia.
