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
            en: 'This internship has given me an in-depth understanding of the professional Software Development Life Cycle (SDLC). My role centered on creating and configuring Development and Staging environments on Linux servers, deploying existing enterprise architectures, and managing the underlying infrastructure. I worked with CI/CD pipelines to automate continuous delivery, building a perspective oriented towards the architecture, operations, and security of production systems.',
            es: 'Estas prácticas me han permitido conocer en profundidad el ciclo de vida del desarrollo de software (SDLC) en un entorno profesional. Mi rol se centró en la creación y configuración de entornos de Desarrollo y Staging sobre servidores Linux, el despliegue de arquitecturas empresariales ya existentes y la gestión de la infraestructura subyacente. Trabajé con pipelines de CI/CD para automatizar la entrega continua, consolidando una visión orientada a la arquitectura, la operación y la seguridad de los sistemas en producción.',
        },
        technologies: ['Linux', 'Bitbucket CI/CD', 'SDLC', 'Infrastructure'],
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
