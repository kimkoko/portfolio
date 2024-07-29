import React from "react";

import "./Home.scss";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div className="main">
      <Nav />
      <div>Homepage</div>
      <div>about me</div>
    </div>
  );
};

export default HomePage;
