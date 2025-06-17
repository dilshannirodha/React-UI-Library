import { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () =>{
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* App Name */}
      <div className="text-xl font-bold tracking-wide">MyApp</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <div
            key={link}
            className="relative cursor-pointer"
            onClick={() => setActiveLink(link)}
          >
            <span className="hover:text-blue-400 transition duration-300">{link}</span>
            {activeLink === link && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Profile Icon */}
      <div className="hidden md:block">
        <FaUserCircle className="text-2xl hover:text-blue-400 cursor-pointer transition duration-300" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-2xl" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          {navLinks.map((link) => (
            <div
              key={link}
              className="relative cursor-pointer text-lg"
              onClick={() => {
                setActiveLink(link);
                setMobileMenuOpen(false);
              }}
            >
              <span className="hover:text-blue-400 transition duration-300">{link}</span>
              {activeLink === link && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                />
              )}
            </div>
          ))}

          <FaUserCircle className="text-3xl hover:text-blue-400 cursor-pointer transition duration-300" />
        </div>
      )}
    </nav>
  );
}
export default Navbar;