import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Namo Stay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience free and comfort at the heart of the city
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
          Book Now
        </button>

        {/* <button className='btn'>Book Now</button> */}
      </div>
    </section>
  );
};

export default Home;
