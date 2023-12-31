import React from "react";
import "./Footer.css";
import logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pint from "../Assets/pintester_icon.png";
import what from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={what} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pint} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright-All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
