<template>
  <!--
    Navbar fija en la parte superior.
    Cambia de transparente a sólida cuando el usuario hace scroll.
  -->
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass shadow-lg shadow-black/20'
        : 'bg-transparent',
    ]"
    role="banner"
  >
    <nav
      class="section-container flex items-center justify-between h-16 sm:h-18"
      aria-label="Navegación principal"
    >
      <!-- Logo / Nombre del desarrollador -->
      <a
        href="#hero"
        class="flex items-center gap-2 group"
        @click.prevent="scrollToSection('hero')"
        aria-label="Ir al inicio"
      >
        <span
          class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500
                 flex items-center justify-center text-white font-bold text-sm
                 group-hover:scale-110 transition-transform duration-300"
        >
          IP
        </span>
        <span class="font-bold text-white text-lg hidden sm:block">
          Itai <span class="text-gradient">Picornell</span>
        </span>
      </a>

      <!-- Links de navegación — escritorio -->
      <ul class="hidden md:flex items-center gap-1" role="list">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeSection === link.id
                ? 'text-primary-400 bg-primary-500/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5',
            ]"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Botón CTA — escritorio -->
      <a
        href="mailto:itai@example.com"
        class="hidden md:flex btn-primary text-sm py-2 px-4"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Contactar
      </a>

      <!-- Botón hamburguesa — móvil -->
      <button
        class="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5
               transition-colors duration-200"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        @click="toggleMobileMenu"
      >
        <!-- Icono animado hamburguesa / X -->
        <div class="w-5 h-4 flex flex-col justify-between">
          <span
            :class="[
              'block h-0.5 bg-current rounded transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
            ]"
          />
          <span
            :class="[
              'block h-0.5 bg-current rounded transition-all duration-300',
              isMobileMenuOpen ? 'opacity-0 scale-x-0' : '',
            ]"
          />
          <span
            :class="[
              'block h-0.5 bg-current rounded transition-all duration-300',
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : '',
            ]"
          />
        </div>
      </button>
    </nav>

    <!-- Menú móvil desplegable -->
    <transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden glass border-t border-white/5"
      >
        <ul class="section-container py-4 flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              :class="[
                'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                activeSection === link.id
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5',
              ]"
              @click.prevent="handleMobileLinkClick(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-2 border-t border-white/5">
            <a
              href="mailto:itai@example.com"
              class="block px-4 py-3 text-sm font-medium text-primary-400
                     hover:text-white transition-colors duration-200"
            >
              ✉️ Contactar
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Links de navegación del menú.
 * El 'id' debe coincidir con el id del elemento HTML de cada sección.
 */
const navLinks = [
  { id: 'hero',             label: 'Inicio'         },
  { id: 'experience',       label: 'Experiencia'    },
  { id: 'projects',         label: 'Proyectos'      },
  { id: 'certifications',   label: 'Certificaciones'},
]

// Estado reactivo: controla si el navbar tiene fondo sólido
const isScrolled       = ref(false)
// Estado reactivo: sección actualmente visible en el viewport
const activeSection    = ref('hero')
// Estado reactivo: controla si el menú móvil está abierto
const isMobileMenuOpen = ref(false)

/**
 * Detecta si el usuario ha hecho scroll para cambiar el estilo del navbar.
 * Se activa cuando el scroll supera los 50px.
 */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Detecta qué sección está activa según la posición del scroll
  const sections = navLinks.map(link => document.getElementById(link.id))
  const scrollY  = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollY) {
      activeSection.value = navLinks[i].id
      break
    }
  }
}

/**
 * Hace scroll suave hasta la sección con el id especificado.
 * @param {string} sectionId - El id del elemento HTML destino
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Alterna la visibilidad del menú móvil.
 */
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/**
 * Cierra el menú móvil y navega a la sección seleccionada.
 * @param {string} sectionId - El id de la sección destino
 */
const handleMobileLinkClick = (sectionId) => {
  isMobileMenuOpen.value = false
  scrollToSection(sectionId)
}

// Registra el listener de scroll al montar el componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

// Limpia el listener al desmontar para evitar memory leaks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animación de entrada/salida del menú móvil */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
