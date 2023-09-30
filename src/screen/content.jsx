import React from "react";
import SideNav from "./SideNav";
import SideNav2 from "./SideNav2";
import "../styles/contentStyles.css";

function content() {
  const username = "fahmi";
  return (
    <div>
      <SideNav2  />
      <div className="center-font"> 
        <h2>Content</h2>
      </div>    
    </div>
  );
}

export default content;
