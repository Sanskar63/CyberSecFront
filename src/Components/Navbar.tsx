"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            CyberSaarthi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/information" className="hover:text-blue-400 transition-colors">
              Information
            </Link>
            <Link href="/news" className="hover:text-blue-400 transition-colors">
              News
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/information" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Information
              </Link>
              <Link 
                href="/news" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/about" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;