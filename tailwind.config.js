const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSerifKhitan: ["var(--font-notoSerifKhitan)"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "ringing": "ringing 2s ease-in-out infinite ",
        "dot-fade": "dotFadeOut 2s ease-in-out infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        ringing: {
          // Ring back and forth twice
          "0%, 10%": { transform: "rotate(0deg)" },
          "10%, 20%": { transform: "rotate(-15deg)" },
          "20%, 30%": { transform: "rotate(15deg)" },
          "30%, 40%": { transform: "rotate(-15deg)" },
          "40%, 50%": { transform: "rotate(15deg)" },
          // Stop the bell and let the span appear
          "50%, 100%": { transform: "rotate(0deg)" },
        },
        dotFadeOut: {
          // The span is hidden when the bell is ringing
          // "0%, 50%": { opacity: 0 },
          // The span appears when the bell stops
          "0%, 10%":{ opacity: 0 } ,
          "10%, 20%": { opacity: 0 },
          "20%, 30%": { opacity: 0 },
          "30%, 40%": { opacity: 0 },
          "40%, 50%": { opacity: 0 },
          // Stop the bell and let the span appear
          "50%, 100%": { opacity: 1 },
        },
      },
      screens: {
        'mobi': {'min': '0px', 'max': '500px'},
        'xsmobi': {'min': '0px', 'max': '400px'},

      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            height: "2px", // Add height if dealing with horizontal scrollbars
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#d9d9d9",
            borderRadius: "100vw",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "black",
            borderRadius: "100vw",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
