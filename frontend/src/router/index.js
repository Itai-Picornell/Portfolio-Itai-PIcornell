/**
 * Configuración del router de Vue.
 * Usa el modo 'history' para URLs limpias (sin hash).
 * IMPORTANTE: CloudFront debe redirigir 403/404 a /index.html para que funcione.
 */
import { createRouter, createWebHistory } from 'vue-router'

// Importación lazy de la vista principal (mejora el tiempo de carga inicial)
const HomeView = () => import('@/views/HomeView.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Itai Picornell — Portfolio',
        },
    },
    // Ruta comodín: redirige cualquier URL no encontrada al home
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

const router = createRouter({
    // createWebHistory usa la History API del navegador (URLs sin #)
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // Comportamiento del scroll al navegar entre rutas
    scrollBehavior(to, _from, savedPosition) {
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
    },
})

// Actualiza el título de la pestaña del navegador en cada navegación
router.afterEach((to) => {
    document.title = to.meta.title || 'Itai Picornell — Portfolio'
})

export default router
