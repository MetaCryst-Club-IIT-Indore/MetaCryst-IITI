/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#aa6cb8',
        'dark-purple': '#1b091d',
        'purple-bg': '#431648'
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
};
