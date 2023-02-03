import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper top">
        <div className="about-text-wrapper">
          <h2 className="titles">Про нас</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about-img">
          <img
            src={process.env.PUBLIC_URL + "/images/old-town2.png"}
            alt="town"
          />
        </div>
      </div>
      <div className="about-wrapper bot">
        <div className="about-img">
          <img
            src={process.env.PUBLIC_URL + "/images/cafe-entering.png"}
            alt="cafe"
          />
        </div>
        <div className="about-text-wrapper">
          <h2 className="titles">Зв'язок з нами</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
