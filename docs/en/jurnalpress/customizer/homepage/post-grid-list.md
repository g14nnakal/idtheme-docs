---
title: Post Grid / List (Module) - JurnalPress Theme
description: Documentation for Post Grid/List options in the Home Top Module or Home Bottom Module of the JurnalPress theme Customizer.
outline: deep
---

# Post Grid / List (Module) - JurnalPress Theme

**Post Grid/List** is a module in the **Home Top Module** or **Home Bottom Module** used to display a list of posts on the homepage in layouts such as **Grid**, **List**, or **Numbered List**. This module is highly flexible and supports query settings, content structure, and detailed visual styling.

## Settings Location:
```
Appearance → Customize → Homepage → Home Top Module/ Home Bottom Module → Post Grid/List
```

## Settings Tabs

Post Grid/List has **3 main tabs**:

- **General** – basic settings, layout, and content structure
- **Query** – post source and filtering
- **Style** – visual appearance and typography

## General Settings

### Enable Post Grid/List
Enable or disable the Post Grid/List module on the homepage.

### Title Module
Module title displayed above the post list.

### Title Image
Replace the title text with an image (e.g., logo or custom heading).

### Layout
Choose the post list layout type:

- **Grid Layout** – Grid view (default)
- **List Layout** – Vertical list
- **Number Layout** – Numbered list

#### Number Style
For the Number layout only:

- Default (with #)
- Without #
- Text Stroke

### Columns
Number of columns for Grid layout:

- 2 Columns
- 3 Columns (default)
- 4 Columns
- 5 Columns

### Thumbnail

#### Thumbnail Enable
Enable or disable post thumbnails.

#### Thumbnail Position
Thumbnail position (List layout only):

- Left Thumbnail
- Right Thumbnail
- Zigzag (alternate left & right)

#### Max Width (px)
Set the maximum thumbnail width (default ±220px).

#### Aspect Ratio
Thumbnail image ratio:

- Original
- 1:1 (Square)
- 4:3 (Standard)
- 3:4 (Portrait)
- 3:2 (Classic)
- 2:3 (Portrait)
- 16:9 (Wide)
- 9:16 (Tall)

### Posts Structure

#### Category
Display post categories.

- **Category Position**: Default, After Title, Inside Thumbnail
- **Category Style**: Label, Icon, Color Scheme, Background (transparent/solid)

#### Meta
Display post meta (author, date, etc.).

> Meta settings follow: **Customizer → General → Global → Meta Module & Widgets**

- Meta Position: Default / Before Title

#### Excerpt
Display post excerpts.

> Excerpt length follows: **Customizer → General → Global → Excerpt Length**

### Other Options

#### Featured Post
Mark a post as featured.

- **Featured Post Excerpt** – Display excerpt on featured post
- **Featured Post Style**:
  - Content Inside
  - Content Outside
  - Content Left
  - Content Right

#### Mobile Hidden
Hide this module on mobile devices.

## Query Settings

### Number Posts
Set how many posts are displayed (2 – 18 posts).

### Order By
Sort posts by:

- Date
- Title
- Modified
- Comment Count
- View *(requires Post Views plugin)*

### Categories
Filter posts by selected categories.

### Tags
Filter posts by selected tags.

### Range Post
Post time range:

- All Post
- 1 Year
- 2 Months
- 1 Month
- 7 Days

## Style Settings

### Post Space (px)
Set spacing between posts.

### Alignment
Content alignment:

- Left
- Center
- Right

### Box Style

Post container styling options:

- **Style**: Default / Boxed Style
- **Background Color**
- **Background Image** (optional)
- **Border Radius**
- **Border** (color, width, style)

### Typography

Content typography settings:

- **Post Title**
  - Font size
  - Weight
  - Transform
  - Line height
  - Color (link & hover)

- **Excerpt Color**
- **Module Title Color**

> Note: Title font color applies only to content outside the thumbnail.

## Technical Notes

- This module uses the following helper functions:
  - `jurnalpress_customizer_options_query()`
  - `jurnalpress_customizer_options_box_style()`
  - `jurnalpress_customizer_options_content_typography()`

- Option structures are reusable and consistent across JurnalPress modules.

## Usage Recommendations

- Use **Grid Layout + Featured Post** for magazine/news‑style homepages.
- Use **List Layout** for editorial or blog content.
- Enable **Mobile Hidden** if the module is too heavy for mobile views.