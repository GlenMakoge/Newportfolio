import React from 'react'
import './navbar.css'
import  { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/experience'>Experience</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/testimonial'>Testimonial</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}
