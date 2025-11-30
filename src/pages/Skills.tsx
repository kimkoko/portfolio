import React from "react";
import "./Skills.scss";

const skillsData = [
  { name: "HTML", icon: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
  { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
  { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
  { name: "SCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" },
  { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" },
  { name: "Express", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" },
  { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
  { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2560px-Git-logo.svg.png" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon-wrapper">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
