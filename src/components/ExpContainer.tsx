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
    <div className="exp-detail-container">
      <div className="exp-detail-title">{title}</div>
      <div className="exp-detial-content">
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="exp-detail-skill">
        <ul>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpContainer;
