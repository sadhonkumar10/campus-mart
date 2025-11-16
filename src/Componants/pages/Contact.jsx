import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("https://formspree.io/f/mdkywgrb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent successfully 🎉");
      e.target.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-6xl w-full">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Any questions or remarks? Just write us a message.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">

          {/* Left contact info */}
          <div className="bg-purple-900 text-white md:w-1/3 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="flex items-center mb-3">
                <FaPhone className="mr-3" />
                <span>+233543201893</span>
              </div>
              <div className="flex items-center mb-6">
                <FaEnvelope className="mr-3" />
                <span>aljay3334@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <FaFacebook className="hover:text-pink-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-pink-500 cursor-pointer" />
            </div>
          </div>

          {/* Right form */}
          <div className="md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 border-purple-400 focus:border-purple-600 outline-none py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-b-2 border-purple-400 focus:border-purple-600 outline-none py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+8801********"
                  className="w-full border-b-2 border-purple-400 focus:border-purple-600 outline-none py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full border-b-2 border-purple-400 focus:border-purple-600 outline-none py-1 resize-none"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-purple-900 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>

              {status && <p className="text-green-600 font-medium mt-3">{status}</p>}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
