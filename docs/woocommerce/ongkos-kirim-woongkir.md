---
title: Cara Menambahkan Ongkos Kirim pada WooCommerce Menggunakan Woongkir
outline: deep
---

# Cara Menambahkan Ongkos Kirim pada WooCommerce Menggunakan Woongkir

::: danger Perhatian
Link tutorial sudah usang karena plugin Woongkir sudah tidak pernah diupdate dan sudah dihapus pada repositor wordpress.
:::

## Video Tutorial

Berikut adalah video tutorial lengkap:
<YouTubeEmbed video-id="bTVbRxyjAA4" />

## Prasyarat
- WooCommerce sudah terpasang dan dikonfigurasi dasar.
- Satuan berat produk konsisten (gram atau kg).

## Instalasi Woongkir
1. Masuk ke **Plugins → Add New**.
2. Cari “Woongkir”.
3. Klik **Install** lalu **Activate**.

Link plugin Woongkir: [https://wordpress.org/plugins/woongkir/](https://wordpress.org/plugins/woongkir/)

## Pengaturan Woongkir
Masuk ke **WooCommerce → Woongkir** atau **WooCommerce → Settings → Woongkir** (tergantung versi/plugin).

- Shipping Origin Province = Provinsi lokasi toko.
- Shipping Origin City = Kota/Kabupaten lokasi toko.
- Subdistrict/Kecamatan (jika tersedia) = Kecamatan lokasi toko.
- Postcode = Kode pos toko.
- Weight Unit = Pastikan sesuai dengan pengaturan WooCommerce (disarankan gram untuk akurasi RajaOngkir).
- RajaOngkir API Key = Masukkan API key dari **rajaongkir.com**.
- RajaOngkir Account Type = Pilih sesuai paket (Starter/Basic/Pro).
- Couriers = Aktifkan kurir yang digunakan (JNE, TIKI, POS, dsb).
- Services = Pilih layanan yang ingin ditampilkan (REG, YES, OKE, dsb) jika opsi tersedia.
- Optional: Aktifkan cache ongkir jika plugin menyediakan, untuk performa lebih baik.

Klik **Save changes**.

## Menambahkan Metode di Shipping Zones
1. Masuk ke **WooCommerce → Settings → Shipping**.
2. Buat atau pilih **Shipping zone** (misalnya Indonesia).
3. Klik **Add shipping method**.
4. Pilih **Woongkir** lalu **Add method**.
5. Buka metode **Woongkir** dan sesuaikan opsi tambahan (jika ada).

## Pengujian
- Tambahkan produk ke keranjang, buka halaman **Checkout**.
- Isi alamat pelanggan lengkap (provinsi, kota/kecamatan, kode pos).
- Pastikan biaya kirim muncul sesuai layanan kurir yang diaktifkan.

## Tips & Troubleshooting
- Ongkir tidak muncul/0: cek API key, kurir/layanan aktif, alamat lengkap, dan unit berat produk.
- Layanan terbatas: sesuaikan layanan kurir di pengaturan Woongkir dan pastikan wilayah tercover.
- Performa: aktifkan cache ongkir (bila ada) dan kurangi panggilan API berulang.
