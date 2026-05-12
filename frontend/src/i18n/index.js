/**
 * Configuración de internacionalización del portfolio.
 *
 * Idiomas soportados:
 *   - 'en' (inglés, idioma por defecto y URL canónica)
 *   - 'es' (español)
 *
 * Las rutas '/en' y '/es' son pre-renderizadas por vite-ssg en build time,
 * cada una con su HTML, sus meta tags y sus hreflang correspondientes.
 */
import { createI18n } from 'vue-i18n'
import en from './en.json'
import es from './es.json'

export const SUPPORTED_LOCALES = ['en', 'es']
export const DEFAULT_LOCALE = 'en'

export const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { en, es },
})
