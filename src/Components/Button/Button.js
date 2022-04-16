import React from "react";

import "./Button.css";

const Button = ({ outfitStyle, arrayLength, label, clicker }) => {
  return (
    <div
      className="prevNextButton"
      onClick={() => clicker(outfitStyle, arrayLength, label)}
    >
      {label === "Previous" ? "◀" : "▶"}
    </div>
  );
};

export default Button;
