import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand: near-black ink + a disciplined blue accent (from the logo
        // glass), on warm paper.
        ink: {
          DEFAULT: "#21231d",
          900: "#21231d",
          800: "#2b2d26",
          700: "#3b3d35",
        },
        paper: "#f6f5f2",
        bone: "#eeece7",
        brand: {
          DEFAULT: "#1f6fb2",
          600: "#185f99",
        },
        muted: "#6f716a",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        page: "84rem",
      },
      transitionTimingFunction: {
        frame: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
