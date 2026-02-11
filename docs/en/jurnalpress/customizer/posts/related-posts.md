---
title: Related Posts (Module) - JurnalPress Theme
description: Settings for Related Posts in the Single Posts panel of the JurnalPress Customizer, covering display options, content query, and advanced styling.
outline: deep
---

# Related Posts (Module) - JurnalPress Theme

The **Related Posts** section displays related articles in the **After Content Element** area on single post pages.

This feature helps increase engagement by showing relevant content based on categories, tags, or topics.

## Lokasi Pengaturan
```
Customizer → Single Posts → After Content Element → Related Posts**
```

## Tipe Related Posts

The theme provides up to **3 Related Posts modules**:

- **Related Posts**
- **Related Posts 2**
- **Related Posts 3**

Each module has independent settings, but shares the same option structure.

## Tabs Overview

Each Related Posts module has 3 main tabs:

- **General** – Display and content structure settings
- **Query** – Source and post logic settings
- **Style** – Visual styling and typography

## General Settings

### Enable Related Posts
Enable or disable the Related Posts module on single posts.

### Title Related
Module title displayed above the related posts list.  
Examples: `Related Posts`, `You May Also Like`.

### Layout
Choose the post list layout:

- **List** – Vertical list
- **Number** – Numbered list
- **Grid** – Column grid (default)

### Number Style
For the **Number** layout only:

- **Default (With #)** – Nomor dengan simbol #
- **Without #**
- **Text Stroke**

### Columns
Number of columns for the Grid layout:

- 2 kolom
- 3 kolom (default)
- 4 kolom
- 5 kolom

### Thumbnail

#### Thumbnail Toggle
Enable or disable post thumbnails.

#### Thumbnail Position
- **Left Thumbnail**
- **Right Thumbnail**
- **Zigzag** – Combination of left & right

#### Max Width (px)
Set maximum thumbnail width for left/right positions  
(Default: 220px)

#### Aspect Ratio
Set the thumbnail aspect ratio:

- Original
- 1:1 (Square)
- 4:3
- 3:4
- 3:2
- 2:3
- 16:9
- 9:16

### Post Structure

#### Category
Display post category.

**Category Position**
- Default
- After Title
- Inside Thumbnail

**Category Style**
- Label
- Icon
- Color Scheme
- Background (Transparent / Solid)

### Meta
Display post meta (author, date, etc.).  
Meta configuration follows:
**Customizer → General → Global → Meta Related Posts**

**Meta Position**
- Default
- Before Title

### Excerpt
Display the post excerpt.  
Excerpt length follows:
**Customizer → General → Global → Excerpt Length**

### Featured Post
Mark the first post as featured.

**Featured Post Style**
- Content Inside
- Content Outside
- Content Left
- Content Right

**Featured Post Excerpt**
Display a special excerpt for the featured post.

### Mobile Hidden
Hide the Related Posts module on mobile devices.

## Query Settings

### Number Related Posts
Number of posts displayed (2–18).

### Related Posts By
Choose the basis for relatedness:

- Tags
- Categories (default)
- Topics

### Categories / Tags Filter
Select specific categories or tags as the source for related posts.

### Order By
Order posts by:

- Date
- Title
- Modified
- Comment Count
- View *(butuh plugin post view counter)*

### Range Post
Post time range:

- All Time
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Alignment
Module content alignment:

- Left
- Center
- Right

### Box Style
Container styling options:

- **No Style**
- **Boxed Style**

### Background
- Background Color (solid / gradient)
- Background Image (optional)

### Border & Radius
- Border enable/disable
- Border color & thickness
- Per‑side border radius

### Typography

#### Post Title
- Font size
- Weight
- Transform
- Line height
- Link color & hover color

> Note: Font color applies only to content outside the thumbnail.

#### Excerpt Color
Set excerpt text color.

#### Module Title Color
Set the Related Posts module title color.

## Catatan Developer

- All Related Posts modules share the same option structure.
- Modules can be enabled selectively via `active_callback`.
- Helper functions ensure consistent UI & UX across modules.

## Tips Penggunaan

- Use **Grid + Category by Category** for news blogs.
- Use **Number layout + Tags** for tutorial articles.
- Enable **Featured Post** to highlight important content.
