import React from "react";
import "./Dawn_Profile.scss";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';

export default function DawnProfile() {
  return (
    <div className="dawn_home_container">
    <img className="dawn_profile_pic" src="../photos/profilepic.jpg"></img>
    <h1 className="dawn_profile_name">Katrina Teitz</h1>
    <div className="dawn_swipe_buttons">
    <button className="dawn_heart_broken_button"><HeartBrokenTwoToneIcon fontSize="large"/></button>
      <button className="dawn_heart_button"><FavoriteTwoToneIcon fontSize="large"/></button>
      </div>
    </div>
  );
}
