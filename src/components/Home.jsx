// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>✔️ Welcome, {user}!</h2>
      <p>You have successfully logged in.</p>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      <button onClick={onLogout} style={{ marginTop: "10px", background: "darkred" }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
