---
title: 504 Error When Importing Demo Data
outline: deep
---

# 504 Error When Importing Demo Data

A 504 (Gateway Timeout) error usually appears when the demo import process takes too long, causing the connection between the server and memory to time out.

## 1. Common Causes of 504 During Import

Common causes include:

- Limited server resources (small CPU/RAM).
- PHP execution time too short (`max_execution_time`).
- PHP memory limit too small (`memory_limit`).
- Upload or post size limits too low.
- The demo import loads many images and content, exceeding the server’s time or memory limits.

## 2. Increase Memory Limit and Cron Lock in wp-config.php

The first recommended step is to increase WordPress’s memory limit and adjust the cron lock timeout.

1. Open the **`wp-config.php`** file in your WordPress installation root.
2. Add the following lines on a new line (before the comment `/* That's all, stop editing! */` or similar):

```php
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_CRON_LOCK_TIMEOUT', 360 );
```

Quick explanation:

- `WP_MEMORY_LIMIT` increases the memory available to WordPress to **256 MB**.
- `WP_CRON_LOCK_TIMEOUT` sets how long a cron lock remains (in seconds) before timing out.

Save the file, then retry the demo import process.

## 3. Retry Import After Changes

Sometimes a 504 error occurs because the first import is heavy or the connection briefly dropped.

- Retry the demo import after adding the configuration in `wp-config.php`.
- Ensure your internet connection is stable during the import.

If errors persist, proceed with manual import.

## 4. Import Demo Data Manually

If automatic import still fails (especially due to timeouts and memory limits), you can import manually.

1. Extract the **packed download** of the Idtheme you’re using.
2. Go to the **`demo-data`** folder inside the extracted package.
3. Inside, you typically find:
   - Files with the **`.xml`** extension.
   - Files with the **`.dat`** extension.
   - Files with the **`.json`** extension (for widgets, to be renamed later).

### a. Import .xml (Content)

1. Go to **Tools → Import** in the WordPress dashboard.
2. Choose **WordPress** (if not installed, install the WordPress Importer).
3. Upload the **`.xml`** file from `demo-data`.
4. Follow the import wizard to completion.

> Tip: if the server often runs out of memory, during content import you can try not checking **Download and import file attachments** to avoid importing all images.

### b. Import .dat (Customizer)

1. Install and activate the **Customizer Export/Import** plugin.
2. Go to **Appearance → Customize**.
3. Find the **Export/Import** menu (or similar).
4. Import the **`.dat`** file from `demo-data`.

### c. Import Widgets (.json → .wie)

1. In the `demo-data` folder, there is usually a **`.json`** file containing widget configuration.
2. Rename the file to the **`.wie`** extension, for example:  
   - From: `widgets.json`  
   - To: `widgets.wie`
3. Install and activate the **Widget Importer & Exporter** plugin.
4. Open the plugin menu in the dashboard.
5. Import the renamed **`.wie`** file.

## 5. Important Notes During Import

- If importing the **`.xml`** file fails, common causes are:
  - Too many images being imported at once.
  - The server runs out of memory when importing attachments.
- Solutions:
  - Try importing without attachments.
  - Or import content first; upload images manually later if needed.

## 6. If Problems Persist

If all the steps above have been done but the 504 error still occurs:

- Contact **hosting support** and explain the error happens during WordPress demo data import.
- Include:
  - Time of occurrence.
  - Your hosting package type.
  - Estimated size of the demo being imported.
- If you’re using an Idtheme product:
  - Submit a ticket or contact the Idtheme team.
  - Provide temporary login information (if requested) so the team can check directly.