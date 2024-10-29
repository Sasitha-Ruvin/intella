import React from 'react'
import logo from '../../Images/footerlogo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-gray-700 to-gray-900 text-gray-300 py-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0'>
            <div className=' flex flex-col items-center md:items-start space-y-4'>
                <div>
                    <img src={logo} alt="logo" className='w-16 h-20' />
                </div>
                <div className='flex space-x-4 text-gray-400 text-xl'>
                    <a href="https://www.facebook.com/profile.php?id=61567673250516" aria-label='Facebook' className="hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer">
                        <FaFacebook/>
                    </a>
                    <a href="https://www.instagram.com/intellacreations/" aria-label='Instagram' className="hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer">
                        <FaInstagram/>
                    </a>
                    <a href="https://www.linkedin.com/company/intella-creations/" aria-label='LinkedIn' className="hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer">
                        <FaLinkedin/>
                    </a>
                    <a href="" aria-label='TikTok' className="hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer">
                        <FaTiktok/>
                    </a>
                    <a href="https://wa.me/+94703025601" aria-label='Whatsapp' className="hover:text-white transition-transform transform hover:scale-110 duration-300 cursor-pointer">
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                <a href="#" className="hover:text-white transition-colors duration-300">Our Projects</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
                <a href="#" className="hover:text-white transition-colors duration-300">What We Offer</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Who We Are</a>
            </div>
            <div className='flex flex-col items-center md:items-end space-y-4'>
                <p className=' text-center md:text-right text-gray-400 italic'>
                    "Creating Digital Connection, Everywhere"
                </p>
                <button className='bg-gray-600 text-gray-200 px-6 py-2 rounded-full hover:bg-gray-500 transition duration-300'>
                    Get in touch
                </button>
            </div>
        </div>
    </footer>
  )
}
