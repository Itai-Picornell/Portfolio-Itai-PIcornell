/**
 * Configuración de rutas de Vue Router.
 * vite-ssg crea el router internamente, así que solo exportamos
 * el array de rutas y el scrollBehavior.
 *
 * IMPORTANTE: CloudFront debe redirigir 403/404 a /index.html para SPA fallback.
 */

// Importación lazy de la vista principal (mejora el tiempo de carga inicial)
const HomeView = () => import('@/views/HomeView.vue')

/**
 * Array de rutas de la aplicación.
 * Exportado como named export para que ViteSSG lo consuma.
 */
export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Itai Picornell | Portfolio',
        },
    },
    // Ruta comodín: redirige cualquier URL no encontrada al home
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

/**
 * Configuración del scroll behavior.
 * Exportado separadamente para que ViteSSG lo use al crear el router.
 */
export const scrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) {
        // Restaura la posición guardada al usar el botón "atrás"
        return savedPosition
    }
    if (to.hash) {
        // Navega suavemente a la sección con el id del hash
        return { el: to.hash, behavior: 'smooth' }
    }
    // Por defecto, sube al inicio de la página
    return { top: 0 }
}
