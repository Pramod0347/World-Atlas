import React from "react";
import { NavLink } from "react-router-dom"; // use react-router-dom, not react-router

function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-semibold tracking-wide">
          World Atlas
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  `transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                Country
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
