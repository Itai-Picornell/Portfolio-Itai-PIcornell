/**
 * Datos de los proyectos del portfolio.
 * Los campos 'title' y 'description' son bilingües: { en, es }.
 * Los componentes leen el idioma activo desde vue-i18n y muestran el campo correspondiente.
 */
export const projects = [
    {
        id: 1,
        title: {
            en: 'Portfolio Itai Picornell',
            es: 'Portafolio Itai Picornell',
        },
        description: {
            en: 'Serverless architecture portfolio on AWS. Built with Vue 3 + Vite, hosted on Amazon S3 + CloudFront, with automated deployment using GitHub Actions (CI/CD).',
            es: 'Portafolio con arquitectura serverless en AWS. Construido con Vue 3 + Vite, alojado en Amazon S3 + CloudFront, con despliegue automatizado mediante GitHub Actions (CI/CD).',
        },
        image: '/projects/Diagrama_Portfolio.svg',
        imageWidth: 781,
        imageHeight: 400,
        technologies: ['Route 53', 'CloudFront', 'ACM', 'S3', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Portfolio-Itai-PIcornell',
        liveUrl: 'https://portfolio.itaipicornell.com',
    },
    {
        id: 2,
        title: {
            en: 'Gienco Web',
            es: 'Gienco Web',
        },
        description: {
            en: 'Serverless SPA on AWS with a custom CMS to manage visual components and orders. Features a centralized real-time log panel for monitoring and incident diagnosis. Automated CI/CD deployment via GitHub Actions.',
            es: 'SPA serverless en AWS con un CMS propio para gestionar los componentes visuales y los pedidos. Incluye un panel centralizado de logs en tiempo real para monitorización y diagnóstico de incidencias. Despliegue CI/CD automatizado mediante GitHub Actions.',
        },
        image: '/projects/Gienco_Web.svg',
        imageWidth: 878,
        imageHeight: 619,
        technologies: ['Route 53', 'CloudFront', 'ACM', 'S3', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'CloudWatch', 'Amazon SES', 'CloudFlare', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Gienco-Web',
        liveUrl: 'https://giencoband.com',
    },
]
