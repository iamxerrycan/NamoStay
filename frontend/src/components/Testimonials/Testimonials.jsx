import React from "react";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Travel Blogger",
    review:
      "Amazing stay! Cozy rooms, peaceful atmosphere, and the staff was extremely helpful.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Photographer",
    review:
      "The perfect place to relax and unwind. Loved the interiors and the food was delicious!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ankit Verma",
    role: "Tourist",
    review:
      "Highly recommend NamoStay! Excellent location and top-notch amenities.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Guests Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.role}</p>
              <p className="text-gray-600 italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
