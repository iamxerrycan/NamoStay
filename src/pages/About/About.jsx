import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <img
            src="/mainlogo.png"
            alt="About NamoStay"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            About <span className="text-blue-900">NamoStay</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to <strong>NamoStay</strong>, where freedom meets comfort.
            Located in the heart of nature, our home like stay offers cozy
            rooms, modern amenities,with homemade food and a peaceful atmosphere
            for your perfect getaway.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you’re looking for a family vacation, or a relaxing solo
            trip, NamoStay ensures you have an unforgettable experience.
          </p>
          <a
            href="#rooms"
            className="px-6 py-3 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
