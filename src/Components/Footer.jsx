import React from 'react'

export default function Footer() {
  return (
<>
  <main className='wrapper'>
  <footer>
  <div className="top-footer">
    <p>ZULFIQAR ALI</p>
  </div>
  <div className="middle-footer">
    <ul className="footer-menu">
      <li className="footer_menu_list">
        <a href="#home">Home</a>
      </li>
      <li className="footer_menu_list">
        <a href="#about">About</a>
      </li>
      <li className="footer_menu_list">
        <a href="#projects">Projects</a>
      </li>
      <li className="footer_menu_list">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="footer-social-icons">
    <div className="icon">
      <a
        href="https://www.linkedin.com/in/zulfiqar-ali10/"
        target="_blank"
        style={{ color: "black" }}
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
    </div>
    <div className="icon">
      <a
        href="https://www.youtube.com/@Zulfiqar-Ali1"
        target="_blank"
        style={{ color: "black" }}
      >
        <i className="fa-brands fa-youtube" />
      </a>
    </div>
    <div className="icon">
      <a
        href="https://github.com/Zulfiqar-Ali10"
        target="_blank"
        style={{ color: "black" }}
      >
        <i className="fa-brands fa-github" />
      </a>
    </div>
  </div>
  <div className="bottom-footer">
    <p>
      Copyright ©{" "}
      <a href="#home" style={{ textDecoration: "none", color: "#00B5E9" }}>
        Zulfiqar Ali
      </a>{" "}
      - All rights reserved is the most
    </p>
  </div>
</footer>

  </main>
</>)
}
