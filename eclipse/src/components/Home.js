import React from "react";
import "./Home.scss"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';

export default function Home () {
return (
  <div className="home_container">
    <img className="profile_pic" src="../photos/profilepic.jpg"></img>
    <h1 className="profile_name">Katrina Teitz</h1>
    <div className="swipe_buttons">
    <button className="heart_broken_button"><HeartBrokenTwoToneIcon fontSize="large"/></button>
      <button className="heart_button"><FavoriteTwoToneIcon fontSize="large"/></button>
      </div>
    </div>
)
}