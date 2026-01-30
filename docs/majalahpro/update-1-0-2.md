---
title: Pengaturan Baru di Majalahpro Versi 1.0.2
outline: deep
---

# Update Majalahpro v1.0.2

Versi 1.0.2 Majalahpro menambahkan beberapa pengaturan dan perbaikan yang berfokus pada pengalaman pengguna dan fleksibilitas tampilan.

## Video Pengaturan v1.0.2

<YouTubeEmbed video-id="-UIPDKQms5s" />

## Fitur / Pengaturan Baru

- Penyesuaian tampilan pada beberapa elemen (misalnya slider, thumbnail, atau meta info).
- Pengaturan tambahan di **Majalahpro Core** untuk mengontrol perilaku ajax dan konten (bergantung changelog resmi).
- Perbaikan atau penambahan opsi di Customizer (misalnya pengaturan warna, font, atau layout tertentu).

> Catatan: Detail fitur bisa disesuaikan dengan changelog resmi theme, halaman ini berfungsi sebagai ringkasan update dan pengingat bahwa versi 1.0.2 membawa perubahan pada pengaturan.

Berikut adalah screenshot pengaturan v1.0.2 dengan plugin **Majalahpro Core** versi 1.0.3:

![Pengaturan v1.0.2](/majalahpro/v-1-0-2/pengaturan-majalahpro-versi-1.0.2.jpg)

1. **Remove Jquery Migrate**. Ini berfungsi untuk menghapus load jquery migrate dari wordpress core nya. Dengan menghapus load ini maka kecepatan website akan bertambah dan mengurangi beban load jquery. Tapi jika anda masih menggunakan script lama jquery yang sudah depracate atau usang, jangan anda aktifkan fitur ini, karena jquery anda tidak akan terload dengan baik. Mengenai jquery migrate bisa anda lihat disini: https://plugins.jquery.com/migrate/.

2. **Remove WP Oembed**. Ini berfungsi untuk menghapus load Oembed dari wordpress core nya. Dengan menghapus load ini secara otomatis website anda akan lebih cepat. Tapi perlu di ingat wp oembed ini juga penting untuk load beberapa fitur. Mengenai oembed bisa anda lihat disini: https://codex.wordpress.org/Embeds. Jika anda menggunakan fitur embeds dan ada konflik sama plugin tertentu saya sarankan jangan mengaktifkan fitur ini.

3. **Remove WP Head Meta Tag**. Ini berfungsi untuk menghapus meta yang di bawa oleh wordpress core nya, seperti rds, wlwmanifest, feed links, shortlink, comments feed dan meta tag lain bawaan wordpress. Ingat ada beberapa plugin menggunakan fitur ini, misal jetpack membutuhkan xmlprc, dan plugin lainnya, jadi jika terjadi konflik dengan plugin tertentu jangan anda aktifkan fitur ini.

## Rekomendasi Setelah Update

1. **Backup** situs terlebih dahulu sebelum melakukan update theme.
2. Setelah update:
   - Masuk ke **Appearance -> Customize** dan cek kembali pengaturan tampilan.
   - Masuk ke **Settings -> Majalahpro Core** untuk melihat opsi baru.
3. Jika menggunakan plugin cache:
   - Clear cache (plugin, CDN, dan browser) agar perubahan tampilan muncul dengan benar.

## Troubleshooting

Jika setelah update ada tampilan yang berubah:

- Cek apakah anda menggunakan child theme dan ada override template yang perlu disesuaikan.
- Cek dokumentasi changelog lengkap dari Majalahpro.
- Jika menemukan bug:
  - Pastikan theme dan plugin lain sudah versi terbaru.
  - Nonaktifkan plugin non-esensial sementara untuk mengecek konflik.
  - Jika masalah tetap ada, hubungi support Idtheme dengan menyertakan detail versi dan screenshot.

