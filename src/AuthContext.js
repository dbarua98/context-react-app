// AuthContext.js
import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();
const MyContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (username) => setUser({ name: username });
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

export function MyProvider({ children }) {
  const [user, setUser] = useState("ashish");
  const [theme, setTheme] = useState("light");

  // This causes all consumers to re-render on any state change
  const contextValue = { user, setUser, theme, setTheme };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

// Custom hook for cleaner usage
// export const useAuth = () => useContext(AuthContext);
export const useMyContext = () => useContext(MyContext);
