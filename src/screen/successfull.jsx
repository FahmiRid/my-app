import React from "react";
import "semantic-ui-css/semantic.min.css";
// import Sidebar from '../components/Sidebar';
import MainDash5 from "../components/MainDash/MainDash5";
import { Button, Card } from "semantic-ui-react";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";

export default function Success() {


  return (
    <div className="App">
      <div className="AppGlass">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash5 />
      </div>
    </div>
  
  );
}
