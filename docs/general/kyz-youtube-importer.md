---
title: Cara Pengaturan dan Posting Menggunakan Kyz YouTube Importer (Vidpro)
outline: deep
---

# Cara Pengaturan dan Posting Menggunakan Kyz YouTube Importer (Vidpro)

Panduan ini merangkum penggunaan Kyz/KTZ YouTube Importer khusus dalam konteks theme Vidpro.

## Video Tutorial

Lihat video tutorial berikut:

<YouTubeEmbed video-id="euwOZJhMVK4" />

## Instalasi dan Aktivasi Plugin Ktz YouTube Importer

1. Masuk ke **Plugins → Add New**.
2. Download Package theme vidpro, extract dan anda akan menemukan folder plugin.
3. Masuk ke folder plugin dan upload file `ktz-youtube-importer.zip`, upload file tersebut.
3. Klik **Install Now** dan kemudian **Activate**.

## Pengaturan Kyz YouTube Importer

Berikut adalah keterangan dari gambar pengaturan ktz yt importer – youtube importer. Lihat screenshot di bawah:

![Kyz YouTube Importer Settings](/general/youtube-importer/youtube-importer-settings.png)

1. **Youtube API**, disini anda wajib memasukkan youtube API anda sendiri, untuk tutorial mendapatkan API youtube bisa dilihat dimari: [Tutorial Cara Mendapatkan Youtube API Key V3](/general/youtube-api-key-v3.md).

2-7 bisa anda baca sendiri langsung pada pengaturan atau bisa lihat video.

8. **Youtube Custom Field**, nah pada bagian ini anda bisa atur sesuka yang anda inginkan sesuai custom field masing2 theme anda, atau jika anda tidak memasukkan custom field maka video akan langsung masuk pada konten anda, jadi jika anda tidak menggunakan custom field, biarkan kosong dan pilih Youtube URL.

## Theme Yang Support

Kyz YouTube Importer ini bisa digunakan pada berbagai theme buatan kentooz, namun untuk pengaturan custom field nya berbeda-beda tergantung theme yang anda gunakan, berikut adalah contoh settingan custom field pada beberapa theme idtheme:

### Vidpro:

Gunakan youtube custom field _vpytid dan pilih Youtube ID Only.

### Newkarma, Majalahpro, Bloggingpro, Wpberita dan Wpmedia

Ada 2 cara:

1. Jika anda ingin menggunakan Oembed, gunakan Youtube custom Field MAJPRO_Oembed dan pilih Youtube URL.
2. Jika anda ingin menggunakan Iframe, gunakan Youtube Custom Field MAJPRO_Iframe dan pilih Youtube Embed.

### Superfast dan galepro:

Theme ini tidak memiliki pengaturan video maka yang perlu anda lakukan adalah memasukkan langsung url pada content, maka biarkan kosong youtube custom field dan pilih Youtube URL biasanya secara otomatis postingan akan mengubah youtube url menjadi embed youtube, jika gagal maka pilih Youtube Embed.

Untuk theme lain nya, anda bisa biarkan kosong youtube custom field dan pilih Youtube URL atau Youtube Embed, kecuali theme tersebut ada pengaturan videonya.

## Tab Import

Contoh penggunaan tab import:
![Kyz YouTube Importer Import Tab](/general/youtube-importer/ktz-youtube-importer-import.png)

1. **Pengaturan Import**: anda bisa pilih Playlist, Search, atau Channel ID, jika anda memilih untuk ambil data Playlist maka pilih playlist dan cukup memasukkan Playlist ID nya saja, jika anda pilih Search maka anda bisa memasukkan keyword yang anda inginkan, jika anda memilih Channel ID, maka cukup memasukkan Channel ID nya saja.

2. **Form Pencarian**: Nah disini anda bisa memasukkan Keyword, Playlist ID atau Channel ID sesuai dengan opsi yang anda pilih, setelah itu klik Search untuk menampilkan hasil.

3. **Result**: Setelah muncul hasil pencarian, maka silahkan anda klik Post Now. Untuk memposting pengaturan yang sudah anda buat dan pos yang anda pilih.

4. **Success Posting**: Setelah sukses posting, anda tinggal memilih untuk mengedit atau melihat postingan tersebut.

## Catatan Penting

- Pastikan anda sudah mengaktifkan youtube API dan memasukkannya pada pengaturan plugin.
- Anda dapat menemukan file ktz yt importer pada folder plugin di packed theme vidpro. Lihat video
- Jika anda menggunakan custom field, pastikan custom field tersebut sudah diatur pada theme anda.
- Anda wajib menggunakan module CURL dan JSON pada hosting anda. Minimal adalah php versi 7.2 dan gunakan wordpress terbaru.