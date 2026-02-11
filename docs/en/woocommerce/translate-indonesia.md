---
title: How to Translate/Change WooCommerce Language to Indonesian
outline: deep
---

# How to Translate/Change WooCommerce Language to Indonesian

## 1. Change WordPress Site Language
1. Go to **Settings → General**.
2. Under **Site Language**, select **Indonesia**.
3. Click **Save Changes**.

WordPress will download the language pack if available.

## 2. Ensure Language Packs Are Downloaded
1. Go to **Dashboard → Updates**.
2. Scroll to the **Translations** section.
3. Click **Update Translations** if available.

## 3. Complete Translations via Loco Translate
If some strings remain untranslated:
1. Install the **Loco Translate** plugin.
2. Go to **Loco Translate → Plugins → WooCommerce**.
3. Create/view the **Indonesian (id_ID)** language.
4. Find strings you want to change and add translations.
5. Save changes.

## 4. Manual Alternative (PO/MO)
- You can upload Indonesian **.po/.mo** files to:
  - `wp-content/languages/plugins/woocommerce-id_ID.po` and `woocommerce-id_ID.mo`
- Use **cPanel/File Manager** or **FTP** to upload files.
- Ensure file versions match your WooCommerce version.

## 5. Verify
- Clear site cache (if using a cache plugin).
- Open the **Shop** and **Checkout** pages to confirm strings display in Indonesian.