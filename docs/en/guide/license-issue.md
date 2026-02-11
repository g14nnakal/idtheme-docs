---
title: License Activation & Issue Troubleshooting
description: Comprehensive guide for handling license activation problems and debugging the WordPress license REST API (cURL).
outline: deep
---

# License Activation & Issue Troubleshooting

This guide explains how to address common license activation issues and provides solutions based on frequently encountered scenarios.

This documentation covers:
- License request flow
- cURL examples
- Common problems
- Troubleshooting solutions

## Typical Symptoms of License Activation Failure

Common symptoms during license activation:

- The **Activate** button does nothing / the page refreshes without a message.
- The license remains inactive even though the REST API responds with **success**.
- The remote server cannot be reached.
- The license is not written to the database or upload file.  

## 1. License Activation Limit / Domain Change

This issue typically occurs when:
- The license key is already active on another domain.
- The old site was deleted but the license was not deactivated.
- The domain was moved without deactivation.

Solution:

**Try Deactivate on the old site**

If you still have access to the old site’s WP Admin, open the license page and click **Deactivate License**.

## 2. ISP / Network Blockage

Some ISP networks block access to the remote license server.
Most common symptom:  
> cURL timeout / connection failed.

Solution:

1. Test cURL connectivity directly from the server
   ```bash
   curl -I https://lcs.bostheme.com/
   ```

2. If it fails:

- Ensure ports 80/443 are open.
- Use a temporary proxy for activation:
    - Visit https://free-proxy-list.net/id/
    - Get the first available proxy details
    - Add the following code to the active theme’s functions.php:
    ```php
    add_action('http_api_curl', function( $handle ){
        curl_setopt($handle, CURLOPT_PROXY, "PROXY_IP");
        curl_setopt($handle, CURLOPT_PROXYPORT, PROXY_PORT);
    }, 10);
    ```
    - After activation succeeds, remove the proxy code from functions.php.

## 3. Caching Layer Interference

Caching layers like Redis / Memcached may hold license data that is too long, causing it not to be stored in the DB.

Solution: Temporarily disable caching during activation, then re-enable it afterward.

## 4. Database Encoding Issue

If the option_value column encoding is incompatible, license data may not be saved.

Solution:

- Ensure the option_value column uses UTF-8 or UTF8MB4.
- Test by inserting non-ASCII characters. If it fails, change the encoding.

## 5. Security Layer Blockage

ModSecurity or other WAF rules may block cURL requests due to certain character combinations.

Solution:
- Temporarily disable ModSecurity/WAF for your domain.
- Re-enable the security rules after activation succeeds.

## Debugging Tips (Best Practices)

To assist support or license debugging, include:
- Full JSON response status
- The cURL request used
- Server error output (if any)
- Screenshot of the activation page
- Hosting environment (PHP version, open_basedir, allow_url_fopen, etc.)
- Provide access to your dashboard; I will check whether the license has been activated.

## Summary

License activation issues typically occur due to:
- Remote API unreachable
- Incompatible server settings
- License used elsewhere
- Server caching/security interfering with the request

Each issue has a clear workaround as outlined above.

This documentation provides quick steps for effective identification and resolution—based on real-world license activation cases.