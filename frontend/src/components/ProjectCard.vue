<template>
  <article
    class="card group flex flex-col overflow-hidden h-full"
    :aria-label="$t('projects_section.aria_card', { title: project.title[locale] })"
  >
    <!-- Imagen del diagrama -->
    <div
      class="relative overflow-hidden bg-white cursor-zoom-in"
      style="height: 420px;"
      @click="openLightbox"
    >
      <img
        :src="project.image"
        :alt="$t('projects_section.diagram_alt', { title: project.title[locale] })"
        :width="project.imageWidth"
        :height="project.imageHeight"
        class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <!-- Overlay hover -->
      <div
        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 flex items-center justify-center gap-4"
      >
        <button
          class="p-3 rounded-full glass text-white hover:text-gray-200 hover:scale-110 transition-all duration-200"
          :aria-label="$t('projects_section.aria_expand', { title: project.title[locale] })"
          @click.stop="openLightbox"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
            />
          </svg>
        </button>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full glass text-white hover:text-gray-200 hover:scale-110 transition-all duration-200"
          :aria-label="$t('projects_section.aria_github', { title: project.title[locale] })"
          @click.stop
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full glass text-white hover:text-gray-200 hover:scale-110 transition-all duration-200"
          :aria-label="$t('projects_section.aria_live', { title: project.title[locale] })"
          @click.stop
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <!-- Hint -->
      <div class="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-xs text-white/70 bg-black/40 rounded px-2 py-0.5">
          {{ $t('projects_section.click_expand') }}
        </span>
      </div>
    </div>

    <!-- Contenido -->
    <div class="flex flex-col flex-1 p-6">
      <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-500 transition-colors duration-200">
        {{ project.title[locale] }}
      </h3>

      <p class="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
        {{ project.description[locale] }}
      </p>

      <div class="flex flex-wrap gap-2 mt-auto">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-badge"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links móvil -->
      <div
        v-if="project.githubUrl || project.liveUrl"
        class="flex gap-3 mt-4 pt-4 border-t border-gray-100 md:hidden"
      >
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          {{ $t('projects_section.btn_code') }}
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          {{ $t('projects_section.btn_view') }}
        </a>
      </div>
    </div>
  </article>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
        @click="closeLightbox"
      >
        <button
          class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 p-2"
          :aria-label="$t('projects_section.lightbox_close')"
          @click="closeLightbox"
        >
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="max-w-7xl w-full max-h-full flex flex-col items-center gap-4" @click.stop>
          <p class="text-white/60 text-sm">
            {{ project.title[locale] }} — {{ $t('projects_section.lightbox_subtitle') }}
          </p>
          <img
            :src="project.image"
            :alt="$t('projects_section.diagram_alt', { title: project.title[locale] })"
            class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white p-4"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
    project: {
        type: Object,
        required: true,
    },
})

const { locale } = useI18n()
const lightboxOpen = ref(false)

function openLightbox() {
    lightboxOpen.value = true
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
}

function closeLightbox() {
    lightboxOpen.value = false
    if (typeof document !== 'undefined') document.body.style.overflow = ''
}

function onKeydown(e) {
    if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
    transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}
</style>
