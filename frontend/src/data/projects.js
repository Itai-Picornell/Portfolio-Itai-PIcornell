/**
 * Datos de los proyectos del portfolio.
 * Los campos 'title' y 'description' son bilingües: { en, es }.
 * Los componentes leen el idioma activo desde vue-i18n y muestran el campo correspondiente.
 *
 * ORDEN: del más reciente al más antiguo (el grid los pinta en orden, así que el
 * primero del array aparece arriba-izquierda). Al añadir un proyecto nuevo, ponlo
 * EL PRIMERO del array y dale el siguiente 'id' libre (el id refleja el orden de
 * creación; la posición en el array refleja la recencia en pantalla).
 */
export const projects = [
    {
        id: 3,
        title: {
            en: 'Family Hub',
            es: 'Family Hub',
        },
        description: {
            en: 'Serverless conversational household assistant on AWS. A Slack bot built on Amazon Bedrock (Claude Haiku) with tool use — plus receipt vision and voice transcription (Amazon Transcribe) — and an installable Vue 3 PWA secured with Amazon Cognito. Event-driven, least-privilege architecture with automated CI/CD via GitHub Actions (OIDC).',
            es: 'Asistente familiar conversacional serverless en AWS. Un bot de Slack sobre Amazon Bedrock (Claude Haiku) con tool use —además de visión de tickets y transcripción de voz (Amazon Transcribe)— y una PWA Vue 3 instalable protegida con Amazon Cognito. Arquitectura event-driven y least-privilege, con CI/CD automatizado mediante GitHub Actions (OIDC).',
        },
        image: '/projects/FamilyHub.svg',
        imageWidth: 1484,
        imageHeight: 1689,
        technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'Bedrock', 'Transcribe', 'Cognito', 'S3', 'CloudFront', 'Route 53', 'ACM', 'EventBridge', 'Parameter Store', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/FamilyHub',
        liveUrl: 'https://casa.itaipicornell.com',
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
]
