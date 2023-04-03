import React from "react";
import { Link } from "react-router-dom";

import "./LinkBtn.scss";

export const LinkBtn = ({ to, text }) => {
  return (
    <Link className="btn" to={to}>
      {text}
    </Link>
  );
};

export default LinkBtn;
