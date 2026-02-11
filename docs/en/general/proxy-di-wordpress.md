---
title: How to Add a Proxy to Your WordPress
outline: deep
---

# How to Add a Proxy to Your WordPress

Here is a tutorial on how to add a proxy in WordPress.  

Many Idtheme themes or plugins use `wp_remote_get()` (WordPress standard HTTP API) for data grabbing or auto‑post functions. 

If you encounter issues during grabbing (e.g., blocked by a provider or you need a specific IP), you can leverage the **proxy** function in WordPress.

## 1. Add a Proxy in wp-config.php

WordPress provides special constants to configure a proxy.  
Add the following code to the **`wp-config.php`** file:

```php
/* Proxy Settings */
define( 'WP_PROXY_HOST', '192.168.84.101' );
define( 'WP_PROXY_PORT', '8080' );
define( 'WP_PROXY_BYPASS_HOSTS', 'localhost, www.example.com, *.wordpress.org' );
define( 'WP_PROXY_USERNAME', '' );
define( 'WP_PROXY_PASSWORD', '' );
```

Explanation:

- `WP_PROXY_HOST`  
  The proxy host or IP you use (e.g., a rented proxy address).
- `WP_PROXY_PORT`  
  The proxy port for the connection; match the port provided by your proxy provider.
- `WP_PROXY_USERNAME`  
  Username for proxy authentication (if required).
- `WP_PROXY_PASSWORD`  
  Password for proxy authentication (if required).
- `WP_PROXY_BYPASS_HOSTS`  
  List of hosts that should **not** go through the proxy, separated by commas.  
  Example: `localhost, yourwebsite.com, *.wordpress.org`

This list supports the `*` wildcard, e.g., `*.wordpress.org`.

## 2. Impact of Using a Proxy in WordPress

After adding the constants above:

- All HTTP processes in WordPress that use the HTTP API (`wp_remote_get`, `wp_remote_post`, curl, etc.) will pass through the proxy.
- Including:
  - Theme and plugin updates.
  - Requests to external APIs.
  - Grabbing functions in Idtheme themes/plugins.

Therefore, it’s important to:

- Ensure the proxy used is **stable and fast**.
- Add specific hosts to `WP_PROXY_BYPASS_HOSTS` if you don’t want requests to those hosts to go through the proxy.

> Important example: ensure `wordpress.org` is in the bypass list so core/theme/plugin updates aren’t affected if the proxy has issues.

## 3. When Should You Avoid Using a Proxy?

Some plugins may also use `wp_remote_get()` for various processes.  
If many important requests go through a proxy that is slow or frequently errors, it can cause:

- Timeouts.
- Failed imports.
- Errors when updating themes/plugins.

If many issues appear after enabling the proxy:

- Consider **disabling the proxy settings** in `wp-config.php`.
- Or use the proxy temporarily for specific processes, then remove the constants again.

Before changing this setting on a production site:

- Test first on staging or a subdomain.
- Ensure you have access to the `wp-config.php` file via FTP or your hosting panel to revert settings if errors occur.