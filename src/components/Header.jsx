import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { wrapper } from "../styles.js";

// ── Local constants ──────────────────────────────────────────────────────────
const navItem =
  "px-[15px] py-[10px] text-base font-bold whitespace-nowrap transition-all duration-300 bg-transparent border-0 cursor-pointer";
const navActive = "text-[var(--color-nav-active)]";
const navInactive =
  "text-[var(--color-nav-text)] hover:text-[var(--color-nav-active)]";
const navMobile =
  "w-full py-3 px-3 text-[15px] font-semibold text-[var(--color-mobile-nav-text)] hover:text-[var(--color-mobile-nav-hover)] hover:bg-gray-50 bg-transparent border-0 cursor-pointer text-left rounded-md transition-all duration-200";

const SECTIONS = ["hero", "about", "services", "equipe", "career", "contact"];
const NAV_LINKS = [
  { label: "Accueil", section: "hero" },
  { label: "À propos", section: "about" },
  { label: "Services", section: "services" },
  { label: "Équipe", section: "equipe" },
  { label: "Carrière", section: "career" },
  { label: "Contact", section: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll spy + header shrink
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const pos = window.scrollY + 200;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (
          el &&
          pos >= el.offsetTop &&
          pos <= el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const header = document.getElementById("header");
      const offset = header ? header.offsetHeight - (scrolled ? 0 : 10) : 80;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 120);
    } else doScroll();
  };

  const isOnHome = location.pathname === "/";

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(1,41,112,0.1)] py-4"
          : "py-5"
      }`}
    >
      <div className={`${wrapper} flex items-center justify-between`}>
        <Link to="/" aria-label="Aller à l'accueil">
          <img
            src="/assets/img/logo/logo_modif.webp"
            alt="Logo clinique"
            className="max-h-[90px] max-md:max-h-[60px]"
          />
        </Link>

        {/* ── Desktop nav ─────────────────────────────────────── */}
        <nav className="hidden lg:block">
          <ul className="flex items-center list-none m-0 p-0">
            {NAV_LINKS.map(({ label, section }) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`${navItem} ${
                    isOnHome && activeSection === section
                      ? navActive
                      : navInactive
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Hamburger → X (above overlay via z-[1000]) ──────── */}
        <button
          className="lg:hidden relative z-[1000] w-9 h-9 flex items-center justify-center text-[var(--color-hamburger)] cursor-pointer bg-transparent border-0"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          {/* Hamburger lines */}
          <i
            aria-hidden="true"
            className={`bi bi-list text-[28px] absolute transition-all duration-300 ${
              mobileOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          {/* X */}
          <i
            aria-hidden="true"
            className={`bi bi-x text-[32px] absolute transition-all duration-300 ${
              mobileOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>
      </div>

      {/* ── Backdrop overlay ────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-[998] bg-white/60 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Side drawer ─────────────────────────────────────────── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed top-0 right-0 h-full w-[75vw] max-w-[300px] bg-white z-[999]
          shadow-[-8px_0_30px_rgba(0,0,0,0.08)] flex flex-col pt-[100px] px-5
          transition-[opacity,transform] duration-300 ease-in-out ${
            mobileOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
      >
        <ul className="list-none m-0 p-0 flex flex-col">
          {NAV_LINKS.map(({ label, section }) => (
            <li
              key={section}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => scrollToSection(section)}
                className={navMobile}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
