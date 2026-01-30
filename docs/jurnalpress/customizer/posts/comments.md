---
title: Comments (Module) – Theme JurnalPress
description: Pengaturan section Comments pada Single Posts untuk menampilkan dan mengelola area komentar setelah konten artikel.
outline: deep
---

# Comments (Module) – Theme JurnalPress

Area komentar memungkinkan pembaca untuk memberikan tanggapan terhadap artikel. Namun, tampilan dan fungsi komentar **sangat bergantung** pada pengaturan global WordPress dan pengaturan komentar pada masing-masing post.

Section **Comments** pada Customizer berfungsi sebagai:
- Pengingat status komentar
- Shortcut cepat menuju pengaturan komentar utama

## Lokasi Pengaturan
```
Appearance → Customize → Single Posts → After Content Element → Comments
```

## Notification: Comment Settings

### Description

Pada section ini tersedia sebuah **notification message** yang menampilkan informasi penting terkait komentar.

Pesan ini akan muncul untuk mengingatkan bahwa:

- Komentar harus diaktifkan secara global di WordPress
- Komentar juga harus diaktifkan pada masing-masing post

Jika salah satu tidak aktif, maka **section Comments tidak akan ditampilkan** di halaman Single Post.

### Notification Message

> **Note:**  
> To see comments section, make sure that comments are enabled in Discussion Settings and for individual posts.  
> For settings comment sections, please go to Customizer → General → Comment.

### Action Link

Notification ini menyediakan link cepat menuju pengaturan komentar:

- **Text:** `Please go to comment settings`
- **Target:** Customizer → General → Comment
- **Behavior:** Dibuka pada Customizer (tanpa tab baru)

Link ini memudahkan pengguna untuk langsung:
- Mengaktifkan komentar
- Mengatur struktur dan tampilan komentar secara global

## Dependencies & Requirements

Agar section **Comments** tampil di Single Post, pastikan:

1. **Komentar global aktif**
   - WordPress → Settings → Discussion

2. **Komentar aktif pada post**
   - Edit Post → Discussion → Allow Comments

3. **Theme support**
   - Tema mendukung template komentar (`comments_template()`)

## Notes

- Section ini **tidak memiliki toggle atau styling option langsung**
- Semua pengaturan teknis komentar dikelola melalui:
  - **Customizer → General → Comment**
  - **WordPress Discussion Settings**
- Cocok digunakan sebagai pengingat dan navigasi cepat, bukan konfigurasi visual

## Related Sections

- **Single Posts → After Content Element → Comments**
- **Customizer → General → Comment**
- **WordPress → Settings → Discussion**

## Summary

Section **Comments** berfungsi sebagai penghubung antara halaman Single Post dan pengaturan komentar global. Dengan adanya notification dan shortcut ini, pengguna dapat memastikan fitur komentar aktif dan berfungsi dengan benar tanpa harus mencari pengaturannya secara manual.
