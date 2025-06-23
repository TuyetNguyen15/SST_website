module.exports = {
  content: [
    "./public/index.html",
    "./components/**/*.{js,jsx}",
    "./screens/**/*.{js,jsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Đảm bảo quét tất cả các file React của bạn
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}