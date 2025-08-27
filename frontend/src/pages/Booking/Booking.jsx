import React, { useState, useEffect } from "react";

export default function Booking({ room, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    rooms: 1,
    message: "",
  });

  useEffect(() => {
    if (room) {
      setFormData((prev) => ({
        ...prev,
        rooms: 1,
      }));
    }
  }, [room]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}, your booking request for ${room.title} has been received!`
    );
    setFormData({ name: "", email: "", date: "", rooms: 1, message: "" });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 border rounded-lg w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-3 border rounded-lg w-full"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="p-3 border rounded-lg w-full"
      />
      <input
        type="number"
        name="rooms"
        min="1"
        value={formData.rooms}
        onChange={handleChange}
        required
        className="p-3 border rounded-lg w-full"
        placeholder="Number of Rooms"
      />
      <textarea
        name="message"
        placeholder="Additional Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 border rounded-lg w-full"
      ></textarea>
      <button
        type="submit"
        className="mt-2 w-full bg-indigo-900 text-white py-3 rounded-lg hover:bg-indigo-800 transition"
      >
        Submit Booking
      </button>
    </form>
  );
}
