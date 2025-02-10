import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const backimage={
    backgroundImage: "url('https://pngtree.com/freebackground/background-biru-keren-dan-kosong-abstract-untuk-template-desain-powerpoint-ppt_1738466.html')",
  }
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">My Logo</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross2 /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto top-16 left-0 md:flex-row flex-col text-white transition-all duration-300 ease-in-out z-10 ${
            isOpen ? "block opacity-100" : "hidden opacity-0 md:block md:opacity-100"
          }`}
        >
          <li className="p-4 hover:bg-gray-700 md:hover:bg-transparent">
            <a href="#" className="block">
              Home
            </a>
          </li>
          <li className="p-4 hover:bg-gray-700 md:hover:bg-transparent">
            <a href="#" className="block">
              About
            </a>
          </li>
          <li className="p-4 hover:bg-gray-700 md:hover:bg-transparent">
            <a href="#" className="block">
              Services
            </a>
          </li>
          <li className="p-4 hover:bg-gray-700 md:hover:bg-transparent">
            <a href="#" className="block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section  style={backimage } className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We provide the best solutions for your business needs. Join us today
              and take your business to the next level.
            </p>
            <div className="space-x-4">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/843242398/photo/hands-holding-documents-with-title-capital-gains-tax-cgt.jpg?s=1024x1024&w=is&k=20&c=hwhyLkueIrNSl4-JZIA8N1L71vTzcWjwanSIh4Qu7ow=" // Replace with your image URL
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default App;
