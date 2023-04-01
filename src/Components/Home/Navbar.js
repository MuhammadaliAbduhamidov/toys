import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Menu, Phone } from "../../assets/Svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <NavLink to={"/"}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        <nav className={nav ? "active" : ""}>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/product"}>
              <li>Products</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <li>Showroom</li>
            <li>Partner</li>
            <li>Contact</li>
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
        <div className="menu" onClick={() => setNav(!nav)}>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
