import React from "react";
import ExpContainer from "../components/ExpContainer";
import "./Exps.scss";

const Exps: React.FC = () => {
  return (
    <section className="exps-section">
      <div className="exps-container">
        <h2 className="section-title">Experiences</h2>
        <div className="exps-list">
          <ExpContainer
            title="Elice SW Engineer Track 8th"
            content={[
              "Solved algorithms using JavaScript operators and basic concepts",
              "Learned asynchronous programming, Promise, async/await in JavaScript",
              "Learned backend basics and server knowledge via Node.js, Express.js, MongoDB",
              "Conducted projects (Butter&Better, YAMSpoon) with React",
              "Deployed projects using VM, Nginx, PM2",
              "Learned code management and collaborative development via Git",
            ]}
            skills={[
              "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express", "MongoDB", "Git"
            ]}
          />

          <ExpContainer
            title="Secretary of Korean Student Association at PolyU"
            content={[
              "Managed members of the Korean Student Association",
              "Wrote weekly meeting minutes",
              "Sent group emails",
              "Planned and conducted association events",
            ]}
            skills={["Teamwork", "Consistency"]}
          />

          <ExpContainer
            title="Globalier Intern"
            content={[
              "Participated in Mix panel project (Website data tracking, analysis, and reporting)",
              "Modified demo website using Adobe XD",
              "Designed and coded a price calculation page on Wix",
              "Designed automated email templates using Canva",
            ]}
            skills={["Data Analysis", "Adobe XD", "Wix"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Exps;
