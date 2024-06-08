import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="poll-navigation">
      <Link to="/Second">
        <button className="poll-button">Next</button>
      </Link>
      <Link to="/">
        <button className="poll-button">Prev</button>
      </Link>
    </div>
  );
};

export default Footer;
