/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['sfpro', 'sans-serif'],
      serif: ['sfpro', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
    extend: {
      colors: {
        'accent': '#20E300',
        'bg': '#0E1800',
      },
    },
  },
  plugins: [],
}
