---
title: How to Post in the Newkarma Theme
outline: deep
---

# How to Post in the Newkarma Theme

The Newkarma theme supports several post formats: **standard**, **video**, and **gallery**.  
This makes it easy to publish news, videos, and image galleries.

## Video Tutorial

The original documentation includes a video explaining the posting steps.  
You can add your video ID below.

<YouTubeEmbed video-id="VXnLXEHnnFk" />

## Post Formats
- Standard: regular post with a featured image.
- Video: use the Video post format, enter the video source via Oembed or Iframe in Video Settings.
- Gallery: use the Gutenberg Gallery block or insert a gallery in the Classic Editor.

Here is an example of post format settings:

![Post Format Settings](/general/post/post-format-video.png)

## Standard Posting

Standard posting is used for regular articles (without special video/gallery formats).

Steps:

1. Go to **Posts → Add New**.
2. Fill in:
   - **Title** (article title).
   - **Content** (article body).
   - **Category**, **Topic**, and **Tags** if used.
3. Ensure **Post Format** remains **Standard** (default).
4. Choose a **Featured Image**:
   - Click **Set featured image**.
   - Select or upload the image to use as the main thumbnail.
   - [Featured image tutorial.](https://wordpress.com/support/featured-images/)
5. Click **Publish** to publish the article.

## Video Posting

Video posts use **Post Format: Video** and the **Video Settings** meta box.

Steps:

1. Go to **Posts → Add New**.
2. Enter title, content, category, topic, and tags as usual.
3. Change **Post Format** to **Video**.
4. Find the **Video Settings** meta box (usually below the editor):
   - It consists of 2 tabs:
     - **Oembed**
     - **Iframe**
5. If using **Oembed**:
   - Enter the video URL from a WordPress‑supported platform, for example:
     - YouTube
     - Dailymotion
   - WordPress will embed it automatically.
   - See the list of oEmbed services:  
     https://codex.wordpress.org/Embeds
6. If using **Iframe**:
   - Enter the `<iframe>` code provided by the video platform.
7. Choose a **Featured Image** for the thumbnail.
   - [Featured image tutorial.](https://wordpress.com/support/featured-images/)
8. Click **Publish**.

Here is an example of video settings:

![Video Settings](/general/post/video-settings.jpg)

## Gallery Posting

Gallery posts let you display multiple images in a single post with a gallery layout.

Steps:

1. Go to **Posts → Add New**.
2. Enter title, content, category, topic, and tags as usual.
3. Change **Post Format** to **Gallery**.
4. Upload the images you want to display:
   - Click **Add Media**.
   - Upload all images you want to include in the post.
   - No need to press **Insert into post** for each image if the theme automatically displays them as a gallery.
5. Choose one image as the **Featured Image**.
6. Click **Publish**.

The Newkarma theme will display the images as a gallery according to the configured layout.

## Split Post (Divide an Article into Multiple Pages)

If your article is very long, you can split it into several pages.

How to:

1. Open the editor in **Text** (HTML) mode or use a block that supports it.
2. Between the paragraphs you want to split, insert the tag:

```html
<!--nextpage-->
```

3. Repeat in multiple sections if you want more than two pages.

WordPress will display pagination (pages 1, 2, 3, ...) at the bottom of the article.

Additional reference:  
https://wordpress.com/support/wordpress-editor/blocks/page-break-block/

## Focus News (Special Layout)

The Newkarma theme provides a **Focus News** feature to highlight specific news with a different layout on index and archive pages.

Settings are usually available in the **Theme Settings** meta box on the right or below the editor:

- Check the **Focus News** option (or similar name).

After saving, posts with Focus News enabled will appear differently on index/archive pages, e.g., larger or highlighted.