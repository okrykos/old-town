import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--large", "btn--medium", "btn--small"];
const LINKS = ["/menu", "/drinks"];
export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonStyle,
  link,
}) => {
  const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const btnSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  const btnLink = LINKS.includes(link) ? link : LINKS[0];

  return (
    <Link to={btnLink}>
      <button
        className={`bttn ${btnStyle} ${btnSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
