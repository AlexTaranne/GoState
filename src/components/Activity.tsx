import { useParams } from "react-router-dom";
import usStates from "../data/usStates";
import "../styles/citypage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BlurText from "../components/BlurText";

export type Ville = {
  nom: string;
  aVoir?: string[];
  restaurants?: string[];
  hotels?: string[];
  pictures?: string[];
  lieuxEmblematiques?: string[];
  museeAndCulture?: string[];
  nature?: string[];
};

export default function CityPage() {
  const { stateCode, villeNom } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 160,
    });
  }, []);

  const state = usStates.find((s) => s.code === stateCode);

  const villes = state?.villes?.map((v): Ville => {
    if (typeof v === "string") return { nom: v };
    return {
      nom: v.nom,
      aVoir: v.aVoir ?? [],
      restaurants: v.restaurants ?? [],
      hotels: v.hotels ?? [],
      pictures: v.pictures ?? [],
      lieuxEmblematiques: v.lieuxEmblematiques ?? [],
      museeAndCulture: v.museeAndCulture ?? [],
      nature: v.nature ?? [],
    };
  });

  const ville = villes?.find(
    (v) => v.nom.toLowerCase() === villeNom?.toLowerCase().replace(/-/g, " "),
  );

  if (!state || !ville) return <p>Ville introuvable</p>;

  const lieux = ville.lieuxEmblematiques?.filter(Boolean) ?? [];
  const museums = ville.museeAndCulture?.filter(Boolean) ?? [];
  const nature = ville.nature?.filter(Boolean) ?? [];
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div>
      <BlurText
        text={ville.nom}
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="city-title"
      />

      {ville.pictures && ville.pictures.length >= 3 ? (
        <div className="image-grid">
          <img
            src={ville.pictures[0]}
            alt="pic 1"
            className="main-pic"
            data-aos="fade-right"
          />
          <div>
            <strong>Lieux Emblématiques :</strong>
            {lieux.length > 0 ? (
              <ul className="places-list">
                {lieux.map((lieu) => (
                  <li key={lieu}>-{lieu}</li>
                ))}
              </ul>
            ) : (
              <p>Non renseigné</p>
            )}
          </div>

          <div className="side-pics">
            <img
              src={ville.pictures[1]}
              alt="pic 2"
              className="small-pic"
              data-aos="fade-left"
              data-aos-delay="600"
            />

            <div>
              <strong>Musées et culture :</strong>
              {museums.length > 0 ? (
                <ul className="places-list">
                  {museums.map((musee) => (
                    <li key={musee}>-{musee}</li>
                  ))}
                </ul>
              ) : (
                <p>Non renseigné</p>
              )}
            </div>

            <img
              src={ville.pictures[2]}
              alt="pic 3"
              className="small-pic"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <strong>Nature :</strong>
            {nature.length > 0 ? (
              <ul className="places-list">
                {nature.map((n) => (
                  <li key={n}>-{n}</li>
                ))}
              </ul>
            ) : (
              <p>Non renseigné</p>
            )}
          </div>
        </div>
      ) : (
        <p>Non renseigné</p>
      )}
    </div>
  );
}
