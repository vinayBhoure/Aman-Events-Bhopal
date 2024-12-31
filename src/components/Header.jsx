import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200)
  }

  return (
    <div className="relative">
      <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* <!-- Logo --> */}
            <div className="flex-shrink-0">
              <img className="h-12 w-auto" src={Logo} alt="Aman Events Logo" />
            </div>

            {/* <!-- Desktop Navigation --> */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink
                onClick={handleToggleMenu}
                to="/" className="text-neutral-300 hover:text-white transition-colors duration-300">Home</NavLink>
              <NavLink
                onClick={handleToggleMenu}
                to="/service" className="text-neutral-300 hover:text-white transition-colors duration-300">Services</NavLink>
              <NavLink
                onClick={handleToggleMenu}
                to="/about" className="text-neutral-300 hover:text-white transition-colors duration-300">About Us</NavLink>
              <NavLink
                onClick={handleToggleMenu}
                to="/gallery" className="text-neutral-300 hover:text-white transition-colors duration-300">Gallery</NavLink>
              <NavLink
                onClick={handleToggleMenu}
                to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300">Contact Us</NavLink>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="lg:hidden">

              <button
                type="button"
                onClick={handleToggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>

            </div>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
        {
          isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 text-center md:text-left bg-neutral-900/80 backdrop-blur-lg">
                <NavLink
                  onClick={handleToggleMenu}
                  to="/" className="block px-3 py-2 text-neutral-300 hover:text-white transition-colors duration-300">Home</NavLink>
                <NavLink
                  onClick={handleToggleMenu}
                  to="/services" className="block px-3 py-2 text-neutral-300 hover:text-white transition-colors duration-300">Services</NavLink>
                <NavLink
                  onClick={handleToggleMenu}
                  to="/about" className="block px-3 py-2 text-neutral-300 hover:text-white transition-colors duration-300">About Us</NavLink>
                <NavLink
                  onClick={handleToggleMenu}
                  to="/gallery" className="block px-3 py-2 text-neutral-300 hover:text-white transition-colors duration-300">Gallery</NavLink>
                <NavLink
                  onClick={handleToggleMenu}
                  to="/contact" className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300 text-center mt-4">Contact Us</NavLink>
              </div>
            </div>
          )
        }
      </nav>
    </div>
  )
}

export default Header
