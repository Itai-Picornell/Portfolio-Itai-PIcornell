<template>
  <!-- Vista principal del portfolio: agrupa todas las secciones en orden -->
  <main>
    <HeroSection />
    <ExperienceEducation />
    <ProjectsGrid />
    <CertificationsSection />
  </main>
</template>

<script setup>
/**
 * HomeView.vue — Vista principal del portfolio.
 * Compone las secciones: Hero → Experiencia/Educación → Proyectos → Certificaciones.
 */
import HeroSection         from '@/components/HeroSection.vue'
import ExperienceEducation from '@/components/ExperienceEducation.vue'
import ProjectsGrid        from '@/components/ProjectsGrid.vue'
import CertificationsSection from '@/components/CertificationsSection.vue'
</script>
