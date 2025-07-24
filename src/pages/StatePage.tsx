import { useParams } from "react-router-dom";
import usStates from "../data/usStates";

export default function StatePage() {
  const { stateCode } = useParams();
  const state = usStates.find((s) => s.code === stateCode);

  if (!state) return <p>État introuvable</p>;

  return (
    <div>
      <h1>{state.name}</h1>
      <img src={state.image} alt={state.name} />
      <p>
        Contenu à venir : liste des parcs de {state.name}...capital:
        {state.capital}
      </p>
    </div>
  );
}
