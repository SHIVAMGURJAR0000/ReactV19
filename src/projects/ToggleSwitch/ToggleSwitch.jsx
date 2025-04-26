import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isON, setIsOn] = useState(false);

  const handleTOggleSwitch = () => {
    setIsOn(!isON);
  };

  return (
    <div
      className="toggle-switch"
      onClick={handleTOggleSwitch}
      style={{ backgroundColor: isON ? "#4caf50" : "#f44336" }}
    >
      <div className={`switch ${isON ? "on" : "off"}`}>
        <span className="switch-state">{isON ? "on" : "Off"}</span>
      </div>
    </div>
  );
};
