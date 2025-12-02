/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'bento-bg': '#FFE6F0',
        'bento-card': '#FFF5F9',
        'bento-pink-light': '#FFD4E5',
        'bento-pink': '#FFB3D1',
        'bento-pink-medium': '#FF8FB8',
        'bento-pink-dark': '#FF6B9D',
        'bento-pink-darker': '#E94A7A',
      },
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};