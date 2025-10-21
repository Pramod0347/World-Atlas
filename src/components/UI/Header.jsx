import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-gray-700/50 relative shadow-lg shadow-black/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      
      {/* Subtle Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-30"></div>
      
      <div className="container mx-auto flex items-center justify-between py-6 px-6 relative z-10">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="group flex items-center gap-3 z-30"
          onClick={closeMobileMenu}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              World Atlas
            </span>
            <span className="text-sm text-gray-400 -mt-1">Explore the Globe</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group relative px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/10" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`
                }
              >
                Home
                {({ isActive }) => isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `group relative px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/10" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`
                }
              >
                About
                {({ isActive }) => isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `group relative px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/10" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`
                }
              >
                Contact
                {({ isActive }) => isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  `group relative px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/10" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`
                }
              >
                Countries
                {({ isActive }) => isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
                )}
              </NavLink>
            </li>
            
            {/* CTA Button */}
            <li className="ml-6">
              <NavLink
                to="/country"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Explore Now
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 z-30 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out z-30 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-lg transition-colors text-xl font-semibold ${
                      isActive 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-lg transition-colors text-xl font-semibold ${
                      isActive 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-lg transition-colors text-xl font-semibold ${
                      isActive 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-lg transition-colors text-xl font-semibold ${
                      isActive 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              Explore the world with World Atlas
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
