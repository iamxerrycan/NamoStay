import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex flex-col"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-black align-center text-center md:text-left">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 border border-gray-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-4 border border-gray-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border border-gray-200 rounded-xl w-full h-32 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-3 rounded-2xl hover:from-indigo-700 hover:to-indigo-600 transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Location Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-black text-center md:text-left p-6">
            Our Location
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left px-6">
            Find NamoStay in the heart of Bodhgaya. Easy access to temples,
            local markets, and transport.
          </p>
          <div className="w-full flex-1 p-6">
            <iframe
              title="NamoStay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.050435664558!2d84.99149720000001!3d24.690792899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d007aeada53%3A0xde84dcc14691fc68!2sUrail%20Panchayat%20bhavan!5e0!3m2!1sen!2sin!4v1756326140607!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
