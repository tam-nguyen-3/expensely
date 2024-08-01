/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theme-blue': '#292b50',
      'white': '#ffffff',
      'theme-blue-light': '#ECEDFF',
      'theme-green-light': '#F6FBF3',
      'theme-green': '#85BB65'
    },
    extend: {},
  },
  plugins: [],
}