---
title: How to Fix 404 Errors in WordPress
outline: deep
---

# How to Fix 404 Errors in WordPress

A 404 error usually appears when permalinks are not read correctly or `.htaccess` is misconfigured, especially on Apache servers.

## 1. Re‑save Permalinks (Flush Rewrite Rules)

1. Go to **Settings → Permalinks**.
2. Without changing anything, click **Save Changes**.

This forces WordPress to rewrite permalink rules to the `.htaccess` file.

In many cases, this simple step is enough to resolve 404 errors.

## 2. Check the .htaccess File (Apache)

If the step above does not solve the issue, continue by checking the `.htaccess` file.

1. Log in to **cPanel / hosting panel / FTP**.
2. Go to the WordPress installation root folder (usually `public_html` or wherever WordPress is installed).
3. Look for a file named `.htaccess`.
4. If it’s not visible, enable **Show Hidden Files** in the file manager or configure your FTP client to show hidden files.
5. If you still can’t find `.htaccess`, contact hosting support to ensure the file can be created.

If the `.htaccess` file is empty or missing, add the standard WordPress rules below:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

Save the changes, then try opening the page that previously showed a 404 error.

## 3. Ensure the mod_rewrite Module Is Active (Apache)

On Apache servers, WordPress requires the `mod_rewrite` module so pretty permalinks (`/post-name/`) work.

- Ensure `mod_rewrite` is enabled on the server.
- If you don’t have access to server configuration:
  - Contact hosting support.
  - Ask them to ensure `mod_rewrite` is active and supports WordPress rules in `.htaccess`.

Without `mod_rewrite`, custom permalinks often result in 404 errors.

## 4. Notes for Nginx Users

If your hosting uses **Nginx**:

- The `.htaccess` file and `mod_rewrite` module are **not used**.
- All rewrite rules are configured directly in the server configuration (Nginx server blocks).
- If re‑saving permalinks does not fix the 404 error:
  - Contact hosting support.
  - Explain that you’re using WordPress and experiencing 404 errors on permalinks.
  - Ask them to ensure Nginx is configured correctly for WordPress.

## 5. Check Plugins That Manage URLs (Optional)

Some plugins can change URL and permalink behavior, for example:

- Redirect plugins.
- Security plugins.
- Multilingual plugins.

If 404 errors started after installing or changing settings of a particular plugin:

1. Temporarily deactivate the suspected plugin.
2. Perform **Re‑save Permalinks** again.
3. Check if the 404 error disappears.

If the issue goes away after deactivating the plugin, the plugin is likely the cause and needs reconfiguration or replacement.