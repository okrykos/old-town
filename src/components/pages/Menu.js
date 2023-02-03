import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./../../App.css";
import "./../DrinksSection.css";
import db from "../../firebase";
import { MenuItem } from "../MenuItem";

function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setMenu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="container">
      <h4 className="titles">Перші страви</h4>

      <div className="menu-container">
        {menu
          .filter((f) => f.type === "first")
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
      <h4 className="titles">Салати</h4>
      <div className="menu-container">
        {menu
          .filter((f) => f.type === "salad")
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
      <h4 className="titles">Сніданки</h4>
      <div className="menu-container">
        {menu
          .filter((f) => f.type === "breakfast")
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
      <h4 className="titles">Гофра</h4>
      <div className="menu-container">
        {menu
          .filter((f) => f.type === "gofra")
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
      <h4 className="titles">Десерти</h4>
      <div className="menu-container">
        {menu
          .filter((f) => f.type === "desert")
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

export default Menu;
