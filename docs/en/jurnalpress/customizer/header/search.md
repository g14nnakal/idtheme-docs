---
title: Search (Header Layout) - JurnalPress Theme
description: "Search settings in the JurnalPress Customizer’s Header panel: enable, text label, search slide, and style options (color, radius, border, box shadow)."
outline: deep
---

# Search (Header Layout) - JurnalPress Theme

The **Search** section controls the appearance and behavior of the header search field in **JurnalPress**.

## Location in Customizer

```
Appearance → Customize → Header → Search
```

## Tabs

- **General** – Configure core search features
- **Style** – Configure visual styling of the search input

## General Settings

### Enable Search
**Customizer ID:** `*_search_active`  
**Type:** Toggle  

Enable the search field in the header.

**Default:** Enabled (1)

### Search Text
**Customizer ID:** `*_search_text`  
**Type:** Text  
**Placeholder:** `Search`  
**Description:** Change the default text used as the input label/placeholder.

### Enable Search Slide
**Customizer ID:** `*_search_slide_active`  
**Type:** Toggle  
**Description:** When focused, shows a slide panel with **recent tags** and **recent searches** to improve discovery.

**Default:** Enabled (1)

## Style Settings

### Color
**Customizer ID:** `*_search_color`  
**Type:** Multi Color  

Configure the search input colors:
- **Background** – input background color
- **Text** – input text color

Default values remain empty to follow global theme colors.

### Border Radius
**Customizer ID:** `*_search_radius`  
**Type:** Box Control (radius)  

Control corner roundness of the search input. Supports per‑side settings (Top, Right, Bottom, Left).

### Border
**Customizer ID:** `*_search_border`  
**Type:** Border Control (enable hover)  

Common properties:
- Enable: `1` (active)
- Color / Hover Color
- Per‑side width: `1px` (Top, Right, Bottom, Left)
- Style: `solid`

Configure input borders, including hover color.

### Box Shadow
**Customizer ID:** `*_search_boxshadow`  
**Type:** Box Shadow  

Default:
- Enable: `0` (disabled)
- Color: `#0b2b9e26`
- Horizontal Offset: `0px`
- Vertical Offset: `10px`
- Blur: `10px`
- Spread: `-12px`

Adds a subtle shadow to the search input. Enable if you want this element to stand out.

## Best Practice

- Use clear, concise placeholder text (e.g., “Search”)
- Maintain sufficient color contrast for readability
- Apply radius and shadow sparingly to avoid header layout issues
- Enable **Search Slide** to improve discoverability via recent tags/searches

## Summary

The **Search (Header)** section provides complete control to enable the search field, set its text label, add a slide panel on focus, and customize appearance via color, radius, border, and box shadow.