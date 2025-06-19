import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))', // Example: --primary: 0 0% 0%; (black)
        secondary: 'hsl(var(--secondary))', // Example: --secondary: 0 0% 100%; (white)
        accent: 'hsl(var(--accent))', // Example: --accent: 80 100% 60%;
        'accent-light': 'hsl(var(--accent-light))',
        background: {
          light: 'hsl(var(--background-light))',
          dark: 'hsl(var(--background-dark))',
        },
        text: {
          light: 'hsl(var(--text-light))',
          dark: 'hsl(var(--text-dark))',
        },
      },
      fontFamily: {
        sporting: ['Sporting Grotesque', 'system-ui', 'sans-serif'],
        gradual: ['Bw Gradual DEMO', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, hsl(var(--accent-light)) 0%, hsl(var(--accent)) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
} satisfies Config;
