import React from "react";

// Style
import "./spinner.css";

const spinner = props => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default spinner;
