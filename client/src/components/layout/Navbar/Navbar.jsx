import React, { useState } from "react";
import { Menu, X, User, Plane } from "lucide-react";

export default function YourFlightNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <nav className="bg-blue-50/90 backdrop-blur-md shadow-lg border-b border-white/20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              yOURFlight
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              Flights
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              Hotels
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              Contact
            </a>

            {/* Sign In Button */}
            <button
              onClick={handleSignIn}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isSignedIn
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              }`}
            >
              <User className="h-4 w-4" />
              <span>{isSignedIn ? "Account" : "Sign In"}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-white/20">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-300"
              >
                Flights
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-300"
              >
                Hotels
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-all duration-300"
              >
                Contact
              </a>
              <button
                onClick={handleSignIn}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full font-semibold transition-all duration-300 mt-3 ${
                  isSignedIn
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                }`}
              >
                <User className="h-4 w-4" />
                <span>{isSignedIn ? "Account" : "Sign In"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
