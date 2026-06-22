import { wrapper } from "../styles.js";

// ── Local constant ───────────────────────────────────────────────────────────
const btnGhost =
  "font-display border-2 border-[var(--color-primary)] rounded-[3px] px-[25px] py-[10px] bg-transparent border-0 cursor-pointer text-primary font-bold text-base uppercase tracking-wide transition-all duration-300 hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] max-[768px]:bg-white";

export default function Hero({ onOpenPopup }) {
  return (
    <section
      id="hero"
      className="hero-bg flex items-center w-full h-[75vh] max-h-[715px] max-xl:h-[500px] max-[1024px]:mt-[120px] max-[1024px]:pb-[60px] max-[768px]:h-auto max-[768px]:py-[80px]"
    >
      <div className={wrapper}>
        <div className="max-w-xl">
          <h1
            data-aos="flip-up"
            data-aos-delay="200"
            className="font-display m-0 text-4xl font-semibold text-[var(--color-hero-title)] leading-tight max-[768px]:text-[32px]"
          >
            Clinique médicale
            <br />
            Saint-Hippolyte
          </h1>

          <h2
            data-aos="flip-up"
            data-aos-delay="600"
            className="font-display mt-4 text-xl text-[var(--color-hero-subtitle)] font-normal max-[768px]:text-xl"
          >
            Votre santé nous tient à coeur
          </h2>

          <div
            data-aos="flip-up"
            data-aos-delay="1000"
            className="mt-8 mb-5 w-[250px] max-[1024px]:w-full"
          >
            <img src="/assets/img/icons/icon_main.png" alt="Icônes services" />
          </div>

          <div data-aos="fade" data-aos-delay="1200">
            <div className="gradient-border">
              <button
                onClick={onOpenPopup}
                aria-label="Ouvrir l'avis important"
                className={btnGhost}
              >
                Avis important
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
