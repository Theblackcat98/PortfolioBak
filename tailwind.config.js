const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Path to HeroUI theme components
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend your theme here if needed
      // For example, map your old CSS variables to Tailwind theme if HeroUI doesn't cover them
      colors: {
        primary: '#ff6f59ff', // Your --primary color
        secondary: '#f2d2a7ff', // Your --secondary color
        dark: '#2e2e3aff',      // Your --dark color
        // Ensure these align with or are customized within the heroui plugin below
      },
    },
  },
  darkMode: "class", // Crucial for HeroUI and next-themes
  plugins: [
    heroui({
      prefix: "heroui", // Optional: customize prefix for CSS variables
      addCommonColors: true, // Optional: adds common colors like blue, green, etc.
      // defaultTheme: "dark", // Already handled by next-themes defaultTheme in providers.tsx
      themes: {
        // You can define light and dark themes here, or extend them
        // HeroUI will use these to generate CSS variables
        light: {
          // layout: { ... },
          colors: {
            primary: '#ff6f59ff', 
            secondary: '#f2d2a7ff',
            background: '#f7f7f7ff', // Your previous --light-color
            foreground: '#2e2e3aff', // Your previous --dark-color (as text color for light theme)
          },
        },
        dark: {
          // layout: { ... },
          colors: {
            primary: '#ff6f59ff',
            secondary: '#f2d2a7ff',
            background: '#2e2e3aff', // Your previous --dark-color
            foreground: '#f7f7f7ff', // Your previous --light-color (as text color for dark theme)
          },
        },
      },
    }),
  ],
}; 