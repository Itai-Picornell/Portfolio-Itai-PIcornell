/**
 * Datos de los proyectos del portfolio.
 * Cada objeto representa una tarjeta en la sección ProjectsGrid.
 * Para añadir un nuevo proyecto, simplemente agrega un objeto al array.
 */
export const projects = [
    {
        id: 1,
        title: 'Portfolio Itai Picornell',
        description:
            'Portfolio con Arquitectura Serverless en AWS. Desarrollado con Vue 3 + Vite, alojado en S3 + CloudFront y despliegue automatizado con GitHub Actions (CI/CD).',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        technologies: ['Vite', 'Vue.js', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Portfolio-Itai-PIcornell',
        liveUrl: 'https://portfolio.itaipicornell.com',
        featured: true,
    },
    {
        id: 2,
        title: 'Gienco Web',
        description:
            'SPA para grupo Gienco, con arquitectura serverless en AWS. Desarrollado con Vue 3 + Vite, alojado en S3 + CloudFront y despliegue automatizado con GitHub Actions (CI/CD).',
        technologies: ['Vite', 'Vue.js', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Gienco-Web',
        liveUrl: 'https://d33kjtzxmbw87t.cloudfront.net/',
        featured: true,
    },
]
