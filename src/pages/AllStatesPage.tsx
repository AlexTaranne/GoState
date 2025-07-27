import usStates from "../data/usStates";
import { Link } from "react-router-dom";

import "../styles/homepage.css";

export default function Homepage() {
  return (
    <section>
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
