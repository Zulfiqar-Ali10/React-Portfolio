import React, { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import myPhoto from "../assets/imgs/ali1.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  useEffect(() => {
    // Typing Effect
    const typed = new Typed(".typedText", {
      strings: ["Zulfiqar Ali", "Full Stack Developer", "YouTuber"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // ScrollReveal Effect
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const headerShadow = () => {
      const navHeader = document.getElementById("header");
      if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    };

    window.addEventListener("scroll", headerShadow);
    return () => window.removeEventListener("scroll", headerShadow);
  }, []);

  const myMenuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <main class="wrapper">
    <section className="featured-box" id="home">
      

      <div className="featured-text">
        <div className="featured-text-card">
          <span>Hello</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced Full Stack developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href="#contact" className="btn3 "  style={{ textDecoration: "none" }} >Hire Me</a>
          <a href="" className="btn3" style={{textDecoration: "none"}}>
            Download CV <i className="uil uil-file-alt"></i>
          </a>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/zulfiqar-ali10/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.youtube.com/@Zulfiqar-Ali1"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/Zulfiqar-Ali10"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          {/* <img src="/imgs/MY-PHOTO.jpg" alt="avatar" /> */}
          <img src={myPhoto} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
    </main>
  );
};

export default App;
