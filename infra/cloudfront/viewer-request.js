/**
 * CloudFront Function (viewer-request) — portfolio.itaipicornell.com
 *
 * Función: portfolio-root-redirect (viewer-request de la distribución
 * E1JHS6LAXCXDAM). NO se despliega con GitHub Actions: se publica a mano
 * (consola de CloudFront o `aws cloudfront update-function` + `publish-function`).
 * Runtime: cloudfront-js-2.0.
 *
 * Objetivo SEO: una única URL por idioma, la misma que declaran el canonical,
 * los hreflang y el sitemap (sin barra final):
 *   /                → 301 /en
 *   /index.html      → 301 /en
 *   /en/, /es/       → 301 /en, /es
 *   /en/index.html   → 301 /en   (ídem /es/index.html)
 *   /en, /es         → reescritura interna a /<locale>/index.html (S3 + OAC
 *                      no resuelve índices de directorio)
 */
var LOCALES = { en: true, es: true };

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    if (uri === '/' || uri === '/index.html') {
        return redirect('/en');
    }

    // /en/ y /en/index.html → /en (ídem es)
    var match = uri.match(/^\/([a-z]{2})\/(index\.html)?$/);
    if (match && LOCALES[match[1]]) {
        return redirect('/' + match[1]);
    }

    // Directorios → su index.html; rutas sin extensión → <ruta>/index.html
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
    } else if (uri.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
    }

    return request;
}

function redirect(location) {
    return {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
            location: { value: location },
            'cache-control': { value: 'public, max-age=3600' },
        },
    };
}
