/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#002B5B",
        
"secondary": "#89d7e5",
        
"accent": "#4fa9b5",
        
"neutral": "#1E1721",
        
"base-100": "#F0F0F5",
        
"info": "#739AE8",
        
"success": "#148F6E",
        
"warning": "#946905",
        
"error": "#F46292",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
