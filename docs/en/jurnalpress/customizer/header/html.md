---
title: HTML (Header Layout) - JurnalPress Theme
description: "HTML Header settings in the JurnalPress theme Customizer. Enable a custom HTML area and manage its content via the TinyMCE editor with placeholder and shortcode support."
outline: deep
---

# HTML (Header Layout) - JurnalPress Theme

The **HTML** section lets you display **custom content** in the header using the **TinyMCE** editor. Suitable for short text, links, or dynamic information (date, year, etc.).

## Location in Customizer

```
Appearance → Customize → Header → HTML
```

## Options

### Enable Html
**Customizer ID:** `*_enable_htmlheader`  
**Type:** Toggle  

Enable the custom HTML area in the header.

**Default:** Enabled (1)

### Content
**Customizer ID:** `*_htmlheader1`  
**Type:** TinyMCE Editor  

Configure the HTML content to display in the header.

**Default:** `{current_date}`

**Description:**  
Enter content in the TinyMCE editor. This option supports **dynamic placeholders** and **shortcodes**.

**Available placeholders:**

| Placeholder | Description |
|------------|-------------|
| `{current_date}` | Today’s date |
| `{current_year}` | Current year |
| `{site_title}` | Site title |
| `{site_description}` | Site description |
| `{site_url}` | Site URL |

**Input Attrs:**
- `mediaButtons: true` – media upload button enabled

## Example

```html
<span>© {current_year} {site_title}</span>
```

You can also insert shortcodes from your own plugins.

## Best Practice

- Keep content brief to avoid disrupting the header layout
- Ensure important links use HTTPS
- Use placeholders for dynamic content without changing text every year

## Summary

The **HTML (Header)** section provides flexibility to display custom content in the header through the TinyMCE editor, with support for placeholders and shortcodes.