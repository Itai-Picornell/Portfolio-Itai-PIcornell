<template>
  <!--
    Sección "Educación y Experiencia": muestra historial profesional y académico.
    Los datos se gestionan desde src/data/experience.js (campos bilingües).
  -->
  <section
    id="experience"
    class="py-16 sm:py-20 relative overflow-hidden"
    :aria-label="$t('experience_section.aria_section')"
  >
    <div class="absolute top-0 right-0 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <div class="mb-10">
        <div class="gradient-line" />
        <h2 class="section-title">{{ $t('experience_section.section_title') }}</h2>
      </div>

      <!-- ── Experiencia profesional ── -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">
          {{ $t('experience_section.professional_subtitle') }}
        </h3>

        <div class="space-y-6">
          <article
            v-for="job in workExperience"
            :key="job.id"
            class="card p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ job.title[locale] }}</h4>
                <p class="text-gray-500 font-medium mt-0.5">{{ job.company }}</p>
              </div>
              <span
                class="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                       bg-gray-100 text-gray-700 border border-gray-200 whitespace-nowrap"
              >
                {{ job.period[locale] }}
              </span>
            </div>

            <p class="text-gray-500 leading-relaxed mb-4">{{ job.description[locale] }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in job.technologies"
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </div>

      <!-- ── Educación ── -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-8">
          {{ $t('experience_section.education_subtitle') }}
        </h3>

        <div class="space-y-6">
          <article
            v-for="edu in education"
            :key="edu.id"
            class="card p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ edu.degree[locale] }}</h4>
                <p class="text-gray-500 font-medium mt-0.5">{{ edu.institution }}</p>
              </div>
              <span
                class="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                       bg-gray-100 text-gray-700 border border-gray-200 whitespace-nowrap"
              >
                {{ edu.period[locale] }}
              </span>
            </div>

            <p class="text-gray-500 leading-relaxed">{{ edu.description[locale] }}</p>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
/**
 * ExperienceEducation.vue — Sección de experiencia profesional y educación.
 * Los datos vienen de src/data/experience.js con campos bilingües { en, es }.
 * El campo activo se selecciona con `locale.value`.
 */
import { useI18n } from 'vue-i18n'
import { workExperience, education } from '@/data/experience.js'

const { locale } = useI18n()
</script>
