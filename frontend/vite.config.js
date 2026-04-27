import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import { fileURLToPath, URL } from 'node:url'

// Configuración principal de Vite para el proyecto
export default defineConfig({
  plugins: [
    // Plugin oficial de Vue para Vite (soporte de SFC .vue)
    vue(),
    // Inyecta el CSS en el main JS para evitar el bloqueo del renderizado (Lighthouse/PageSpeed)
    cssInjectedByJsPlugin(),
    // Pre-renderiza las rutas indicadas para mejorar SEO y TTI
    prerender({
      routes: ['/'],  // añade más rutas si las tienes: ['/sobre-mi', '/proyectos']
      renderer: new PuppeteerRenderer({
        renderAfterTime: 1500, // espera a que Vue monte el DOM
      }),
    }),
  ],
  resolve: {
    alias: {
      // Alias '@' apunta a la carpeta src/ para imports más limpios
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Directorio de salida del build de producción
    outDir: 'dist',
    // Genera sourcemaps solo en desarrollo
    sourcemap: false,
    // Umbral de advertencia para chunks grandes (en KB)
    chunkSizeWarningLimit: 1000,
    // Configuración avanzada de Rollup para mejorar cache y evitar bloqueos LCP
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router'],
        },
      },
    },
  },
})
