// src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      setMsg("❌ Username already exists");
    } else {
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      setMsg("✔️ Signup Successful!");
      setTimeout(() => {
        onSignup(username);
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Choose username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Choose password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {msg && <div className="success-msg">{msg}</div>}
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
