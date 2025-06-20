'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveLeft, MoveRight } from 'lucide-react';

const WhyChooseMeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Skills data
  const skills = [
    {
      title: 'HTML & CSS',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'JavaScript',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Webflow',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'React',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Node.js',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
    {
      title: 'Next.js',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
    },
  ];

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl and above
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm and below
    }
    return 3; // default for SSR
  };

  const [visibleCards, setVisibleCards] = useState(3);
  const maxSlides = Math.ceil(skills.length / visibleCards);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
    setIsAutoPlaying(false);
  };

  // Icon component
  const SkillIcon = ({ className = '' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="99"
      viewBox="0 0 99 99"
      fill="none"
      className={className}
    >
      <ellipse
        cx="49.5"
        cy="49.5024"
        rx="48.5"
        ry="15"
        stroke="white"
        strokeWidth="2"
      />
      <ellipse
        cx="49.5001"
        cy="49.5024"
        rx="48.5"
        ry="15"
        transform="rotate(-60 49.5001 49.5024)"
        stroke="white"
        strokeWidth="2"
      />
      <ellipse
        cx="49.4999"
        cy="49.5022"
        rx="48.5"
        ry="15"
        transform="rotate(60 49.4999 49.5022)"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="7" fill="#C5FF41" />
    </svg>
  );

  return (
    <div className=" text-white overflow-hidden">
      <div className="container-custom bg-black mx-auto  py-16 px-10  rounded-3xl relative">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-8">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-1 border-2 border-white rounded-full">
                  <ArrowDown className="w-5 h-5" />
                </div>
                <span className="text-secondary text-base font-normal border-2 border-secondary px-5 py-2 rounded-full">
                  Why Choose me
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-tight md:leading-relaxed lg:leading-[80px]">
                My Extensive List of Skills
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:items-end">
              <div className="h-px w-full lg:w-[80%] mb-6 hidden lg:block" />
              <p className="text-secondary text-lg">
                Building the worlds best marketing websites. Your trusted
                partner for strategy, design, and dev.
              </p>
              <div className="h-px w-full bg-white mt-8 mb-12" />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-5 mb-10">
          <button
            onClick={prevSlide}
            className=" w-12 h-12 rounded-full border border-white bg-black bg-opacity-80 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
          >
            <MoveLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className=" w-12 h-12 rounded-full border border-white bg-black bg-opacity-80 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300"
          >
            <MoveRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Skills Cards Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${maxSlides * 100}%`,
              }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex gap-6"
                  style={{ width: `${100 / maxSlides}%` }}
                >
                  {skills
                    .slice(
                      slideIndex * visibleCards,
                      (slideIndex + 1) * visibleCards
                    )
                    .map((skill, cardIndex) => {
                      const globalIndex = slideIndex * visibleCards + cardIndex;
                      // const isActive = slideIndex === currentSlide;

                      return (
                        <motion.div
                          key={globalIndex}
                          className={`
                            bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8
                            transition-all duration-500 flex flex-col justify-between
                             relative overflow-hidden
                            hover:shadow-[0_0_30px_rgba(197,255,65,0.2)]
                          `}
                          whileHover={{
                            rotate: 6.737,
                            scale: 1.02,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <div>
                            <div className="mb-8">
                              <SkillIcon className="w-16 h-16" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                              {skill.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMeSection;
