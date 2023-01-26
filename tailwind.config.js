/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  container: {
    center: true,
    padding: '1rem'
  },
  extend: {
    screens: {
      xl: '1200px',
      '2xl': '1200px'
    },
    boxShadow: {
      'default': '0 0 40px -14px rgba(0,0,0,0.22)'
    }
  },
  colors: {
    success: "#6FA567",
    error: "#D55454",
    green: "#C8DDD3",
    blue: "#DBE9F1",
    yellow: "#FEEEB7",
    orange: "#FBE3D8"
  }
},
plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
],
}
