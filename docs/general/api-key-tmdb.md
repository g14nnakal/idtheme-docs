---
title: Cara Mendaftar Akun dan Mendapatkan API Key TMDB
outline: deep
---

# Cara Mendaftar Akun dan Mendapatkan API Key TMDB

## Video Tutorial

Kali ini saya akan memberikan sebuah tutorial cara untuk mendaftar akun di TMDB dan mendapatkan API KEY TMDB. Berikut video tutorial:

<YouTubeEmbed video-id="lhSC6g6lmxE" />

Beberapa theme Idtheme (misalnya Muvipro) menggunakan TMDB (The Movie Database) untuk mengambil data film dan TV series secara otomatis.

Berikut langkah untuk mendaftar akun dan mendapatkan TMDB API Key.

## 1. Membuat Akun di TMDB

1. Buka situs resmi TMDB: https://www.themoviedb.org/
2. Klik tombol **Sign Up** pada pojok kanan atas.
3. Isi form pendaftaran dengan:
   - **Username**
   - **Password**
   - **Email**
4. Klik **Sign Up**.
5. Cek inbox email anda, lalu klik link konfirmasi yang dikirimkan oleh TMDB.
6. Setelah konfirmasi, akun TMDB anda aktif.

Berikut adalah contoh signup form nya:

![Profil Akun TMDB](/general/api-tmdb/daftar-akun-di-tmdb.jpg)

## 2. Mengisi Data Profil Dasar

Setelah akun aktif dan anda sudah login:

1. Login ke TMDB.
2. Lengkapi data profil jika diminta (nama, negara, dan informasi lain yang diperlukan).
3. Pastikan akun anda sudah siap digunakan sebelum mengajukan API Key.

## 3. Membuka Menu API

1. Setelah login, masuk ke halaman akun anda.
2. Di menu sebelah kiri, cari dan klik menu **API**.

![Menu API TMDB](/general/api-tmdb/link-api-tmdb.jpg)

3. Scroll ke bagian bawah halaman sampai menemukan bagian **Request an API Key**.
4. Klik link **Click Here** pada bagian tersebut.

![Request API TMDB](/general/api-tmdb/request-api-tmdb.jpg)

## 4. Mengajukan API Key Baru

Setelah klik **Click Here**, anda akan diarahkan ke form pengajuan API Key.

1. Pilih tipe API Key:
   - Disarankan memilih tipe **Developer** (untuk pengembangan website/aplikasi).
2. Pada bagian **Type of use**, pilih:
   - **Website** (karena akan digunakan di website WordPress / theme Idtheme).
3. Isi form pendaftaran API:
   - **Website URL**: alamat website anda.
   - **Application Name**: nama website atau project.
   - **Application Summary / Description**: jelaskan singkat dalam bahasa Inggris, misalnya:  
     `Use TMDB API to display movie information on my personal website using an Idtheme theme.`
4. Isi data lain yang diminta dengan benar.
5. Klik **Submit** atau tombol untuk mengirim pengajuan API Key.

![Type of Use API TMDB](/general/api-tmdb/type-of-use-api-tmdb.jpg)


Jika data yang anda isi sudah benar, API Key biasanya akan segera disetujui oleh TMDB.

## 5. Melihat API Key (v3 auth)

Setelah pengajuan disetujui:

1. Masuk kembali ke halaman **API** di akun TMDB anda.
2. Pada bagian **API Key (v3 auth)**, anda akan melihat kode API Key berupa kombinasi huruf dan angka.
3. Simpan API Key ini di tempat yang aman.
4. Pada beberapa akun juga tersedia **API Read Access Token (v4 auth)**, namun untuk integrasi dengan banyak theme Idtheme biasanya cukup menggunakan **API Key (v3 auth)**.

Setelah pengajuan disetujui, anda akan mendapatkan:

- API Key (v3 auth).
- Terkadang API Read Access Token (v4).

![API Key TMDB](/general/api-tmdb/api-key-v3-tmdb.jpg)

## 6. Menyimpan API Key di Pengaturan Theme/Plugin

API Key yang sudah didapatkan perlu dimasukkan ke pengaturan theme atau plugin yang menggunakan TMDB.

Contoh untuk Muvipro (atau theme lain yang terintegrasi TMDB):

1. Masuk ke **Settings → Idmuvi Core → TMDB Settings** (atau nama serupa).
2. Aktifkan opsi **Enable TMDB API**.
3. Masukkan **TMDB API Key** yang anda dapatkan.
4. Simpan pengaturan.

Setelah itu:

- Fitur import data film/TV dari TMDB dapat digunakan.
- Pastikan server anda dapat mengakses TMDB (tidak diblokir firewall).

## 7. Catatan Penggunaan API

- Jangan membagikan API Key di tempat publik.
- Patuhi terms of use TMDB.
- Jika kuota API habis atau terjadi error, cek kembali dashboard TMDB anda.
