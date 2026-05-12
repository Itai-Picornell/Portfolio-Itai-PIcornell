<template>
  <!--
    Selector de idioma del portfolio.
    Cada botón es un <RouterLink> a /en o /es. Sin cookies, sin JS pesado:
    el idioma está codificado en la URL.
  -->
  <div
    class="inline-flex items-center rounded-lg border border-gray-200 overflow-hidden bg-white/50"
    role="group"
    :aria-label="$t('language_switcher.aria')"
  >
    <RouterLink
      to="/en"
      :class="[
        'px-2.5 py-1 text-xs font-semibold transition-colors duration-200',
        currentLocale === 'en'
          ? 'bg-gray-900 text-white'
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100',
      ]"
      :aria-current="currentLocale === 'en' ? 'true' : undefined"
    >
      {{ $t('language_switcher.en') }}
    </RouterLink>
    <RouterLink
      to="/es"
      :class="[
        'px-2.5 py-1 text-xs font-semibold transition-colors duration-200 border-l border-gray-200',
        currentLocale === 'es'
          ? 'bg-gray-900 text-white'
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100',
      ]"
      :aria-current="currentLocale === 'es' ? 'true' : undefined"
    >
      {{ $t('language_switcher.es') }}
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

/**
 * LanguageSwitcher.vue — Botón EN/ES.
 * El idioma activo viene de la meta de la ruta actual.
 */
const route = useRoute()
const currentLocale = computed(() => route.meta?.locale || 'en')
</script>
