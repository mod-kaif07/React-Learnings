import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
             <p><h2>RoomRnader</h2></p>
             <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar