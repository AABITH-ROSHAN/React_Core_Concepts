import React from 'react'
import { Link } from 'react-router-dom'
function Navigatemethod3() {
  return (
    <div className='navbar bg-info ' >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user" >User</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Navigatemethod3
