import React from "react";
import logo from "../src/img/little-lemon.png"; // Replace with the actual path to your logo image
import Nav from "./Nav";
function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
