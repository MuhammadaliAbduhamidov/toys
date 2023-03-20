import React from "react";
import footerLogo from "../../assets/images/footerLogo.png";
import {
  Facebook,
  Instagram,
  Location,
  PhoneIcon,
  Telegram,
} from "../../assets/Svg";

function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="footer-logo">
          <img src={footerLogo} alt="" />
        </div>
        <div className="messenger">
          <p>
            Подпишитесь на наши социальные сети и будьте в курсе последних
            новостей!
          </p>
          <div className="msg-icons">
            <Telegram />
            <Facebook />
            <Instagram />
          </div>
        </div>
        <div className="footer-end">
          <div className="phone">
            <PhoneIcon />
            <div className="phone-text">
              <a href="#">+998 (55) 000 55 00</a>
              <span>Ежедневно с 9:00 до 20:00</span>
            </div>
          </div>
          <div className="location">
            <div className="location-icon">
              <Location />
            </div>
            <ul>
              <li>Город Ташкент, Олмазор район, </li>
              <li>Чалганзор - Мавзук ул.3</li>
            </ul>
          </div>
        </div>
      </footer>

     
    </div>
  );
}

export default Footer;
