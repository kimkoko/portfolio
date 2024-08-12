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
            홍콩이공대에서 컴퓨팅을 전공하면서 Python, Java, JavaScript 등의
            다양한 프로그래밍 언어를 습득하고 컴퓨터 프로그래밍에 대한 이론들을
            배워왔습니다. 또한 수많은 그룹 과제들과 프로젝트, 한인학생회에서의
            서기 활동 등을 통해 주어진 업무 수행 능력, 책임감, 팀원들과의 소통
            능력, 성실함을 배우고 길러올 수 있었습니다.
            <br /> <br />
            학교를 졸업하고 난 뒤엔 프론트엔드 개발자로서의 역량 증진을 위해
            국비지원 프로젝트인 엘리스 프론트&백엔드 트랙 8기를 4개월에 걸쳐
            수료했으며 두 번의 팀 프로젝트를 거치면서 백엔드와 프론트엔드 경험을
            쌓을 수 있었습니다. 첫번째 프로젝트에서의 백엔드 경험을 가지고
            두번째 프로젝트 때 프론트엔드 포지션을 수행하니 팀원들과의 소통과
            서로의 업무 이해를 좀 더 수월하게 할 수 있었습니다.
          </div>
          <button onClick={() => setActiveSection("aboutme")}>
            Learn More
          </button>
        </div>
        <div className="img">
          <img
            src="https://kimkoko.github.io/portfolio/images/main.jpg"
            alt="main image"
          />
        </div>
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
            <button>
              <a href="mailto:songikim4464@gmail.com">songikim4464@gmail.com</a>
            </button>
            <button>
              <a
                href="https://github.com/kimkoko"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </button>
            <button>
              <a
                href="https://elice.works/shared-resume/account/6279/publicUuid/c8fc6f0d-6624-4f88-8bbb-4ba52e409c80"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
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
