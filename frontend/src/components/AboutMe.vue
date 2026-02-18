<template>
  <!--
    Sección "Sobre mí": presenta al desarrollador con foto, bio y habilidades técnicas.
  -->
  <section
    id="about"
    class="py-24 sm:py-32 relative overflow-hidden"
    aria-label="Sobre mí"
  >
    <!-- Decoración de fondo -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="section-container">

      <!-- Encabezado de sección -->
      <div class="mb-16">
        <div class="gradient-line" />
        <h2 class="section-title">Sobre mí</h2>
        <p class="section-subtitle">
          Desarrollador apasionado por construir soluciones que marcan la diferencia.
        </p>
      </div>

      <!-- Layout de una columna centrada: bio + foto -->
      <div class="max-w-4xl mx-auto">
        <!-- Contenido principal: foto y bio -->
        <div class="space-y-8">

          <!-- Foto de perfil con decoración -->
          <div class="relative inline-block">
            <div
              class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden
                     ring-2 ring-primary-500/30 shadow-2xl shadow-primary-500/20"
            >
              <!-- Placeholder de foto con iniciales -->
              <div
                class="w-full h-full bg-gradient-to-br from-primary-600 to-accent-500
                       flex items-center justify-center"
              >
                <span class="text-white text-6xl font-black">IP</span>
              </div>
            </div>
            <!-- Badge de experiencia flotante -->
            <div
              class="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2
                     border border-primary-500/20 shadow-lg"
            >
              <div class="text-2xl font-bold text-gradient">3+</div>
              <div class="text-xs text-gray-400">años de exp.</div>
            </div>
          </div>

          <!-- Texto de presentación -->
          <div class="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              Soy un desarrollador Full Stack con más de 3 años de experiencia construyendo
              aplicaciones web modernas y escalables. Me especializo en el ecosistema
              <span class="text-primary-400 font-medium">Vue.js</span> para el frontend y
              <span class="text-primary-400 font-medium">Node.js</span> para el backend.
            </p>
            <p>
              Tengo una sólida experiencia en arquitecturas cloud con
              <span class="text-accent-400 font-medium">AWS</span>, incluyendo servicios como
              S3, CloudFront, Lambda, DynamoDB y Cognito. Me apasiona la automatización y
              el DevOps, implementando pipelines de CI/CD con GitHub Actions.
            </p>
            <p>
              Cuando no estoy programando, me dedico a aprender nuevas tecnologías,
              contribuir a proyectos open source y compartir conocimiento con la comunidad.
            </p>
          </div>

          <!-- Links de contacto rápido -->
          <div class="flex flex-wrap gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary text-sm py-2 px-4"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary text-sm py-2 px-4"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * AboutMe.vue — Sección de presentación personal.
 * Muestra foto, bio y habilidades técnicas organizadas por categoría.
 */

</script>
