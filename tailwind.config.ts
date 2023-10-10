import withMT from "@material-tailwind/react/utils/withMT";
import { type Config } from "tailwindcss";

export default withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        text: "#1a1a1a",
        background: "#f5f5f5",
        primary: "#ff5722",
        secondary: "#1565c0",
        accent: "#828282",
      },
    },
  },
  plugins: [],
} satisfies Config);
