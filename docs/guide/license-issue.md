---
title: License Activation & Issue Troubleshooting
description: Panduan menyeluruh untuk menangani masalah aktivasi lisensi dan debugging REST API lisensi WordPress (cURL).
outline: deep
---

# License Activation & Issue Troubleshooting

Panduan ini menjelaskan **cara mengatasi masalah umum pada license activation**, serta langkah-langkah solusi berdasarkan skenario yang sering ditemui.

Dokumentasi ini menggabungkan:
- **Alur request lisensi**
- **Contoh cURL**
- **Masalah umum**
- **Solusi troubleshooting**

## Gejala Khas Kegagalan Aktivasi Lisensi

Beberapa gejala umum yang dapat terjadi pada proses aktivasi lisensi:

- Button **Activate** tidak memberikan respon / page refresh tanpa pesan.
- Lisensi tetap tidak aktif meskipun REST API merespon **success**.
- Remote server tidak bisa dihubungi.
- Lisensi tidak tertulis di database atau file upload.  

## 1. License Activation Limit / Domain Change

Masalah ini biasanya terjadi jika:
- License key sudah diaktifkan di domain lain.
- Situs lama dihapus namun lisensi tidak dinonaktifkan.
- Domain berpindah tanpa proses deactivate.

Solusi:

**Coba *Deactivate* di situs lama**

Jika masih bisa akses WP Admin situs lama, buka halaman lisensi dan klik **Deactivate License**.

## 2. ISP / Network Blockage

Beberapa jaringan provider ISP memblokir akses ke server remote lisensi.
Gejala paling umum:  
> cURL timeout / connection failed.

Solusi:

1. **Tes koneksi cURL langsung dari server**
   ```bash
   curl -I https://lcs.bostheme.com/
   ```

2. Jika gagal:

- Pastikan port 80/443 terbuka.
- Gunakan proxy sementara untuk aktivasi, caranya:
    - Buka https://free-proxy-list.net/id/
    - Dapatkan detail proxy pertama yang tersedia
    - Tambahkan kode berikut ke functions.php theme aktif:
    ```php
    add_action('http_api_curl', function( $handle ){
        curl_setopt($handle, CURLOPT_PROXY, "PROXY_IP");
        curl_setopt($handle, CURLOPT_PROXYPORT, PROXY_PORT);
    }, 10);
    ```
    - Setelah aktivasi berhasil, hapus kode proxy dari functions.php.

## 3. Caching Layer Interference

Layer caching seperti Redis / Memcached kadang dapat menahan data lisensi yang terlalu panjang dan menyebabkan data tidak tersimpan di DB.

Solusi: Nonaktifkan sementara caching saat proses aktivasi, lalu aktifkan kembali setelah selesai.

## 4. Database Encoding Issue

Jika encoding kolom option_value tidak kompatibel, data lisensi mungkin tidak tersimpan.

Solusi:

- Pastikan kolom option_value menggunakan UTF-8 atau UTF8MB4.
- Tes dengan memasukkan karakter non-ASCII. Jika gagal, ubah encoding.

## 5. Security Layer Blockage

ModSecurity atau rule WAF lain kadang memblokir request cURL karena kombinasi karakter tertentu.

Solusi:
- Coba nonaktifkan sementara ModSecurity/WAF untuk domain kamu.
- Setelah aktivasi berhasil, aktifkan kembali aturan keamanan tersebut.

## Debugging Tips (Best Practice)

Untuk membantu support atau debugging lisensi, sertakan:
- Status response JSON lengkap
- cURL request yang digunakan
- Output error server (jika ada)
- Screenshot laman aktivasi
- Hosting environment (PHP version, open_basedir, allow_url_fopen, dll)
- Kasih akses ke halaman dashboard anda, saya akan cek apakah lisensi sudah teraktivasi.

## Summary

Masalah pada aktivasi lisensi biasanya terjadi karena:
- Remote API tidak terjangkau
- Setting server tidak kompatibel
- Lisensi sudah dipakai di tempat lain
- Caching / keamanan server mengganggu request

Setiap masalah punya workaround yang jelas seperti di bagian atas.

Dokumentasi ini memberikan langkah cepat untuk identifikasi dan penyelesaian yang efektif — berdasarkan kasus nyata license activation issues.