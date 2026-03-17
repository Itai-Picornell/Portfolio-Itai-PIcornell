<template>
  <!-- Componente raíz de la aplicación -->
  <div id="app-wrapper" class="min-h-screen bg-dark-900">
    <!-- Navbar fija en la parte superior -->
    <Navbar />

    <!-- Vista principal renderizada por el router -->
    <div class="min-h-[85vh] flex flex-col justify-center">
      <router-view />
    </div>

    <!-- Footer global -->
    <Footer />
  </div>
</template>

<script setup>
/**
 * App.vue — Componente raíz de la aplicación.
 * Contiene el layout principal: Navbar + RouterView + Footer.
 */
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Estilos globales (si los hubiera) */
</style>
