---
title: Pengaturan Sub Page Player dan Ajax Search di Versi 1.0.6
outline: deep
---

# Muvipro v1.0.6: Sub Page Player & Ajax Search

Versi 1.0.6 Muvipro menambahkan pengaturan terkait **Sub Page Player** dan **Ajax Search**, yang meningkatkan pengalaman menonton dan pencarian.

## Sub Page Player

Fitur ini biasanya memungkinkan:

- Tab ketika di klik maka player kedua akan muncul pada sub page permalink.
- Kontrol yang lebih fleksibel terhadap tampilan player dan daftar episode/mirror.

Pengaturan umum:

- Masuk ke **Appearance -> Customizer -> Movie -> Movie Content**.
- Cari opsi:
  - **player style**.
  - Atur:
    - Sesuaikan dengan kebutuhan, apakah player menggunakan ajax tab atau sub page tab.
  
  Berikut ada contoh pengaturan:

![Player Style Settings](/muvipro/sub-page/player-style-settings.jpg)

## Ajax Search

Ajax Search memudahkan pengunjung mencari film/episode tanpa reload halaman penuh.

Pengaturan umum:

- Masuk ke **Settings -> Idmuvi Core -> Ajax & content**.
- Centang **Enable Ajax Search**.
- Save Changes.

Perilaku:

- Saat user mengetik judul film di kotak search:
  - Hasil akan muncul sebagai dropdown suggestion atau list tanpa reload halaman.

## Rekomendasi Setelah Update

1. Setelah update ke v1.0.6:
   - Cek halaman search dan pastikan Ajax Search bekerja.
   - Cek tampilan single movie dan sub page player (jika diaktifkan).
2. Jika ada konflik dengan plugin pencarian lain:
   - Nonaktifkan sementara plugin pencarian pihak ketiga.
   - Pastikan hanya satu sistem ajax search yang aktif.
3. Clear cache browser dan server.

