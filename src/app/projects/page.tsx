import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import "../styles/Projects.css"

const page = () => {
  return (
    <div>
         <section className= "projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">
            {/* Project Card 1 */}
            <div className="project-card">
                <Image src="/proj1.png" alt="Resume Generator" height={300} width={350}/>
                <h3>Resume Generator</h3>
                <p>Presenting the auto resume generator! Simply fill out the form, and within seconds, you will receive a stylish resume.</p>
                 <Link className="btn" href="/">Visit Now</Link>
            </div>
            {/* <!--Project Card 2  --> */}

            <div className="project-card">
                <Image src="/proj2.png" alt="Amazon Clone" height={300} width={350} />
                <h3>Amazon Clone</h3>
                <p>This is an e-commerce clone similar to Amazon. Feel free to contact me to create more clones like this.</p>
                <Link className="btn" href="/">Visit Now</Link>
            </div>
             {/* <!--Project Card 3  --> */}

            <div className="project-card">
                <Image src="/proj3.png" alt="Login Page" height={300} width={350}/>
                <h3>Log-In Page Clone</h3>
                <p>This is a stylish login page that makes any website look appealing. Contact me to create more like this!</p>
                <Link className="btn" href="/">Visit Now</Link>
            </div>
        </div>
    </section>
    </div>
  )
}

export default page