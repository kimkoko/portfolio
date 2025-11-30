import React from "react";

import "./ExpContainer.scss";

interface ExpContainerProps {
  title: string;
  content: string[];
  skills: string[];
}

const ExpContainer: React.FC<ExpContainerProps> = ({
  title,
  content,
  skills,
}) => {
  return (
    <div className="exp-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <ul className="content-list">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <span className="skill-tag" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpContainer;
