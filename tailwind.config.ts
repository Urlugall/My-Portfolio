import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#242D3E',
        'light-blue': '#4A5978',
        'light-brown': '#AF9E7C',
        'main-brown': '#98845C',
      }
    },
  },
  plugins: [],
}
export default config
