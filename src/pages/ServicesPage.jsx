import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/BackToTop.jsx";
import { container, sectionHeader, sectionTitle, paraBody } from "../styles.js";

// ── Local constants ───────────────────────────────────────────────────────────
const h3Card = "font-display text-lg font-bold text-primaryDarker mb-1";
const h4Card = "text-sm text-[var(--color-tab-text)] italic mb-3";
const iconWrap =
  "w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4 shrink-0";
const iconCls = "text-[22px] text-primaryDark";
const card =
  "bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-sm flex flex-col";

// ── Services offerts cards ────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "bi-heart-pulse",
    title: "Examen médical",
    subtitle:
      "Rendez-vous annuel ou suivi avec votre médecin de famille ou IPS",
    body: (
      <p className={paraBody}>
        Notre équipe de professionnels est là pour guider nos patients et leurs
        familles tout au long de leur parcours de santé.
      </p>
    ),
  },
  {
    icon: "bi-activity",
    title: "Suivi infirmière",
    subtitle: "Des soins de qualité pour notre clientèle GMF",
    body: (
      <p className={paraBody}>
        Nos infirmières assurent le suivi du diabète, de l'hypertension
        artérielle, de l'hypercholestérolémie et de la santé respiratoire
        (spirométrie). Elles réalisent également des évaluations cognitives et
        offrent un soutien personnalisé à chaque patient.
      </p>
    ),
  },
  {
    icon: "bi-award",
    title: "Nos spécialistes",
    subtitle: "Des services spécialisés accessibles à tous nos patients",
    body: (
      <p className={paraBody}>
        Tous nos patients peuvent bénéficier de ces services personnalisés.{" "}
        <a href="https://www.rvsq.gouv.qc.ca">Prenez rendez-vous en ligne.</a>
      </p>
    ),
  },
  {
    icon: "bi-file-earmark-medical",
    title: "Renouvellement de prescription",
    subtitle: "Plusieurs façons simples de renouveler votre médication",
    body: (
      <>
        <p className={`${paraBody} mb-3`}>
          Demandez à votre pharmacien de nous télécopier la demande au{" "}
          <a href="tel:+14502241985">
            <strong>450 224-1985</strong>
          </a>
          , ou apportez le formulaire à notre réception. Votre médecin vous
          contactera si une rencontre est nécessaire.
        </p>
        <p className={paraBody}>
          Pour éviter tout délai, ayez la liste complète de vos médicaments lors
          de votre prochain rendez-vous.
        </p>
      </>
    ),
  },
];

// ── Rendez-vous cards ─────────────────────────────────────────────────────────
const RDV = [
  {
    icon: "bi-calendar-check",
    title: "Rendez-vous en ligne",
    subtitle: "Via la plateforme Rendez-vous santé Québec",
    colSpan: false,
    body: (
      <p className={paraBody}>
        Pour améliorer l'accessibilité aux soins, vous pouvez prendre ou annuler
        un rendez-vous directement sur{" "}
        <a href="https://www.rvsq.gouv.qc.ca">rendez-vous santé Québec</a>, en
        tout temps, sans attendre au téléphone.
      </p>
    ),
  },
  {
    icon: "bi-telephone",
    title: "Rendez-vous par téléphone",
    subtitle: "Toujours disponible pour nos patients",
    colSpan: false,
    body: (
      <>
        <p className={`${paraBody} mb-3`}>
          Appelez le{" "}
          <a href="tel:+14502248271">
            <strong>450-224-8271</strong>
          </a>{" "}
          de 9h00 à 11h30 ou de 13h00 à 16h00, du lundi au vendredi.
        </p>
        <ul className={`list-disc pl-5 space-y-1 ${paraBody}`}>
          <li>Option 6 — Prendre un rendez-vous ou parler à une secrétaire</li>
          <li>Option 1 — Annuler un rendez-vous</li>
        </ul>
      </>
    ),
  },
  {
    icon: "bi-lightning-charge",
    title: "Sans rendez-vous",
    subtitle: "Pour les urgences mineures survenues récemment",
    colSpan: true,
    body: (
      <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
        <div>
          <p className={`${paraBody} mb-3`}>
            Une <strong>urgence mineure</strong> est un problème de santé
            récemment apparu nécessitant une consultation dans les 24 à 48 h
            (ex. : fièvre persistante, infection urinaire, grippe, mal de gorge,
            vaginite).
          </p>
          <p className="text-sm font-semibold text-body mb-2">
            Non disponible pour :
          </p>
          <ul className={`list-disc pl-5 space-y-1 ${paraBody}`}>
            <li>Bilan de santé</li>
            <li>Formulaires</li>
            <li>Problématique de santé chronique</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-body mb-2">
            Marche à suivre le jour même :
          </p>
          <ul className={`list-disc pl-5 space-y-2 ${paraBody}`}>
            <li>
              Composez le{" "}
              <a href="tel:+14502248271">
                <strong>450-224-8271</strong>
              </a>
              , option 6, à partir de 9h00. Ayez votre carte d'assurance-maladie
              en main.
            </li>
            <li>
              Carte expirée? Contactez la RAMQ au{" "}
              <a href="tel:+15148643411">
                <strong>514-864-3411</strong>
              </a>
              .
            </li>
            <li>
              Chaque personne doit s'inscrire individuellement (1 inscription =
              1 consultation).
            </li>
            <li>
              Pour annuler, rappelez au{" "}
              <a href="tel:+14502248271">
                <strong>450-224-8271</strong>
              </a>
              , option 1.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="pt-[100px]">
        <section className="services-page-bg py-[60px] max-[768px]:py-5 overflow-hidden">
          <div className={container}>
            <div className={sectionHeader} data-aos="fade-up">
              <h1 className={sectionTitle}>NOS SERVICES</h1>
            </div>

            <div className="w-[95%] mx-auto flex flex-col gap-8">
              {/* ── Services offerts ──────────────────────────────── */}
              <div data-aos="fade-up">
                <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
                  {SERVICES.map(({ icon, title, subtitle, body }, i) => (
                    <div
                      key={title}
                      className={card}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <div className={iconWrap}>
                        <i
                          className={`bi ${icon} ${iconCls}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className={h3Card}>{title}</h3>
                      {subtitle && <p className={h4Card}>{subtitle}</p>}
                      {body}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Rendez-vous ───────────────────────────────────── */}
              <div data-aos="fade-up">
                <h2 className="text-center text-primaryDarker font-display text-xl font-bold mb-10 drop-shadow">
                  Rendez-vous avec un professionnel
                </h2>
                <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
                  {RDV.map(({ icon, title, subtitle, body, colSpan }, i) => (
                    <div
                      key={title}
                      className={`${card} ${colSpan ? "col-span-2 max-[640px]:col-span-1" : ""}`}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <div className={iconWrap}>
                        <i
                          className={`bi ${icon} ${iconCls}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className={h3Card}>{title}</h3>
                      {subtitle && <p className={h4Card}>{subtitle}</p>}
                      {body}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p
              className="mt-8 text-base text-white w-[95%] mx-auto drop-shadow"
              data-aos="fade-up"
            >
              <Link to="/">← Retourner à la page d'accueil</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
