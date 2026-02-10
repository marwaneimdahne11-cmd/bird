# Infrastructure Blueprint: The BIRD Flight Plan

**Architectural Vision**: Global distribution with minimal latency. Every request served from the edge.

## 1. Deployment Strategy: Edge First
### Platform Recommendation: Vercel (Edge Functions)
**Why?**: Vercel's global CDN and Edge Functions align perfectly with the "Speed" requirement.
**Setup**:
1. Connect GitHub repository to Vercel.
2. Enable **Edge Middleware** for authentication/routing logic.
3. Use **ISR (Incremental Static Regeneration)** for dynamic content like blog posts.
4. Enable **Vercel Analytics** to monitor Core Web Vitals (Lighthouse).

Alternatively: **Netlify Edge** (using Deno-based functions) if prefer vendor agnostic.

## 2. Domain Strategy: The Signal
### TLD Recommendation
- **Primary**: `.dev` (e.g., `thebird.dev` or `bird.arch.dev`) - Signals "Developer First" and Google loves it (https required by default).
- **Secondary**: `.io` (e.g., `birdstudio.io`) - If emphasizing the "Creative Director" aspect.
- **Tertiary**: `.ai` - Only if integrating significant AI features.

**Recommendation**: `bird.dev` is the cleanest if available, or `bird.cc` for "Creative Code".

## 3. Cloudflare Integration: The Shield
Use Cloudflare as the DNS + Security layer in front of Vercel/Netlify.

### DNS Management
- Point NS records to Cloudflare.
- **CNAME Flattener**: Setup `CNAME` for root domain to point to Vercel (cname.vercel-dns.com).

### WAF (Web Application Firewall)
- **Rate Limiting**: Create a rule to limit rapid requests to `/api/*` (prevent DDoS).
- **Bot Fighting Mode**: Enable "Super Bot Fight Mode" to block automated scrapers.

### SSL / TLS
- **Full (Strict)**: Encrypt traffic between Cloudflare and Vercel.
- **HSTS**: Force browser to use HTTPS.
- **TLS 1.3**: Enforce minimum TLS version for security + speed (faster handshake).

### Performance (Speed)
- **Rocket Loader™**: Enhance JS loading (test with Next.js first, sometimes conflicts).
- **Auto Minify**: HTML, CSS, JS.
- **Brotli**: Compress text assets better than Gzip.
- **Early Hints**: Push crucial assets to browser before parsing HTML.
