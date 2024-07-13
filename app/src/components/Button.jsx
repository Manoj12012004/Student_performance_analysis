import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export const Button = ({ type, state, className }) => {
  return (
    <div className={`button ${type} ${className}`}>
      <div className="label">
        {type === "primary" && <>Home</>}

        {type === "secondary" && <>Generate Again</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  state: PropTypes.oneOf(["default"]),
};

export default Button;