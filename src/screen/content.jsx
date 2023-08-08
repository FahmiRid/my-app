import React from "react";
import SideNav from "./SideNav";
import "../styles/contentStyles.css";

function content() {
  const username = "fahmi";
  return (
    <div>
      <SideNav username={username} />
      <div className="center-font"> 
        <h2>Content</h2>
      </div>    
    </div>
  );
}

export default content;
