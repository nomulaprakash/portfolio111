import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] pt-20 pb-10 px-4 bg-transparent text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out by filling the form or contacting me directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 text-sm md:text-base">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">nomulajyothiprakash@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+91 9701497578</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">Hyderabad, India</p>
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-semibold mb-1">Freelance</h3>
              <p className="text-gray-300">Available for freelance projects and collaborations.</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-md rounded-md">
            <div>
              <label className="block text-sm font-medium text-gray-200">Name</label>
              <input
                type="text"
                required
                className="w-full mt-1 px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Subject</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Let us know how we can help"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Message</label>
              <textarea
                rows="4"
                required
                className="w-full mt-1 px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
