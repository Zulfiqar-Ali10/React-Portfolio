import React, { useState, useEffect } from 'react';
// import './App.css'; // Make sure to import your CSS file

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check if the user has a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Save the user's theme preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  // Apply the correct class based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav id="header">
        <div className="nav-logo">
          <p className="nav-name">Zulfiqar</p>
          <span>.</span>
        </div>
        <div className="nav-menu">
          <ul className="nav_menu_list">
            <li className="nav_list">
              <a href="#home" className="nav-link active-link">Home</a>
            </li>
            <li className="nav_list">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav_list">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav_list">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
       <div className="btns">
       <div className="nav-button">
          <a href='' className="btn1" style={{textDecoration:"none"}}>
            Download CV <i className="uil uil-file-alt" />
          </a>
        </div>
        {/* Button to toggle dark and light mode */}
        <button className="btn1 btn2" onClick={toggleTheme}> <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />{isDarkMode ? ' Dark Mode' : ' Light Mode'}</button>
       </div>
      </nav>
    </div>
  );
};

export default Header;