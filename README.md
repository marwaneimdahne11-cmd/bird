# BIRD - Personal Brand Ecosystem

> **Elevation • Precision • Velocity**

This is the high-performance personal brand website for "Bird", built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion. Designed for speed (Edge) and aesthetics (Neo-Minimalism).

## 🚀 Quick Start

### Prerequisites
- **Node.js 18.17+** is required.
  - Download from: [nodejs.org](https://nodejs.org) if not installed.

### Installation

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Localhost**:
    Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

-   `src/app/layout.tsx`: Root layout with font configuration (Outfit, JetBrains Mono) and global providers.
-   `src/app/page.tsx`: Main landing page assembling the core sections.
-   `src/components/Navigation.tsx`: Responsive navigation with glassmorphism and mobile menu.
-   `src/components/Hero.tsx`: "The Takeoff" section with parallax and antigravity animations.
-   `src/components/Gallery.tsx`: Portfolio grid with hover interactions.
-   `src/components/Skills.tsx`: "The Wingspan" capabilities section.
-   `src/components/Contact.tsx`: Secure contact form UI.
-   `public/images/`: Assets for project thumbnails and hero background.

## 🛠 Tech Stack

-   **Framework**: Next.js 15+ (App Router)
-   **Styling**: Tailwind CSS (with custom 'Deep Obsidian' theme)
-   **Animations**: Framer Motion & CSS Keyframes
-   **Icons**: Lucide React
-   **Fonts**: Google Fonts (Outfit, JetBrains Mono) via `next/font`

## 📦 Deployment

### Vercel (Recommended)
1.  Push this code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

See `INFRASTRUCTURE.md` for detailed deployment strategy.
See `SECURITY.md` for security best practices.
See `CONTENT_STRATEGY.md` for SEO optimization.

## 🎨 Theme Customization

To modify the color palette, edit `tailwind.config.ts`:
-   `colors.deep-obsidian`: Main background
-   `colors.electric-blue`: Primary accent
-   `colors.electric-purple`: Secondary accent

---

**Designed by Standard Deviation Architecture**
