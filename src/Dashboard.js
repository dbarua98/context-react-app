// Dashboard.js
import React from "react";
import { useAuth } from "./AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Please login to view the dashboard.</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Logged in as: {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
