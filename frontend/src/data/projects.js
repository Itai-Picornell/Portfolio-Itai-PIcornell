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
        technologies: ['Vite', 'Vue.js', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Portfolio-Itai-PIcornell',
        liveUrl: 'https://portfolio.itaipicornell.com',
        featured: true,
    },
    {
        id: 2,
        title: 'Gienco Web',
        description:
            'Single Page Application (SPA) for Gienco Group, featuring a serverless architecture on AWS. Built with Vue 3 + Vite, hosted on Amazon S3 + CloudFront, with automated deployment via GitHub Actions (CI/CD).',
        image: '/projects/Diagrama_Gienco.svg',
        technologies: ['Vite', 'Vue.js', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
        githubUrl: 'https://github.com/Itai-Picornell/Gienco-Web',
        liveUrl: 'https://d33kjtzxmbw87t.cloudfront.net/',
        featured: true,
    },
]
