import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import LogoImg from "../../assets/Images/logo.png";
import humburgerMenu from "../../assets/Images/humburger.png";
import CloseMenuImg from "../../assets/Images/closeIcon.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const location = useLocation(); // This hook will give the current location (path)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <Link to="/">
              <div className="header_imgLink">
                <img src={LogoImg} alt="Logo" />
              </div>
            </Link>
          </div>
          <div className={`header_right ${isMenuOpen ? "active" : ""}`}>
            <div className={`header_navbar ${isMenuOpen ? "active" : ""}`}>
              <ul className="header_list">
                <li className="header_item">
                  <Link
                    to="/"
                    className={`header_link ${isActiveLink("/") ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/gaming-getaways"
                    className={`header_link ${isActiveLink("/gaming-getaways") ? "active" : ""}`}
                  >
                    Gaming Getaways
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/luxury-retreats"
                    className={`header_link ${isActiveLink("/luxury-retreats") ? "active" : ""}`}
                  >
                    Luxury Retreats
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/relaxing-breaks"
                    className={`header_link ${isActiveLink("/relaxing-breaks") ? "active" : ""}`}
                  >
                    Relaxing Breaks
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/affordable-stays"
                    className={`header_link ${isActiveLink("/affordable-stays") ? "active" : ""}`}
                  >
                    Affordable Stays
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/about"
                    className={`header_link ${isActiveLink("/about") ? "active" : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li className="header_item">
                  <Link
                    to="/contact"
                    className={`header_link ${isActiveLink("/contact") ? "active" : ""}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="close-menu" onClick={toggleMenu}>
                <img src={CloseMenuImg} alt="close" />
              </div>
            </div>
          </div>
          <div className="header_humburger" onClick={toggleMenu}>
            <div className="header_humburgerImg">
              <img src={humburgerMenu} alt="hamburger menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
