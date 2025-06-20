'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  Twitter,
  Instagram,
  Facebook,
  ArrowDown,
  Send,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-lime-300 flex items-center justify-center p-4 overflow-hidden">
      <div className="container-custom w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Section - Contact Info */}
          <motion.div
            className="lg:w-2/3 flex flex-col justify-center p-6 lg:p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Badge */}

            <div className="flex items-start gap-20">
              <div className="flex items-center mb-6">
                <div className="p-2 border-2 border-black rounded-full">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <span className="text-primary text-sm font-medium border-2 border-black px-4 py-2 rounded-full">
                  Contact
                </span>
              </div>
            </div>

            {/* Main Heading */}

            <motion.div
              className="w-full flex flex-col gap-14 space-y-4 md:space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-sporting font-bold !leading-[120px]">
                Interested in{' '}
                <span className="bg-black text-white px-4 py-1 rounded-lg">
                  work
                </span>{' '}
                together?
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base text-primary md:max-w-full lg:max-w-2xl mt-5 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </motion.p>

            {/* Schedule Call Button */}
            <div>
              <motion.button
                className={cn(
                  'flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary transition-all duration-300 font-sporting font-medium mx-auto lg:mx-0 group'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Schedule a Call</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="lg:w-1/3 flex items-center"
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
                    className="flex items-center gap-2 text-white border border-white px-4 py-3 rounded-full font-normal"
                  >
                    <Send className="w-5 h-5" />
                    Send
                  </button>

                  <span className="text-gray-400 py-3">or</span>

                  <button
                    type="button"
                    className="flex items-center gap-2 border text-white border-white px-6 py-3 rounded-full "
                  >
                    <Mail className="w-5 h-5" />
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
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-white mx-auto" />{' '}
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
