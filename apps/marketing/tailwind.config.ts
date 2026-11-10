import type { Config } from "tailwindcss";
import designPreset from "@asoftech/design-tokens/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [designPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
