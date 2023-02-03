import React, { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import "./DrinksSection.css";

import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

// const recDishes=
function DishesSection() {
  const [menu, setMenu] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setMenu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="menu-container">
      {menu
        .filter((f) => f.recommended === "true" && f.type !== "drink")
        .map((d) => (
          <MenuItem
            key={d.id}
            title={d.name}
            details={d.details}
            weight={d.weight}
            price={d.price}
            type={d.type}
          />
        ))}
    </div>
  );
}
export default DishesSection;
