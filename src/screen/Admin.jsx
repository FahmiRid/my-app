import { React } from "react";
import "../styles/admin1.css";
import "semantic-ui-css/semantic.min.css";

// import Sidebar from "../components/Sidebar";
import MainDash from "../components/MainDash/MainDash";
import RightSide from "../components/RigtSide/RightSide";
import Logo from "../imgs/mbb.png";

export default function Admin() {


  return (
    <div className="App">
      <div className="AppGlass">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Maybank
        </span>
      </div>
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
