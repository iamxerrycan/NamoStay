import React from 'react';
import {
  Wifi,
  Dumbbell,
  Car,
  UtensilsCrossed,
  Waves,
  Flower2,
} from 'lucide-react';

const amenities = [
  { icon: <Wifi className="w-8 h-8 text-blue-500" />, title: 'Free Wi-Fi' },
  { icon: <Flower2 className="w-8 h-8 text-pink-500" />, title: 'Wellness' },
  { icon: <Waves className="w-8 h-8 text-teal-500" />, title: 'open terrace' },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-green-500" />,
    title: 'Food',
  },
  { icon: <Dumbbell className="w-8 h-8 text-red-500" />, title: 'Fitness' },
  { icon: <Car className="w-8 h-8 text-yellow-500" />, title: 'Parking' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
         <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 text-gray-800">
        Amenities At <span className="text-blue-900">NamoStay</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {item.icon}
              <p className="mt-4 text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
