import React, { memo } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const ThemeComponent = memo(() => {
  const { theme, setTheme } = useAppContext();
  console.log("🎨 ThemeComponent re-rendered");

  return (
    <div className="p-4 border border-green-300 rounded bg-green-50">
      <h3 className="font-bold text-green-800">Theme Settings</h3>
      <p>Current theme: {theme}</p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Toggle Theme
      </button>
    </div>
  );
});
