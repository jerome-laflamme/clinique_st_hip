import { useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import Hero from "../components/Hero.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Welcome from "../components/Welcome.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import Team from "../components/Team.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Popup from "../components/Popup.jsx";
import BackToTop from "../components/BackToTop.jsx";

export default function Home() {
  const openPopupRef = useRef(null);
  const location = useLocation();

  // Callback lets Popup hand its open function up to Hero
  const handlePopupRef = useCallback((fn) => {
    openPopupRef.current = fn;
  }, []);

  const openPopup = () => {
    openPopupRef.current?.();
  };

  // Scroll to hash section when navigating from another page (e.g. /services → /#contact)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Small delay to let the page render first
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const header = document.getElementById("header");
        const offset = header ? header.offsetHeight : 80;
        window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <PageTransition>
      <Popup onOpen={handlePopupRef} />
      <Hero onOpenPopup={openPopup} />
      <HeroBanner />
      <main id="main">
        <Welcome />
        <ServicesSection />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
