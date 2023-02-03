import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import "./Banner.css";
function Banner() {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth <= 500;
        if (ismobile !== mobile) setMobile(ismobile);
      },
      false
    );
  }, [mobile]);
  return (
    <>
      <div className="banner-container">
        <div className="banner-content">
          <div className="greetings">
            <div className="banner-text">
              <h3 className="banner-text">Ласкаво просимо у</h3>
              <h1 className="banner-text">старе місто</h1>
            </div>
            <Button buttonSize={mobile ? "btn--small" : "btn--large"}>
              оглянути меню
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
