import React from 'react'
import img from '../img/logo.png'
import './style.css'
function Nav() {
  return (
    <nav>
        <div className='logo'>
        <img src={img} alt=""/>
        
        </div>
        <div>
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/updatecourse">Update Details</a></li>
                <li><a href="/viewcourse">View</a></li>
            </ol>
        </div>
    </nav>
  )
}

export default Nav