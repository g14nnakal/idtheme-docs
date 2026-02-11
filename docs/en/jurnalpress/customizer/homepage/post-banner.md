---
title: Post Banner (Module) - JurnalPress Theme
description: Documentation for Post Banner settings in the Home Top Module of the JurnalPress Customizer to highlight posts with flexible layouts, queries, and styles.
outline: deep
---

# Post Banner (Module) - JurnalPress Theme

## Introduction

**Post Banner** is a module in the **Home Top Module** used to display featured posts at the top of the homepage.  
It supports various **visual layouts**, **content structure settings**, **query filters**, and flexible **style and typography** options.

Post Banner is suitable for:
- Highlighting top news
- Curated editorial content
- Post‑based hero sections

## Settings Location
```
Appearance → Customize → Homepage → Home Top Module → Post Banner
```

## Settings Tabs

Post Banner has **3 main tabs**:

- **General** – basic settings, layout, and content structure
- **Query** – post source and filtering
- **Style** – visual appearance and typography

## Tab: General

### Enable Post Banner
**Post banner in home page**  
Enable or disable the Post Banner module on the homepage.

### Title Module
**Title Module**  
Module title displayed above the Post Banner.

### Title Image
**Title Image**  
Replace the module title text with an image.  
Useful for branding or a visual heading.

### Layout
**Layout**  
Choose the Post Banner display style.  
There are **8 layout styles** (Style 1 – Style 8) with different visual characteristics.

Default: `Style 1`

### Featured Post Size
**Featured Post Size**  
Featured post size:
- Medium
- Large

### Content Outside Thumbnail
**Content outside thumbnail**  
Display content (title/meta) outside the thumbnail area.

### Thumbnail (Style 1 – List Post Only)

> The following options apply **only to Style 1 and list posts**

**List Post Thumbnail Position**
- Left Thumbnail
- Right Thumbnail
- Combine Left and Right (Zigzag)

**Thumbnail Max Width**  
Set the maximum thumbnail width (px).

**Thumbnail Height**  
Set the post thumbnail height.  
The default layout uses a height of ±350px.

**List Post Aspect Ratio**
- Original
- 1:1 (Square)
- 4:3
- 3:4
- 3:2
- 2:3
- 16:9
- 9:16

### Posts Structure

#### Category
Display post categories.

- **Category Position**
  - Default
  - After Title

- **Category Style**
  - Label
  - Icon
  - Color Scheme
  - Background (Transparent)
  - Background (Solid)

#### Meta
Display post meta (author, date, etc.).

> Detailed meta settings follow: `Customizer → General → Global → Meta Module & Widgets`

**Meta Position**
- Default
- Before Title

#### Excerpt
Display post excerpts.

> Excerpt appears only under certain conditions (featured post / specific layouts).  
> Excerpt length is set at: `Customizer → General → Global → Excerpt Length`

### Mobile Hidden
**Mobile Hidden**  
Hide Post Banner on mobile views.

## Tab: Query

This tab configures the **post source and filters** displayed.

### Order By
Sort posts by:
- Date
- Title
- Modified
- Comment Count
- View *(requires Post View Counter / WP PostViews plugin)*

### Categories
Filter posts by selected categories.

### Tags
Filter posts by tags.

### Range Post
Limit the time range for posts:
- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Tab: Style

### Post Space
**Post Space (px)**  
Control spacing between posts inside the Post Banner.

### Alignment
Set content alignment:
- Left
- Center
- Right

### Box Style

This option comes from the `jurnalpress_customizer_options_box_style` function.

**Style**
- No Style
- Add Style (Boxed)

**Background Color**
- Solid
- Gradient

**Background Image**
- Position
- Opacity
- Size
- Repeat
- Attachment

**Border Radius**
Control box corner radius.

**Border**
- Enable / Disable
- Color
- Width
- Style

### Typography

Typography options come from the `jurnalpress_customizer_options_content_typography` function.

**Post Title**
- Font size
- Weight
- Line height
- Transform
- Color
- Hover color

> Font color applies only to content outside the thumbnail.

**Excerpt Color**
Set excerpt text color.

**Module Title Color**
Set the Post Banner module title color.

## Important Notes

- Some options are active only for **specific layouts** (especially Style 1).
- Meta and Excerpt options depend on global settings.
- For optimal performance, use a reasonable number of posts in this module.
- Query by *View* requires additional plugins.

> 📌 **Tips**  
> Combine **Style + Query + Typography** to create a Post Banner consistent with your site’s visual identity.