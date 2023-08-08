import React from "react";
import SideNav from "./SideNav";
import "../styles/userListStyle.css";
import UserTable from "./userTable";

function UserList() {
  const username = ('fahmi' || 'ridwan');

  return (
    <div>
      <SideNav username={username} />
      <div className="center">
        <h1 style={{ color: "black" }}>User List</h1>
        <p>This is the user list page.</p>
        <button className="btnAdd" onClick={() => console.log("Add roles clicked")}>Add roles</button>
        <UserTable />
      </div>
    </div>
  );
}

export default UserList;
