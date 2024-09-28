import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
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
  plugins: [],
};
export default config;
