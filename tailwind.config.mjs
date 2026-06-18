/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#1B5E20',
            light: '#2E7D32',
            dark: '#0D3B12',
          },
          gold: {
            DEFAULT: '#C9A84C',
            light: '#D4B76A',
            dark: '#A88A2E',
          },
          cream: '#FDF6E3',
          offwhite: '#FAFAFA',
        },
        cta: {
          DEFAULT: '#E87722',
          hover: '#D1651A',
        },
        text: {
          DEFAULT: '#2C2C2C',
          light: '#5A5A5A',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
