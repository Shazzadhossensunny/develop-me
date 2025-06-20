'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Twitter, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-lime-300 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
          {/* Left Section - Contact Info */}
          <motion.div
            className="lg:w-2/5 flex flex-col justify-center p-6 lg:p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Badge */}
            <motion.div
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 w-fit shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Contact</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Interested in{' '}
                <span className="bg-black text-white px-2 py-1 rounded inline-block">
                  work
                </span>{' '}
                together?
              </h1>

              {/* Red notification badge */}
              <motion.div
                className="inline-flex items-center justify-center bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                673
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </motion.p>

            {/* Schedule Call Button */}
            <motion.button
              className="flex items-center gap-3 bg-white border-2 border-gray-300 rounded-full px-6 py-3 w-fit hover:border-gray-400 transition-colors group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Schedule a Call</span>
            </motion.button>

            {/* Image Badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2 bg-blue-500 text-white text-xs px-3 py-1 rounded w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              📷 Image 1772
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="lg:w-3/5 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 md:p-10 w-full max-w-md ml-auto shadow-2xl">
              {/* Form Fields */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-3 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-3 focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Your email address"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-3 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                    placeholder="Describe your project"
                  />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Send
                  </button>

                  <span className="text-gray-400 py-3">or</span>

                  <button
                    type="button"
                    className="flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-full hover:border-gray-500 transition-colors"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Contact me
                  </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex items-center gap-4 pt-6 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <span className="text-gray-400 text-sm">@williamney</span>
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-lime-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
