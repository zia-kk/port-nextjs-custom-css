import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import "../styles/About.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

Image

const About = () => {
  return (
    <div>
         <section className="about-section">
    <div className="profile-container">
      <Image className='about_img' src={"/zia.png"} alt='zia' height={200} width={200}/>
      <h1>FRONT END DEVELOPER</h1>
      <p className="description">
        Hello, my name is Zia ur Rehman. I am a student in the Governor Sindh Initiative course, currently learning TypeScript in Quarter 1 and moving on to Next.js in Quarter 2. Below, I have listed the skills I excel in, along with proficiency percentages. If you find my portfolio impressive, feel free to reach out for my services. My email is <strong>pkzia112@gmail.com</strong>.
      </p>
      <div className="social-links">
       <Link className="social-icon" href="https://github.com/zia-kk"><FaGithub /></Link>
       <Link className="social-icon" href="https://www.linkedin.com/in/zia-ur-rehman-b826202ba/"><FaLinkedin /></Link>
        

        
        
      </div>
    </div>
  </section>
    </div>
  )
}

export default About