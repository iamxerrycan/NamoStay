import React from "react";

const images = [
  "https://source.unsplash.com/400x300/?hotel,room",
  "https://source.unsplash.com/400x300/?bodhgaya,temple",
  "https://source.unsplash.com/400x300/?hotel,lobby",
  "https://source.unsplash.com/400x300/?bodhgaya,monastery",
  "https://source.unsplash.com/400x300/?hotel,pool",
  "https://source.unsplash.com/400x300/?buddha,temple",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
