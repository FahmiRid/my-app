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

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch("/users.json"); // Replace with the actual path to your users.json file
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  const filteredUsers = users.filter(user => {
    if (selectedRole !== "all" && user.role !== selectedRole) {
      return false;
    }
    if (searchTerm !== "" && !user.role.includes(searchTerm) && !user.username.includes(searchTerm)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div className="filter">
        <label>Filter by Role:</label>
        <select
          value={selectedRole}
          onChange={e => setSelectedRole(e.target.value)}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>

        <label>Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by username"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {filteredUsers
            .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
            .map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <a className="editAction">Edit</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="transparent-button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <img className="previous" src={PreviousPage} alt="Previous" />
        </button>
        <button
          className="transparent-button"
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <img className="next" src={NextPage} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default UserTable;
