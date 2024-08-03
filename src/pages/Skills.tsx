import React from "react";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="container">
      <div className="skills-title">Skills</div>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="skills-detail">
        <div className="skills-detail-col">
          <ul>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>HTML</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>CSS</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>React</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>SCSS</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Figma</span>
            </li>
          </ul>
        </div>
        <div className="skills-detail-col">
          <ul>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Node.js</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Express</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>MongoDB</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Java</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Python</span>
            </li>
            <li>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />
              <span>Git</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="circle-3"></div>
      <div className="circle-4"></div>
    </div>
  );
};

export default Skills;
