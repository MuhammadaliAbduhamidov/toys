import React from "react";
import logo from "../../assets/images/logo.png";
import { Phone } from "../../assets/Svg";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Showroom</a>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <select name="" id="">
            <option value="1">EN</option>
            <option value="2">UZ</option>
            <option value="3">RU</option>
          </select>
        </nav>
        <div className="navbar-btn">
          <Phone />
          <button>90 1312000</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
