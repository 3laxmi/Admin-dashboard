import React from "react";
import { useTheme } from "../context/ThemeContext";

const Themes = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div style={{ marginLeft: "240px", padding: "2rem", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <h1>Themes</h1>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: darkMode ? "#111827" : "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer"
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Themes;
