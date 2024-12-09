import Image from 'next/image'
import React from 'react'
import "../styles/Hero.css"
import Link from 'next/link'
Image

const Hero = () => {
  return (
 <div>
         <div>
     <section className="hero-section">
    <div className="hero-content">
      <Image className='image' src={"/zia.png"} alt='zia' width={200} height={200}/>
      <h1>Hello I am Zia Ur Rehman</h1>
      <div className="buttons">
        <Link className="btn" href={"/about"}>About Me!</Link>
        <Link className="btn" href={"/contac"}>Contact Me!</Link>
        
      </div>
    </div>
  </section>
    </div>
 </div>
  )
}

export default Hero