<template>
  <!--
    Sección de proyectos: muestra un grid filtrable de tarjetas de proyecto.
  -->
  <section
    id="projects"
    class="py-16 sm:py-20 relative overflow-hidden"
    aria-label="Proyectos"
  >
    <!-- Decoración de fondo -->
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-gray-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <!-- Encabezado de sección -->
      <div class="mb-8">
        <div class="gradient-line" />
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">
          A selection of my recent work.
        </p>
      </div>



      <!-- Grid de tarjetas de proyectos -->
      <div class="grid sm:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>


    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
</script>
