import React from "react";
import "./Dusk_Profile.scss";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';

export default function DuskProfile() {
  return (
    <div className="dusk_home_container">
    <img className="dusk_profile_pic" src="../photos/profile picture2.jpg"></img>
    <h1 className="dusk_profile_name">Katrina Teitz</h1>
    <div className="dusk_swipe_buttons">
    <button className="dusk_heart_broken_button"><HeartBrokenTwoToneIcon fontSize="large"/></button>
      <button className="dusk_heart_button"><FavoriteTwoToneIcon fontSize="large"/></button>
      </div>
    </div>
  );
}