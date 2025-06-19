'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Instagram, Globe } from 'lucide-react';

import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Calendar, href: '#', label: 'Calendar' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent-light/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Social Icons */}
          <motion.div
            className="hidden lg:flex flex-col items-start space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={cn(
                    'p-3 rounded-full bg-primary/10 backdrop-blur-sm',
                    'hover:bg-primary/20 transition-all duration-300',
                    'group flex items-center justify-center'
                  )}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon
                    size={24}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>

            {/* Vertical Line */}
            <motion.div
              className="w-px h-20 bg-primary/20"
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Username */}
            <motion.div
              className="transform -rotate-90 origin-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-sm text-primary/70 font-medium tracking-wider">
                @william.dev
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-heading font-sporting font-bold leading-none">
                <span className="block">Trusted</span>
                <span className="inline-block bg-primary text-secondary px-4 py-2 rounded-lg">
                  Partner
                </span>{' '}
                <span className="block">for</span>
              </h1>

              <motion.h2
                className="text-heading font-sporting font-bold leading-none"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Website{' '}
                <span className="inline-block bg-primary text-secondary px-4 py-2 rounded-lg">
                  Develop.
                </span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-body text-primary/80 font-sporting">
                Building the worlds best marketing websites for over a{' '}
                <span className="font-bold text-primary">decade</span>.
              </p>
              <p className="text-body text-primary/80 font-sporting">
                Your trusted partner for strategy, design, and dev.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className={cn(
                  'flex items-center space-x-3 px-8 py-4 rounded-full',
                  'border-2 border-primary bg-transparent text-primary',
                  'hover:bg-primary hover:text-secondary',
                  'transition-all duration-300 font-sporting font-medium',
                  'group'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Schedule a Call</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <motion.div
          className="lg:hidden flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className={cn(
                'p-3 rounded-full bg-primary/10 backdrop-blur-sm',
                'hover:bg-primary/20 transition-all duration-300'
              )}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={24} className="text-primary" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-3 bg-primary/30 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
