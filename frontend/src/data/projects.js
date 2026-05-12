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
            'Serverless architecture portfolio on AWS. Built with Vue 3 + Vite, hosted on Amazon S3 + CloudFront, with automated deployment using GitHub Actions (CI/CD).',
        image: '/projects/Diagrama_Portfolio.svg',
        imageWidth: 781,
        imageHeight: 400,
        technologies: ['Route 53', 'CloudFront', 'ACM', 'S3', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Portfolio-Itai-PIcornell',
        liveUrl: 'https://portfolio.itaipicornell.com',
        featured: true,
    },
    {
        id: 2,
        title: 'Gienco Web',
        description:
            'Serverless SPA on AWS with a custom CMS to manage visual components and orders. Features a centralized real-time log panel for monitoring and incident diagnosis. Automated CI/CD deployment via GitHub Actions.',
        image: '/projects/Gienco_Web.svg',
        imageWidth: 878,
        imageHeight: 619,
        technologies: ['Route 53', 'CloudFront', 'ACM', 'S3', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito','CloudWatch', 'Amazon SES', 'CloudFlare', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Gienco-Web',
        liveUrl: 'https://giencoband.com',
        featured: true,
    },
]
