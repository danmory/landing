/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Deep navy
        secondary: '#1e293b', // Slate
        accent: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent2: {
          DEFAULT: '#8b5cf6', // Purple
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        accent3: {
          DEFAULT: '#ec4899', // Pink
          light: '#f472b6',
          dark: '#db2777',
        },
        success: '#10b981', // Emerald
        warning: '#f59e0b', // Amber
        error: '#ef4444', // Red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 