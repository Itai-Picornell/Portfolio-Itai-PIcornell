<template>
  <!--
    Sección "Certificaciones": muestra las certificaciones profesionales obtenidas.
    Los datos se gestionan desde src/data/certifications.js.
  -->
  <section
    id="certifications"
    class="py-16 sm:py-20 relative overflow-hidden"
    aria-label="Certificaciones"
  >
    <!-- Decoración de fondo -->
    <div class="absolute top-1/2 -right-32 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <!-- Encabezado de sección -->
      <div class="mb-10">
        <div class="gradient-line" />
        <h2 class="section-title">Certificaciones</h2>
        <p class="section-subtitle">
          Certificaciones profesionales que avalan mis conocimientos técnicos.
        </p>
      </div>

      <!-- Grid de tarjetas de certificaciones -->
      <div class="max-w-4xl mx-auto space-y-6">
        <article
          v-for="cert in certifications"
          :key="cert.id"
          class="card overflow-hidden hover:shadow-xl hover:shadow-primary-500/10
                 transition-all duration-300 group"
        >
          <div class="p-6 sm:p-8">

            <!-- Cabecera: badge + nombre + emisor -->
            <div class="flex items-center gap-5 mb-5">
              <!-- Imagen del badge de la certificación -->
              <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <img
                  :src="cert.badge"
                  :alt="`Badge de ${cert.name}`"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  @error="handleBadgeError"
                />
              </div>
              <div>
                <h3
                  class="text-lg sm:text-xl font-bold text-white
                         group-hover:text-primary-400 transition-colors duration-200"
                >
                  {{ cert.name }}
                </h3>
                <p class="text-gray-400 mt-1 text-sm">{{ cert.issuer }}</p>
              </div>
            </div>

            <!-- Descripción de la certificación -->
            <p class="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              {{ cert.description }}
            </p>

            <!-- Footer: código de verificación + enlace -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4
                        pt-4 border-t border-white/5">
              <!-- Código de verificación -->
              <div class="text-xs text-gray-500">
                <span class="font-medium text-gray-400">Código de verificación:</span>
                <span class="ml-2 font-mono">{{ cert.verificationCode }}</span>
              </div>

              <!-- Botón de verificación -->
              <a
                :href="cert.verificationUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-sm py-2 px-4 self-start sm:self-auto"
                :aria-label="`Verificar credencial: ${cert.name}`"
              >
                Ver credencial
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
/**
 * CertificationsSection.vue — Sección de certificaciones profesionales.
 * Cada certificación se muestra con su badge, descripción y enlace de verificación.
 * Los datos se importan desde src/data/certifications.js.
 */
import { certifications } from '@/data/certifications.js'

/**
 * Manejador de error para las imágenes de badge.
 * Si la imagen no carga, oculta el elemento para evitar iconos rotos.
 * @param {Event} event - El evento de error del elemento <img>
 */
const handleBadgeError = (event) => {
  event.target.style.display = 'none'
}
</script>
