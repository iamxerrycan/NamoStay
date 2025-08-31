import React from 'react';
import { Wallet, CreditCard, Banknote, Globe } from 'lucide-react'; // Globe for PayPal
import { motion } from 'framer-motion';

export default function PaymentOptions() {
  const options = [
    { Icon: Wallet, text: 'Cash on Arrival' },
    { Icon: CreditCard, text: 'UPI (Google Pay, PhonePe, Paytm)' },
    { Icon: Banknote, text: 'Bank Transfer' },
    { Icon: Globe, text: 'PayPal (for international guests)' }, // New option
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl w-full flex flex-col bg-gradient-to-br from-white to-indigo-50 shadow-xl"
    >
      {/* Title */}
      <h4 className="text-3xl font-bold text-black text-center md:text-left p-6 tracking-tight">
        💳 Payment Options
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-center md:text-left px-6 mb-4 leading-relaxed">
        Choose the most convenient way to pay at{' '}
        <span className="font-semibold text-indigo-700">NamoStay</span>. We
        support local and international methods for your ease.
      </p>

      {/* Options */}
      <ul className="space-y-5 text-gray-700 text-lg px-6 pb-6 flex-1">
        {options.map(({ Icon, text }, i) => (
          <li
            key={i}
            className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:scale-[1.02] hover:shadow-md hover:border-indigo-300 transition-all duration-200 cursor-pointer"
          >
            <Icon className="w-6 h-6 text-indigo-600" />
            <span className="font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
