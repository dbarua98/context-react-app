import React, { useState, useMemo, useCallback } from "react";
import { AppContext } from "./AppContext";

export function OptimizedProvider({ children }) {
  const [user, setUser] = useState({ name: "Jane", email: "jane@example.com" });
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  console.log("🔄 OptimizedProvider re-rendered");

  // ✅ Memoized callbacks to prevent function recreation
  const updateUser = useCallback((newUser) => {
    setUser(newUser);
  }, []);

  const updateTheme = useCallback((newTheme) => {
    setTheme(newTheme);
  }, []);

  const updateCount = useCallback((newCount) => {
    setCount(newCount);
  }, []);

  // ✅ This object is only created when dependencies change
  const contextValue = useMemo(
    () => ({
      user,
      setUser: updateUser,
      theme,
      setTheme: updateTheme,
      count,
      setCount: updateCount,
    }),
    [user, theme, count, updateUser, updateTheme, updateCount]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
