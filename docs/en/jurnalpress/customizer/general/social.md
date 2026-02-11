---
title: Social (General) - JurnalPress Theme
description: Configure the global social network list and social icon appearance across the JurnalPress theme.
outline: deep
---

# Social (General) - JurnalPress Theme

This documentation covers the **Social Section** in the **JurnalPress** theme’s WordPress Customizer. Use these options to manage social media icons and their global appearance (style).

> Suitable for header, footer, or any area displaying social icons.

## Settings Location
```
Appearance → Customize → General → Social
```

This section has two main tabs:

- **General** → Data and social network list
- **Style** → Visual appearance of icons

## Tab: General

### Social Network

**ID:** `_socialicon`  
**Type:** `btcorereact-sortable`

Manage the list of social networks to display.

**Features:**
- Add new social networks with the **( + )** button
- Reorder icons via drag & drop
- Set label and URL for each social network

**Default Value:**
```json
{
  "facebook": {
    "label": "Facebook",
    "url": "#"
  },
  "twitter": {
    "label": "Twitter",
    "url": "#"
  },
  "youtube": {
    "label": "Youtube",
    "url": "#"
  }
}
```

> The available social network list comes from the `$choicesocial` variable.

## Tab: Style

Use this tab to control icon appearance.

### Color Type

**ID:** `_socialicon_colortype`  
**Type:** `btcore-svgbutton`

Choose the color source for social icons.

**Options:**
- **Default** (`idt-provider`)  
  Use each provider’s default color (Facebook, Twitter, etc.)
- **Custom** (`idt-custom`)  
  Use manual colors from the **Color** option

**Default:** `Default`

### Color

**ID:** `_socialicon_color`  
**Type:** `btcorereact-multicolor`

Set icon and background colors manually.

**Color Options:**
- **Icon** → SVG icon color
- **Background** → Icon background color

> Effective only if **Color Type** is set to **Custom**.

### Style

**ID:** `_socialicon_style`  
**Type:** `btcore-svgbutton`

Choose the icon style.

**Style Choices:**
- **Background** (`idt-bgcolor`)  
  Icon with full background
- **No Background** (`idt-nobg`)  
  Icon without background
- **Border** (`idt-border`)  
  Icon with a border

**Default:** `Background`

### Border Radius

**ID:** `_socialicon_radius`  
**Type:** `btcore-boxcontrol`

Set corner roundness on icons.

Examples:
- Small radius → square icons
- Large radius → rounded/circular icons

### Padding

**ID:** `_socialicon_padding`  
**Type:** `btcore-boxcontrol`

Set spacing between the icon and its background or border.

> Useful for adjusting visual icon size without changing the SVG size.

### Icon Size

**ID:** `_socialicon_size`  
**Type:** `btcore-range`

Set SVG icon size.

**Range:**
- **Min:** 10px
- **Max:** 40px
- **Step:** 1px

### Gap

**ID:** `_socialicon_gap`  
**Type:** `btcore-range`

Set spacing between social icons.

**Range:**
- **Min:** 5px
- **Max:** 30px
- **Step:** 1px

> Suitable for tuning icon density in header or footer areas.

## Developer Notes

- All settings here are **global**
- Output styles are typically converted to CSS variables or inline styles

## Use Cases

- Header social icons
- Social follow links in the footer
- Author social links
- Sticky social bar