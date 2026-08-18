import React from "react";
import useTheme from "./useTheme"; 

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <span>Theme: <strong>{theme}</strong></span>
      <button onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}
