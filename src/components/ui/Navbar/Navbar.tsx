import React, { useState } from 'react';
import logo from '../../../Images/intellablack.jpg'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

export const Navbar = () => {
  const [isOpen, setIsOpenNav] = useState(false);

  const handleNavToggle = () => {
    setIsOpenNav(!isOpen);
  };
  return (
    <>
      <header className='bg-black py-3 shadow-md relative z-50'> {/* Ensure z-index is higher */}
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <img src={logo} alt="logo" className='h-11 object-contain' style={{ height: '10vh', objectFit: 'cover' }}  />

          {/* Hamburger + Cart Icon for Mobile */}
          <div className='flex md:hidden items-center space-x-4'>
            {/* Hamburger Icon */}
            <div onClick={handleNavToggle}>
              {isOpen ? <FaTimes className='text-white text-2xl'/> : <FaBars className='text-white text-2xl'/>}
            </div>
          </div>

          {/* Nav Links for Desktop */}
          <nav className="hidden md:flex flex-1 mx-8">
            <ul className="flex justify-center w-full space-x-32">
              <li><a href="/" className='text-white'>Home</a></li>
              <li><a href="" className='text-white'>About Us</a></li>
              <li><a href="#services" className='text-white'>Services</a></li>
              <li><a href="" className='text-white'>Team</a></li>
              <li><a href="" className='text-white'>Contact Us</a></li>
            </ul>
          </nav>

            
        </div>

        {/* Mobile Nav Links */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-black shadow-md z-50`}>
          <nav>
            <ul className="flex flex-col items-center py-8 space-y-4">
              <li><a href="" className="text-white" >Home</a></li>
              <li><a href="" className="text-white" >Services</a></li>
              <li><a href="" className="text-white" >About Us</a></li>
              <li><a href="" className='text-white'>Team</a></li>
              <li><a href="" className="text-white" >Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
