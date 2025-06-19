'use client';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Phone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home-bg.png"
        alt="Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-16 py-20">
        {/* Main Heading - Increased spacing between lines */}
        <motion.div
          className="w-full flex flex-col gap-14 space-y-4 md:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-sporting font-bold leading-tight">
            Trusted{' '}
            <span className="bg-black text-white px-4 py-1 rounded-lg">
              Partner
            </span>{' '}
            for
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-sporting font-bold leading-tight mt-2 md:mt-4">
            {' '}
            {/* Added mt-2 md:mt-4 */}
            Your Website{' '}
            <span className="bg-black text-white px-4 py-1 rounded-lg">
              Develop.
            </span>
          </h2>
        </motion.div>

        {/* Second Row - Modified alignment */}
        <div className="flex flex-col lg:flex-row mt-12 lg:mt-16 gap-8 lg:gap-8 justify-between items-center lg:items-end">
          <div className="flex items-end">
            {/* Left: Username - Aligned to bottom */}
            <div className="hidden lg:flex flex-col justify-end mb-12">
              {' '}
              <span className="-rotate-90 text-sm text-primary/70 font-medium tracking-wider">
                @william.dev
              </span>
            </div>

            {/* Middle: Social Icons - Aligned to bottom */}
            <motion.div
              className="hidden lg:flex flex-col justify-end"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={cn(
                      'p-3 rounded-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group flex items-center justify-center'
                    )}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
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
              {/* Vertical Line - Extended to match height */}
              <div className="w-px h-24 bg-black mx-auto mt-4" />{' '}
              {/* Increased height and added margin */}
            </motion.div>
          </div>

          {/* Right: Text + Button - Added bottom padding */}
          <motion.div
            className="w-full lg:w-3/4 flex flex-col justify-end space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-4 mx-auto lg:mx-0">
              <p className="text-base md:text-lg text-primary/80 font-sporting">
                Building the world's best marketing websites for over a
                decade{' '}
              </p>
              <p className="text-base md:text-lg text-primary/80 font-sporting">
                Your trusted partner for strategy, design, and dev.
              </p>
            </div>

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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
