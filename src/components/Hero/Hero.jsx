import React from 'react';

const Home = () => {


  const handleBook = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 break-words">
          Welcome to Namo Stay
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 break-words">
          Experience freedom and comfort at the heart of the city
        </p>
        <button onClick={handleBook} className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition w-auto sm:w-auto">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Home;
