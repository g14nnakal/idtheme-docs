---
title: Global (Footer Layout) – JurnalPress Theme
description: Global footer settings to configure widget layout, copyright, and footer display styles in the JurnalPress theme.
outline: deep
---

# Global (Footer Layout) – JurnalPress Theme

The **Global** section is located at **Customizer → Footer Layout → Global** and is used to configure the main footer structure, including the number of widget columns, copyright layout, and visual styles for the footer widgets and copyright separately.

Settings in this section are **global** and therefore affect all site pages.

## Settings Location

```
Appearance → Customize → Footer Layout → Global
```

## Navigation Tabs

This section has two main tabs:

- **General** — Configure the footer structure and activation
- **Style** — Configure visual styles for footer widgets and copyright

## General Settings

The **General** tab focuses on the footer structure and primary elements.

### Widget Column

Define the number of columns and width proportions in the **Footer Widget Area**.

**Available options:**

| Option | Description |
|----|----|
| `1col` | 1 column (100%) |
| `2col` | 2 columns (50 / 50) |
| `2col12` | 2 columns (33 / 66) |
| `2col21` | 2 columns (66 / 33) |
| `3col` | 3 columns (33 / 33 / 33) |
| `3col121` | 3 columns (25 / 50 / 25) |
| `3col211` | 3 columns (50 / 25 / 25) |
| `3col112` | 3 columns (25 / 25 / 50) |
| `4col` | 4 columns (25 / 25 / 25 / 25) |
| `4col2111` | 4 columns (50 / 16 / 16 / 16) |
| `4col1112` | 4 columns (16 / 16 / 16 / 50) |
| `6col` | 6 columns (16 / 16 / 16 / 16 / 16 / 16) |

**Default:** `4col`

### Copyright Layout

Define the layout of the copyright area at the bottom of the footer.

**Layout options:**

- **Style 1** — Standard layout
- **Style 2** — Content position variation
- **Style 3** — Centered layout
- **Style 4** — Alternative layout with different distribution

**Default:** `Style 1`

### Footer Widget

Enable or disable the **Footer Widget Area**.

- **ON** — Footer widgets are shown
- **OFF** — Footer widgets are hidden

### Copyright

Enable or disable the **Copyright Section**.

- **ON** — Copyright is shown
- **OFF** — Copyright is hidden

## Style Settings

The **Style** tab allows configuring visual styles for each footer section separately.

Style settings are available for:

- **Footer Widget**
- **Copyright**

Each part has the same set of settings.

## Container

Define the container width for each footer section.

**Container options:**

| Option | Description |
|----|----|
| `Default` | Follow global theme settings |
| `In Container` | Content inside container |
| `Fullwidth` | Content full width of the screen |

**Default:** `Default`

## Style Type

In general you will find settings such as:

- **Style Type**  
  Header style options (Default / Boxed). When Boxed is selected, additional settings appear.

- **Background Color**  
  Background color. Required when Style Type is Boxed.

- **Background Image**  
  Background image. Required when Style Type is Boxed.

- **Border Radius**  
  Round element corners. Required when Style Type is Boxed.

- **Border**
  Element border. Required when Style Type is Boxed.

> All changes in the Style tab are visible immediately via the Customizer live preview.

## Font Style

Configure typography for text in footer widgets and copyright.

**Available options:**

- Font size
- Font weight
- Text transform
- Line height
- Font style
- Text color
- Link color
- Link hover color

**Font size limits:**

- Minimum: `8px`
- Maximum: `20px`

## Important Notes

- The **Widget Column** setting only applies if **Footer Widget** is enabled.
- Each section (Footer Widget & Copyright) has **independent** style settings.
- Changes in the Customizer can be previewed instantly via the **live preview**.

## Summary

The **Global Footer** section lets you:

- Configure the footer widget column structure
- Control copyright display and layout
- Manage container and footer visual styles
- Maintain consistent footer design across the entire website

These settings are ideal for tailoring the footer to your site’s branding and layout needs.
