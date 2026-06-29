import {
  container,
  sectionHeader,
  sectionTitle,
  sectionDesc,
  para,
} from "../styles.js";

// ── Local constants ───────────────────────────────────────────────────────────
const h3Card = "font-display text-xl font-medium mb-0";
const cardTeam =
  "bg-white rounded-[20px] shadow-[0_6px_10px_rgba(0,0,0,0.04)] w-[30%] p-3 max-[1024px]:w-full group transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1";

const DEPARTMENTS = [
  {
    img: "/assets/img/icons/icon_outil_medecin.jpeg",
    alt: "Instruments médicaux",
    content: (
      <>
        <h3 className={h3Card}>Médecins</h3>
        <p className={`${para} mt-1.5 mb-2.5`}>
          Notre équipe est constitué de huit médecins omnipraticien(ne)s :
        </p>
        <ul className={`list-disc pl-5 space-y-0.5 ${para}`}>
          <li>Dre Michelle Darveau</li>
          <li>Dre France Duquette</li>
          <li>Dr Francis Gossard</li>
          <li>Dr Laurent Jacob</li>
          <li>Dre Sylvianne Gauthier</li>
          <li>Dre Annie Rousseau</li>
          <li>Dre Brigitte St-Pierre</li>
          <li>Dre Laura Sang</li>
        </ul>
      </>
    ),
  },
  {
    img: "/assets/img/icons/icon_oeil.jpeg",
    alt: "Oeil",
    content: (
      <>
        <h3 className={h3Card}>Infirmière practiciennes spécialisées</h3>
        <p className={`${para} mt-1.5 mb-2.5`}>
          Nous avons deux infirmières praticiennes spécialisées (IPS)
        </p>
        <ul className={`list-disc pl-5 space-y-0.5 ${para} mb-4`}>
          <li>Vicky Cowan-Cyr</li>
          <li>Geneviève Tremblay-Cloutier</li>
        </ul>
        <h3 className={h3Card}>Infirmière</h3>
        <p className={`${para} mt-1.5 mb-2.5`}>
          Nous avons trois infirmières cliniciennes à notre disposition
        </p>
        <ul className={`list-disc pl-5 space-y-0.5 ${para}`}>
          <li>Isabelle Brisebois</li>
          <li>Manon Ouellet</li>
          <li>Catherine Senecal</li>
        </ul>
      </>
    ),
  },
  {
    img: "/assets/img/icons/icon_prof_santé.jpeg",
    alt: "Professionnel de santé",
    content: (
      <>
        <h3 className={h3Card}>Spécialistes</h3>
        <p className={`${para} mt-1.5 mb-2.5`}>
          Voici les spécialistes qui participent au bon déroulement de la
          clinique, ce service est offert à la clientèle du GMF :
        </p>
        <h3 className={`${h3Card} mb-2.5 !text-[1rem]`}>Pharmacienne</h3>
        <ul className={`list-disc pl-5 space-y-0.5 ${para} mt-1.5`}>
          <li>Lysanne Villemure</li>
        </ul>
        <h3 className={`${h3Card} mt-2.5 !text-[1rem]`}>
          Travailleuse sociale
        </h3>
        <ul className={`list-disc pl-5 space-y-0.5 ${para} mt-1.5`}>
          <li>Nathalie Audet</li>
        </ul>
      </>
    ),
  },
];

export default function Team() {
  return (
    <section id="equipe">
      <div className="dept-bg pt-[120px] pb-[90px]">
        <div className={container}>
          <div className={sectionHeader} data-aos="fade-up">
            <h3 className={sectionTitle}>Notre équipe</h3>
            <p className={sectionDesc}>
              Notre équipe clinique regroupe huit médecins, ainsi que deux
              infirmières praticiennes spécialisées, trois infirmières
              cliniciennes, une pharmacienne et d'une travailleuse sociale. Nos
              intervenants sont soutenus par une agente administrative, quatre
              secrétaires médicales et une technicienne en administration. Les
              infirmières cliniciennes travaillent en collaboration avec les
              médecins de la Clinique afin d'assurer conjointement le suivi de
              certaines maladies chroniques.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-[30px]">
            {DEPARTMENTS.map(({ img, alt, content }, i) => (
              <div
                key={alt}
                className={cardTeam}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="overflow-hidden rounded-tl rounded-tr">
                  <img
                    src={img}
                    alt={alt}
                    className="w-[100px] mt-2.5 mx-5 mb-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="px-[30px] py-6">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
