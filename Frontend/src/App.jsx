import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Website</h1>

        {/* Hamburger Menu */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl md:hidden">
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>

        {/* Navbar Links */}
        <nav className={`absolute top-16 left-0 w-full bg-gray-800 md:static md:w-auto md:bg-transparent 
                        ${menuOpen ? "block" : "hidden"} md:flex`}>
          <ul className="flex flex-col md:flex-row md:gap-6 text-center">
            <li className="p-3 hover:bg-gray-700 md:hover:bg-transparent">
              <a href="#">Home</a>
            </li>
            <li className="p-3 hover:bg-gray-700 md:hover:bg-transparent">
              <a href="#">About</a>
            </li>
            <li className="p-3 hover:bg-gray-700 md:hover:bg-transparent">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default App;
