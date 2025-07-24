import { Link } from "react-router-dom";
import usStates from "../data/usStates";

import "../styles/homepage.css";

export default function Homepage() {
  return (
    <section>
      <h1>Go State</h1>
      <img src="/mapusa.png" alt="" className="img-head" />
      <div className="states-grid">
        {usStates.map((state) => (
          <Link
            to={`/state/${state.code}`}
            key={state.code}
            className="state-card"
          >
            <img src={state.image} alt="" />
            {state.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
