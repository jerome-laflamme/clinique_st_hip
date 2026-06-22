import { Link } from "react-router-dom";
import { wrapper, paraBody } from "../styles.js";

export default function Footer() {
  return (
    <footer id="footer" className="py-[50px] text-sm">
      <div className={wrapper}>
        <div className="flex flex-wrap justify-between items-end gap-8 max-lg:flex-col max-lg:items-center">
          <div className="max-w-[40%] max-lg:max-w-[70%] max-lg:text-center">
            <Link
              to="/"
              aria-label="Aller à l'accueil"
              className="inline-block mb-[15px]"
            >
              <img
                src="/assets/img/logo/logo_modif.webp"
                alt="Logo clinique"
                className="h-[80px] mb-[10px] transition-opacity duration-300 hover:opacity-80"
              />
            </Link>
            <p className={`${paraBody} leading-6 m-0`}>
              Notre équipe de professionnels est là pour guider nos patients et
              leurs familles tout au long de leur parcours de santé.
            </p>
          </div>

          <div className="max-lg:w-full max-lg:text-center w-[47%]">
            <h4 className="font-display text-base font-bold text-primary-dark uppercase pb-3 text-right max-lg:text-center">
              Contactez Nous
            </h4>
            <p
              className={`${paraBody} text-right leading-6 m-0 max-lg:text-center`}
            >
              <strong>Téléphone :</strong> +1 (450) 224-8271
              <br />
              <strong>Adresse :</strong> 780 Ch des Hauteurs Bureau 201,
              <br />
              Saint-Hippolyte, QC J8A 1H1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
