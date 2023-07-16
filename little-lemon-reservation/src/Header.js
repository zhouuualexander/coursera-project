import React from "react";
import logo from "../src/img/little-lemon.png"; // Replace with the actual path to your logo image
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
    </header>
  );
}

export default Header;
