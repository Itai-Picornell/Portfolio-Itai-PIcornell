<template>
  <!--
    Navbar fija en la parte superior.
    Cambia de transparente a sólida cuando el usuario hace scroll.
  -->
  <header
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass shadow-sm shadow-black/5'
        : 'bg-transparent',
    ]"
    role="banner"
  >
    <nav
      class="section-container flex items-center justify-between h-16 sm:h-18"
      :aria-label="$t('nav.aria_main')"
    >
      <!-- Logo / nombre -->
      <a
        href="#hero"
        class="flex items-center gap-2 group"
        @click.prevent="scrollToSection('hero')"
        :aria-label="$t('nav.aria_home')"
      >
        <img
          src="/Perfil.jpg"
          alt="Itai Picornell"
          class="w-8 h-8 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <span class="font-bold text-gray-900 text-lg">
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
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100',
            ]"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ $t(link.labelKey) }}
          </a>
        </li>
      </ul>

      <!-- Selector de idioma + CTA — escritorio -->
      <div class="hidden md:flex items-center gap-3">
        <LanguageSwitcher />
        <a
          href="mailto:itaipicornell@gmail.com"
          class="btn-primary text-sm py-2 px-4"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {{ $t('nav.contact') }}
        </a>
      </div>

      <!-- Botón hamburguesa — móvil -->
      <div class="md:hidden flex items-center gap-2">
        <LanguageSwitcher />
        <button
          class="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="$t('nav.aria_open_menu')"
          @click="toggleMobileMenu"
        >
          <div class="w-5 h-4 flex flex-col justify-between">
            <span :class="['block h-0.5 bg-current rounded transition-all duration-300', isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '']" />
            <span :class="['block h-0.5 bg-current rounded transition-all duration-300', isMobileMenuOpen ? 'opacity-0 scale-x-0' : '']" />
            <span :class="['block h-0.5 bg-current rounded transition-all duration-300', isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : '']" />
          </div>
        </button>
      </div>
    </nav>

    <!-- Menú móvil desplegable -->
    <transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden glass border-t border-gray-200"
      >
        <ul class="section-container py-4 flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              :class="[
                'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                activeSection === link.id
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100',
              ]"
              @click.prevent="handleMobileLinkClick(link.id)"
            >
              {{ $t(link.labelKey) }}
            </a>
          </li>
          <li class="pt-2 border-t border-gray-200">
            <a
              href="mailto:itaipicornell@gmail.com"
              class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {{ $t('nav.contact') }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const headerRef = ref(null)

/**
 * Links de navegación. 'labelKey' apunta a una clave de los archivos i18n.
 */
const navLinks = [
    { id: 'hero',           labelKey: 'nav.home'           },
    { id: 'experience',     labelKey: 'nav.experience'     },
    { id: 'projects',       labelKey: 'nav.projects'       },
    { id: 'certifications', labelKey: 'nav.certifications' },
]

const isScrolled       = ref(false)
const activeSection    = ref('hero')
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50

    const atBottom =
        (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50)

    if (atBottom) {
        activeSection.value = navLinks[navLinks.length - 1].id
        return
    }

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

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleClickOutside = (event) => {
    if (isMobileMenuOpen.value && headerRef.value && !headerRef.value.contains(event.target)) {
        isMobileMenuOpen.value = false
    }
}

const handleMobileLinkClick = (sectionId) => {
    isMobileMenuOpen.value = false
    scrollToSection(sectionId)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClickOutside, true)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside, true)
})
</script>

<style scoped>
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
