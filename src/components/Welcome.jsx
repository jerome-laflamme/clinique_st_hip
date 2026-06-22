import { useState } from "react";
import { container, para, sectionLabel } from "../styles.js";

// ── Local constants ───────────────────────────────────────────────────────────
const accordionBtn =
  "w-full flex items-center justify-between text-left py-4 px-0 bg-transparent border-0 cursor-pointer transition-all duration-300 text-base text-heading hover:text-primaryDark font-medium";
const accordionIcon =
  "bi bi-chevron-down text-sm text-secondary ml-2 transition-transform duration-300";

const ACCORDION_ITEMS = [
  {
    id: 1,
    title: "Finissant(e) en médecine familiale?",
    content: (
      <>
        <p className="text-base font-s mb-3">
          Vous terminez votre résidence en médecine familiale? Découvrez les
          possibilités de pratique dans les Laurentides.
        </p>
        <a
          href="https://www.santelaurentides.gouv.qc.ca/espace-employes-et-partenaires/espace-medecins/departement-territorial-de-medecine-familiale-dtmf/?utm_source=Cyberimpact&utm_medium=email&utm_campaign=Infolettre-du-29-janvier-2026"
          className="text-base font-semibold"
        >
          En savoir plus
        </a>
      </>
    ),
  },
  {
    id: 2,
    title: "Consultation médicale",
    content: (
      <>
        <a
          href="https://www.rvsq.gouv.qc.ca"
          className="text-base font-semibold"
        >
          Prendre un rendez-vous
        </a>
        <p className={`${para} my-3`}>
          Dans le but de vous faciliter l'accès à nos services nous innovons
          maintenant en vous offrant l'opportunité de prendre vos rendez-vous en
          ligne.
        </p>
        <p className={`${para}`}>
          Vous pouvez aussi consulter le guichet d'accès à la première ligne au
          numéro de téléphone :{" "}
          <a href="tel:1-833-638-960" aria-label="Telephone">
            1-833-638-960
          </a>
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Prélèvements sanguins",
    content: (
      <>
        <a
          href="https://www.santelaurentides.gouv.qc.ca/nous-joindre/centres-de-prelevement/"
          className="text-base font-semibold pb-3"
        >
          Centres de prélèvement - CISSS des Laurentides
        </a>
        <p className={`${para} mb-3`}>
          Il est possible de joindre la centrale de rendez-vous du lundi au
          vendredi, entre 7 h et 15 h, en composant le 1 833 991-2661
        </p>
        <p className={`${para} mb-3`}>
          Vous pouvez aussi prendre rendez-vous avec une infirmière (avec frais
          et reçu pour assurance) au 450-224-4388.
        </p>
        <p className={`${para} mb-0`}>
          Le service est disponible sur place au 973 Ch. Des Hauteurs,
          St-Hippolyte ou à domicile.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Informations générales sur la clinique",
    content: (
      <>
        <h5 className="text-base font-semibold mb-2 text-primaryDark">
          Accessibilité :
        </h5>
        <ul className={`list-disc pl-5 space-y-0 ${para} mb-4`}>
          <li>Ascenseur : oui</li>
          <li>Escalier : oui</li>
          <li>Rampe d'accès : non</li>
          <li>Stationnement : Oui Gratuit</li>
          <li>Transport en commun : Non</li>
        </ul>
        <h5 className="text-base font-semibold mb-2 text-primaryDark">
          Ligne téléphonique Coronavirus :
        </h5>
        <div className={`${para} mb-4`}>
          <i className="fas fa-phone-alt"></i>
          <a className={`${para}`} href="tel:1-877-644-4545">
            1-877-644-4545
          </a>
          <br />
          Info santé :{" "}
          <a className={`${para}`} href="tel:8-1-1">
            8-1-1
          </a>
        </div>
        <h5 className="text-base font-semibold mb-2 text-primaryDark">
          Guichet d'accès à la première ligne (GAP)
        </h5>
        <a href="tel:1-833-638-1960" className={`${para} mb-0`}>
          <i className="fas fa-phone-alt"></i>
          1-833-638-1960
        </a>
      </>
    ),
  },
];

export default function Welcome() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="about" className="pb-0">
      <div className="py-[120px] max-[767px]:pb-[100px]">
        <div className={container}>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 lg:self-center">
              <img
                src="/assets/img/jevelin/about_photo.png"
                alt="Consultation médicale"
                className="w-full object-contain"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-[90px] max-[767px]:mt-10 max-[991px]:mt-[100px]">
              <h2 className="font-display text-[36px] font-medium mb-2.5 max-[767px]:text-[30px]">
                Bienvenue
              </h2>
              <h6 className={`${sectionLabel} mb-4`}>
                À propos de la clinique
              </h6>
              <p className={`${para} mb-6`}>
                En 2010, la Clinique Médicale de St-Hippolyte est devenue un
                Groupe de Médecine Familiale, faisant partie du GMF du grand
                St-Jérôme, nous travaillons constamment à l'amélioration de nos
                services.
              </p>

              <div className="border-t border-gray-200">
                {ACCORDION_ITEMS.map(({ id, title, content }) => {
                  const isOpen = openId === id;
                  return (
                    <div key={id} className="border-b border-gray-200">
                      <button
                        onClick={() => toggle(id)}
                        className={accordionBtn}
                      >
                        <span>{title}</span>
                        <i
                          className={`${accordionIcon} ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div className={`accordion-body${isOpen ? " open" : ""}`}>
                        <div>
                          <div className="pb-5 pt-1">{content}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
