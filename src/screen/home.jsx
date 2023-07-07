import React from "react";
import SideNav from "./SideNav";
import '../styles/homeStyle.css'

function Home() {
  const username = 'fahmi'
  return (
    <div>
      <SideNav username={username} />
      <div className="center">
        <h1 style={{color: "black"}}>home Page</h1>
        <p>this is homepage testing</p>
      </div>
    </div>
  );
}

export default Home;
