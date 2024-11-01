import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="Tulfa Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <section className="text">
            Create unrivalled <br />
            shopping experiences <br />
            for your consumers
          </section>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#featuredinsights">Featured Insights</a>
          <a href="#aboutus">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#ourwork">Our Work</a>
        </nav>
      </header>

      {/* Directly added text section */}
      <div className="text-section">
        <h2>
          The way business and consumers shop has radically <br />
          changed. Discover how top brands across multiple industries <br />
          deliver an excellent digital-first customer experience with Tulfa.
          <br />
        </h2>
      </div>
    </>
  );
}

export default Header;
