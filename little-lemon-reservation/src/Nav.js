import React from "react";
import "./Nav.css";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Nav;
