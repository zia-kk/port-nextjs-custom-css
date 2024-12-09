import React from 'react'
import Link from 'next/link'
import "../styles/Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer_menu'>
              <Link className='footer_link' href="/">Home</Link> 
              <Link className='footer_link' href="about">About</Link> 
              <Link className='footer_link' href="projects">Projects</Link> 
              <Link className='footer_link' href="contac">Contac</Link> 
            
        </div>

        <div className='social'>
        <FaGithub className='icon'/>
        <FaLinkedin className='icon'/>
        </div>
            
    </div>
  )
}

export default Footer