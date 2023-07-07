/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import SideNav from "./SideNav";
import "../styles/staffStyle.css";
function staffPage() {
  const username = "ridwan";

  return (
    <div>
      <SideNav username={username} />
      <div className="center">
        <h1>home Page</h1>
        <p>this is staff page testing</p>
      </div>
    </div>
  );
}

export default staffPage;
