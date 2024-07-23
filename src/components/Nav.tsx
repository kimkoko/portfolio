import React from "react";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="logo">Kim Songi's portfolio</div>
        <ul className="menu">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
