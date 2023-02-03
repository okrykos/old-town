import React, { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import "./DrinksSection.css";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

function DrinksSection() {
  const [recDrinks, setRecDrinks] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "drinks"), (snapshot) =>
        setRecDrinks(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  return (
    <div className="menu-container">
      {recDrinks
        .filter((f) => f.recommended === "true")
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

export default DrinksSection;
