# Security Protocol: BIRD Ecosystem

## 1. Content Security Policy (CSP) Headers
Implement strict CSP headers in `next.config.js` or middleware to prevent XSS attacks.

```javascript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: images.unsplash.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim());

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
}
```

## 2. Rate Limiting (Cloudflare / Edge)
- **Edge Layer**: Configure Cloudflare WAF specific rules to rate limit `/api/contact` endpoints (e.g., 5 requests per minute per IP).
- **Application Layer**: Use `@upstash/ratelimit` or similar in API routes if needed.

## 3. Environment Variable Protection
- **Storage**: Store sensitive keys (API_KEY, DATABASE_URL) in `.env.local` (local) and Vercel/Netlify Environment dashboard (production).
- **Prefix**: Only expose variables with `NEXT_PUBLIC_` if absolutely necessary for client-side logic.
- **Audit**: Regularly rotate keys using a secrets manager.

## 4. Anti-Bot Protection
- Implement **Cloudflare Turnstile** or **Google Recaptcha v3** on the Contact form to prevent spam submissions without user friction.

## 5. Headers & Encryption
- Ensure `Strict-Transport-Security` (HSTS) is enabled (default on Vercel).
- Use `X-Content-Type-Options: nosniff`.
- Use `X-Frame-Options: DENY`.
