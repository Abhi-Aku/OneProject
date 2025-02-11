import React from 'react'

const HeroSection = () => {
   
  return (
    <div><be></be>
        <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center
       px-6 md:px-10"
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/09/38/20/44/360_F_938204480_5BZPwZ4dL5iujr2XZwzkxdFeQJoRDsRE.jpg')" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text & Buttons */}
        <div className="text-white text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl  font-bold leading-tight">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-gray-200">
            Discover the best services with us. Join us to experience something amazing.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
              Get Started
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
          <img
            src="abhi.png"
            alt="Hero"
            className="rounded-xl  w-full max-w-xs md:max-w-lg   "
            style={{ border : "block" }}
          />
       
      </div>
    </section>
    </div>
  )
}

export default HeroSection
