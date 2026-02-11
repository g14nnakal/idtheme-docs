---
title: Managing WordPress Categories in the Jurnalpress Theme
description: A comprehensive guide to managing WordPress categories in the Jurnalpress Theme with custom fields such as category color and image using taxonomy metaboxes. Supports custom theme and plugin development.
outline: deep
---

# Managing WordPress Categories in the Jurnalpress Theme

This documentation explains how to configure **categories (Category)** in WordPress, including adding **custom fields** for **category color** and **category image** using a **taxonomy metabox** approach.

This feature is suitable for custom theme or plugin needs, such as:
- Category color on post overlays
- Category tag widget
- Category meta
- Taxonomy‑based visual styling

## Video Tutorial

Here is the video tutorial for Category Settings in WordPress for the JurnalPress Theme:

<YouTubeEmbed video-id="S26u7YvfRiY" />

For the text tutorial details, see below.

## Configure Categories in WordPress

1. Go to **Posts > Categories**.
2. Click and edit each category you want to configure.
3. On the category edit page, you will see two new custom fields:
   - **Category Color**
   - **Category Image**

## Understanding Categories in WordPress

Categories are one of WordPress’s **built‑in taxonomies** used to group content (posts) by specific topics.

By default, categories only have:
- Name
- Slug
- Description
- Parent category

However, in advanced development we often need **additional data**, for example:
- Category color
- Category image
- Category icon

## Custom Category Fields

In this implementation, two custom fields are available:

### 1. Category Color
Used for:
- Category overlay color
- Background for category badges
- Category widget styling
- Taxonomy visual markers

Values are stored as **HEX color** (`#ff0000`).

### 2. Category Image
Provided as an optional field for custom themes.

Important notes:
- **Not used directly on the frontend yet**
- Prepared so theme developers can leverage it as needed
- Suitable for category widgets, hero sections, or taxonomy archives

## Code Structure

These category custom fields are implemented using the class:

```php
class Btcore_Metabox_Category
```

This class:
- Adds fields on the Add Category page
- Adds fields on the Edit Category page
- Stores taxonomy metadata
- Loads the WordPress color picker and media uploader

## Data Storage (Term Meta)

Category data is stored using the Term Meta API:

### Category Color
```php
update_term_meta( $term_id, '_idt_category_color', $value );
```

### Category Image
```php
update_term_meta( $term_id, '_idt_category_image', $value );
```

## Fetching Category Color on the Frontend

Example usage in a theme:
```php
$color = get_term_meta( $term_id, '_idt_category_color', true );
```

Implementation example:
```php
$color = get_term_meta( $term_id, '_idt_category_color', true );

echo '<span class="category-badge" style="background-color: ' . esc_attr( $color ) . '">';
single_cat_title();
echo '</span>';
```

## Fetching Category Image on the Frontend

Since it's not implemented by default, you can use it as needed:
```php
$image = get_term_meta( $term_id, '_idt_category_image', true );
```

Custom usage example:
```php
$image = get_term_meta( $term_id, '_idt_category_image', true );

if ( $image ) {
	echo '<img src="' . esc_url( $image ) . '" alt="' . single_cat_title( '', false ) . '" />';
}
```

## Use Cases

Some real‑world examples:

- Category overlay on featured posts
- Category badge backgrounds in loops
- Category widgets with icons or images
- Category archive styling

## Additional Notes for Theme Developers

- These fields do not affect WordPress core
- Supports Gutenberg & Query Loop integration
- Safe for production use
- Ideal for visual/magazine/news themes

## Conclusion

With this approach, WordPress categories become much more flexible and powerful.
Custom fields on taxonomies enable themes and plugins to have a stronger visual identity.