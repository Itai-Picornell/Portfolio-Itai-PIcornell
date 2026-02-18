/**
 * Datos de los proyectos del portfolio.
 * Cada objeto representa una tarjeta en la sección ProjectsGrid.
 * Para añadir un nuevo proyecto, simplemente agrega un objeto al array.
 */
export const projects = [
    {
        id: 1,
        title: 'E-Commerce Serverless',
        description:
            'Plataforma de comercio electrónico construida con arquitectura serverless en AWS. ' +
            'Incluye autenticación con Cognito, pagos con Stripe y despliegue automatizado con GitHub Actions.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        technologies: ['Vue.js', 'AWS Lambda', 'DynamoDB', 'Cognito', 'S3', 'CloudFront'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
    },
    {
        id: 2,
        title: 'Dashboard de Analítica',
        description:
            'Panel de control en tiempo real para visualización de métricas de negocio. ' +
            'Integra WebSockets para actualizaciones en vivo y gráficos interactivos con D3.js.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        technologies: ['React', 'Node.js', 'WebSockets', 'D3.js', 'PostgreSQL'],
        githubUrl: 'https://github.com',
        liveUrl: null,
        featured: true,
    },
    {
        id: 3,
        title: 'API REST Microservicios',
        description:
            'Arquitectura de microservicios con contenedores Docker y orquestación con Kubernetes. ' +
            'Implementa patrones CQRS y Event Sourcing para alta disponibilidad.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'Docker', 'Kubernetes', 'RabbitMQ', 'MongoDB'],
        githubUrl: 'https://github.com',
        liveUrl: null,
        featured: false,
    },
    {
        id: 4,
        title: 'App de Gestión de Tareas',
        description:
            'Aplicación de productividad con funcionalidades de arrastrar y soltar, ' +
            'colaboración en tiempo real y sincronización offline con Service Workers.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
        technologies: ['Vue.js', 'Firebase', 'PWA', 'Vuex', 'Tailwind CSS'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
    },
    {
        id: 5,
        title: 'Infraestructura como Código',
        description:
            'Automatización completa de infraestructura AWS con Terraform y AWS CDK. ' +
            'Incluye pipelines de CI/CD, monitoreo con CloudWatch y alertas automáticas.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
        technologies: ['Terraform', 'AWS CDK', 'GitHub Actions', 'CloudWatch', 'SNS'],
        githubUrl: 'https://github.com',
        liveUrl: null,
        featured: true,
    },
    {
        id: 6,
        title: 'Portfolio Personal',
        description:
            'Este mismo portfolio: sitio estático con Vue 3 + Vite + Tailwind CSS, ' +
            'desplegado en AWS S3 + CloudFront con invalidación automática de caché.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
        technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
    },
]
