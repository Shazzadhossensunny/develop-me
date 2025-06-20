'use client';
import { motion } from 'framer-motion';
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
      title: 'Say hello',
      links: [
        { label: 'HELLO@DEVELOP.ME.COM', href: 'mailto:hello@develop.me.com' },
        { label: 'MAHBUBUL@ME.COM', href: 'mailto:mahbubul@me.com' },
      ],
    },
    {
      title: 'Call',
      links: [
        { label: '+784549 4981 00', href: 'tel:+78454949810' },
        { label: '+8845 0100 911', href: 'tel:+88450100911' },
      ],
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer
      className={`bg-black text-white relative overflow-hidden ${className}`}
    >
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-lime-400"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Left Section - Brand & Tagline */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-lime-400 tracking-wide">
                DEVELOP.ME
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                As you can
              </h3>
            </div>
          </motion.div>

          {/* Right Section - Footer Links */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left - Brand Name */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl md:text-2xl font-bold text-white">
                BESNIK
              </h4>
            </motion.div>

            {/* Center - Copyright */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center md:text-center"
            >
              <p className="text-sm text-gray-400">
                © develop.me {currentYear}
              </p>
            </motion.div>

            {/* Right - Links & Social */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              {/* Privacy & Terms */}
              <div className="flex gap-4 text-sm">
                <motion.a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  PRIVACY
                </motion.a>
                <span className="text-gray-600">·</span>
                <motion.a
                  href="#terms"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  TERMS
                </motion.a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
