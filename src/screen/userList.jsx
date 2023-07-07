import React from "react";
import SideNav from "./SideNav";
import "../styles/userListStyle.css";

function userList() {
  const username = "fahmi";
  const username1 = "ridwan";
  return (
    <div>
      <SideNav username={username} username1={username1} />
      <div className="center">
        <h1 style={{color: "black"}}>User List</h1>
        <p>this is user list testing</p>
      </div>
    </div>
  );
}

export default userList;
