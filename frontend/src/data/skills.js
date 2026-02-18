/**
 * Datos de las habilidades técnicas del desarrollador.
 * Organizadas por categoría para renderizarlas en la sección AboutMe.
 */
export const skillCategories = [
    {
        id: 'frontend',
        label: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'Vue.js', level: 90 },
            { name: 'React', level: 75 },
            { name: 'TypeScript', level: 80 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'HTML / CSS', level: 95 },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Python', level: 70 },
            { name: 'REST APIs', level: 90 },
            { name: 'GraphQL', level: 65 },
            { name: 'PostgreSQL', level: 75 },
        ],
    },
    {
        id: 'cloud',
        label: 'Cloud & DevOps',
        icon: '☁️',
        skills: [
            { name: 'AWS', level: 85 },
            { name: 'Docker', level: 80 },
            { name: 'GitHub Actions', level: 90 },
            { name: 'Terraform', level: 70 },
            { name: 'Linux', level: 80 },
        ],
    },
]

/**
 * Lista de tecnologías para el filtro de proyectos.
 * 'all' muestra todos los proyectos sin filtrar.
 */
export const filterTags = [
    'Todos',
    'Vue.js',
    'Node.js',
    'AWS',
    'Docker',
    'React',
]
