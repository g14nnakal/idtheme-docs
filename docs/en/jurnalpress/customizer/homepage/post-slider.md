---
title: Post Slider (Module) - JurnalPress Theme
description: Complete documentation for Post Slider settings in the Home Top Module or Home Bottom Module of the JurnalPress theme Customizer.
outline: deep
---

# Post Slider (Module) - JurnalPress Theme

Post Slider is a module in the **Home Top Module** or **Home Bottom Module** used to display posts as a slider or carousel on the front page. This module is highly flexible and supports layout settings, content queries, post structure, and detailed styling and typography.

## Settings Location
```
Appearance → Customizer → Homepage → Home Top Module/ Home Bottom Module → Post Slider
```

## Settings Tabs

Post Slider has **3 main tabs**:

- **General** – basic settings, layout, and content structure
- **Query** – post source and filtering
- **Style** – visual appearance and typography

## General Settings

### Enable Post Slider
**Post slider in homepage**

Enable or disable the Post Slider module on the homepage.

### Title Module
Set the Post Slider module title.

### Title Image
Replace the title text with an image.

> If set, the image replaces the Title Module (text).

### Layout
Choose the slider display type.

Layout choices:
- **Slider** – standard single‑row slider
- **Slider With Thumbnail Nav** – slider with thumbnail navigation
- **Carousel** – multi‑item slider (carousel)

### Columns
Set the number of post item columns (carousel layout only).

Choices:
- 2 Columns
- 3 Columns (default)
- 4 Columns
- 5 Columns

### Slider Options

#### Arrow
Show arrow navigation (prev / next).

#### Pagination
Show pagination (dot indicators).

#### Autoplay
Configure slider autoplay behavior.

Choices:
- **None** – no autoplay
- **Autoplay** – automatically switches per interval
- **Auto Scroll** – continuous auto‑scroll

### Thumbnail

#### Aspect Ratio
Set the thumbnail image ratio.

Ratio choices:
- Original
- 1:1 (Square)
- 4:3 (Standard)
- 3:4 (Portrait)
- 3:2 (Classic)
- 2:3 (Classic Portrait)
- 16:9 (Wide)
- 9:16 (Tall)

### Posts Structure

#### Category
Display post categories.

- **Category Position**
  - Default
  - After Title
  - Inside Thumbnail

- **Category Style**
  - No
  - Label
  - Icon
  - Color Scheme
  - Background Transparent
  - Background Solid

#### Meta
Display post meta (date, author, comments, etc.).

> Meta settings follow global configuration:
> Customizer → General → Global → Meta Module & Widgets

- **Meta Position**
  - Default
  - Before Title

#### Excerpt
Display the post excerpt.

> Excerpt length follows global settings:
> Customizer → General → Global → Excerpt Length

### Mobile Hidden
Hide the Post Slider on mobile views.

## Query Settings

These settings determine which posts are displayed.

### Number Posts
Set how many posts are displayed (2 – 18).

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
Filter posts by selected tags.

### Range Post
Filter posts by time range.

Choices:
- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Post Space
Set spacing between post items (in pixels).

### Alignment
Set content alignment:
- Left
- Center
- Right

### Box Style

#### Style
- **No Style** – no box
- **Add Style** – boxed styling

#### Background Color
Set box background color (solid / gradient).

#### Background Image
Add a background image to the box.

#### Border Radius
Set box corner radius.

#### Border
Configure box borders (color, width, style).

### Typography

#### Post Title
Configure post title typography:
- Font size
- Weight
- Line height
- Transform
- Link & hover colors

> Font color applies only to titles outside the thumbnail.

#### Excerpt Color
Set the excerpt text color.

#### Module Title Color
Set the Post Slider module title color.

## Notes

- Post Slider uses a dynamic query system so it can be reused across modules.
- All settings support real‑time preview via the Customizer.
- Ideal for featured content, news headlines, or featured posts on the homepage.