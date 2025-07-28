import { useState } from "react";
import Restaurant from "../components/Restaurant";
import Activity from "../components/Activity";

export default function CityPage() {
  const [activeComponent, setActiveComponent] = useState("activity");

  return (
    <>
      <section className="all-buttons">
        <button type="button" onClick={() => setActiveComponent("activity")}>
          À voir
        </button>
        <button type="button" onClick={() => setActiveComponent("restaurant")}>
          Restaurant
        </button>
        <button type="button" onClick={() => setActiveComponent("hotel")}>
          Hôtels
        </button>
      </section>
      <section>
        {activeComponent === "activity" && <Activity />}
        {activeComponent === "restaurant" && <Restaurant />}
      </section>
    </>
  );
}
