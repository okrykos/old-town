import { useEffect, useState } from "react";
import Banner from "../Banner";
import { Button } from "../Button";
import DishesSection from "../DishesSection";
import DrinksSection from "../DrinksSection";

import NewsSection from "../NewsSection";
import "./Home.css";
function Home() {
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
      <Banner />
      <div className="home-container">
        <h2 className="titles">Новинки</h2>
        <NewsSection />
        <Button
          buttonSize={mobile ? "btn--small" : "btn--medium"}
          buttonStyle={"btn--outline"}
        >
          більше новинок
        </Button>
        <h2 className="titles">рекомендації</h2>
        <h3 className="titles">Напої</h3>
        <DrinksSection />
        <Button
          link={"/drinks"}
          buttonSize={mobile ? "btn--small" : "btn--medium"}
          buttonStyle={"btn--outline"}
        >
          більше напоїв
        </Button>
        <h3 className="titles">Страви</h3>
        <DishesSection />
        <Button
          buttonSize={mobile ? "btn--small" : "btn--medium"}
          buttonStyle={"btn--outline"}
        >
          більше страв
        </Button>
      </div>
    </>
  );
}

export default Home;
