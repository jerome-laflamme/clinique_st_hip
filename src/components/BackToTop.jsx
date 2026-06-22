import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Retour en haut"
      className={`back-to-top-btn fixed right-[15px] bottom-[15px] z-[99999] bg-primary w-10 h-10 rounded flex items-center justify-center hover:bg-[var(--color-primary-light)] transition-colors duration-300 ${visible ? "active" : ""}`}
    >
      <i className="bi bi-arrow-up-short text-2xl text-white leading-none" />
    </a>
  );
}
