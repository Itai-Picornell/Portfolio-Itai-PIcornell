<template>
  <!--
    Sección "Educación y Experiencia": muestra historial profesional y académico.
    Los datos se gestionan desde src/data/experience.js para facilitar su actualización.
  -->
  <section
    id="experience"
    class="py-16 sm:py-20 relative overflow-hidden"
    aria-label="Educación y Experiencia"
  >
    <!-- Decoración de fondo -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <!-- Encabezado de sección -->
      <div class="mb-10">
        <div class="gradient-line" />
        <h2 class="section-title">Education &amp; Experience</h2>
      </div>

      <!-- ── Experiencia Profesional ── -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">
          Professional Experience
        </h3>

        <div class="space-y-6">
          <article
            v-for="job in workExperience"
            :key="job.id"
            class="card p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <!-- Cabecera: título, empresa y periodo -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ job.title }}</h4>
                <p class="text-gray-500 font-medium mt-0.5">{{ job.company }}</p>
              </div>
              <!-- Badge de periodo -->
              <span
                class="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                       bg-gray-100 text-gray-700 border border-gray-200 whitespace-nowrap"
              >
                {{ job.period }}
              </span>
            </div>

            <!-- Descripción del puesto -->
            <p class="text-gray-500 leading-relaxed mb-4">{{ job.description }}</p>

            <!-- Stack de tecnologías -->
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
          Education
        </h3>

        <div class="space-y-6">
          <article
            v-for="edu in education"
            :key="edu.id"
            class="card p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <!-- Cabecera: título, institución y periodo -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ edu.degree }}</h4>
                <p class="text-gray-500 font-medium mt-0.5">{{ edu.institution }}</p>
              </div>
              <!-- Badge de periodo -->
              <span
                class="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                       bg-gray-100 text-gray-700 border border-gray-200 whitespace-nowrap"
              >
                {{ edu.period }}
              </span>
            </div>

            <!-- Descripción de la formación -->
            <p class="text-gray-500 leading-relaxed">{{ edu.description }}</p>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
/**
 * ExperienceEducation.vue — Sección de experiencia profesional y educación.
 * Los datos se importan desde src/data/experience.js para facilitar su edición.
 */
import { workExperience, education } from '@/data/experience.js'
</script>
