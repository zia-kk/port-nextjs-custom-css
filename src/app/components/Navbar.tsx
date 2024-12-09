import React from 'react'
import "../styles/Navbar.css"
import Link from 'next/link'



const Navbar = () => {
  return (
    <div>
      <header className="navbar">
    <div className="logo">Zia</div>
    <nav>
      <ul className="nav-links">
        <Link className='menu_link' href="/">Home</Link>
        <Link className='menu_link' href="about">About</Link>
        <Link className='menu_link' href="projects">Projects</Link>
        <Link className='menu_link' href="contac">Contact-Us</Link>
        
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Navbar