import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <main className='wrapper'>
        <section className="section" id="projects">
  <div className="top-header">
    <h1>Projects</h1>
  </div>
  <div className="project-container">
    <div className="project-box">
      <a target="_blank" href="https://react-crud-operator.vercel.app/">
        <i className="fa-brands fa-react" />Click Here
      </a>
      <h3 className='project-h3'>Crud Operator</h3>
      <label>Using React js</label>
    </div>
    <div className="project-box">
      <a
        target="_blank"
        href="https://react-e-commerce-website-pzfe.vercel.app/"
      >
        <i className="fa-brands fa-react" />Click Here
      </a>
      <h3 className='project-h3'>Ecommerce Website</h3>
      <label>Using React js</label>
    </div>
    <div className="project-box">
      <a
        target="_blank"
        href="https://node-js-project1-production.up.railway.app/"
      >
        <i className="fa-brands fa-node" />Click Here
      </a>
      <h3 className='project-h3'>Create Api</h3>
      <label>Using Node Express With MongoDB</label>
      
    </div>
    {/* <Link to="https://github.com/Zulfiqar-Ali10" id='more-projects' className="btn3" style={{textDecoration: "none"}}>
            More Projects <i className="uil uil-file-alt" ></i>
          </Link> */}


<Link 
  to="https://github.com/Zulfiqar-Ali10?tab=repositories" 
  id='more-projects' 
  className="btn3" 
  style={{textDecoration: "none"}} 
  target="_blank" // Yeh naye tab mein link kholne ke liye hai
  rel="noopener noreferrer" // Security ke liye
>
  More Projects <i className="uil uil-file-alt"></i>
</Link>
  </div>
 
</section>

    </main>
  )
}
