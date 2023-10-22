import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ippon-blue': '#043cdc',
        'ippon-dark-blue': '#022591'

      },
      keyframes: {
        tilt: {
          '50%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        tilt: 'tilt 0.1s 30',
      }
    },
  },
  plugins: [],
}
export default config
