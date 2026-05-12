/**
 * Configuración de rutas de Vue Router.
 *
 * Arquitectura i18n:
 *   - '/'    → RedirectView (fallback si CloudFront Function no actúa).
 *               En producción, CloudFront Functions devuelve 301 a /en/ en el edge.
 *   - '/en'  → HomeView con locale='en' (URL canónica)
 *   - '/es'  → HomeView con locale='es'
 *
 * vite-ssg pre-renderiza las tres rutas como HTML estático en build time,
 * lo que da a cada idioma su propio HTML completo para crawlers y buscadores.
 */

// Importación lazy (mejora el tiempo de carga inicial)
const HomeView = () => import('@/views/HomeView.vue')
const RedirectView = () => import('@/views/RedirectView.vue')

/**
 * Array de rutas. vite-ssg lo consume directamente.
 */
export const routes = [
    {
        path: '/',
        name: 'redirect',
        component: RedirectView,
        meta: {
            locale: 'en',
        },
    },
    {
        path: '/en',
        name: 'home-en',
        component: HomeView,
        meta: {
            locale: 'en',
        },
    },
    {
        path: '/es',
        name: 'home-es',
        component: HomeView,
        meta: {
            locale: 'es',
        },
    },
    // Cualquier URL no encontrada redirige a la versión inglesa por defecto
    {
        path: '/:pathMatch(.*)*',
        redirect: '/en',
    },
]

/**
 * Scroll behavior compartido por todas las rutas.
 */
export const scrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
}
