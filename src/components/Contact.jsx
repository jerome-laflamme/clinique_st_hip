import {
  container,
  sectionHeader,
  sectionTitle,
  sectionDesc,
  para,
} from "../styles.js";

// ── Local constants ───────────────────────────────────────────────────────────
const h3Contact =
  "font-display text-base font-semibold text-[var(--color-contact-h)]";
const cardContact =
  "flex items-start px-7 py-5 bg-contactCard rounded-[5px] shadow-[5px_10px_rgba(83,83,83,0.1)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5";

const CONTACT_ITEMS = [
  {
    icon: <i className="bi bi-building text-[27px] text-[var(--color-icon)]" />,
    title: "780 Ch des Hauteurs Bureau 201",
    subtitle: "Saint-Hippolyte, QC J8A 1H1",
  },
  {
    icon: (
      <i className="bi bi-telephone text-[27px] text-[var(--color-icon)]" />
    ),
    title: "+1 (450) 224-8271",
    subtitle: "Appelez-nous!",
  },
  {
    icon: (
      <img
        src="/assets/img/icons/copier.webp"
        alt="Télécopieur"
        className="h-[27px] w-[27px]"
      />
    ),
    title: "+1 (450) 224-1985",
    subtitle: "Télécopieur",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-bg py-[60px] max-[768px]:py-5 overflow-hidden"
    >
      <div className={container}>
        <div className={sectionHeader} data-aos="fade-up">
          <h3 className={sectionTitle}>Contact</h3>
          <p className={sectionDesc}>
            Nous prenons les appels du lundi au vendredi de 9h00 à 11h30 et de
            13h à 16h.
          </p>
          <p className={`${sectionDesc} !mt-2`}>
            Attention les horaires de fin de semaine sont variables, veuillez
            vérifier avant tout déplacement.
          </p>
        </div>

        {/* items-stretch (default) makes both columns the same height.
             The map column drives the height via min-h-[420px];
             the cards column fills that height and justify-between
             distributes the 3 cards evenly. */}
        <div className="flex gap-8 max-lg:flex-col">
          {/* Cards column — stretches to map height, spaces cards evenly */}
          <div
            className="w-[35%] max-lg:w-full flex flex-col justify-between max-lg:gap-3"
            data-aos="fade-right"
          >
            {CONTACT_ITEMS.map(({ icon, title, subtitle }) => (
              <div key={title} className={cardContact}>
                <span className="mr-5 shrink-0">{icon}</span>
                <div>
                  <h3 className={h3Contact}>{title}</h3>
                  <p
                    className={`${para} text-[var(--color-contact-p)] text-sm mb-0 pr-2.5`}
                  >
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map column — flex-col so the iframe can fill via flex-1 */}
          <div
            className="w-[60%] max-lg:w-full max-[991px]:mt-[50px] flex flex-col min-h-[420px]"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <iframe
              className="flex-1 w-full min-h-[420px] max-lg:min-h-[500px] rounded-[20px]"
              title="Carte de la clinique"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.387936533491!2d-74.00930008435027!3d45.863547679107704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf326c4a097e43%3A0xe6e692ee78bf2940!2sClinique%20M%C3%A9dicale%20St-hippolyte!5e0!3m2!1sen!2sca!4v1664799646473!5m2!1sen!2sca"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
