import React, { useState } from "react";
import "./Topbar.scss";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import ModeNightTwoToneIcon from '@mui/icons-material/ModeNightTwoTone';
import DawnProfile from "./Dawn_Profile";
import DuskProfile from "./Dusk_Profile";

export default function Topbar() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  

  return (
    <div>
    <nav className={isActive ? "dawn_nav" : "dusk_nav"}>
      <div className={isActive ? "dawn_icons" : "dusk_icons"}>
        <AccountCircleTwoToneIcon className="accountIcon" fontSize="large" />
        <button onClick={ToggleClass} className="profileSwitchButton">
          <WbSunnyTwoToneIcon className={isActive ? "sun_icon" : "dis_sun_icon"}/>
          <ModeNightTwoToneIcon className={isActive ? "dis_moon_icon" : "moon_icon"}/>
        </button>
        <ChatTwoToneIcon className="chatIcon" fontSize="large" />
      </div>
    </nav>
    <div className="profile">
      {isActive ? <DawnProfile /> : <DuskProfile />}
    </div>
    </div>
  );
}
