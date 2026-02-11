---
title: Nginx, Fix Pagination Page 2 Redirects to Home
outline: deep
---

# Nginx: Fix Pagination Page 2 Redirects to Home

In some Nginx configurations, pagination pages such as `/?paged=2` or `/page/2/` may redirect to the home page if rules are incorrect, especially on **search** or archive pages.

## 1. Symptoms

- When accessing page 2 (or 3, etc.) of an archive:
  - The URL changes correctly, but the content remains the first page.
  - Or it redirects to the home page.

## 2. Ensure Permalink Structure Is Correct

1. Go to **Settings → Permalinks**.
2. Choose the desired structure.
3. Click **Save Changes**.

## 3. Check Nginx Configuration

Ensure the server block includes the main WordPress rule:

```nginx
location / {
  try_files $uri $uri/ /index.php?$args;
}
```

Nginx configuration tutorial:

- https://developer.wordpress.org/advanced-administration/server/web-server/nginx/

If you use custom configuration:

- Ensure no other rule forces `page/2` to redirect to root.
- Avoid generic redirects that send all unrecognized requests to the home page without checking the `paged` query.

## 4. Restart Nginx

After changing the configuration:

- Reload or restart Nginx to apply changes.

If you don’t have access to the configuration:

- Contact hosting support and explain the WordPress pagination issue.