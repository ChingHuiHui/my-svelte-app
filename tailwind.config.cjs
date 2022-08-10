/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
