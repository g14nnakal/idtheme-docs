---
title: Pengaturan Baru di Muvipro Versi 1.0.5
outline: deep
---

# Update Muvipro v1.0.5

Versi 1.0.5 biasanya berisi perbaikan dan penambahan fitur seputar tampilan movie dan navigasi (sesuai changelog resmi). Pada versi ini banyak fitur fitur baru, seperti infinite scroll, popup banner, player notifikasi, dan masih banyak lagi.

## Video Tutorial Muvipro v1.0.5

<YouTubeEmbed video-id="qzIuBj1zdf4" />

## Customization

- Pengaturan tombol seperti lk21, jika anda ingin mengubah tombol dari default tombol bawaan theme ke tombol seperti lk21 silahkan anda masuk ke **Customizer -> General -> General layout** Ganti Button style ke Lk21 Button Style.

- Mengubah kata latest movie di beranda, silahkan anda masuk ke **Customizer -> General -> General layout** silahkan anda isi Text Home page disana.

- Jika anda ingin memasukkan notifikasi di semua atas player, anda bisa masuk ke **Customizer -> Movie -> Movie Content** silahkan anda isi Player Notification untuk menampilkan notifikasi pada semua player yang anda masukkan di post.

Berikut adalah screenshot dari:

![Customizer Muvipro v.1.0.5](/muvipro/v-1-0-5/customizer-versi-105.jpg)

> Sesuaikan detail dengan changelog resmi. Halaman ini dapat digunakan untuk mencatat perubahan penting internal anda.

## Custom Field

Jika anda ingin memasukkan notifikasi tertentu di postingan movie tertentu, maka anda tinggal edit movie anda, lalu klik tab Player Settings nah anda tinggal isi saja **Player Notification** pada pengaturan tersebut.

Berikut adalah screenshot nya:
![Custom Field Player Notification](/muvipro/v-1-0-5/custom-field-player-notification.jpg)

## Idmuvi Core

Pada versi 1.0.5 ini juga ada penambahan fitur di plugin Idmuvi Core, yaitu:
 - **Fitur popup banner**, silahkan anda masuk ke **Idmuvi Core -> Ads**, silahkan anda lihat pengaturan popup banner, dan silahkan anda isi banner anda disana.

- Jika anda ingin membuat navigasi **infinite scroll**. Versi terbaru ada di customizer, silahkan anda masuk ke **Customizer -> Movie -> Movie Layout**, silahkan anda ganti Blog Navigation Type ke Infinite Scroll.

- Jika anda ingin melakukan pengurutan konten di halaman index dan arsip berdasarkan Tahun, Rating, judul atau post terbaru anda bisa mengubahnya di **Idmuvi Core -> Ajax & Content**, Silahkan anda ganti **Content Order By** sesuai kebutuhan. Mengenai pengurutan ini, silahkan anda lihat catatan penting dibawah.

Catatan penting:

> Jika anda mengatur Content Order By, maka pastikan movie data, seperti TMDB Rating dan Release Year(TMDB) terisi. Pada versi sebelumnya TMDB Rating sudah tersedia, sedangkan Release Year(TMDB) belum ada. Nah ini yang menyebabkan konten tidak ditampilkan ketika anda merubah ke Order By Release Year pada pengaturan Content Order By.

![Content Order Movie Data](/muvipro/v-1-0-5/content-order-moviedata.jpg)

## Lainnya

Catatan lainnya, semua postingan terbaru akan otomatis terisi jika anda menggunakan TMDB post. So jangan kuatir untuk postingan terbaru.
