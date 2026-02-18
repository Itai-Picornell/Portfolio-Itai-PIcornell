/**
 * Punto de entrada principal de la aplicación Vue.
 * Aquí se monta la app en el DOM y se registran los plugins globales.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importa los estilos globales (Tailwind CSS + variables personalizadas)
import './assets/main.css'

// Crea la instancia de la aplicación Vue
const app = createApp(App)

// Registra Vue Router como plugin global
app.use(router)

// Monta la aplicación en el elemento con id="app" del index.html
app.mount('#app')
