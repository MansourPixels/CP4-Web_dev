/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#111319', surface: '#191b22', elevated: '#282a30', line: '#524534',
        ink: '#e2e2eb', muted: '#b2a89b', amber: '#f5a623', cyan: '#00e3fd', emerald: '#24f07e',
      },
      fontFamily: { display: ['"Plus Jakarta Sans"', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: { poster: '0 14px 32px -12px rgba(245,166,35,.28)' },
    },
  },
  plugins: [],
}
