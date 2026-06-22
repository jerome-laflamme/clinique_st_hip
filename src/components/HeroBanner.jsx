import * as s from "../styles.js";

const h3banner = "text-xl font-semibold text-gray-500";
const icon = "text-secondary mb-5 mt-3";

// Hero-banner: the three info cards below the hero.
// overflow-hidden is only on mobile so the center card's ::before can bleed on desktop.
export default function HeroBanner() {
  return (
    <div className="bg-heroBanner">
      <div className={`${s.wrapper} max-[1025px]:overflow-hidden`}>
        <div className="grid grid-cols-3 max-[1025px]:grid-cols-1">
          {/* ── Phone ──────────────────────────────────────────── */}
          <div className="flex flex-col justify-center px-[50px] py-[30px] rounded-[20px] max-[767px]:px-[30px] max-[767px]:py-[50px]">
            <div className="pb-[30px] mt-3">
              <i className={`bi bi-telephone text-[40px] ${icon}`} />
            </div>
            <h3 className={h3banner}>+1 (450) 224-8271</h3>
            <p className={`${s.para} mt-2.5 mb-[26px]`}>
              Appelez nous, il nous fera plaisir de répondre à vos questions.
            </p>
          </div>

          {/* ── Patient portal (center — taller) ────────────────── */}
          <div className="center-service p-8 rounded-[20px] max-md:px-[30px] max-md:py-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              fill="currentColor"
              className={icon}
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z" />
              <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z" />
            </svg>
            <h3 className={h3banner}>Portail Client</h3>
            <p className={`${s.para} mt-2.5 mb-[26px]`}>
              Consultez le portail patient MYLE
            </p>
            <div className="flex flex-row flex-wrap width-lg:justify-between gap-2">
              <a
                href="https://cmsthippolyte.portail.medfarsolutions.com/fr/login"
                className="bg-transparent text-gray-400 border-2 border-gray-400 px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-gray-500 font-semibold"
              >
                Votre portail
              </a>
              <a
                href="https://rvsq.gouv.qc.ca/accueil/index.html"
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white font-semibold"
              >
                Prendre RDV
              </a>
            </div>
          </div>

          {/* ── Opening hours ──────────────────────────────────── */}
          <div className="flex flex-col justify-center px-[50px] py-[30px] rounded-[20px] max-[767px]:px-[30px] max-[767px]:py-[50px]">
            <div className="pb-[30px]">
              <i className="bi bi-clock text-[40px] text-secondary" />
            </div>
            <h3 className={h3banner}>Heures d'ouverture</h3>
            <p className={`${s.para} mt-2.5 mb-[26px]`}>
              Lun - Ven : 8h à 17h
              <br />
              Soir - Sam - Dim : Variables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
