/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra Small (International)
        sm: "640px", // Small
        md: "768px", // Medium
        lg: "1024px", // Large
        xl: "1280px", // Extra Large
        xxl: "1440px", // Custom Extra Extra Large for bigger screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
