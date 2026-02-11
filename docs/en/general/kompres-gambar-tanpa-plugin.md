---
title: Automatic Image Compression in WordPress Without Plugins
outline: deep
---

# Automatic Image Compression in WordPress Without Plugins

Optimizing image size is a key way to speed up your website.  
This tutorial summarizes the guide “Automatic Image Compression in WordPress Without Plugins” from Idtheme.

## 1. Compress Before Upload

The safest and most universal approach is to compress images **before** uploading to WordPress.

- Use online services such as:
  - `compressjpeg.com` for JPEG images.
  - `compresspng.com` for PNG images.
  - Or other desktop/online image compression tools.
- Compress images before uploading to WordPress.

## 2. Use Built‑in Server Compression

Some servers provide:

- Image compression modules.
- Or CDN integrations that automatically compress images (e.g., Cloudflare Polish, etc.).

If available:

- Enable the feature in your hosting/CDN panel.

## 3. Use External Scripts/CLI (Advanced)

If you have server access:

- Use tools like `jpegoptim`, `optipng`, etc., to compress images in the `uploads` folder.

Concept steps:

1. Log in to the server via SSH.
2. Navigate to `wp-content/uploads`.
3. Run compression commands according to the tool used.

This approach requires SSH access and basic server OS knowledge.

## 4. Via Custom Code (Recommended)

If you want to compress all JPEG or PNG images, add the following code to your theme’s `functions.php` file:

```php
function idt_prefix_image_quality( $quality, $image_mime_type ) {
    return 70;
}
add_filter( 'wp_editor_set_quality', 'idt_prefix_image_quality', 10, 2 );
```

For Jetpack Photon users, use the code below to adjust image quality on Photon:

```php
add_filter( 'jetpack_photon_pre_args', function( $args, $image_url, $scheme ) {
    if ( empty( $args['quality'] ) ) {
         $args['quality'] = 70;
    }
    return $args;
}, 10, 3 );
```

## 5. When Do You Need an Image Optimization Plugin?

Although the title says “without plugins,” in some cases:

- If the number of images is very large.
- If you don’t have server access (SSH) or a panel with compression features.

Using an image optimization plugin can be a practical solution. However:

- Choose a lightweight and reputable plugin.
- Avoid installing multiple plugins with the same functionality.

The main focus of this guide:

- Get used to **compressing images before upload**.
- Leverage server/CDN features before adding new plugins.