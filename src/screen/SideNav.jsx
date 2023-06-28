import React, { useState } from 'react';
import '../styles/sideNavStyle.css';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleNav}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/permissionRole">Role Permission</a>
        <a href="/userList">User List</a>
        <a href="/">Logout</a>
      </div>
    </div>
  );
};

export default SideNav;
