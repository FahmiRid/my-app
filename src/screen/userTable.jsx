import React, { useEffect, useState } from "react";
import "../styles/userTableStyles.css";
import NextPage from "../images/next.png";
import PreviousPage from "../images/previous.png";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState("all");
  const usersPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:5000/api/userslist");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  const filteredUsers = users.filter((user) => {
    if (selectedRole !== "all" && !user.role.includes(selectedRole)) {
      return false;
    }
    if (
      searchTerm !== "" &&
      (!user.role.includes(searchTerm) && !user.username.includes(searchTerm))
    ) {
      return false;
    }
    return true;
  });

  const displayRoles = (roles) => {
    if (roles.length === 1) {
      return roles[0];
    } else {
      return (
        <div className="role-container">
          <div className="role-label" onClick={toggleDropdown}>
            {roles[0]}
            {roles.length > 1 && (
              <span className="role-count" onClick={toggleDropdown}>
                +2
              </span>
            )}
          </div>
          {isOpen && (
            <div className="role-dropdown">
              {roles.slice(1).map((role, index) => (
                <div key={index}>{role}</div>
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="filter">
        <label>Filter by Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>

        <label>Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by username"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers
            .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
            .map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{displayRoles(user.role)}</td>
                <td>
                  <a className="editAction">Edit</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
