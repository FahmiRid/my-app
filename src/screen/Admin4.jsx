import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MainDash4 from "../components/MainDash/MainDash4";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Admin4() {
  const navigate = useNavigate();

  const handleBackClickAdmin3 = () => {
    navigate("/admin3");
  }

  return (
    <div className="App">
      <div className="AppGlass">
      <div className="content-logo">
          <Link to="/admin3" className="back-button" onClick={handleBackClickAdmin3}>
            <IoIosArrowBack style={{height: 50 , width: 25}} />
          </Link>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash4 />
      </div>
    </div>
  );
}
