import { useState, useEffect } from "react";

export default function Popup({ onOpen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("popupShown")) setVisible(true);
  }, []);

  useEffect(() => {
    if (onOpen) onOpen(() => setVisible(true));
  }, [onOpen]);

  const close = () => {
    setVisible(false);
    localStorage.setItem("popupShown", "true");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--color-overlay-popup)]"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="bg-white rounded-[20px] relative overflow-auto shadow-[10px_10px_10px_rgba(0,0,0,0.2)] w-[55%] min-w-[600px] max-w-[1000px] p-[75px] text-[var(--color-nav-active)] max-h-[90vh] max-[1024px]:w-[90%] max-[1024px]:min-w-0 max-[1024px]:p-[50px] max-[768px]:p-[30px]">
        <button
          onClick={close}
          aria-label="Fermer"
          className="max-width-md:absolute top-[75px] right-[75px] flex justify-end w-full mb-5 gap-[5px] bg-transparent border-0 cursor-pointer text-base font-bold uppercase text-[var(--color-nav-active)] hover:text-primary transition-colors duration-300 max-[1024px]:top-[50px] max-[1024px]:right-[50px] max-[768px]:top-[30px] max-[768px]:right-[30px]"
        >
          <span>Fermer</span>
          <i className="bi bi-x text-2xl leading-none" />
        </button>

        <h2 className="text-[2.5rem] font-[570] tracking-[-1px] leading-[1] mb-0 max-[768px]:text-[1.8rem]">
          Prenez note de notre <br />
          <span className="text-primary font-bold">nouveau fonctionnement</span>
        </h2>

        <div
          className="w-[90%] h-[5px] my-5"
          style={{
            background:
              "linear-gradient(to right, var(--color-primary), transparent)",
          }}
        />

        <h3 className="text-[22px] font-bold tracking-[-1px] leading-[25px] mb-[30px] max-[768px]:text-lg max-[768px]:mb-5">
          Nous utilisons maintenant le logiciel Navig, pour mieux diriger les
          patients qui se présente ou appellent dans les cliniques.
        </h3>

        <p className="text-[17px] leading-[25px] mb-[15px] w-[98%] max-[768px]:text-[15px] max-[768px]:leading-[22px]">
          C'est une nouvelle exigence du ministère pour tous les GMF.
        </p>
        <p className="text-[17px] leading-[25px] mb-[15px] w-[98%] max-[768px]:text-[15px] max-[768px]:leading-[22px]">
          Soyez avisé que nous avons un volume d'appel très important et tous
          les efforts sont déployés afin de vous offrir le meilleur service
          possible. Aucun langage grossier ne sera toléré envers nos employés.
        </p>
        <p className="text-[17px] leading-[25px] mb-[15px] w-[98%] max-[768px]:text-[15px] max-[768px]:leading-[22px]">
          Dorénavant certaines questions vous seront posées par les
          téléphonistes afin de mieux cibler votre besoin. Nous vous
          encourageons à prendre le temps nécessaire pour nous décrire avec
          honnêteté et précisions vos symptômes.
        </p>
        <p className="text-[17px] leading-[25px] mb-0 w-[98%] max-[768px]:text-[15px] max-[768px]:leading-[22px]">
          Vos informations sont essentielles pour une évaluation précise de
          votre situation. Nous travaillons très fort à nous assurer que vous
          recevez le bon service par le bon professionnel, alors il se peut que
          vous soyez référé à quelqu'un d'autre qu'un médecin, selon votre
          situation.
        </p>
      </div>
    </div>
  );
}
