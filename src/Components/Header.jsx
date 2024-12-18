

import React, { useState, useEffect } from "react";
// import './Header.css'; // Ensure to create and import this CSS file

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the user has a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Save the user's theme preference in localStorage
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  // Apply the correct class based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav id="header">
        <div className="nav-logo">
          <p className="nav-name">Zulfiqar</p>
          <span>.</span>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <ul className="nav_menu_list">
            <li className="nav_list">
              <a href="#home" className="nav-link active-link">
                Homes
              </a>
            </li>
            <li className="nav_list">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav_list">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav_list">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="btns">
          <div className="nav-button">
            <a href="" className="btn1" style={{ textDecoration: "none" }}>
              Download CV <i className="uil uil-file-alt" />
            </a>
          </div>
          {/* Button to toggle dark and light mode */}
          <button className="btn1 btn2" onClick={toggleTheme}>
            <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
            {isDarkMode ? " Dark Mode" : " Light Mode"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
