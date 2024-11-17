import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-primary text-white py-32 px-6 md:px-12 lg:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x1000)' }}></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Hero Content */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Explore the World with TripTrekker
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Discover new places, plan your trips, and make every journey unforgettable with our easy-to-use platform.
        </p>
        <a
          href="#explore"
          className="bg-secondary text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
        >
          Start Your Adventure
        </a>
      </div>
    </div>
  );
}

export default Hero;
