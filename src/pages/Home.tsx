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
      const navHeight = 80; // Adjusted for new nav height

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
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
    <div className="home-container">
      <Nav setActiveSection={setActiveSection} />

      <section className="hero-section" id="main">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="title">
              Kim Songi <br />
              <span>Frontend Developer</span>
            </h1>
            <p className="description">
              Majored in Computing at Hong Kong Polytechnic University, acquiring proficiency in Python, Java, and JavaScript.
              Developed strong problem-solving skills, responsibility, and teamwork through numerous group projects and student council activities.
              <br /><br />
              Completed the Elice Frontend & Backend Track (4 months), gaining hands-on experience in both frontend and backend development through two team projects.
            </p>
            <button className="cta-button" onClick={() => setActiveSection("aboutme")}>
              Learn More
            </button>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <img
                src="https://kimkoko.github.io/portfolio/images/main.jpg"
                alt="Kim Songi"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="aboutme">
        <div className="about-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card profile">
              <h3>Profile</h3>
              <div className="info-item">
                <span className="label">Name</span>
                <span className="value">Kim Songi</span>
              </div>
              <div className="info-item">
                <span className="label">Birth</span>
                <span className="value">1998.07.28</span>
              </div>
              <div className="info-item">
                <span className="label">Education</span>
                <span className="value">Hong Kong Polytechnic Univ.</span>
              </div>
            </div>
            <div className="about-card contact">
              <h3>Contact & Links</h3>
              <a href="mailto:songikim4464@gmail.com" className="link-item">
                songikim4464@gmail.com
              </a>
              <a
                href="https://github.com/kimkoko"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Github
              </a>
              <a
                href="https://elice.works/shared-resume/account/6279/publicUuid/c8fc6f0d-6624-4f88-8bbb-4ba52e409c80"
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

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
