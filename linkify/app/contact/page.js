"use client";

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send message.");
    }

    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Have any questions or suggestions? Feel free to reach out!
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write Your Message Here ....."
            ></textarea>
          </div>
          <button
            type="submit"
            // onSubmit={handleSubmit}
            className="w-full bg-blur-600  text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all 
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
