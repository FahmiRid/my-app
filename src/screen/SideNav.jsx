import React, { useState } from "react";
import "../styles/sideNavStyle.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const SideNav = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const [showPermissionDropdown, setShowPermissionDropdown] = useState(false);

  const togglePermissionDropdown = () => {
    setShowPermissionDropdown(!showPermissionDropdown);
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

  const handleContentToogle = () => {
    navigate("/content");
  }

  const handlePermissionRoleToogle = () => {
    if (username === "fahmi") {
      togglePermissionDropdown();
    } else {
      return null;
    }
  };


  const handleAddRolePermission = () => {
    navigate("/permissionRole");
    togglePermissionDropdown();
  };

  const handleRoleList = () => {
    navigate("/RoleList");
    togglePermissionDropdown();
  };


  // console.log("username ==>", username);x`
  return (
    <div>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="toggle-btn" onClick={toggleNav}>
        <FontAwesomeIcon icon={isOpen ? "times" : "bars"} />
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>
        <div className="nav-links">
          <h1>welcome,{username}</h1>

          <button onClick={handleHomeToogle}>Home</button>

          <div className="dropdown">
            <button onClick={handlePermissionRoleToogle}>
              Permission Role <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showPermissionDropdown && (
              <div className="dropdown-content">
                <button onClick={handleAddRolePermission}>
                  <FontAwesomeIcon icon="plus" /> Add Role Permission
                </button>
                <button onClick={handleRoleList}>
                  <FontAwesomeIcon icon="list" /> Role List
                </button>
              </div>
            )}
          </div>

          <button onClick={handleContentToogle}>Content</button>

          <button onClick={handleUserListToogle}>User List</button>

          <button onClick={handleLogoutToogle}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
