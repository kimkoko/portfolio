import React from "react";
import ProjContainer from "../components/ProjContainer";
import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          <ProjContainer
            title="Recipe Introduction Website (YAMSpoon)"
            images={[
              "https://kimkoko.github.io/portfolio/images/yam_intro.png",
              "https://kimkoko.github.io/portfolio/images/yam_main.png",
              "https://kimkoko.github.io/portfolio/images/yam_reci.png",
              "https://kimkoko.github.io/portfolio/images/yam_ref.png",
            ]}
            content={
              <>
                <p className="project-desc">
                  A service providing recipes based on ingredients in your refrigerator.
                  <br />
                  Elice SW Track 8th - 2nd Web Development Project
                </p>

                <div className="project-details">
                  <div className="detail-group">
                    <h4>Role</h4>
                    <ul>
                      <li>Frontend Developer</li>
                      <li>Implemented Main Home, Ingredient-based Recipes, My Fridge pages</li>
                      <li>Implemented Pagination</li>
                    </ul>
                  </div>

                  <div className="detail-group">
                    <h4>Key Experiences</h4>
                    <ul>
                      <li>Topic selection and planning</li>
                      <li>Wireframing with Figma</li>
                      <li>Styled and implemented common components (Buttons, Pagination)</li>
                      <li>Converted icons to SVG components</li>
                      <li>Utilized React state management libraries</li>
                      <li>Componentized ingredient category bar for reuse</li>
                      <li>Used forwardRef and props for component communication</li>
                      <li>Managed API calls efficiently with Axios</li>
                      <li>Implemented Intersection Observer for infinite scrolling/loading</li>
                      <li>Collaborated via Git/GitHub</li>
                      <li>Deployed using VM, PM2, Nginx</li>
                    </ul>
                  </div>
                </div>
              </>
            }
            links={[
              ["https://github.com/kimkoko/YAMSpoon", "Github"],
              ["https://youtu.be/kjJhKjFSBJ0", "YouTube"],
            ]}
          />

          <ProjContainer
            title="Cooking Book Shopping Mall (Butter & Better)"
            images={[
              "https://kimkoko.github.io/portfolio/images/bb_intro.png",
              "https://kimkoko.github.io/portfolio/images/bb_home.png",
              "https://kimkoko.github.io/portfolio/images/bb_user.png",
              "https://kimkoko.github.io/portfolio/images/bb_cert.png",
            ]}
            content={
              <>
                <p className="project-desc">
                  A shopping mall website specializing in cooking books.
                  <br />
                  Elice SW Track 8th - 1st Project
                </p>

                <div className="project-details">
                  <div className="detail-group">
                    <h4>Role</h4>
                    <ul>
                      <li>Backend Developer</li>
                      <li>Designed Product schema & model</li>
                      <li>Implemented Users API (Auth, Profile, Admin)</li>
                    </ul>
                  </div>

                  <div className="detail-group">
                    <h4>Key Experiences</h4>
                    <ul>
                      <li>API documentation based on requirements</li>
                      <li>Designed Schemas and Models for Book data</li>
                      <li>Collaborated on API integration and testing with Postman</li>
                      <li>Implemented comprehensive User API (Sign up, Login/Logout, Profile management)</li>
                      <li>Implemented JWT authentication and Admin middleware</li>
                      <li>Separated Router and Service layers for clean code</li>
                      <li>Collaborated via Git</li>
                    </ul>
                  </div>
                </div>
              </>
            }
            links={[
              ["https://github.com/kimkoko/Butter-Better", "Github"],
              ["https://youtu.be/I_ipzA-A8JM", "YouTube"],
            ]}
          />

          <ProjContainer
            title="KGQA Leaderboard"
            images={[
              "https://kimkoko.github.io/portfolio/images/kgqa_intro.png",
              "https://kimkoko.github.io/portfolio/images/kgqa_result.png",
              "https://kimkoko.github.io/portfolio/images/kgqa_web.png",
            ]}
            content={
              <>
                <p className="project-desc">
                  Hong Kong Polytechnic University Capstone Project
                </p>

                <div className="project-details">
                  <div className="detail-group">
                    <h4>Key Experiences</h4>
                    <ul>
                      <li>Benchmarking KGQA models based on simple questions</li>
                      <li>Analyzed performance results on selected datasets</li>
                      <li>Implemented analysis scripts in Python (Google Colab)</li>
                    </ul>
                  </div>
                </div>
              </>
            }
            links={[
              ["https://github.com/kimkoko/leaderboard", "Github"],
              ["https://kimkoko.github.io/leaderboard/", "Website"],
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
