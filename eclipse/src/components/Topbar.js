import React from "react";
import "./Topbar.scss";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';

export default function Topbar() {
  return (
    <nav className="nav">
      <div className="icons">
      <AccountCircleTwoToneIcon className="accountIcon"/>
      <WbSunnyTwoToneIcon className="sunIcon"/>
      <ChatTwoToneIcon className="chatIcon"/>
      </div>
    </nav>
  );
}
