---
title: WordPress User Settings in the Jurnalpress Theme
description: Complete documentation for adding and managing WordPress user custom fields for Author Page and Author Box using Btcore code.
outline: deep
---

# WordPress User Settings in the Jurnalpress Theme

This documentation explains how to add **custom fields to WordPress users** for Author Page and Author Box needs, such as:

- Author header image
- Verified user status
- Social media links

All settings are managed through the **Edit User Profile** page in the WordPress dashboard, without additional plugins, because all functionality is provided by the `Btcore_Metabox_User_Profile` code.

## Video Tutorial

Here is the video tutorial for User Settings in the JurnalPress theme:

<YouTubeEmbed video-id="DgXa9lCuwRE" />

For detailed text instructions, see below.

## Settings Location

All fields can be accessed via:

- **Users → Profile** (for the user themself)
- **Users → All Users → Edit** (for admins)

## Purpose

With this implementation, you can:

- Display richer, more professional author information
- Control the author page display directly from the user profile
- Provide consistent author data for themes or plugins

The input data is stored as **user meta** and can be used on:

- Author archive pages (`archive.php`)
- Author box on single posts

## User Custom Fields

### 1. Image Author Page

This field is used to display a header image on the author page.

**Location:**
User Profile → *Add Image In Author Page*

**Specifications:**
- Recommended size: **1100×250 px**
- Uses the WordPress Media Library
- Stored as user meta: `image_authorpage`

**Common uses:**
- Author header background
- Author profile banner

### 2. Verify User

This feature marks a user as a **verified author**.

**Location:**
User Profile → *Add verify user*

**Field Type:**
- Checkbox

**User meta:**
- `user_check` (boolean)

**Examples of use:**
- Display a checkmark (✓) next to the author’s name
- Identify official authors or primary contributors

### 3. Social Media User

Social media fields allow each user to have their own social profiles.

**Field List:**

| Meta Key | Description |
|--------|-----------|
| `user_facebook` | Facebook URL |
| `user_instagram` | Instagram URL |
| `user_twitter` | Twitter / X URL |
| `user_youtube` | YouTube URL |
| `user_tiktok` | TikTok URL |
| `user_whatsapp` | WhatsApp URL (wa.me) |

**Input Type:**
- URL

**Example:**
```
https://instagram.com/username
https://wa.me/628xxxxxxxxx
```

## Data Security

This implementation includes:

- Nonce verification (`wp_nonce_field`)
- Permission checks (`current_user_can`)
- URL sanitization (`esc_url_raw`)

So it is safe for production environments.

## How to Retrieve Data in the Theme

### Image Author Page

```php
$image = get_user_meta( get_the_author_meta( 'ID' ), 'image_authorpage', true );
```

### Verify User

```php
$is_verified = get_user_meta( get_the_author_meta( 'ID' ), 'user_check', true );
```

### Social Media

```php
$instagram = get_the_author_meta( 'user_instagram' );
$facebook  = get_the_author_meta( 'user_facebook' );
```

## Example Implementation in an Author Box

Typically this data is used to:

- Display the author header photo
- Display the name + verified badge
- Display social media icons

General structure:

- Avatar + author name
- Verified badge (if enabled)
- Author bio
- Social media list

## Important Notes

- Fields appear only on the user profile page
- Media scripts are loaded only on `profile.php` and `user-edit.php`
- Does not affect frontend performance

## Conclusion

With this system, managing WordPress users becomes more flexible and powerful, especially for **content creator, blog, and news portal** websites.