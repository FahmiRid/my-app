import React, { useEffect, useState } from "react";
import "../styles/userTableStyles.css";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch('/users.json'); // Replace with the actual path to your users.json file
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Action</th> {/* New column for actions */}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
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
  );
}

export default UserTable;
