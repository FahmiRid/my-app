import React from "react";
import MainDash2 from "../components/MainDash/MainDash2";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Admin2() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/admin");
  }

  return (
    <div className="App">
      <div className="AppGlass">
        <div className="content-logo">
          <Link to="/admin" className="back-button" onClick={handleBackClick}>
            <IoIosArrowBack style={{height: 50 , width: 25}} />
          </Link>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash2 />
      </div>
    </div>

  );
}
