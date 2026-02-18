<template>
  <!--
    Sección Hero: primera pantalla del portfolio.
    Ocupa el 100% del viewport con un fondo oscuro y animaciones de entrada.
  -->
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    aria-label="Presentación principal"
  >
    <!-- Fondo con partículas decorativas -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <!-- Orbe de gradiente superior izquierdo -->
      <div
        class="absolute top-1/4 -left-32 w-96 h-96 rounded-full
               bg-primary-600/20 blur-3xl animate-float"
      />
      <!-- Orbe de gradiente inferior derecho -->
      <div
        class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full
               bg-accent-500/15 blur-3xl animate-float animate-delay-300"
      />
      <!-- Grid de puntos decorativos -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: radial-gradient(circle, #6366f1 1px, transparent 1px);
               background-size: 40px 40px;"
      />
    </div>

    <!-- Contenido principal del hero -->
    <div class="section-container relative z-10 text-center py-32">

      <!-- Badge de disponibilidad -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-accent-500/10 border border-accent-500/30 text-accent-400
               text-sm font-medium mb-8 animate-fade-in"
      >
        <span class="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
        Disponible para proyectos freelance
      </div>

      <!-- Nombre principal con gradiente -->
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white
               leading-none mb-6 animate-fade-in-up animate-delay-100"
      >
        Hola, soy
        <br />
        <span class="text-gradient">Itai Picornell</span>
      </h1>

      <!-- Título profesional -->
      <p
        class="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-6
               animate-fade-in-up animate-delay-200"
      >
        Full Stack Developer &amp;
        <span class="text-primary-400 font-medium">Cloud Engineer</span>
      </p>

      <!-- Descripción breve -->
      <p
        class="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12
               leading-relaxed animate-fade-in-up animate-delay-300"
      >
        Construyo aplicaciones web modernas y escalables con Vue.js, Node.js y
        arquitecturas cloud en AWS. Apasionado por el código limpio y la experiencia de usuario.
      </p>

      <!-- Botones de acción -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4
               animate-fade-in-up animate-delay-400"
      >
        <button class="btn-primary" @click="scrollToProjects">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11H5m14 0l-7 7m7-7l-7-7"
            />
          </svg>
          Ver mis proyectos
        </button>
        <a
          href="/cv-itai-picornell.pdf"
          download
          class="btn-secondary"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Descargar CV
        </a>
      </div>

      <!-- Indicador de scroll -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2
               animate-bounce animate-delay-500"
        aria-hidden="true"
      >
        <div class="flex flex-col items-center gap-1 text-gray-500">
          <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Estadísticas rápidas -->
    <div
      class="absolute bottom-0 left-0 right-0 border-t border-white/5
             animate-fade-in animate-delay-500"
    >
      <div class="section-container py-6">
        <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-2xl font-bold text-gradient">{{ stat.value }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * HeroSection.vue — Sección principal del portfolio.
 * Muestra el nombre, título, descripción y botones de acción.
 */

// Estadísticas rápidas que se muestran en la parte inferior del hero
const stats = [
  { value: '3+',  label: 'Años de experiencia' },
  { value: '15+', label: 'Proyectos completados' },
  { value: '5+',  label: 'Tecnologías cloud' },
]

/**
 * Hace scroll suave hasta la sección de proyectos.
 */
const scrollToProjects = () => {
  const section = document.getElementById('projects')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
