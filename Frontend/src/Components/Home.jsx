import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import HeroSection from "./HeroSection";

export default function Home() {
  const [hideMarquee, setHideMarquee] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideMarquee(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Brand</h1>
          <ul className="hidden md:flex gap-6">
            <NavLink to="/" className="cursor-pointer">Home</NavLink>
            <NavLink to="/about" className="cursor-pointer">About</NavLink>
            <NavLink to="/services" className="cursor-pointer">Services</NavLink>
            <NavLink to="/contact" className="cursor-pointer">Contact</NavLink>
          </ul>
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RxCross2 /> : <FiMenu />}
          </div>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-white shadow-md p-4">
            <NavLink to="/" className="cursor-pointer">Home</NavLink>
            <NavLink to="/about" className="cursor-pointer">About</NavLink>
            <NavLink to="/services" className="cursor-pointer">Services</NavLink>
            <NavLink to="/contact" className="cursor-pointer">Contact</NavLink>
          </ul>
        )}
      </nav>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: hideMarquee ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[60px] left-0 w-full bg-blue-500 text-white py-2 text-center overflow-hidden z-40"
      >
        <div className="whitespace-nowrap overflow-hidden">
          <marquee>🔥 Welcome to our website! Check out our latest updates! 🔥</marquee>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-4 pt-24">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600 mt-4">We provide the best services to help you grow your business.</p>
          <div className="flex justify-center gap-3 md:justify-start">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Get Started</button>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">GOTO Started</button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src="abhi.png" alt="Hero" className="w-full max-w-md md:max-w-lg rounded-lg" />
        </div>
      </div>
      
      {/* Hero Section */}
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
