import React from 'react'

export default function About() {
  return (
    <main className='wrapper'>
        <section className="section" id="about">
  <div className="top-header">
    <h1>About Me</h1>
  </div>
  <div className="row">
    <div className="col">
      <div className="about-info">
        <h3 className='about-h3'>My introduction</h3>
        <p>
        I am a Full Stack Developer with 1 year of experience in frontend and backend development. Skilled in HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and MySQL. Currently enhancing my skills in Java, PHP, Python, and C++ to stay updated with the latest technologies..
        </p>
      </div>
    </div>
    <div className="col">
      <div className="skills-box">
        <div className="skills-header">
          <h3>Frontend</h3>
        </div>
        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Figma</span>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Backend</h3>
        </div>
        <div className="skills-list">
          <span>Java</span>
          <span>Apex</span>
          <span>Next js</span>
          <span>Node js</span>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Database</h3>
          <h2>mySQL</h2>
        </div>
        <div className="skills-list">
          <span>MySQL</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
