import React from "react";
import { useNavigate } from "react-router-dom";
import MainDash3 from "../components/MainDash/MainDash3";
import "semantic-ui-css/semantic.min.css";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Admin3() {
  const navigate = useNavigate();

  const handleBackClickAdmin2 = () => {
    navigate("/admin2");
  }

  return (
    <div className="App">
      <div className="AppGlass">
      <div className="content-logo">
          <Link to="/admin2" className="back-button" onClick={handleBackClickAdmin2}>
            <IoIosArrowBack style={{height: 50 , width: 25}} />
          </Link>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash3 />
      </div>
    </div>
    
  );
}
