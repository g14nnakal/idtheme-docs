---
title: HTML (Footer Layout) – JurnalPress Theme
description: "Documentation for the Footer HTML option in the Footer Customizer panel to display custom HTML content in the website footer area."
outline: deep
---

# HTML (Footer Layout) – JurnalPress Theme

The **HTML Footer** section is used to add and manage custom HTML content in the website footer area. This option supports a visual editor (TinyMCE), shortcodes, and dynamic placeholders such as the year and site information.

This section is ideal for displaying copyright, theme credits, additional links, or other HTML content in the footer.

## Lokasi Pengaturan

```
Appearance → Customize → Footer Layout → HTML
```

## Options

### Enable Html
**Customizer ID:** `*_enable_htmlfooter`  
**Type:** Toggle  

Enable the custom HTML area in the footer.

### Behavior

- If **Enabled**, the Footer HTML content is displayed on the frontend.
- If **Disabled**, all Footer HTML content will not be rendered even if it exists.

### Content
**Customizer ID:** `*_htmlfooter1`  
**Type:** TinyMCE Editor  

Configure the HTML content to display in the footer.

**Default:** `Copyright © {current_year} - Theme: Jurnalpress`

**Description:**  
Enter content in the TinyMCE editor. This option supports **dynamic placeholders** and **shortcodes**.

**Available placeholders:**

| Placeholder | Description |
|------------|------------|
| `{current_date}` | Today’s date |
| `{current_year}` | Current year |
| `{site_title}` | Site title |
| `{site_description}` | Site description |
| `{site_url}` | Site URL |

**Input Attrs:**
- `mediaButtons: true` – media upload button enabled

## Contoh Penggunaan

```html
© {current_year} {site_title}. All rights reserved.
```

You can also insert shortcodes from your own plugins.

## Best Practice

- Copyright and legal information
- Theme or developer credits
- Links to privacy policy and terms of service
- Additional information or lightweight banner
- Social media or newsletter subscription shortcodes

## Catatan Penting

- Ensure Enable Html is active so content appears.
- Use valid HTML to avoid layout issues.
- Placeholders are processed only on the frontend, not in the editor.
