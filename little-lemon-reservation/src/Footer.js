import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
