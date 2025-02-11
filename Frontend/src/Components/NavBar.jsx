import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white h-15  px-10 flex justify-between items-center position-fixed  top-0 ">
      <h1 className="text-xl font-bold">NavBar</h1>
      <div className={`md:flex space-x-4 z-10 ${menuOpen ? 'flex flex-col absolute top-16 right-0 bg-gray-900 w-full p-4' : 'hidden md:flex'}`}>        
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-600 font-bold ' : 'text-white'} >
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white'} >
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white'} >
          Services
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-600 font-bold' : 'text-white'} >
          Contact
        </NavLink>
      </div>
      <div className="md:hidden text-2xl cursor-pointer " onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCross2 /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default NavBar; 