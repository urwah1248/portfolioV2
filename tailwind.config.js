/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
      mono: ['Source Code Pro','ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
    extend: {
      colors: {
        'accent': '#5db9fc',
        'bg': '#051929',
        'card': '#092942',
        'manlyFont': '#E6DAC7',
      },
    },
  },
  plugins: [],
}
