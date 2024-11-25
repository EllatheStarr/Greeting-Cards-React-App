export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Ensure this matches `border-primary` and `text-primary`
      },
    },
  },
  plugins: [],
};
