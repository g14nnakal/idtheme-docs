---
title: Module Banner Posts (Widget) – JurnalPress Theme
description: Complete documentation for the Module Banner Posts widget in the JurnalPress WordPress theme
outline: [2, 3]
---

# Module Banner Posts (Widget) – JurnalPress Theme

This widget lets you display posts using attractive banner layouts. It is organized into three main tabs: General, Query, and Style.

## General Tab

### Title
- **Type**: Text field
- **Description**: The main widget title to display

### Link Title
- **Type**: URL field
- **Description**: Target URL for the widget title. Leave empty if you don’t want the title to have a link
- **Format**: `https://www.domain.com/target`

### Title Image
- **Type**: Upload field
- **Description**: Replace the title text with an image

### Description Title
- **Type**: Textarea
- **Description**: Description or subtitle for the widget
- **Rows**: 3 rows

### Layout
- **Type**: Radio image
- **Choices**:
  - Style 1: Banner layout with special icon
  - Style 2: Alternative layout 1
  - Style 3: Alternative layout 2
  - Style 4: Alternative layout 3
  - Style 5: Alternative layout 4
  - Style 6: Alternative layout 5
  - Style 7: Alternative layout 6
  - Style 8: Alternative layout 7

### Featured Post Size
- **Type**: Radio image
- **Choices**:
  - Medium: Medium size
  - Large: Large size
- **Note**: Applies to all styles except Style 8

### Content outside thumbnail
- **Type**: Checkbox
- **Description**: Display content outside the thumbnail

### List Post Thumbnail Position
- **Type**: Radio image
- **Choices**:
  - Left: Thumbnail on the left
  - Right: Thumbnail on the right
  - Zig Zag: Alternating left-right thumbnails
- **Note**: Applies only to Style 1 and list posts

### Thumbnail Max Width (px)
- **Type**: Number field
- **Range**: 60-360px
- **Step**: 1px
- **Note**: Applies only to Style 1 and list posts

### Thumbnail Max Height (px)
- **Type**: Number field
- **Range**: 60-800px
- **Step**: 1px
- **Description**: Thumbnail height for post layout, default 350px

### List Post Aspect Ratio
- **Type**: Select dropdown
- **Choices**:
  - Original: Original ratio
  - Square - 1:1: Square ratio
  - Standard - 4:3: Standard ratio
  - Portrait - 3:4: Portrait ratio
  - Classic - 3:2: Classic ratio
  - Classic Portrait - 2:3: Classic portrait ratio
  - Wide - 16:9: Wide ratio
  - Tall - 9:16: Tall ratio
- **Note**: Applies only to Style 1 and list posts

### Category
- **Type**: Checkbox
- **Description**: Enable category display

### Category Position
- **Type**: Select dropdown
- **Choices**:
  - Default: Default position
  - After Title: After the title

### Category Style
- **Type**: Select dropdown
- **Choices**:
  - No: No style
  - Label: Label display
  - Icon: Icon display
  - Color Scheme: Color scheme
  - Bg (Transparent): Transparent background
  - Bg (Solid): Solid background

### Meta
- **Type**: Checkbox
- **Description**: Enable meta information
- **Note**: For meta settings, go to **Customizer → General → Global**, see Meta Module & Widgets

### Meta Position
- **Type**: Select dropdown
- **Choices**:
  - Default: Default position
  - Before Title: Before the title

### Excerpt
- **Type**: Checkbox
- **Description**: Enable excerpts
- **Note**: Displayed only for featured posts or where required. For excerpt length settings, go to **Customizer → General → Global**, see Excerpt Length

## Query Tab

### Order By
- **Type**: Select dropdown
- **Choices**:
  - Date: By date
  - Title: By title
  - Modified: By modified date
  - Comment Count: By comment count
  - View: By view count
- **Note**: For order by view, a post view counter or wp postviews plugin is required

### Selected categories
- **Type**: Multiple select
- **Source**: Category list
- **Size**: 5 items
- **Description**: Click categories while holding CTRL to select multiple. If “All Categories” is selected, other choices are ignored

### Tag ID
- **Type**: Text field
- **Format**: Comma‑separated (example: 1,2,3,4)
- **Description**: Leave empty to display by category without tag filtering

### Range Post
- **Type**: Select dropdown
- **Choices**:
  - All Post: All posts
  - 1 Year: Last 1 year
  - 2 Months: Last 2 months
  - 1 Months: Last 1 month
  - 7 Days: Last 7 days

## Style Tab

### Post Space (px)
- **Type**: Number field
- **Range**: 0-50px
- **Step**: 1px

### Title Font Size (px)
- **Type**: Number field
- **Range**: 8-40px
- **Step**: 1px

### Alignment
- **Type**: Radio image
- **Choices**:
  - Left: Align left
  - Center: Align center
  - Right: Align right
- **Note**: Applies only to Style 1 and list posts

### Background Gradient
- **Type**: Gradient picker
- **Description**: Must set two colors and change direction for gradient option

### Background Image
- **Type**: Upload field
- **Description**: Widget background image

### Title Color
- **Type**: Color picker
- **Description**: Color for post titles

### Subtitle Color
- **Type**: Color picker
- **Description**: Color for descriptions/subtitles

### Link Color
- **Type**: Color picker
- **Description**: Color for links

### Link Hover Color
- **Type**: Color picker
- **Description**: Color for links on hover

### Meta Color
- **Type**: Color picker
- **Description**: Color for meta information

## Requirements

This widget requires the **BT Core** plugin to function correctly. If the plugin is not installed, a warning will appear:

> "This widget requires BT Core plugin to be installed and activated."

## Examples

### Banner with Layout Style 1
1. Choose Layout: Style 1
2. Set Featured Post Size: Large
3. Enable Category and Meta
4. Set Order By: Date
5. Select desired categories

### Banner with Gradient Background
1. Choose Background Gradient
2. Set two colors and gradient direction
3. Add a Background Image if needed
4. Adjust text colors for good contrast

## Tips

1. **Layout Combinations**: Experiment with different layout styles for varied looks
2. **Content Filtering**: Combine categories and tags to filter specific content
3. **Responsive**: All layouts are responsive across screen sizes
4. **Color Customization**: Use the color picker to match your site’s color scheme
5. **Performance**: Limit the number of posts displayed for optimal performance

## Troubleshooting

### Widget does not appear
- Ensure the BT Core plugin is installed and active
- Check for conflicts with other plugins

### Thumbnails do not appear
- Ensure posts have a featured image
- Check thumbnail size settings

### Layout looks incorrect
- Make sure the correct layout style is selected
- Check thumbnail position and aspect ratio settings

### Colors do not change
- Ensure correct color picker formats are used
- Clear the browser cache after changes