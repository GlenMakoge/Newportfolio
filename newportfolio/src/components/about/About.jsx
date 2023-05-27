import React from 'react'
import './about.css'
import { Footer } from '../footer/Footer'

export const About = () => {
  return (
    <div className='content'>
      <h2>Welcome o my portfolio</h2>
      <p>My name is <span>Ekundime Glean Makoge</span> and I am a <span>Full Stack Web Developer.</span><br></br>I am passionate about <span>TECH</span>
      and I love using my skills to help people buld sites.<br></br> I have one year of experience in TECH, and during this time, I have had the opportunity
      to work on projects.<br></br> I am always looking for opportunities to grow and I am committed to coding.<br></br> In my portfolio you will 
      find examples of my work...I take pride in delivering high-quality results that meet needs to my clients.</p>
      <a href="./portfolio"><button>See Portfolio</button></a>
      <Footer />
    </div>
  )
}
