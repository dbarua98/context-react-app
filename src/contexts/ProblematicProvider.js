import React, { useState } from "react";
import { AppContext } from "./AppContext";

export function ProblematicProvider({ children }) {
  const [user, setUser] = useState({ name: "John", email: "john@example.com" });
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  console.log("🔄 ProblematicProvider re-rendered");

  // ❌ This object is created fresh on every render
  const contextValue = {
    user,
    setUser,
    theme,
    setTheme,
    count,
    setCount,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
