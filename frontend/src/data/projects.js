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
            'Single Page Application (SPA) for Gienco Group featuring a serverless AWS architecture (Lambda, API Gateway, DynamoDB). Built with Vue 3 + Vite, hosted on S3 + CloudFront, with automated CI/CD deployments via GitHub Actions.',
        image: '/projects/Diagrama_Gienco.svg',
        imageWidth: 878,
        imageHeight: 430,
        technologies: ['Route 53', 'CloudFront', 'ACM', 'S3', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Gienco-Web',
        liveUrl: 'https://d33kjtzxmbw87t.cloudfront.net/',
        featured: true,
    },
]
