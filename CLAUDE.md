# Portfolio Itai Picornell

Vue 3 + vite-ssg, desplegado en S3 + CloudFront (ver `.github/workflows/deploy.yml`).
El código de la app vive en `frontend/`.

## SEO / `/seo-check`

- Producción: `https://portfolio.itaipicornell.com` — usar como `--compare`.
- Auditar SIEMPRE el build SSG, nunca `npm run dev` (dev es una SPA con el HTML
  vacío y daría falsos `THIN_INITIAL_HTML`):
  `cd frontend && npm run seo:serve` → `http://localhost:4173`.
- Rutas indexables: `/en` y `/es` (SIN barra final: canonical, hreflang,
  sitemap, JSON-LD y enlaces internos deben coincidir). `/` no es indexable
  (`RedirectView`, noindex).
- `/`, `/en/` y `/es/` son 301 generados por la CloudFront Function
  `portfolio-root-redirect` (`infra/cloudfront/viewer-request.js`, se publica a
  mano, no con el deploy). `vite preview` ejecuta ese mismo archivo
  (plugin en `vite.config.js`), así que local y producción se comportan igual.
- Única diferencia esperada: en producción las URLs inexistentes devuelven 404
  (error response de CloudFront → `/index.html`, con noindex y redirect a `/en`);
  en `vite preview` devuelven 200.
- Ejemplo: `/seo-check http://localhost:4173 https://portfolio.itaipicornell.com /en /es /`
