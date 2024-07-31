import React from "react";

import "./Home.scss";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div className="main">
      <Nav />
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
          <button>Learn More</button>
        </div>
        <div className="img">image</div>
      </div>
    </div>
  );
};

export default HomePage;
