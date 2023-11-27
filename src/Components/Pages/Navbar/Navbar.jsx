import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
const Navbar = () => {
  return (
    <div className='nav'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Sign in</Link>
    
    </div>
  )
}

export default Navbar