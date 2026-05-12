<template>
  <!--
    Sección de certificaciones profesionales.
    Los datos se gestionan desde src/data/certifications.js.
  -->
  <section
    id="certifications"
    class="py-16 sm:py-20 relative overflow-hidden"
    :aria-label="$t('certifications_section.aria_section')"
  >
    <div class="absolute top-1/2 -right-32 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <div class="mb-10">
        <div class="gradient-line" />
        <h2 class="section-title">{{ $t('certifications_section.section_title') }}</h2>
      </div>

      <div class="max-w-4xl mx-auto space-y-6">
        <article
          v-for="cert in certifications"
          :key="cert.id"
          class="card overflow-hidden hover:shadow-lg hover:shadow-black/5
                 transition-all duration-300 group"
        >
          <div class="p-6 sm:p-8">

            <!-- Cabecera: badge + nombre + emisor -->
            <div class="flex items-center gap-5 mb-5">
              <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <img
                  :src="cert.badge"
                  :alt="$t('certifications_section.aria_badge', { name: cert.name })"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  @error="handleBadgeError"
                />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-500 transition-colors duration-200">
                  {{ cert.name }}
                </h3>
                <p class="text-gray-500 mt-1 text-sm">{{ cert.issuer }}</p>
              </div>
              <span
                v-if="cert.status === 'pending'"
                class="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                       bg-amber-700/15 text-amber-600 text-xs font-semibold tracking-wide
                       border border-amber-700/20 whitespace-nowrap"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                {{ $t('certifications_section.in_progress') }}
              </span>
            </div>

            <!-- Footer: verificación -->
            <div
              v-if="cert.status !== 'pending'"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200"
            >
              <div class="text-xs text-gray-500">
                <span class="font-medium text-gray-500">{{ $t('certifications_section.verification_code') }}:</span>
                <span class="ml-2 font-mono">{{ cert.verificationCode }}</span>
              </div>

              <a
                :href="cert.verificationUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-sm py-2 px-4 self-start sm:self-auto"
                :aria-label="$t('certifications_section.aria_verify', { name: cert.name })"
              >
                {{ $t('certifications_section.view_credential') }}
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
import { certifications } from '@/data/certifications.js'

const handleBadgeError = (event) => {
    event.target.style.display = 'none'
}
</script>
