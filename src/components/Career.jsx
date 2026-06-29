import { Link } from "react-router-dom";
import { container, sectionLabel, paraBody } from "../styles.js";

export default function Career() {
  return (
    <section id="career" className="py-[60px] max-[768px]:py-5 overflow-hidden">
      <div className={container} data-aos="fade-up">
        <div className="flex flex-col lg:flex-row-reverse gap-0">
          <div
            className="lg:w-1/2 flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-servicesBox p-10 max-md:p-5">
              <h3 className={`${sectionLabel} mb-2`}>Carrière</h3>
              <h2 className="font-display text-2xl font-semibold text-primaryDarker mb-4 max-[768px]:text-xl">
                Venez nous rejoindre
              </h2>
              <p className={`${paraBody} my-[15px] mb-[30px]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link
                to="/candidature"
                aria-label="Formulaire de candidature"
                className="font-display inline-flex items-center justify-center gap-2 px-10 py-[15px] rounded bg-primaryDark text-white font-semibold text-base tracking-wide shadow-[0_5px_25px_rgba(65,241,200,0.3)] transition-all duration-300 hover:bg-primaryDarker hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(65,241,200,0.4)] active:scale-[0.98]"
              >
                <span>Formulaire de candidature</span>
                <i className="bi bi-arrow-right text-lg" />
              </Link>
            </div>
          </div>

          <div
            className="lg:w-1/2 flex items-center bg-slate-100"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="/assets/img/doctor.jpg"
              className="w-full h-full object-cover"
              alt="Docteur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
