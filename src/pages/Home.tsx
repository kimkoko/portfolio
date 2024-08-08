import React, { useState, useEffect } from "react";

import "./Home.scss";
import Nav from "../components/Nav";
import Skills from "./Skills";
import Exps from "./Exps";
import Projects from "./Projects";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("main");

  useEffect(() => {
    if (activeSection) {
      const element = document.getElementById(activeSection);
      const navHeight = 100;

      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(null);
      }
    }
  }, [activeSection]);

  return (
    <div className="main" id="main">
      <Nav setActiveSection={setActiveSection} />
      <div className="content">
        <div className="text">
          <div className="title">
            김송이 <br /> 프론트엔드 포트폴리오
          </div>
          <div className="sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            cras morbi hendrerit nunc vel sapien. In habitasse at diam
            suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut
            donec in. Ac diam, at sed cras nisi.
          </div>
          <button onClick={() => setActiveSection("aboutme")}>
            Learn More
          </button>
        </div>
        <div className="img">image</div>
      </div>

      <div className="aboutme" id="aboutme">
        <div className="about-title">About Me</div>
        <div className="about-detail">
          <div className="about-detail-col">
            <button>김송이</button>
            <button>1998.07.28</button>
            <button>홍콩이공대</button>
          </div>
          <div className="about-detail-col link">
            <button>songikim4464@gmail.com</button>
            <button>
              <a href="https://github.com/kimkoko" target="_blank">
                Github
              </a>
            </button>
            <button>Resume</button>
          </div>
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="exps">
        <Exps />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
