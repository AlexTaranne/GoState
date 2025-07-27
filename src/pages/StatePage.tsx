import { Link, useParams } from "react-router-dom";
import usStates from "../data/usStates";
import "../styles/statepage.css";
import BlurText from "../components/BlurText";

type Ville = {
  nom: string;
  aVoir?: string[];
  restaurants?: string[];
  hotels?: string[];
};

type Etat = {
  code: string;
  name: string;
  image: string;
  capital: string;
  population?: number;
  superficie?: number;
  surnom?: string;
  devise?: string;
  villes?: Ville[];
};

export default function StatePage() {
  const { stateCode } = useParams<{ stateCode: string }>();
  const state: Etat | undefined = usStates
    .map((s) => ({
      ...s,
      capital: s.capital || "Unknown",
      villes: Array.isArray(s.villes)
        ? s.villes.map((v) => (typeof v === "string" ? { nom: v } : v))
        : undefined,
    }))
    .find((s) => s.code === stateCode);

  if (!state) return <p>État introuvable</p>;

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section>
      <div className="flag-name">
        <BlurText
          text={state.name}
          delay={200}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl mb-8 font-verdana"
        />

        <img src={state.image} className="flag" alt="flag" />
      </div>
      <div>
        <p>Capital : {state.capital}</p>
        <p>Contenu à venir : liste des parcs de {state.name}</p>

        <h2>Villes</h2>
        {state.villes?.map((ville) =>
          ville?.nom ? (
            <Link
              key={ville.nom}
              to={`/city/${state.code}/${ville.nom.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3>{ville.nom}</h3>
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
}
