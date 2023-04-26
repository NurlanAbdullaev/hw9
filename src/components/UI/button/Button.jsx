import React from "react";
import "./Button.css";

export const Button = ({ title, onClick, bgColor, color, brRadius }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: color, borderRadius: brRadius }}
    >
      {title}
    </button>
  );
};
