---
title: Text Marquee (Header Layout) - JurnalPress Theme
description: "Text Marquee options in the JurnalPress theme’s Header panel: content type (Text/Post), position, title, content, post query, and style settings (container, height, font, colors, background, radius)."
outline: deep
---

# Text Marquee (Header Layout) - JurnalPress Theme

The **Text Marquee** section displays a scrolling bar (ticker) for brief information such as breaking news, promos, or important announcements. Content can be **static text** or a **post list** fetched automatically via query.

## Location in Customizer

```
Appearance → Customize → Header → Text Marquee
```

## Tabs

- **General** – Configure content type, position, title, and marquee content
- **Query** – Configure post source and filters (when content type is “Post”)
- **Style** – Configure marquee visuals and its title label

## General Settings

### Enable Marquee
**Customizer ID:** `*_marquee_active`  
**Type:** Toggle  

Enable or disable the marquee display.

**Default:** Enabled (1)

### Type Marquee
**Customizer ID:** `*_marquee_type`  
**Type:** SVG Button  

Choose the marquee content source:
- **Text** – Display text from the editor (see “Text Notification”)
- **Post** – Display post titles based on the Query tab settings

**Default:** `post`

### Marquee Position
**Customizer ID:** `*_marquee_position`  
**Type:** Select  

Set the marquee position relative to the header:
- **After Header** – Displayed below the header (default)
- **After Header (Margin Top)** – Below the header with additional top margin
- **Before Header** – Displayed above the header

**Default:** `after`

### Title Marquee
**Customizer ID:** `*_marquee_title`  
**Type:** Text  
**Placeholder:** `Breaking News`  

Configure the small label/title shown on the left side of the marquee.

### Text Notification
**Customizer ID:** `*_marquee_text`  
**Type:** TinyMCE Editor  

Text content for the marquee when **Type Marquee = Text**.

**Default Content:**  
`This is a notification. You can use shortcodes, links, and any text you want.`

**Editor features:**

| Toolbar | Description |
|--------|-------------|
| bold, italic, underline | Basic text formatting |
| link | Add links |
| forecolor, backcolor | Text color & highlight |

Media buttons: `false` (no media upload button).

> Content supports shortcodes. You can add shortcodes from your own plugins.

## Query Settings

The **Query** tab is active when **Type Marquee = Post**. Query options are provided by theme utilities (helpers) to select and filter posts.

Common settings include:
- Category and/or tag filters
- Number of posts to display
- Order and ordering criteria (e.g., by date)
- Ignore sticky posts or set result offset

Note: Options are generated via the `jurnalpress_customizer_options_query` helper with `marquee` context.

## Style Settings

### Container
**Customizer ID:** `*_marquee_container`  
**Type:** SVG Button  

Choices:
- **Default** – Follow global/header width
- **In Container** – Constrain marquee content in a centered container
- **Fullwidth** – Full‑width marquee from edge to edge

**Default:** `default`

### Height
**Customizer ID:** `*_marquee_height`  
**Type:** Range Slider  

**Range:**
- Min: `20px`
- Max: `60px`
- Step: `1px`

Controls the marquee bar height.

### Style Type (Marquee Area)
In general, you will find settings such as:

- **Style Type**  
  Header style choice (Default / Boxed). Selecting Boxed reveals additional options.

- **Background Color**  
  Background color. Required if Style Type is Boxed.

- **Background Image**  
  Background image. Required if Style Type is Boxed.

- **Border Radius**  
  Round corners of the marquee area. Required if Style Type is Boxed.

- **Border**
  Border settings. Required if Style Type is Boxed.

> All changes in the Style tab appear immediately in the Customizer live preview.

### Font Style (Typography)
**Customizer ID:** `*_marquee_typo`  
**Type:** React Font Control  

Properties:
- Size, Weight, Transform, Line Height, Style  
- Color, Link Color, Hover Color

**Size Range:** Min `8px` – Max `20px`

### Title Marquee (Style)
Settings group for the small title label on the left side of the marquee:

- **Content Group**  
  **Customizer ID:** `*_marquee_title_content`  
  Marks the start of the title style settings group.

- **Border Radius**  
  **Customizer ID:** `*_marquee_title_radius`  
  Controls title label corner roundness.

- **Color**  
  **Customizer ID:** `*_marquee_title_color`  
  Sets the title text color.

- **Background**  
  **Customizer ID:** `*_marquee_title_bg`  
  **Type:** Background Control  
  **Default:** `type: solid`  
  Configure title label background (solid/gradient).

## Best Practice

- Use a low **height** to keep the header compact
- Choose text and background colors with good contrast
- When using **Post**, limit the number of items so it doesn’t scroll too fast or too long
- Keep **Title Marquee** short (“Breaking News”, “Update”, “Promo”)

## Summary

Text Marquee provides a flexible scrolling information bar for announcements or latest post titles. You can choose the content type (Text/Post), set its position relative to the header, and configure styles (container, height, font, colors, background, and radius) including the title label.