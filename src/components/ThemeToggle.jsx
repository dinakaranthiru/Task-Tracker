import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}{" "}
      </button>
    </div>
  );
};


export default ThemeToggle;