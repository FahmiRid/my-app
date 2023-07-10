import React, { useState } from "react";
import "../styles/sideNavStyle.css";
import { useNavigate } from "react-router-dom";

const SideNav = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutToogle = () => {
     
    navigate("/");
 
  }

  const handleHomeToogle = () => {
    if (username === "fahmi") {
      navigate("/home");
    } else if (username === "ridwan") {
      navigate("/staffPage");
    } else {
      return null;
    }
  };

 const handleUserListToogle = () => {
      navigate("/userList");
  };

  const handlePermissionRoleToogle = () => {
    if (username === "fahmi") {
      navigate("/permissionRole");
    } else {
      return null;
    }

  };

  const handleAddRoleToogle = () => {
    navigate("/addRole");
  }

  // console.log("username ==>", username);x`
  return (
    <div>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="toggle-btn" onClick={toggleNav}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>
        <div className="nav-links">
          <h1>welcome,{username}</h1>

          <button onClick={handleHomeToogle}>Home</button>

          <button onClick={handlePermissionRoleToogle}>Permission Role</button>

          <button onClick={handleUserListToogle}>User List</button>

          <button onClick={handleAddRoleToogle}>Add Role</button>

          <button onClick={handleLogoutToogle}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
