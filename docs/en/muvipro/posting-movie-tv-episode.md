---
title: How to Post Movies, TV Shows, and Episodes in the Muvipro Theme
outline: deep
---

# Posting Movies, TV Shows, and Episodes in Muvipro

## Video Tutorial

<YouTubeEmbed video-id="pdp-mxr7JZo" />

## Content Structure in Muvipro

In general, Muvipro organizes content into:

- **Movies**: standalone films.
- **TV Show**: series.
- **Episode**: episodes within a series. This is under the **TV Show** submenu.
- **Blog**: blog posts.

Menu names may vary by version (e.g., Movie, TV Show, Episode), but the concept is the same.

## Posting Movie

### Create a Movie Post
1. Go to **Movies -> Add New** (or a similar custom post type).
2. In **Movie Settings**, find the field:
   ```
   Enter IMDB/TMDB ID
   ```

3. Enter the **TMDB ID** for the movie.

   TMDB link example:
   ```
   https://www.themoviedb.org/movie/135397-jurassic-world
   ```

   TMDB ID:
   ```
   135397
   ```

Example screenshot:

![Create a Movie Post](/muvipro/post/auto-post-movie-muvipro.jpg)

4. Click **Retrieve Information**, and wait for the data to auto‑fill.
5. Publish.

### Movie Player & Download

- Available under the **Player Settings** and **Download Settings** tabs in Find Movie below the editor.
- Supports up to **15 Players** and **15 Download Links**
- Players must be embedded manually

::: info Note
The Muvipro theme does not include a built‑in player.
:::

## Posting TV Show

### Create a TV Show Post
1. Go to **TV Show -> Add New** (or Series).
2. Enter the **TMDB ID** in **TV Shows Settings**.

   Example:
   ```
   https://www.themoviedb.org/tv/16420
   ```

   TMDB ID:
   ```
   16420
   ```

Example screenshot:

![Create a TV Show Post](/muvipro/post/auto-post-tvshow-muvipro.jpg)

3. Click **Retrieve Information**, then **Publish**.

::: tip Info
TV Shows do not have Player or Download options. These features are available in Episodes.
:::

## Posting Episode

1. Go to **TV Show -> All Episodes -> Add New** (or Episode under TV Show).
2. Fill in **TMDB ID**, **Season**, and **Episode**.

   Example link:
   ```
   https://www.themoviedb.org/tv/16420/season/1/episode/1
   ```

   Fields:
   ```
   TMDB ID : 16420
   Season  : 1
   Episode : 1
   ```

Example screenshot:

![Create an Episode Post](/muvipro/post/auto-post-episode-muvipro.jpg)

3. Click **Retrieve Information**, then **Publish**.

### Episode Player & Download

- Supports up to **15 Players** and **15 Download Links**
- Embed the player manually

::: warning Important
The Muvipro theme does not include a built‑in player. Ensure the Episode tmdbID matches the TV Show tmdbID.
:::

## Posting Blog

1. Go to:
   ```
   Blog → Add New
   ```

2. Add content as in a regular WordPress post.

3. Click **Publish**.

## Important Notes

- Ensure the Custom field **tmdbID:** matches the **tmdbID TV Show**.
- If you use TMDB scraping, the **TMDB ID TV Show** and **TMDB ID Episode** should automatically match.
- If you post manually, you must enter the **tmdbID:** manually and match it with the **tmdbID:** in the corresponding **TV Show**.

Example Screenshot:

In TV Show:
![Example TV Show tmdbID](/muvipro/post/tmdbid-tvshow-muvipro.png)

In Episode:
![Example Episode tmdbID](/muvipro/post/tmdbid-episode-muvipro.png)

## Conclusion

With TMDB integration, the **Muvipro** theme enables fast, efficient creation of Movie, TV Show, and Episode content.

For a list of recommended player sources, see: [Muvipro Player List](/muvipro/daftar-player.md).