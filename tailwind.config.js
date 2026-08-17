/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        'bg-primary': '#0B0B0C',
        'text-primary': '#F2F0EA',
        'text-muted': '#8A887F',
        'text-dim': '#6B6B6E',
        'accent-yellow': '#F5C518',
        'accent-purple': '#8B5CF6',
        'accent-orange': '#FF5A36',
      },
    },
  },
  plugins: [],
}