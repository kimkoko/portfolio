import React from "react";

import "./Nav.scss";

interface NavProps {
  setActiveSection: (section: string) => void;
}

const Nav: React.FC<NavProps> = ({ setActiveSection }) => {
  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="logo">Kim Songi's portfolio</div>
        <ul className="menu">
          <li>
            <button onClick={() => setActiveSection("aboutme")}>
              About Me
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("exps")}>
              Experiences
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("projects")}>
              Projects
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
