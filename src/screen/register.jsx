import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff"); // Set default role as "staff"
  const navigate = useNavigate();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleRoleChange = event => {
    setRole(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Success message

        // Redirect to login page or any other page after successful registration
        navigate("/");
      } else {
        const errorData = await response.json();
        console.log(errorData.message); // Error message
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to register");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={handleRoleChange}>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
