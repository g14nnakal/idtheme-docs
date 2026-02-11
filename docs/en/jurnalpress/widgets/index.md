---
title: JurnalPress Widget Settings
description: Complete documentation for widget settings and available widget areas in the JurnalPress theme, including positions and functions.
outline: deep
---

# Widget Settings

This theme supports standard WordPress Widgets, enabling you to add content to sidebars and other widget areas.

## Video Tutorial

Here is the video tutorial for Widgets in the JurnalPress theme:

<YouTubeEmbed video-id="i_UYZ5fdMMA" />

For detailed text instructions, see below.

## Add Widgets

1. Log in to the WordPress dashboard.
2. Go to **Appearance > Widgets**.
3. On the left, you will see the list of available widgets.
4. On the right (or center in the block editor), you will see widget areas (e.g., *Sidebar*, *Footer 1*, *Footer 2*, etc.).
5. Click and drag (drag & drop) the desired widget into the available widget area.
6. Or click a widget, choose the target area, then click **Add Widget**.
7. Configure the widget as needed, then click **Save** or **Update**.

## Widget Areas

The **JurnalPress** theme provides flexible **widget areas** for placing additional content such as ads, banners, newsletters, or other built‑in WordPress widgets. These can be managed via **Appearance → Widgets** or **Customizer**, depending on context.

### Sidebar Widgets

#### Sidebar
**ID:** `sidebar-1`  
The main widget area that appears on pages using a sidebar layout.

**Notes:**
- It is recommended **not to use module widgets** in this area.
- Suitable for standard widgets like categories, archives, or custom HTML.

#### Sidebar Home
**ID:** `sidebar-home`  
A dedicated widget area for the homepage.

**Position:**
- Displayed **before the first post** on the homepage.

**Notes:**
- Recent posts should be available for optimal display.

### Home Module Widgets

Module‑type widgets are typically used for specialized content such as banners, ads, or custom blocks.

#### Module Home Top
**ID:** `module-home-top`  
**Posisi:**  
- Before the posts list and sidebar on the homepage.

**Use cases:**
- Main banner
- Content highlights
- Large ads

#### Module Home Bottom
**ID:** `module-home-bottom`  
**Posisi:**  
- After the posts list and sidebar on the homepage.

#### Module Home Before 1st Post
**ID:** `module-home-first-post`  
**Posisi:**  
- Just before the first post on the homepage.

**Activation requirements:**
- Homepage content and sidebar are **not disabled**
- Settings located at:  
  **Customizer → Homepage → Home Top Module**

### Post Loop Module Widgets

These widgets appear **in the middle of the posts list** on the homepage and archive pages (categories).

#### Module After 6th Post
**ID:** `module-sixth-post`  
**Posisi:**  
- After the 6th post.

**Conditions:**
- Homepage:  
  - Latest Posts are not disabled  
  - Using the **Latest Post With Sidebar** layout
- Archive:  
  - Displays only on the **list layout**
  - Not shown on the **grid layout**

#### Module After 9th Post
**ID:** `module-ninth-post`  
**Posisi:**  
- After the 9th post.

**Same conditions as Module After 6th Post.**

### Single Post Widget

#### Module After Single
**ID:** `module-after-single`  
**Posisi:**  
- After the article content on single post pages.

**Activation requirements:**
- **After Single Element** option enabled at:  
  **Customizer → Single Posts**

### Footer Widgets

Footer widgets are **dynamic**; the number of columns follows Customizer settings.

**Settings:**  
`Customizer → Footer → Widget Column`

#### Supported Column Counts

| Layout Option | Number of Widgets |
|------------|---------------|
| 1col       | 1 widget      |
| 2col / 2col12 / 2col21 | 2 widgets |
| 3col / 3col121 / 3col211 / 3col112 | 3 widgets |
| 4col / 4col2111 / 4col1112 | 4 widgets |
| 6col       | 6 widgets     |

#### Footer Widget IDs
- `footer-1`
- `footer-2`
- `footer-3`
- `footer-4`
- `footer-5`
- `footer-6` *(if 6 columns are active)*

**Notes:**
- Widgets are automatically registered according to the selected column count.
- Each widget uses the standard HTML structure `<section class="widget">`.

## Widget HTML Structure

All widgets in JurnalPress use the following markup:

```html
<section id="widget-id" class="widget widget-class">
  <h3 class="widgettitle">Widget Title</h3>
  <!-- Widget Content -->
</section>
