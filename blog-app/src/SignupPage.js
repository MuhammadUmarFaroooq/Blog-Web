import React, { useState } from "react";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        formData
      );
      console.log(response.data);
      // Reset form fields after successful submission (optional)
      setFormData({ username: "", password: "", email: "" });
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Signup sucess:", error.response.data);
        navigate("/");
        // Handle specific error response from the server
        // For example, display an error message to the user
      } else {
        console.error("Signup failed:", error.message);
        // Handle generic error (e.g., network error)
        // For example, display a generic error message to the user
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button">
          Signup
        </button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>{" "}
      {/* Link to the login page */}
    </div>
  );
};

export default SignupPage;
