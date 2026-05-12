<template>
  <!--
    Vista de redirect mínima. Solo se sirve si CloudFront no procesa el redirect
    a nivel de edge. Hace un redirect en el cliente a /en como fallback.
  -->
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif; color: #6b7280;">
    <p>Redirecting…</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

/**
 * RedirectView.vue — Página servida en '/' como red de seguridad.
 * En producción, CloudFront Functions devuelve 301 a /en/ antes de que esta
 * vista se sirva. Este componente solo se ejecuta si ese redirect falla.
 */
useHead({
    title: 'Itai Picornell — Cloud & Cybersecurity Portfolio',
    meta: [
        { name: 'robots', content: 'noindex, follow' },
        { 'http-equiv': 'refresh', content: '0; url=/en/' },
    ],
    link: [
        { rel: 'canonical', href: 'https://portfolio.itaipicornell.com/en/' },
    ],
})

onMounted(() => {
    // Cliente: redirige inmediatamente
    if (typeof window !== 'undefined') {
        window.location.replace('/en/')
    }
})
</script>
