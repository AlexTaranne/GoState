import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import usStates from "../data/usStates";
import "../styles/navbar.css";

const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { stateCode, villeNom } = useParams();
  const location = useLocation();

  const state = usStates.find((s) => s.code === stateCode);
  const villes = state?.villes?.map((v) =>
    typeof v === "string" ? { nom: v } : v,
  );
  const ville = villes?.find(
    (v) => normalize(v.nom) === villeNom?.toLowerCase(),
  );

  const isHome = location.pathname === "/";
  const backgroundImage = isHome
    ? "/public/pic-home.png"
    : ville?.landscapeImage?.[0] ||
      state?.landscapeImage?.[0] ||
      "/public/pic-states.webp";

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "circle(170% at 50% -50%)",
        height: "70vh",
      }}
      className="relative overflow-hidden text-white flex items-center justify-center"
    >
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-50">
        <Link to="/">
          <img src="/public/logo-gostate.png" alt="Logo" className="logo" />
        </Link>
      </nav>

      {/* Burger Menu séparé */}
      <Menu
        right
        isOpen={isOpen}
        onStateChange={(state: { isOpen: boolean }) => setIsOpen(state.isOpen)}
      >
        <Link to="/allstates" className="menu-item" onClick={closeMenu}>
          États
        </Link>
        <Link to="/" className="menu-item" onClick={closeMenu}>
          Villes
        </Link>
        <Link to="/about" className="menu-item" onClick={closeMenu}>
          À propos
        </Link>
      </Menu>
    </header>
  );
}
