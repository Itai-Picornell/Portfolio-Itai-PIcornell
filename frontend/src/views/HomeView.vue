<template>
  <main>
    <HeroSection />
    <ExperienceEducation />
    <ProjectsGrid />
    <CertificationsSection />
  </main>
</template>

<script setup>
/**
 * HomeView.vue — Vista principal compartida por /en y /es.
 * Establece el locale de i18n basado en la ruta y construye el <head> localizado.
 *
 * Notas SSG:
 *   - Los strings del <head> se resuelven SÍNCRONAMENTE en setup() y se pasan
 *     a useHead como valores planos. Si se pasaran como `computed`, unhead los
 *     evaluaría tarde y todas las rutas heredarían el locale del último render.
 */
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'

import HeroSection           from '@/components/HeroSection.vue'
import ExperienceEducation   from '@/components/ExperienceEducation.vue'
import ProjectsGrid          from '@/components/ProjectsGrid.vue'
import CertificationsSection from '@/components/CertificationsSection.vue'

const route = useRoute()
const { locale: i18nLocale } = useI18n()

// Locale derivado de la ruta — síncrono, evaluado al instanciar el componente
const routeLocale = route.meta?.locale || 'en'
i18nLocale.value = routeLocale

// Lee directamente del catálogo de mensajes para evitar reactividad en useHead
const messages = useI18n().getLocaleMessage(routeLocale)
const title = messages.head.title
const description = messages.head.description
const imageAlt = messages.head.image_alt

const SITE_URL = 'https://portfolio.itaipicornell.com'
const IMAGE_URL = `${SITE_URL}/Perfil.jpg`
const SITE_NAME = 'Itai Picornell'
const canonical = `${SITE_URL}/${routeLocale}/`
const htmlLang = routeLocale === 'es' ? 'es' : 'en'
const ogLocale = routeLocale === 'es' ? 'es_ES' : 'en_US'

useHead({
    htmlAttrs: { lang: htmlLang },
    title,
    meta: [
        { name: 'description', content: description },

        // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: IMAGE_URL },
        { property: 'og:image:width', content: '576' },
        { property: 'og:image:height', content: '576' },
        { property: 'og:image:alt', content: imageAlt },
        { property: 'og:locale', content: ogLocale },

        // Twitter / X Card. 'summary' encaja con imagen cuadrada (576x576).
        // Cambiar a 'summary_large_image' si se sustituye Perfil.jpg por
        // un banner 1200x630 con marca personal.
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: IMAGE_URL },
        { name: 'twitter:image:alt', content: imageAlt },
    ],
    link: [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en/` },
        { rel: 'alternate', hreflang: 'es', href: `${SITE_URL}/es/` },
        { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/en/` },
    ],
})
</script>
