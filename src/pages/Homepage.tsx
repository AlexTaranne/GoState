import { Link } from "react-router-dom";

import "../styles/homepage.css";

export default function Homepage() {
  return (
    <section>
      <Link to="/allstates">États</Link>
      <Link to="/">Villes</Link>
    </section>
  );
}
