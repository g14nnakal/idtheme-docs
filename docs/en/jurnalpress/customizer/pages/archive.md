---
title: Archive (Pages) – JurnalPress Theme
description: Display settings for archive pages (category, tag, author, and date) in the JurnalPress theme via the Customizer.
outline: deep
---

# Archive (Pages) – JurnalPress Theme

The **Archive** section is used to configure archive page displays in the **JurnalPress** theme, such as **Category Archive**, **Tag Archive**, **Author Archive**, and **Date Archive**.  
All options are accessible via **Customizer → Pages → Archive**.

These settings cover layout, post structure, thumbnails, meta, featured posts, pagination, and typographic styles.

## Settings Location
```
Appearance → Customize → Pages → Archive
```

## Tabs Overview

The **Archive** section has two main tabs:

- **General** → Content structure and behavior settings
- **Style** → Typography and visual appearance settings

## General Settings

### Breadcrumb

Enable or disable breadcrumbs on archive pages.

- **Type**: Toggle  
- **Default**: Disabled  
- **Function**: Displays breadcrumb navigation at the top of archive pages

### Archive Description

Display archive descriptions (e.g., category or tag descriptions).

- **Type**: Toggle  
- **Default**: Enabled  
- **Example**: A category description appears below the archive title

### Recent Text

Additional text for the *Recent Posts* label.

- **Type**: Text  
- **Notes**:  
-  - Leave empty to hide text
-  - Initially used for the homepage, but remains available in archive configuration

### Posts per Page

Determine the number of posts displayed per archive page.

- **Type**: Range  
- **Min**: 1  
- **Max**: 50  
- **Default**: Follows WordPress settings (`posts_per_page`)  
- **Notes**: Reset is disabled because it uses global WordPress options

### Layout

Set the layout of the posts list on archive pages.

- **Type**: Layout Selector (SVG Button)
- **Choices**:
  - **List Layout**
  - **Grid Layout**
- **Default**: List

### Columns

Number of columns for the grid layout.

- **Type**: SVG Button  
- **Choices**: Follows the theme’s column configuration  
- **Default**: 2 Columns (`col2`)  
- **Notes**: Effective when using the grid layout

## Thumbnail Settings

### Thumbnail (Enable)

Enable or disable post thumbnails.

- **Type**: Toggle  
- **Default**: Enabled

### Thumbnail Position

Set the thumbnail position in the list layout.

- **Type**: SVG Button  
- **Choices**:
  - **Left Thumbnail**
  - **Right Thumbnail**
- **Zigzag (Combination Left & Right)**
- **Default**: Left Thumbnail

### Thumbnail Max Width

Maximum thumbnail width (in pixels).

- **Type**: Range  
- **Min**: 100px  
- **Max**: 360px  
- **Default**: 220px  
- **Notes**: Applies to left or right positions

### Thumbnail Aspect Ratio

Configure the aspect ratio for thumbnail images.

- **Type**: Select  
- **Choices**:
  - Original
  - 1:1 (Square)
  - 4:3 (Standard)
  - 3:4 (Portrait)
  - 3:2 (Classic)
  - 2:3 (Classic Portrait)
  - 16:9 (Wide)
  - 9:16 (Tall)
- **Default**: Original

## Posts Structure

### Category

Display the post category on archives.

- **Type**: Toggle  
- **Default**: Enabled

#### Category Position

- **Default** → Follows the standard structure
- **After Title** → After the post title
- **Inside Thumbnail** → Inside the thumbnail

#### Category Style

- **No** → No style
- **Label**
- **Icon**
- **Color Scheme**
- **Background (Transparent)**
- **Background (Solid)**  
- **Default**: Background (Transparent)

### Meta

Display post meta information.

- **Type**: Toggle  
- **Default**: Enabled

#### Meta Position

- **Default**
- **Before Title**

#### Meta List

Determine the types of meta displayed and their order.

- **Example Meta**:
  - Author (with avatar)
  - Date
- **Features**:
  - Drag & drop
  - Option to hide on mobile
  - Style per item

### Excerpt

Display the post excerpt.

- **Type**: Toggle  
- **Default**: Disabled  
- **Notes**:  
-  Excerpt length is configured via  
  **Customizer → General → Global → Excerpt Length**

## Featured Post

### Featured Post (Archive)

Display featured posts on archive pages.

- **Type**: Toggle  
- **Default**: Enabled

### Featured Post in Homepage

Enable featured posts on the homepage as well.

- **Type**: Toggle  
- **Default**: Enabled

### Featured Post Excerpt

Display an excerpt for featured posts.

- **Type**: Toggle  
- **Default**: Disabled

### Featured Post Style

Set the featured post layout.

- **Type**: SVG Button  
- **Choices**:
  - Content Inside
  - Content Outside
  - Content Left
  - Content Right
- **Default**: Content Inside

## Navigation Type

Set the type of navigation for archive pages.

- **Type**: SVG Button  
- **Choices**:
  - **Number** → Numbered pagination
  - **Auto Load** → Infinite scroll
  - **Button** → Load more button
- **Default**: Button

## Style Settings

### Post Title Typography

Configure post title typography on archive pages.

- **Type**: Font Control  
- **Options**:
  - Font size
  - Font weight
  - Text transform
  - Line height
  - Font style
  - Link color & hover color
- **Default**:
  - Weight: Bold

## Notes

- All settings in the Archive section apply to **all archive pages** (category, tag, author, date).
- Changes can be previewed in real time via the Customizer.
- Some options follow global theme settings for design consistency.
