import { useParams } from "react-router-dom";
import usStates from "../data/usStates";

export type Ville = {
  nom: string;
  aVoir?: string[];
  restaurants?: string[];
  hotels?: string[];
  pictures?: string[];
};

export default function CityPage() {
  const { stateCode, villeNom } = useParams();

  const state = usStates.find((s) => s.code === stateCode);

  // ✅ Normalisation sécurisée
  const villes = state?.villes?.map((v): Ville => {
    if (typeof v === "string") {
      return { nom: v };
    }
    return {
      nom: v.nom,
      aVoir: v.aVoir ?? [],
      restaurants: v.restaurants ?? [],
      hotels: v.hotels ?? [],
      pictures: v.pictures ?? [],
    };
  });

  // ✅ Recherche de la ville par nom exact (non sensible à la casse/espaces)
  const ville = villes?.find(
    (v) => v.nom.toLowerCase() === villeNom?.toLowerCase().replace(/-/g, " "),
  );

  if (!state || !ville) return <p>Ville introuvable</p>;
  console.info(ville);

  return (
    <div>
      <h1>{ville.nom}</h1>
      <p>
        <strong>État :</strong> {state.name}
      </p>
      {ville.pictures && ville.pictures.length > 0 ? (
        <ul>
          {ville.pictures.map((r) => (
            <img key={r} src={r} alt="pics" />
          ))}
        </ul>
      ) : (
        <p>Non renseigné</p>
      )}
      <p>
        <strong>À voir :</strong>{" "}
        {ville.aVoir && ville.aVoir.length > 0
          ? ville.aVoir.join(", ")
          : "Non renseigné"}
      </p>

      <p>
        <strong>Restaurants :</strong>
      </p>
      {ville.restaurants && ville.restaurants.length > 0 ? (
        <ul>
          {ville.restaurants.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      ) : (
        <p>Non renseigné</p>
      )}

      <p>
        <strong>Hôtels :</strong>
      </p>
      {ville.hotels && ville.hotels.length > 0 ? (
        <ul>
          {ville.hotels.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : (
        <p>Non renseigné</p>
      )}
    </div>
  );
}
