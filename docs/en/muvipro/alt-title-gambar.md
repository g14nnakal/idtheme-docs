---
title: How to Change ALT and Title on Images in the Muvipro Theme
outline: deep
---

# Change Image ALT and Title in Muvipro

ALT and Title on images are important for SEO and accessibility.  
The Muvipro theme uses ALT/Title values from the Media Library and/or custom theme settings.

## Set ALT and Title in the Media Library

1. Go to **Media -> Library**.
2. Select the image you want to edit.
3. Fill in these fields:
   - **Title**: image title.
   - **Alt Text**: alternative text (a short description of the image).
4. Click **Save** or **Update**.

The Muvipro theme typically reads:

- ALT from the media **Alt Text**.
- Title from **Title** or the post title, depending on the template.

## Change ALT/Title on the Featured Image

For the featured image:

- Make sure the selected image already has ALT and Title in the Media Library.
- When selecting the featured image:
  - Click the image and check its information in the right panel (Alt Text, Title).

If the theme template calls the WordPress core function (`the_post_thumbnail`), the ALT usually follows the image's Alt Text.

## Using Custom Code

Some Muvipro versions provide additional options for:

### Child theme
- Install a child theme if you don't have one.
- Edit the `functions.php` file; if it doesn't exist, create it in the child theme.
- Add the following code to the child theme's `functions.php`:

```php
<?php

if ( ! function_exists( 'gmr_add_img_title' ) ) :
function gmr_add_img_title( $attr, $attachment = null ) {
$attr['title'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
$attr['alt'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
return $attr;
}
endif;
add_filter( 'wp_get_attachment_image_attributes','gmr_add_img_title', 5, 2 );
```
- Save the changes.

### Parent theme
- Open the `functions.php` file in the Muvipro theme.
- The above code won't work in the parent theme. Add the following code to the parent theme's `functions.php`:

```php
if ( ! function_exists( 'gmr_new_add_img_title' ) ) :
function gmr_new_add_img_title( $attr, $attachment = null ) {
$attr['title'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
$attr['alt'] = 'Nonton film ' . the_title_attribute( 'echo=0' ) . ' terbaru';
return $attr;
}
endif;
add_filter( 'wp_get_attachment_image_attributes','gmr_new_add_img_title', 10, 2 );
```
- Save the changes.