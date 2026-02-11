---
title: After Content Element (Single Posts) – JurnalPress Theme
description: "Settings for elements displayed after the main content on Single Post pages in the JurnalPress theme."
outline: deep
---

# After Content Element (Single Posts) – JurnalPress Theme

**After Content Element** is a section in **Customizer → Single Posts** used to configure which elements appear *after the article content* (post content). Elements can be reordered, enabled or disabled, and combined according to layout needs and reader engagement strategy.

This section uses a **sortable list** component, so element order can be changed with drag & drop directly in the Customizer.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element
```

## Kontrol
- **btcorereact-sortable** — arrange module order and enable modules.

## List After Content

### Description

The **List After Content** option lists available elements to display after post content. You can:

- Add new elements using the **( + )** button
- Reorder elements (drag & drop)
- Disable certain elements by removing them from the list

Some core elements **cannot be fully removed** to keep page structure consistent.

## Elemen Default

By default, the following elements are enabled:

1. **Author Box**
2. **Post Navigation**
3. **Related Posts**
4. **Banner**
5. **Comments**
6. **Widgets**

These are marked as *mandatory elements* and cannot be completely removed from the list.

## Daftar Elemen yang Tersedia

Available elements for After Content:

### 1. Author Box
Displays author information such as name, avatar, and short bio.

**Setting terkait:** `author_box_aftercontentposts`

### 2. Navigation Posts
Displays navigation to previous and next posts.

**Setting terkait:** `navigation_posts_aftercontentposts`

### 3. Related Posts
Displays related articles based on categories, tags, or other taxonomies.

Variations available:

- **Related Posts** (utama)
- **Related Posts 2**
- **Related Posts 3**

Each variation has its own settings.

**Setting terkait:**
- `related_posts_aftercontentposts`
- `related_posts_2_aftercontentposts`
- `related_posts_3_aftercontentposts`

### 4. Banner
Used to display ad or promotional banners after the article content.

**Setting terkait:** `banner_aftercontentposts`

### 5. Comments
Displays the WordPress comments area below the article.

**Setting terkait:** `comments_aftercontentposts`

### 6. Widgets
Displays a special widget area placed after post content.

Covers use cases like:
- Iklan
- Newsletter
- Shortcode khusus

**Setting terkait:** `widgets_aftercontentposts`

### 7. HTML (Custom HTML)
Allows you to add **custom HTML code** after the article content.

Common uses:
- Script pihak ketiga
- CTA custom
- Embed tertentu

**Setting terkait:** `html_aftercontentposts`

## Catatan Penting

- Element order strongly affects UX and reader engagement
- Core elements such as **Author Box, Navigation, Related Posts, Comments** cannot be fully removed
- Ensure heavy elements (like related posts or ad widgets) are limited to maintain performance

## Tips Penggunaan

- Place **Author Box** and **Related Posts** before **Comments** to boost content exploration
- Use **Banner** or **HTML** as a CTA after the article is finished
- If using many elements, prioritize order based on goals (SEO, ads, engagement)
