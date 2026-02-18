# Portfolio Personal — Itai Picornell

Sitio web de portfolio personal construido con **Vue 3 + Vite + Tailwind CSS** y desplegado en **AWS S3 + CloudFront** mediante **GitHub Actions**.

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | Vue 3, Vite, Tailwind CSS, Vue Router |
| Infraestructura | AWS S3, AWS CloudFront (OAC) |
| CI/CD | GitHub Actions |
| Lenguaje | JavaScript (ES2022+) |

## Estructura del Proyecto

```
Portfolio-Itai-PIcornell/
├── .github/workflows/deploy.yml   # Pipeline de CI/CD
├── frontend/
│   ├── src/
│   │   ├── assets/main.css        # Estilos globales + Tailwind
│   │   ├── components/            # Componentes Vue reutilizables
│   │   ├── data/                  # Datos de proyectos y habilidades
│   │   ├── router/index.js        # Configuración de Vue Router
│   │   ├── views/HomeView.vue     # Vista principal
│   │   ├── App.vue                # Componente raíz
│   │   └── main.js                # Punto de entrada
│   ├── public/favicon.svg
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
├── docs/infrastructure.md         # Guía de infraestructura AWS
└── README.md
```

## Desarrollo Local

```bash
# Instalar dependencias
cd frontend
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173

# Build de producción
npm run build

# Previsualizar el build
npm run preview
```

## Despliegue

El despliegue es automático al hacer push a la rama `main` con cambios en `frontend/`.

Para configurar la infraestructura AWS manualmente, consulta [`docs/infrastructure.md`](docs/infrastructure.md).

### Secrets de GitHub requeridos

| Secret | Descripción |
|---|---|
| `AWS_ACCESS_KEY_ID` | Credencial del usuario IAM |
| `AWS_SECRET_ACCESS_KEY` | Credencial del usuario IAM |
| `AWS_REGION` | Región AWS (ej: `eu-west-1`) |
| `S3_BUCKET_NAME` | Nombre del bucket S3 |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID de la distribución CloudFront |

## Convenciones de Código

- **Variables, funciones y archivos:** en inglés (`ProjectCard.vue`, `fetchProjects`).
- **Comentarios y JSDoc:** en español para fines educativos.
- **Componentes:** PascalCase (`HeroSection.vue`).
- **Funciones:** camelCase (`handleScroll`).
