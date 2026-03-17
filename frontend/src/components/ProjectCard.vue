<template>
  <!--
    ProjectCard.vue — Tarjeta individual de proyecto.
    Muestra imagen, título, descripción, tecnologías y links de acción.
  -->
  <article
    class="card group flex flex-col overflow-hidden h-full"
    :aria-label="`Proyecto: ${project.title}`"
  >
    <!-- Diagrama del proyecto con overlay en hover -->
    <div class="relative overflow-hidden bg-white p-4 flex items-center justify-center" style="height: 320px;">
      <img
        :src="project.image"
        :alt="`Diagrama de arquitectura de ${project.title}`"
        :width="project.imageWidth"
        :height="project.imageHeight"
        class="max-w-full max-h-full object-contain transition-transform duration-500
               group-hover:scale-105"
        loading="lazy"
      />
      <!-- Overlay oscuro con links de acción -->
      <div
        class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 flex items-center justify-center gap-4"
      >
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full glass text-white hover:text-gray-200
                 hover:scale-110 transition-all duration-200"
          :aria-label="`Ver código de ${project.title} en GitHub`"
        >
          <!-- Icono de GitHub -->
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full glass text-white hover:text-gray-200
                 hover:scale-110 transition-all duration-200"
          :aria-label="`Ver demo en vivo de ${project.title}`"
        >
          <!-- Icono de enlace externo -->
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Contenido de la tarjeta -->
    <div class="flex flex-col flex-1 p-6">
      <!-- Título del proyecto -->
      <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-500
                 transition-colors duration-200">
        {{ project.title }}
      </h3>

      <!-- Descripción del proyecto -->
      <p class="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
        {{ project.description }}
      </p>

      <!-- Tags de tecnologías usadas -->
      <div class="flex flex-wrap gap-2 mt-auto">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-badge"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links de acción para móvil (el overlay con hover no funciona en táctil) -->
      <div
        v-if="project.githubUrl || project.liveUrl"
        class="flex gap-3 mt-4 pt-4 border-t border-gray-100 md:hidden"
      >
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500
                 hover:text-gray-900 transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500
                 hover:text-gray-900 transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          View project
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
/**
 * ProjectCard.vue — Tarjeta de proyecto individual.
 * Recibe un objeto 'project' como prop y renderiza toda su información.
 *
 * @prop {Object} project - Objeto con los datos del proyecto
 * @prop {number} project.id - Identificador único
 * @prop {string} project.title - Título del proyecto
 * @prop {string} project.description - Descripción del proyecto
 * @prop {string} project.image - URL de la imagen de portada
 * @prop {string[]} project.technologies - Lista de tecnologías usadas
 * @prop {string|null} project.githubUrl - URL del repositorio en GitHub
 * @prop {string|null} project.liveUrl - URL del demo en vivo
 * @prop {boolean} project.featured - Si el proyecto es destacado
 */
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
