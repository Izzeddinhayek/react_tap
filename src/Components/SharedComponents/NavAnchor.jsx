import React from "react";
import { Link } from "react-router-dom";

const NavAnchor = ({ children }) => {
  return (
    <Link to="/react_tap">
      <button className="no-underline font-normal text-brandPrimaryLight">
        {children}
      </button>
    </Link>
  );
};

export default NavAnchor;
