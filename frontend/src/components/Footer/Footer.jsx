import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-6">
        
        {/* Branding & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4">NamoStay</h2>
          <p className="mb-6">Experience Peaceful Stays in Bodhgaya</p>
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Phone className="w-5 h-5 text-indigo-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail className="w-5 h-5 text-indigo-500" />
            <span>contact@namostay.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MessageCircle className="w-5 h-5 text-green-500" />
            <span>+91 98765 43210 (WhatsApp)</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NamoStay. All rights reserved.
      </div>
    </footer>
  );
}
