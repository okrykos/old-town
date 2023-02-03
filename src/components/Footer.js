import React from "react";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-location-container">
        <Link to="/" className="footer-logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
        </Link>
        <div className="footer-location">
          <div className="footer-location-wrapper">
            <i className="fa-solid fa-location-dot"></i>
            <p className="footer-text">м.Кам’янка-Бузька,вул. І. Франка, 20</p>
          </div>
          <div className="footer-location-wrapper">
            <i className="fa-regular fa-clock"></i>
            <p className="footer-text">10:00-22:00</p>
          </div>
        </div>
      </div>
      <div className="footer-navigation">
        <div className="footer-navigation-wrapper">
          <div className="footer-nav-items">
            <Link to="/" className="footer-nav">
              <i className="fa-solid fa-house"></i> головна
            </Link>
            <Link to="/menu" className="footer-nav">
              <i className="fa-solid fa-utensils"></i> Меню{" "}
            </Link>
            <Link to="/drinks" className="footer-nav">
              <i className="fa-solid fa-mug-saucer"></i> Напої{" "}
            </Link>
            <Link to="/about" className="footer-nav">
              {" "}
              <i className="fa-regular fa-address-card"></i> Про нас{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-links-container">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h3 className="footer-headings">соціальні мережі</h3>
              <a
                href="https://instagram.com/stare_misto_cafe_?igshid=NDk5N2NlZjQ="
                target="_blank"
                className="footer-links" rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i> instagram
              </a>
              <a
                href="https://instagram.com/stare_misto_cafe_?igshid=NDk5N2NlZjQ="
                target="_blank"
                className="footer-links" rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i> facebook
              </a>
            </div>
          </div>
        </div>
        <div className="footer-payment">
          <div className="footer-payment-wrapper">
            <h3 className="footer-headings">Доступні способи оплати</h3>
            <div className="payment-logo">
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-paypal"></i>
              <i className="fa-brands fa-google-pay"></i>
              <i className="fa-brands fa-apple-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
