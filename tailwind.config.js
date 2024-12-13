/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
    },
    backgroundImage: {
      // 'hero-pattern': "url('/img/hero-pattern.svg')",
      footer: "url('/imgages/footerbg.JPG')",
    },
    extend: {
      borderRadius: {
        normal: "1rem",
      },
      width: {
        container: "133rem",
      },
      margin: {
        big_margin: "6.4rem",
        md_margin: "3.2rem",
        sm_margin: "2.4rem",
      },
      padding: {
        big_paddding: "6.4rem",
        md_paddding: "3.2rem",
        sm_paddding: "2.4rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        forgotpassword: "url('/forgot-password.svg')",
      },
      colors: {
        primary: "#1C2537", // terk bich jas tc
        // secondary: "#1c7ed6",
        secondary: "#FFBA00",
        third: "#FFBA00", // yellow
        dark_gray: "#343a40",
        link: "#008248", // link : light green
        bg: "#F5F6F6", // background : gray tc
        light_gray: "#F3F4F6", // light gray for button bg
        danger: "#FC4861",
      },
      gap: {
        big_gap: "6.4rem",
        md_gap: "3.2rem",
        sm_gap: "2.4rem",
        xs_gap: "1.4rem",
      },
      fontSize: {
        big_header: [
          "2.8rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],
        normal_header: [
          "2.6rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],

        semi_header: [
          "2.2rem",
          {
            lineHeight: "1.6",
            fontWeight: "600",
          },
        ],

        small_title: [
          "1.2rem",
          {
            lineHeight: "1.6",
          },
        ],
        normal: ["1.6rem", {}],
        mid: ["1.4rem", {}],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
