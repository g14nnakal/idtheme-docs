---
title: Global (Header Layout) - JurnalPress Theme
description: Comprehensive documentation for Header Global options in the JurnalPress theme’s WordPress Customizer, covering layout selection, header bar activation, and style settings for Main Header and Additional Bars.
outline: deep
---

# Global (Header Layout) - JurnalPress Theme

## Description
The **Header Global** section in the **Header** panel of the **JurnalPress** WordPress Customizer configures the main structure of the site header.  
This includes:

- Selecting the header layout
- Enabling header areas (Main Header and Additional Bar)
- Styling each header area (container, height, background, border, spacing, typography, and colors)

These settings are important because the header is the primary area for navigation and site branding.

## Settings Location
```
Appearance → Customize → Header → Global
```

This section contains two main tabs:
- **General**
- **Style**

# Tab General

## 1. Header Layout
**ID Option:** `header_layout`  
**Type:** SVG Button Selector  

### Description
Choose the visual header layout used on the site.

### Layout Choices
- **Style 1** – Standard layout (default)
- **Style 2** – Modern header variation
- **Style 3** – Logo & menu‑focused layout
- **Style 4** – Minimal header layout
- **Style 5** – Complex/multi‑row header layout

### Default
`Style 1`

### Impact
Changes the HTML structure and element positions:
- Logo
- Navigation menu
- Search bar
- Header buttons/icons
- Secondary menu

## 2. Main Header
**ID Option:** `header_active`  
**Type:** Toggle  

### Description
Enable or disable the **Main Header** (the site’s primary header).

### Default
`Enabled (1)`

### Note
If disabled, only additional bars will be displayed (if enabled).

## 3. Additional Bar 1
**ID Option:** `addheader1_active`  
**Type:** Toggle  

### Description
Enable **Additional Bar 1** (an extra bar above or below the main header).

### Use Cases
- Top info bar
- Promo banner
- Secondary navigation
- Breaking news bar

## 4. Additional Bar 2
**ID Option:** `addheader2_active`  
**Type:** Toggle  

### Description
Enable **Additional Bar 2** as another supplementary bar.

### Use Cases
- Utility bar
- Social bar
- User account bar

# Tab Style

Style settings apply to three header areas:

- **Main Header**
- **Additional Bar 1**
- **Additional Bar 2**

Each area provides the same configuration options.

## 1. Container
**ID Option:** `{key}_container`  

### Choices
- **Default** – Follow global layout
- **In Container** – Centered content within a container
- **Fullwidth** – Edge‑to‑edge header width

### Impact
Determines the content width for the header area.

## 2. Height
**ID Option:** `{key}_height`  
**Type:** Range Slider  

### Range
- Min: **20px**
- Max: **100px**
- Step: **1px**

### Function
Controls the header area height.

## 3. Style Type
In general, you will find settings such as:

- **Style Type**  
  Header style choice (Default / Boxed). Selecting Boxed reveals additional options.

- **Background Color**  
  Header background color. Required if Style Type is Boxed.

- **Background Image**  
  Header background image. Required if Style Type is Boxed.

- **Border Radius**  
  Round the corners of the header area. Required if Style Type is Boxed.

- **Border**
  Header border settings. Required if Style Type is Boxed.

> All changes in the Style tab appear immediately in the Customizer live preview.

### Default Behavior
- **Main Header:** default style
- **Additional Bar:** boxed style

## 4. Typography (Font Style)
**ID Option:** `{key}_typo`  
**Type:** React Font Control  

### Font Properties
- Font size
- Font weight
- Text transform
- Line height
- Font style (italic/normal)

### Text Colors
- Text color
- Link color
- Hover color

### Font Size Range
- Min: 8px
- Max: 20px

# Header Area Structure

### Main Header
Primary branding and navigation area:
- Logo
- Primary menu
- Search
- CTA / Button
- Icons

### Additional Bar 1
First supplemental bar:
- Important information
- Promo banner
- Secondary navigation

### Additional Bar 2
Second supplemental bar:
- Social icons
- User login
- Utility menu

## Best Practice

### Layout
- Use **Style 1 / 2** for blogs & magazines
- Use **Style 3 / 5** for corporate / large portals

### Performance
- Avoid too many header bars
- Use minimal height
- Use a container when the layout is boxed

### UX
- Ensure navigation is easy to access
- Do not hide the main menu
- Use good color contrast

## Developer Tips (JurnalPress Theme)
- All options are stored as `theme_mod`
- Header layout affects the `header.php` template markup
- Dynamic styling is handled via Customizer CSS output
- Typography options use a custom React control

## Summary
The **Header Global** section enables flexible configuration of header structure, appearance, and styles.  
It supports modern layout needs like multi‑row headers, top bars, utility bars, and provides full control over typography and spacing.