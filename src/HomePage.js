// HomePage.js
import React from "react";
// import { useAuth } from "./AuthContext";
import { useMyContext } from "./AuthContext";

function HomePage() {
  //   const { user, login } = useAuth();
  const { user, theme, setTheme } = useMyContext();
  console.log("theme", theme);
  console.log("user", user);
  return (
    <div>
      <h1>Home</h1>
      <p>{theme}</p>
      {/* {user ? (
        <p>Welcome back, {user.name}!</p>
      ) : (
        <button onClick={() => login("Alice")}>Login</button>
      )} */}
      <button onClick={() => setTheme("dark")}>Login</button>
    </div>
  );
}

export default HomePage;
