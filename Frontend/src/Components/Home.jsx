import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
const Home = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header
        className={`fixed top-0 left-0 w-full bg-red-600 text-white p-3 transition-all duration-500 ${
          hideHeader ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
        style={{ zIndex: 10 }}
      >
        <marquee className="w-full text-center text-2xl font-bold">
          <h1 className="inline-block mx-4">Welcome to our website</h1>
          <h1 className="inline-block mx-4">Enjoy your visit</h1>
          <h1 className="inline-block mx-4">Stay Connected</h1>
        </marquee>
      </header>

      {/* Hero Section */}
      <div className="pt-16"> {/* Adjust padding so content doesn't hide behind fixed header */}
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
