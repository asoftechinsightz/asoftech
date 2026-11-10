import { colors } from "./index";

const preset = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: colors.primaryNavy,
          primary: colors.primaryNavy,
          secondary: colors.secondaryNavy,
        },
        electric: colors.electricBlue,
        cyan: {
          neon: colors.neonCyan,
        },
        cloud: colors.cloudWhite,
        slate: {
          brand: colors.slate,
        },
        ink: colors.darkText,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(23,107,255,0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,215,245,0.18), transparent 55%)",
        "section-soft":
          "linear-gradient(180deg, #F7FAFF 0%, #FFFFFF 40%, #F7FAFF 100%)",
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(7, 22, 46, 0.25)",
      },
    },
  },
};

export default preset;
