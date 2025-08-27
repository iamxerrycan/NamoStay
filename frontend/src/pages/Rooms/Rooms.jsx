import React, { useState } from "react";
import Booking from "../Booking/Booking";

const rooms = [
  {
    title: "Luxury Room",
    price: "₹6,999 / night",
    img: "https://source.unsplash.com/400x250/?hotel,room,luxury",
    desc: "Spacious room with king-size bed, balcony, and premium amenities.",
  },
  {
    title: "Deluxe Room",
    price: "₹4,999 / night",
    img: "https://source.unsplash.com/400x250/?hotel,deluxe,room",
    desc: "Cozy deluxe room with modern interiors and great view.",
  },
  {
    title: "Suite Room",
    price: "₹8,999 / night",
    img: "https://source.unsplash.com/400x250/?hotel,suite,room",
    desc: "Luxurious suite with private living area, bathtub, and 24/7 service.",
  },
];

export default function Rooms() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openBookingModal = (room) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{room.title}</h3>
                <p className="text-gray-600 mt-2">{room.desc}</p>
                <p className="text-indigo-900 font-bold mt-3">{room.price}</p>
                <button
                  className="mt-4 px-6 py-2 bg-indigo-900 text-white rounded-lg hover:bg-indigo-700 transition"
                  onClick={() => openBookingModal(room)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={closeBookingModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedRoom?.title}</h2>
            <Booking room={selectedRoom} closeModal={closeBookingModal} />
          </div>
        </div>
      )}
    </section>
  );
}
