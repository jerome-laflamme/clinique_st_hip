import { useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import { NavigationContext } from "./context/NavigationContext.jsx";
import Header from "./components/Header.jsx";

// Route order used to derive slide direction
const ROUTE_ORDER = ["/", "/services"];

function AppContent() {
  const location = useLocation();

  // ── Direction tracking ────────────────────────────────────────────────────
  // Computed during render (not in an effect) so AnimatePresence receives the
  // correct direction before it starts the exit animation.
  const prevPathnameRef = useRef(location.pathname);
  const directionRef = useRef(1);

  if (prevPathnameRef.current !== location.pathname) {
    const prevIdx = ROUTE_ORDER.indexOf(prevPathnameRef.current);
    const currIdx = ROUTE_ORDER.indexOf(location.pathname);
    directionRef.current = currIdx >= prevIdx ? 1 : -1;
    prevPathnameRef.current = location.pathname;
  }

  // ── AOS ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    return () => {
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.classList.remove("aos-init", "aos-animate");
      });
    };
  }, []);

  // Scroll-to-top and AOS refresh are handled inside <PageTransition>
  // (it mounts only after the exit animation finishes, so no scroll jump).

  return (
    <NavigationContext.Provider value={directionRef.current}>
      {/* Header lives outside AnimatePresence so it stays fully visible
          and is never affected by the page-content opacity transition. */}
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
