import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'

/**
 * Ejecuta en `vite preview` la misma CloudFront Function que producción
 * (infra/cloudfront/viewer-request.js): redirects 301 y reescrituras de
 * /en → /en/index.html. Así las auditorías SEO locales ven lo mismo que Googlebot.
 */
function cloudfrontFunctionPreview() {
    return {
        name: 'cloudfront-function-preview',
        configurePreviewServer(server) {
            const source = readFileSync(
                fileURLToPath(new URL('../infra/cloudfront/viewer-request.js', import.meta.url)),
                'utf8',
            )
            const handler = new Function(`${source}; return handler`)()

            server.middlewares.use((req, res, next) => {
                const [uri, query] = req.url.split('?')
                const result = handler({ request: { uri } })
                if (result.statusCode) {
                    res.statusCode = result.statusCode
                    res.setHeader('Location', result.headers.location.value)
                    return res.end()
                }
                req.url = result.uri + (query ? `?${query}` : '')
                next()
            })
        },
    }
}

/**
 * Configuración principal de Vite + vite-ssg.
 *
 * vite-ssg pre-renderiza explícitamente las rutas listadas en `includedRoutes`,
 * generando un HTML completo para cada idioma más una página de redirect en '/'.
 */
export default defineConfig({
    plugins: [
        // Plugin oficial de Vue para Vite (soporte de SFC .vue)
        vue(),
        cloudfrontFunctionPreview(),
    ],
    resolve: {
        alias: {
            // Alias '@' apunta a la carpeta src/ para imports más limpios
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    // Opciones de SSG: rutas a prerenderizar en build time
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
        // 'nested' genera dist/en/index.html y dist/es/index.html (en lugar de en.html).
        // Esto permite que las URLs '/en/' y '/es/' funcionen tal cual desde S3 + CloudFront.
        dirStyle: 'nested',
        // Cada ruta genera su propio index.html con HTML completo y meta tags.
        includedRoutes() {
            return ['/', '/en', '/es']
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        chunkSizeWarningLimit: 1000,
    },
})
