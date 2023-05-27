import React from 'react'
import { Footer } from '../footer/Footer'
import './home.css'
export const Home = () => {
  return (
    <div className='all'>
      <div className="info">
         <h2 className='title'>Hi, it's me Glen</h2>
      <p className='hero'>I am a Full Stack Webdevelopper</p>
      <a href="./about"> <button>About</button></a>
      </div>
     <Footer />
    </div>
  )
}
