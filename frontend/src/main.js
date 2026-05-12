/**
 * @file main.js
 * @description Punto de entrada principal de la aplicación Vue.
 * Usa ViteSSG para prerenderizar las rutas en tiempo de build (SSG).
 *
 * Plugins:
 *   - vue-i18n   → traducciones EN/ES con el locale sincronizado a la ruta
 *
 * Notas:
 *   - @unhead/vue se inicializa internamente por vite-ssg. Solo se importa
 *     `useHead` en los componentes que lo necesiten.
 */
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { i18n, SUPPORTED_LOCALES } from './i18n'

// Estilos globales (Tailwind + variables personalizadas)
import './assets/main.css'

/**
 * ViteSSG reemplaza a createApp + createRouter.
 *  - Build: prerenderiza cada ruta (`/`, `/en`, `/es`) a HTML estático.
 *  - Dev: funciona como una SPA normal.
 */
export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    ({ app, router }) => {
        // Registra vue-i18n
        app.use(i18n)

        // Sincroniza el locale de i18n con la meta de cada ruta
        router.beforeEach((to) => {
            const locale = to.meta?.locale
            if (locale && SUPPORTED_LOCALES.includes(locale)) {
                i18n.global.locale.value = locale
            }
        })
    },
)
