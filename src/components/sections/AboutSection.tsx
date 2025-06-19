'use client';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companies = [
    {
      name: 'awwwards',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
    {
      name: 'CSS WINNER',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
    {
      name: '/thoughtworks',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
    {
      name: 'facebook',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
    {
      name: 'AUTODESK',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
    {
      name: 'CSS Design Awards',
      className:
        'border-2  border-black bg-white text-black px-10 py-6 rounded-full text-base font-medium',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Image
        src="/images/Vector.png"
        alt="Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="max-w-7xl mx-auto mt-24">
        {/* top */}
        <div className="relative z-10 flex justify-end items-center p-6 lg:p-8">
          <div className="flex items-center mb-4">
            <div className="p-1 border-2 border-primary rounded-full">
              <ArrowDown className="w-5 h-5" />
            </div>
            <span className="text-primary text-base font-normal border-2 border-primary px-5 py-2 rounded-full">
              About
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="relative z-10 px-6 lg:px-8 pt-16 lg:pt-24">
          <div className=" text-center">
            {/* Main Heading */}
            <motion.div
              className="w-full flex flex-col gap-14 space-y-4 md:space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-sporting font-bold leading-tight">
                I’ve been{' '}
                <span className="bg-black text-white px-4 py-1 rounded-lg">
                  Developing
                </span>{' '}
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-sporting font-bold leading-tight mt-2 md:mt-4">
                {' '}
                Websites since{' '}
                <span className="bg-black text-white px-4 py-1 rounded-lg">
                  2013
                </span>
              </h2>
            </motion.div>

            {/* Subtitle */}
            <p
              className={`text-base text-black max-w-3xl mx-auto my-16 transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-36">
        {/* Companies Section */}
        <div
          className={`transition-all duration-1000 delay-600 flex gap-8 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-left mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
              PREVIOUSLY
              <br />
              WORKED ON
            </h3>
          </div>

          {/* Company Badges */}
          <div className="flex flex-wrap items-center justify-start gap-4 mb-12">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`${company.className} transform hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer animate-pulse`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '2s',
                }}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
