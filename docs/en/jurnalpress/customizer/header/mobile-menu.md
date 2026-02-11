---
title: Mobile Menu (Header Layout) - JurnalPress Theme
description: Mobile Menu settings in the Header panel let you control the structure, appearance, and behavior of the mobile navigation menu in the JurnalPress theme.
outline: deep
---

# Mobile Menu (Header Layout) - JurnalPress Theme

The **Mobile Menu** section configures navigation specifically for mobile views. This menu typically appears as a side navigation (off‑canvas) accessible via the menu (hamburger) icon.  
Through the Customizer, you can define which components appear, choose the menu icon, set colors and background, and control the maximum menu width.

## Location in Customizer

```
Appearance → Customize → Header → Mobile Menu
```

## Tabs

This section is divided into two main tabs:

- **General** – Configure the structure and content of the Mobile Menu
- **Style** – Configure the visual appearance of the Mobile Menu

## General Settings

### Side Navigation

**Customizer ID:** `*_mobilemenu`  
**Type:** Sortable (Drag & Drop)

Use this option to define **which components** appear inside the Mobile Menu and their order.

#### Available components

- **Menu** (`sidenav_menu`)  
  Displays the WordPress navigation menu (primary/mobile menu).

- **Search** (`sidenav_search`)  
  Displays a search form inside the mobile menu.

- **Social** (`sidenav_social`)  
  Displays social media icons configured in the Social section.

- **HTML** (`sidenav_html`)  
  Displays custom HTML content from the editor.

#### How to use

1. Click the **( + )** button to add components to the list
2. Use **drag & drop** to arrange the display order
3. Components are shown top‑to‑bottom following the order

### HTML Content

**Customizer ID:** `*_htmlmenu1`  
**Type:** TinyMCE Editor

Used to add custom HTML content to the Mobile Menu.

#### Features

- Supports **TinyMCE editor**
- Supports **shortcodes**
- Supports the following **dynamic placeholders**:

| Placeholder | Description |
|-----------|-----------|
| `{current_date}` | Today’s date |
| `{current_year}` | Current year |
| `{site_title}` | Site title |
| `{site_description}` | Site description |
| `{site_url}` | Site URL |

Example:

```html
<p>© {current_year} {site_title}</p>
```

> Note: This option becomes active when the **HTML** component is added to Side Navigation.

## Style Settings

### Display On

**Customizer ID:** `*_mobilemenu_displayin`  
**Type:** SVG Button

Choose where the Mobile Menu icon is displayed.

Example choices:
- Mobile only
- Mobile & Tablet
- All devices

(Default: **Mobile**)

### Icon

**Customizer ID:** `*_mobilemenu_icon`  
**Type:** SVG Button

Choose the Mobile Menu (hamburger) icon.  
Several built‑in icon variations are available:

- Icon 1
- Icon 2
- Icon 3
- Icon 4

This icon is used to open the side navigation.

### Background

**Customizer ID:** `*_mobilemenu_bg`  
**Type:** Background Control

Configure the Mobile Menu background.

Available options:
- **Solid Color**
- **Gradient**

The background applies to the entire side navigation area.

### Color

**Customizer ID:** `*_mobilemenu_color`  
**Type:** Multi Color

Configure colors for elements inside the Mobile Menu.

| Option | Function |
|----|------|
| Text | Text color |
| Link | Link color |
| Link Hover | Link hover color |

### Max Width

**Customizer ID:** `*_mobilemenu_width`  
**Type:** Range Slider

Set the maximum width of the Mobile Menu.

- Minimum: **250px**
- Maximum: **600px**

Useful for ensuring comfortable menu display on mobile and tablet screens.

### Gap

**Customizer ID:** `*_mobilemenu_gap`  
**Type:** Range Slider

Set spacing between:
- Menu components
- Inner padding of the side navigation

Higher values increase spacing between elements.

- Minimum: **5px**
- Maximum: **80px**

## Tips & Best Practice

- Use a **simple order** (Search → Menu → Social) for optimal UX
- Limit menu width so it doesn’t cover the entire tablet screen
- Use contrasting colors for better readability
- Leverage **HTML Content** for copyright, promotions, or CTAs

## Summary

The Mobile Menu in JurnalPress gives you full control over:
- Mobile menu structure
- Additional content
- Visual appearance
- Responsiveness

With these settings, you can create a flexible, clean, and user‑friendly mobile navigation experience.