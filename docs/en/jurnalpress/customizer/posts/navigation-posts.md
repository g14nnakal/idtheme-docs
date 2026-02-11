---
title: Navigation Posts (Module) – JurnalPress Theme
description: Settings for previous and next post navigation displayed after the article content on Single Post pages.
outline: deep
---

# Navigation Posts (Module) – JurnalPress Theme

The **Navigation Posts** section configures the **Previous Post** and **Next Post** navigation displayed after the main content on **Single Post** pages.

This feature improves reading experience by making it easier for visitors to move to the next or previous article.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → Navigation Posts
```

## Available Options

### 1. Navigation Post

Enable or disable navigation to previous and next posts on Single Post pages.

- **Tipe**: Toggle
- **Default**: On
- **ID Opsi**: `{prefix}_single_post_navigation`

**Behavior:**
- If **enabled**, Previous & Next Post navigation is displayed after the article content.
- If **disabled**, navigation elements are not rendered.

### 2. Thumbnail In Navigation

Display the thumbnail (featured image) in Previous and Next Post navigation.

- **Tipe**: Toggle
- **Default**: On
- **ID Opsi**: `{prefix}_single_post_navigation_thumb`

**Behavior:**
- If **enabled**, each navigation item shows the thumbnail of the related post.
- If **disabled**, navigation shows only text information without images.

## Catatan Tambahan

- The **Navigation Posts** section is part of **After Content Element**, so it appears only after the article content.
- The thumbnail option depends on posts having a **featured image**.
- These settings help improve **internal linking** and **time on site**.
