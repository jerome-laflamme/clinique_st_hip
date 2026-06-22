/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────────────────────
      // Single source of truth — edit here to retheme the whole site.
      // Note: --color-primary, --color-primary-darker, and --color-hero-banner-center
      // are also kept in index.css :root for pseudo-elements and inline styles
      // that Tailwind cannot reach.
      colors: {
        // Brand palette
        primary: "#43f3c1",
        primaryDark: "#37c89f",
        primaryDarker: "#228065",
        primaryLight: "#67f4dd",

        // Section backgrounds
        heroBanner: "#b8f4f9",
        heroBannerCenter: "#d4fdfe",
        contactCard: "#a1ffe4",
        servicesBox: "#f6f9ff",

        // Text scale
        body: "#414141",
        heading: "#1f1f1f",
        secondary: "#666666",

        // Navigation
        "nav-text": "#3d3d3d",
        "nav-active": "#6e6e6e",
        "mobile-nav-text": "#b1b1b1",
        "mobile-nav-hover": "#575757",

        // Hero
        "hero-title": "#363636",
        "hero-subtitle": "#5d5d5d",
        "btn-grey": "#6c6c6c",
        "btn-grey-hover": "#8e8e8e",
        "btn-grey-tint": "#eaffff",

        // Contact section
        "contact-h": "#747474",
        "contact-p": "#8a8a8a",
        icon: "#8f9195",

        // Service tabs
        "tab-text": "#464646",
        "tab-border": "#488a5b",

        // Controls
        hamburger: "#131313",
        close: "#545454",

        // Overlays
        "overlay-nav": "rgba(225, 249, 255, 0.95)",
        "overlay-popup": "rgba(175, 175, 175, 0.6)",
      },

      // ── Fonts ────────────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", '"Open Sans"', "ui-sans-serif", "sans-serif"],
      },

      maxWidth: {
        wrapper: "1300px",
      },
    },
  },
  plugins: [],
};
