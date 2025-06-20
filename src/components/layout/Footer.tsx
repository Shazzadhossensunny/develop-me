'use client';

import { motion, Variants } from 'framer-motion';
import { Twitter, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Menu',
      links: [
        { label: 'HOME', href: '#home' },
        { label: 'ABOUT', href: '#about' },
        { label: 'PORTFOLIO', href: '#portfolio' },
        { label: 'BLOG', href: '#blog' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'TWITTER', href: 'https://twitter.com' },
        { label: 'INSTAGRAM', href: 'https://instagram.com' },
        { label: 'FACEBOOK', href: 'https://facebook.com' },
        { label: 'BEHANCE', href: 'https://behance.net' },
        { label: 'DRIBBBLE', href: 'https://dribbble.com' },
      ],
    },
  ];

  const socialIcons = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className={`bg-black text-white relative z-10 overflow-hidden rounded-[52px] mx-5 mb-5 ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container-custom mx-auto px-4 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo column */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-gradual font-extrabold text-[#C5FF41]">
                DEVLOP.ME
              </h2>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="md:col-span-2">
            <motion.h3
              className="text-4xl md:text-5xl lg:text-[64px] font-gradual font-bold text-white"
              variants={itemVariants}
            >
              As you can
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-24">
              {/* Say Hello section */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  Say hello
                </h4>
                <ul className="space-y-3">
                  <li>
                    <motion.a
                      href="mailto:hello@devlop.me.com"
                      className="text-gray-300 hover:text-white block"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      HELLO@DEVLOP.ME.COM
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="mailto:mahbubul@me.com"
                      className="text-gray-300 hover:text-white block"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      MAHBUBUL@ME.COM
                    </motion.a>
                  </li>
                </ul>
              </motion.div>

              {/* Menu section */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  Menu
                </h4>
                <ul className="space-y-3">
                  {footerSections[0].links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-white block"
                        variants={itemVariants}
                        whileHover="hover"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social section */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  Social
                </h4>
                <ul className="space-y-3">
                  {footerSections[1].links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-white block"
                        variants={itemVariants}
                        whileHover="hover"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Calls section */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  Calls
                </h4>
                <ul className="space-y-3">
                  <li>
                    <motion.a
                      href="tel:+784549498100"
                      className="text-gray-300 hover:text-white block"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      +784 549 4981 00
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="tel:+88450100211"
                      className="text-gray-300 hover:text-white block"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      +8845 0100 211
                    </motion.a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mt-24 pt-8 border-t border-gray-800"
          variants={itemVariants}
        >
          <h4 className="text-2xl font-extrabold font-gradual text-secondary">
            BESNIK
          </h4>
          <p className="text-sm text-gray-400 my-4 md:my-0">
            © devlop.me {currentYear}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <motion.a
              href="#privacy"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              PRIVACY
            </motion.a>
            <span className="text-gray-600">-</span>
            <motion.a
              href="#terms"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              TERMS
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
