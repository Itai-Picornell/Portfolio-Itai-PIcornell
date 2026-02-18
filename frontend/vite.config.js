import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Configuración principal de Vite para el proyecto
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
  build: {
    // Directorio de salida del build de producción
    outDir: 'dist',
    // Genera sourcemaps solo en desarrollo
    sourcemap: false,
    // Umbral de advertencia para chunks grandes (en KB)
    chunkSizeWarningLimit: 1000,
  },
})
