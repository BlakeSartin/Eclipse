import React, { useState } from "react";
import "./Topbar.scss";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";

export default function Topbar() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <nav className={isActive ? "dawn_nav" : "dusk_nav"}>
      <div className={isActive ? "dawn_icons" : "dusk_icons"}>
        <AccountCircleTwoToneIcon className="accountIcon" fontSize="large" />
        <button onClick={ToggleClass} className="profileSwitchButton">
          <WbSunnyTwoToneIcon className="sunIcon" fontSize="large" />
        </button>
        <ChatTwoToneIcon className="chatIcon" fontSize="large" />
      </div>
    </nav>
  );
}
