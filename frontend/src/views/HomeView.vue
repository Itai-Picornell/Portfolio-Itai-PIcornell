<template>
  <!-- Vista principal del portfolio: agrupa todas las secciones -->
  <main>
    <HeroSection />
    <AboutMe />
    <ProjectsGrid />
  </main>
</template>

<script setup>
/**
 * HomeView.vue — Vista principal del portfolio.
 * Compone las secciones Hero, AboutMe y ProjectsGrid en orden.
 */
import HeroSection   from '@/components/HeroSection.vue'
import AboutMe       from '@/components/AboutMe.vue'
import ProjectsGrid  from '@/components/ProjectsGrid.vue'
</script>
