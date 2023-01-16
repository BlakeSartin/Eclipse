import React, { useState } from "react";
import "./Home.scss";
import DawnProfile from "./Dawn_Profile";
import DuskProfile from "./Dusk_Profile";

export default function Home() {
  const [isActive, setActive] = useState("false");
  const ToggleComponent = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {isActive ? <DawnProfile /> : <DuskProfile />}
      <button type="button" onClick={ToggleComponent}>
        Toggle
      </button>
    </div>
  );
}
