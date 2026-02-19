/**
 * Datos de certificaciones profesionales.
 * Usados en el componente CertificationsSection.vue.
 * Actualiza los campos con tus credenciales reales.
 */
export const certifications = [
    {
        id: 1,
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        description:
            'Certificación profesional que valida la experiencia en diseño de sistemas distribuidos ' +
            'y arquitecturas escalables en la plataforma cloud de AWS.',
        verificationCode: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        verificationUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        // Reemplaza esta ruta con la imagen real del badge en /public/
        badge: '/aws-solutions-architect-associate.png',
    },
    {
        id: 2,
        name: 'AWS Certified Developer – Associate',
        issuer: 'Amazon Web Services',
        description:
            'Certificación profesional que valida la experiencia técnica en desarrollo, despliegue ' +
            'y depuración de aplicaciones cloud usando los servicios principales de AWS.',
        verificationCode: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
        verificationUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
        badge: '/aws-developer-associate.png',
    },
]
