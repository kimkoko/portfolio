import React, { useState, useEffect } from "react";
import "./Nav.scss";

interface NavProps {
  setActiveSection: (section: string) => void;
}

const Nav: React.FC<NavProps> = ({ setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Kim Songi
        </div>
        <ul className="menu">
          <li>
            <button onClick={() => setActiveSection("aboutme")}>About Me</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("exps")}>Experiences</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
