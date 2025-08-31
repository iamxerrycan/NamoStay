import React from "react";

const images = [
  {
    src: "/maintemp.jpg",
    desc: "Peaceful temple near Bodh Gaya",
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    desc: "Calm meditation hall",
  },
  {
    src: "/loby.jpg",
    desc: "Welcoming home lobby",
  },
  {
    src: "/food.jpg",
    desc: "Homemade traditional meals",
  },
  {
    src: "/terrace.jpg",
    desc: "Open terrace with peaceful views",
  },
  {
    src: "/bath.jpg",
    desc: "Clean and simple bathroom",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
         <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-900">Gallery</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer relative"
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              {/* overlay with description */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-3">
                <span className="text-white text-sm sm:text-base font-medium">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
