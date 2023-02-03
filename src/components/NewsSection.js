import React from "react";
import { Button } from "./Button";
import "./NewsSection.css";
function NewsSection() {
  return (
    <>
      <div className="news-container">
        <img
          className="news-img"
          src={process.env.PUBLIC_URL + "/images/новинка1.jpg"}
        />
        <img
          className="news-img"
          src={process.env.PUBLIC_URL + "/images/новинка2.jpg"}
        />
      </div>
  
    </>
  );
}
export default NewsSection;
