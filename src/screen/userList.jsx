import React from "react";
import SideNav from "./SideNav";
import "../styles/userListStyle.css";

function UserList() {
  const username = ('fahmi' || 'ridwan');
  return (
    <div>
      <SideNav username={username} />
      <div className="center">
        <h1 style={{ color: "black" }}>User List</h1>
        <p>This is the user list page.</p>
      </div>
    </div>
  );
}

export default UserList;
