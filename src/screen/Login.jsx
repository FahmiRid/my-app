/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";
import Images from "../images/logo.png";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Success message
        console.log(data.user); // User object

        // Redirect to the appropriate page based on user role
        if (data.user.role === "admin") {
          navigate("/home");
        } else if (data.user.role === "staff") {
          navigate("/staffPage");
          toast.success("login success!");
        } else {
          // Handle other roles or redirect to a default page
          navigate("/default-page");
        }

        console.log('role ==>', data.user.role)
      } else {
        const errorData = await response.json();
        console.log(errorData.message); // Error message
      }
    } catch (error) {
      //   console.error('Error:', error);
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={Images} alt=" Logo" />
        </div>
        <h1>Welcome back! </h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <div className="footer">
          <span>Need an account?</span>
          <a href="#">Register</a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
