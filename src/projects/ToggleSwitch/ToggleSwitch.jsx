import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch = () => {
  const [isON, setIsOn] = useState(false);

  const handleTOggleSwitch = () => {
    setIsOn(!isON);
  };

  return (
    <>
      <h1 className="center">
        Toggle Switch{" "}
        <IoIosSwitch
          style={{
            color: "red",
          }}
        />
      </h1>
      <div
        className="toggle-switch"
        onClick={handleTOggleSwitch}
        style={{ backgroundColor: isON ? "#4caf50" : "#f44336" }}
      >
        <div className={`switch ${isON ? "on" : "off"}`}>
          <span className="switch-state">{isON ? "on" : "Off"}</span>
        </div>
      </div>
    </>
  );
};
