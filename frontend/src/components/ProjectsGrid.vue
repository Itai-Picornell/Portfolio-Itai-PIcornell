<template>
  <!--
    Sección de proyectos: muestra un grid filtrable de tarjetas de proyecto.
  -->
  <section
    id="projects"
    class="py-24 sm:py-32 relative overflow-hidden"
    aria-label="Proyectos"
  >
    <!-- Decoración de fondo -->
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <!-- Encabezado de sección -->
      <div class="mb-12">
        <div class="gradient-line" />
        <h2 class="section-title">Proyectos</h2>
        <p class="section-subtitle">
          Una selección de los proyectos en los que he trabajado recientemente.
        </p>
      </div>

      <!-- Filtros por tecnología -->
      <div
        class="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrar proyectos por tecnología"
      >
        <button
          v-for="tag in filterTags"
          :key="tag"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeFilter === tag
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
              : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 border border-dark-500',
          ]"
          @click="setFilter(tag)"
          :aria-pressed="activeFilter === tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Grid de tarjetas de proyectos -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <transition-group name="project-list" tag="div" class="contents">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </transition-group>
      </div>

      <!-- Mensaje cuando no hay proyectos para el filtro activo -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16 text-gray-500"
      >
        <p class="text-lg">No hay proyectos con esta tecnología aún.</p>
      </div>

      <!-- Sección de contacto / CTA al final -->
      <div
        id="contact"
        class="mt-20 text-center card p-10 sm:p-16 relative overflow-hidden"
      >
        <!-- Fondo decorativo del CTA -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-500/10 pointer-events-none" aria-hidden="true" />

        <div class="relative z-10">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p class="text-gray-400 mb-8 max-w-md mx-auto">
            Estoy disponible para proyectos freelance y oportunidades de trabajo.
            ¡Hablemos!
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:itai@example.com"
              class="btn-primary"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Enviar un email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
import { filterTags } from '@/data/skills.js'

/**
 * Filtro activo actualmente seleccionado.
 * 'Todos' muestra todos los proyectos sin filtrar.
 */
const activeFilter = ref('Todos')

/**
 * Cambia el filtro activo al tag seleccionado.
 * @param {string} tag - El tag de tecnología seleccionado
 */
const setFilter = (tag) => {
  activeFilter.value = tag
}

/**
 * Proyectos filtrados según el tag activo.
 * Si el filtro es 'Todos', devuelve todos los proyectos.
 * Si no, filtra los proyectos que incluyen la tecnología seleccionada.
 */
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projects
  }
  return projects.filter(project =>
    project.technologies.some(tech =>
      tech.toLowerCase().includes(activeFilter.value.toLowerCase())
    )
  )
})
</script>

<style scoped>
/* Animación de entrada/salida para las tarjetas al filtrar */
.project-list-enter-active,
.project-list-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
