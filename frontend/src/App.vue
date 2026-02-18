<template>
  <!-- Componente raíz de la aplicación -->
  <div id="app-wrapper" class="min-h-screen bg-dark-900">
    <!-- Navbar fija en la parte superior -->
    <Navbar />

    <!-- Vista principal renderizada por el router -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

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
/* Transición suave entre páginas del router */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
