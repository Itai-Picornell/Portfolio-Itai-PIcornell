import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

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
