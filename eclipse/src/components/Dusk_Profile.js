import React from "react";
import "./Dusk_Profile.scss";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';

export default function DuskProfile() {
  return (
    <div className="dusk_home_container">
    <img className="dusk_profile_pic" src="../photos/profile picture2.jpg"></img>
    <h1 className="dusk_profile_name">Katrina Teitz</h1>
    <div className="dusk_description">
      <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        
      </h2>
      </div>
    </div>
  );
}