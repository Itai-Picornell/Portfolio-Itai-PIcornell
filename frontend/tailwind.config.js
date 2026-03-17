/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#FAFAFA',
                    800: '#FFFFFF',
                    700: '#F5F5F5',
                    600: '#EEEEEE',
                    500: '#E0E0E0',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 10s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-40px)' },
                },
            },
            spacing: {
                '18': '4.5rem',
            },
        },
    },
    plugins: [],
}
