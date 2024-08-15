import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',

                'green-300': '#00B37E',
                'green-500': '#00875F',
                'green-700': '#015F43',

                'red-500': '#F03847',
                'red-700': '#7A1921',

                'yellow-500': '#FBA94C',

                'gray-100': '#E1E1E6',
                'gray-200': '#D3D3D9',
                'gray-300': '#C4C4CC',
                'gray-400': '#8D8D99',
                'gray-500': '#7C7C8A',
                'gray-600': '#323238',
                'gray-700': '#202024',
                'gray-800': '#19191C',
                'gray-900': '#121214',
            },
            rounded: {
                sm: '0.125rem',
                md: '0.375rem',
                base: '0.25rem',
                lg: '0.5rem',
                full: '9999px',
            },
            fontSize: {
                sm: '0.75rem',
                md: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.5rem',
                xxl: '10rem',
            },
            fontWeight: {
                regular: '400',
                bold: '700',
            },
        },
    },
    plugins: [],
}

export default config
