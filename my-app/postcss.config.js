// postcss.config.js
export default {
  plugins: {
    tailwindcss: {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // scan all React files
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
};
