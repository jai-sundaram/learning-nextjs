import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  './**/*.{js,ts,jsx,tsx,mdx}',
  '!./node_modules/**', // Exclude node_modules
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
