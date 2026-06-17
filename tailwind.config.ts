import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0d0d0d',
        gold: '#d4af37',
        'gold-light': '#e5c05d',
        'gold-dark': '#b8972f',
        'dark-gray': '#151515',
        'medium-gray': '#252525',
        'light-gray': '#8e8e8e',
        'card-bg': '#121212',
      },
    },
  },
  plugins: [],
};

export default config;
