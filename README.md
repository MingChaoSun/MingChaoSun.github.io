# mingchaosun.com

技術風 / terminal-aesthetic personal site for **Mingchao Sun** (3D & World Model Engineer).

Built with [Astro](https://astro.build) → static HTML/CSS/JS → deployed on **GitHub Pages** at
`mingchaosun.com` (the other four domains 301-redirect here).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Edit content

Everything user-facing lives in **`src/data/site.ts`** — profile, socials, focus areas,
publications and projects. Change values there; no need to touch the components.

Design tokens (colors, fonts, spacing) live at the top of `src/styles/global.css`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
to GitHub Pages. Requires the repo **Settings → Pages → Source = GitHub Actions**.

### Custom domain (one-time)

1. Aliyun 云解析 DNS — add records for `mingchaosun.com`:
   - `@` A → `185.199.108.153` / `.109` / `.110` / `.111`
   - `www` CNAME → `<github-user>.github.io`
2. Repo **Settings → Pages → Custom domain** = `mingchaosun.com`, tick **Enforce HTTPS**.
3. The other four domains → 301 redirect to `mingchaosun.com` (Cloudflare or registrar forwarding).

## Structure

```
src/
  data/site.ts          # ← all content lives here
  styles/global.css     # design tokens + base styles
  layouts/Layout.astro  # <head>, fonts, SEO meta
  components/           # TerminalHero, Section, Publications, Projects, Contact, Footer
  pages/index.astro     # page assembly
public/
  CNAME                 # mingchaosun.com (for GitHub Pages)
  favicon.svg
```
