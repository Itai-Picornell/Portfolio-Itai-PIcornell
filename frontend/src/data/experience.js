/**
 * Datos de experiencia profesional y formación.
 * Los campos textuales son bilingües: { en, es }.
 * Campos comunes (institución, empresa, periodo) se mantienen en formato neutro.
 */

/**
 * Experiencia laboral en orden cronológico inverso.
 */
export const workExperience = [
    {
        id: 1,
        title: {
            en: 'Web Developer Intern',
            es: 'Desarrollador Web en prácticas',
        },
        company: 'ClickToTravel',
        period: {
            en: 'February 2026 - June 2026',
            es: 'Febrero 2026 - Junio 2026',
        },
        description: {
            en: 'This internship provided me with an in-depth understanding of the professional Software Development Life Cycle (SDLC). My role involved creating and configuring Development and Staging environments (Laravel and Angular SSR) on Linux servers. I was responsible for deploying and adapting pre-existing enterprise architectures, managing the underlying infrastructure (PHP, Node.js, MariaDB/MySQL), and automating continuous delivery through Bitbucket CI/CD pipelines.',
            es: 'Estas prácticas me han permitido comprender en profundidad el ciclo de vida del desarrollo de software (SDLC) en un entorno profesional. Mi rol incluyó la creación y configuración de entornos de Desarrollo y Staging (Laravel y Angular SSR) sobre servidores Linux. Me encargué de desplegar y adaptar arquitecturas empresariales ya existentes, gestionar la infraestructura subyacente (PHP, Node.js, MariaDB/MySQL) y automatizar el despliegue continuo mediante pipelines CI/CD de Bitbucket.',
        },
        technologies: ['PHP', 'Bitbucket', 'Laravel', 'Angular SSR', 'MariaDB/MySQL'],
    },
]

/**
 * Formación académica en orden cronológico inverso.
 */
export const education = [
    {
        id: 1,
        degree: {
            en: 'Higher Education Diploma in Multi-platform Application Development',
            es: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
        },
        institution: 'FP Sant Josep Obrer',
        period: {
            en: 'September 2024 - June 2026',
            es: 'Septiembre 2024 - Junio 2026',
        },
        description: {
            en: 'Specialized training in multi-platform application development, acquiring key knowledge in software engineering, database administration, backend programming, and systems virtualization.',
            es: 'Formación especializada en el desarrollo de aplicaciones multiplataforma, adquiriendo conocimientos clave en ingeniería del software, administración de bases de datos, programación backend y virtualización de sistemas.',
        },
    },
]
