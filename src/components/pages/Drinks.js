import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MenuItem } from "../MenuItem";
import db from "../../firebase";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "drinks"), (snapshot) =>
        setDrinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="container">
      <h4 className="titles">Вода</h4>

      <div className="menu-container">
        {drinks
          .filter((f) => f.type === "water")
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
      <h4 className="titles">Соки та холодні напої</h4>
      <div className="menu-container">
        {drinks
          .filter((f) => f.type === "juice")
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
      <h4 className="titles">Гарячі напої</h4>
      <div className="menu-container">
        {drinks
          .filter((f) => f.type === "hot")
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
      <h4 className="titles">Пиво</h4>
      <div className="menu-container">
        {drinks
          .filter((f) => f.type === "beer")
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
      <h4 className="titles">Алкогольні напої</h4>
      <div className="menu-container">
        {drinks
          .filter((f) => f.type === "alcohol")
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
    </div>
  );
}

export default Drinks;
