---
title: HTML After Content (Module) - JurnalPress Theme
description: Documentation for the HTML option in the Single Posts panel of the Customizer to add HTML content after the article body.
outline: deep
---

# HTML After Content (Module) - JurnalPress Theme

The **HTML** section under **Single Posts → After Content** adds custom HTML content **after the article body (post content)**. This is useful for banners, CTAs, ads, notices, or other additional content without editing PHP templates.

## Lokasi Pengaturan
```
Appearance → Customize → Posts → After Content Element → HTML
```

## Feature Summary

- Add HTML content after the post content
- Uses **TinyMCE (visual editor)**
- Supports **WordPress shortcodes**
- Supports theme **placeholders/dynamic tags**
- Supports media (images, embeds, etc.)

## Opsi yang Tersedia

### Content

This is the main area for entering HTML or visual content to display after the article.

**Input Type:**
- TinyMCE Editor (`idt_tinymce`)

**Default Value:**
```
Welcome to our website
```

**Description:**

Content can be text, HTML, media, or shortcodes. The editor supports dynamic syntax that is automatically replaced with actual site values.

## Placeholder yang Didukung

You can use the following placeholders:

| Placeholder | Description |
|------------|----------|
| `{current_date}` | Current date |
| `{current_year}` | Current year |
| `{site_title}` | WordPress site title |
| `{site_description}` | Site tagline/description |
| `{site_url}` | Site base URL |

**Contoh Penggunaan:**

```html
<p>&copy; {current_year} {site_title}. All rights reserved.</p>
```

## Dukungan Shortcode

This option **supports WordPress shortcodes**, including those from third‑party plugins.

**Contoh:**

```html
[contact-form-7 id="123"]
```

Or:

```html
[custom_ads id="after-content"]
```

## Media & Visual Editor

Because TinyMCE is used:

- You can add **images** directly from the Media Library
- Supports embeds (YouTube, iframe, etc.)
- Supports visual formatting (bold, links, lists, headings)

## Catatan Teknis

- Content renders **after `the_content()`** on single posts
- Suitable for:
  - CTA (Call to Action)
  - Banner promosi
  - Iklan
  - Informasi tambahan
- Ensure shortcodes used are **available and active**

## Best Practice

- Use simple HTML to stay consistent with the theme
- Avoid heavy scripts unless necessary
- Use shortcodes for complex logic
- Test display across different post types

## Ringkasan

The **HTML After Content** section provides high flexibility to add dynamic content after articles without touching template code. With TinyMCE, shortcode, and placeholder support, it suits reusable additional content managed via the Customizer.
