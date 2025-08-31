import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Contact <span className="text-indigo-900">NamoStay</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Box: Booking Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex flex-col"
          >
            <h3 className="text-3xl font-extrabold mb-6 text-black text-center md:text-left">
              Book Your Stay Directly
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Welcome to{' '}
              <span className="font-semibold text-indigo-800">NamoStay</span> –
              a <strong>peaceful</strong> and <strong>budget-friendly</strong>{' '}
              stay in Bodhgaya.
              <br />
              This is not a luxury hotel, but a <strong>
                homely space
              </strong>{' '}
              where you’ll be treated like family.
              <br />
              We provide{' '}
              <strong>
                clean rooms, fan, healthy home-cooked meals, clean washrooms,
                and an open terrace
              </strong>
              .
            </p>

            <p className="text-gray-600 mb-8 text-base">
              ✨ Guests from{' '}
              <strong>
                Vietnam, Japan, Bhutan, Thailand, Malaysia, UK, US
              </strong>{' '}
              and many more have already stayed here and felt at home.
              <br /> <br />
              💰 <strong>Lowest price in Bodhgaya</strong>• 🪷 Calm & peaceful
              atmosphere • 👀 Visit first, then decide to stay .
              <br />
              <br />
              🏡{' '}
              <strong>
                You’re not just booking a room – you’re joining a family.
              </strong>
            </p>
          </motion.div>

          {/* Right Box: Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center"
          >
            {/* Heading */}
            <h3 className="text-3xl font-extrabold mb-6 text-black text-center md:text-left">
              Connect with Us
            </h3>

            {/* Subtext */}
            <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-md font-medium">
              Booking is simple and direct – contact us via WhatsApp, Email, or
              a quick Call. We’ll assist you personally with every detail.
            </p>

            {/* Emotional / Hospitality Text */}
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-md italic">
              🙏 We believe in{' '}
              <span className="font-semibold text-indigo-800">
                trust, care, and warmth
              </span>
              , ensuring your stay feels safe and welcoming.
              <br /> 💬 Guests return not only for comfort, but for the
              <span className="font-semibold text-indigo-800">
                {' '}
                genuine hospitality & friendships
              </span>{' '}
              they build here.
            </p>

            {/* Buttons */}
            <div className="w-full space-y-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl shadow-lg transition-all text-lg font-semibold tracking-wide"
              >
                <MessageCircle className="w-5 h-5" /> Book via WhatsApp
              </a>

              <a
                href="mailto:namostay@example.com"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl shadow-lg transition-all text-lg font-semibold tracking-wide"
              >
                <Mail className="w-5 h-5" /> Book via Email
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white py-4 rounded-2xl shadow-lg transition-all text-lg font-semibold tracking-wide"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
