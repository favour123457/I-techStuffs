// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Very important: make sure these paths cover all your component files
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For pages
      "./components/**/*.{js,ts,jsx,tsx,mdx}", // For components
      "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
      // If you have other directories with Tailwind classes, add them here
    ],
    theme: {
        extend: { // <--- MAKE SURE 'extend' IS HERE IF YOU'RE ADDING TO DEFAULT COLORS
          colors: {
            'my-special': '#215B63',
            'custom-text': '#E0E0E0',
          },
        },
      },
    plugins: [],
  }