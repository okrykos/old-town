import React from "react";
import "./MenuItem.css";
export const MenuItem = (props) => {
  const type = props.type;
  // console.log(props);
  return (
    <div className="menu-item">
      <div className="card-main">
        <span className="titles">{props.title}</span>
        <p className="details-text">{props.details}</p>
      </div>
      <div className="card-footer">
        <span className="menu-item-info">
          {props.weight} {type === "drink" ? <b>мл</b> : <b>гр</b>}
        </span>
        <span className="menu-item-info">
          <b>₴</b> {props.price}
        </span>
      </div>
    </div>
  );
};
