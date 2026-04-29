/**
 * @file main.js
 * @description Punto de entrada principal de la aplicación Vue.
 * Usa ViteSSG para prerenderizar las rutas en tiempo de build (SSG).
 * En producción, el HTML se genera estáticamente con todo el contenido
 * visible para crawlers y buscadores.
 */
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

// Importa los estilos globales (Tailwind CSS + variables personalizadas)
import './assets/main.css'

/**
 * ViteSSG reemplaza a createApp + createRouter.
 * - Crea la app Vue y el router internamente
 * - En build: prerenderiza cada ruta a HTML estático
 * - En dev: funciona como una SPA normal
 */
export const createApp = ViteSSG(
    // Componente raíz
    App,
    // Opciones de vue-router
    { routes, scrollBehavior },
    // Callback de setup: registra plugins y hooks
    ({ router, isClient }) => {
        // Actualiza el título de la pestaña del navegador en cada navegación
        // Solo en el cliente (en SSG no existe document.title)
        if (isClient) {
            router.afterEach((to) => {
                document.title = to.meta.title || 'Itai Picornell | Portfolio'
            })
        }
    },
)
