import type { Config } from "tailwindcss";
import fluid, { extract } from 'fluid-tailwind'

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    screens: {
      "2xs": "23.4375rem", /* 375px */
      xs: "30rem", /* 480px */
      sm: "37.5rem", /* 600px */
      md: "48rem", /* 768px */
      lg: "64rem", /* 1024px */
      xl: "80rem", /* 1280px */
      "2xl": "87.5rem", /* 1400px */
      "3xl": "100rem", /* 1600px */
      "4xl": "118.75rem", /* 1900px */
    },
    fontFamily: {
      primary: ["var(--font-dm_sans)", "sans-serif"],
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#736B38',
          50: '#CCC596',
          100: '#C5BD89',
          200: '#B8AE6D',
          300: '#AA9E53',
          400: '#8E8545',
          500: '#736B38',
          600: '#5B552C',
          700: '#433E21',
          800: '#2B2815',
          900: '#131209',
          950: '#070603'
        },
        'cream': '#FAF7EE',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [fluid],
};
export default config;
