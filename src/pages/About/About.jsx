import React from 'react';
import { CheckCircle } from 'lucide-react'; // For bullet points

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          About <span className="text-blue-900">NamoStay</span>
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <img
              src="/mainlogo.png"
              alt="About NamoStay"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Side - Text */}
          <div className="lg:w-1/2 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Welcome to <strong>NamoStay</strong>, where freedom meets comfort. 
              Located in the heart of nature, our home-like stay offers cozy rooms, 
              modern amenities, homemade food, and a peaceful atmosphere for your perfect getaway.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Whether you’re looking for a family vacation or a relaxing solo trip, 
              <strong>NamoStay</strong> ensures you have an unforgettable experience.
            </p>

            {/* Highlighted Features */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-900" />
                Cozy, home-like rooms
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-900" />
                Healthy homemade food
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-900" />
                Peaceful & safe environment
              </li>
            </ul>

            <a
              href="#rooms"
              className="px-6 py-3 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-700 transition self-start"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
