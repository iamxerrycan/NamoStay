import React from 'react';
import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className=" w-full h-full flex flex-col bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Title */}
      <h4 className="text-3xl font-bold text-black text-center md:text-left p-6 tracking-tight">
        📍 Our Location
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-center md:text-left px-6 leading-relaxed">
        Find <span className="font-semibold text-indigo-700">NamoStay</span> in
        the heart of Bodhgaya. Easy access to sacred temples, colorful local
        markets, and public transport.
        <span className="block mt-2 text-indigo-600 font-semibold">
          Safe, central, and welcoming for all travelers.
        </span>
      </p>

      {/* Map */}
      <div className="w-full flex-1 p-4">
        <iframe
          title="NamoStay Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.050435664558!2d84.99149720000001!3d24.690792899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d007aeada53%3A0xde84dcc14691fc68!2sUrail%20Panchayat%20Bhavan!5e0!3m2!1sen!2sin!4v1693562450000!5m2!1sen!2sin"
          className="w-full h-80 md:h-full rounded-2xl shadow-md border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
}
