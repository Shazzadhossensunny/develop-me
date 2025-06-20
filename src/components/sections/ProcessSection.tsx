'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MoveRight } from 'lucide-react';

const ProcessSection = () => {
  // Skills data
  const skills = [
    {
      title: 'Discovery',
      description:
        'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
      bgColor: 'bg-[#1A1A1A]',
      textColor: 'text-white',
      titleBg: 'bg-[#C5FFEE]',
      titleText: 'text-black',
    },
    {
      title: 'Strategy',
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth cycle reviews we're here to set the stage for success.",
      bgColor: 'bg-[#1A1A1A]',
      textColor: 'text-white',
      titleBg: 'bg-[#C5FFEE]',
      titleText: 'text-black',
    },
    {
      title: 'Design',
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
      bgColor: 'bg-[#1A1A1A]',
      textColor: 'text-white',
      titleBg: 'bg-[#C5FFEE]',
      titleText: 'text-black',
    },
    {
      title: 'Build',
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      bgColor: 'bg-[#1A1A1A]',
      textColor: 'text-white',
      titleBg: 'bg-[#C5FFEE]',
      titleText: 'text-black',
    },
  ];

  return (
    <div className="text-white overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black py-16 rounded-3xl relative">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-start mb-8 gap-20">
            <div className="flex items-center mb-6">
              <div className="p-2 border-2 border-white rounded-full">
                <ArrowDown className="w-4 h-4" />
              </div>
              <span className="text-white text-sm font-medium border-2 border-white px-4 py-2 rounded-full">
                Work Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              My Work Process
            </h2>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`
                ${skill.bgColor}
                border border-gray-700 rounded-2xl p-8 lg:p-10
                transition-all duration-500
                hover:bg-[#C5FF41] hover:text-black
                group cursor-pointer
                relative overflow-hidden
                min-h-[300px] flex flex-col justify-between
              `}
              whileHover={{
                rotate: 6.737,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`
                      ${skill.titleBg} ${skill.titleText}
                      group-hover:bg-black group-hover:text-white
                      px-4 py-2 rounded-full text-sm font-medium
                      transition-all duration-300
                    `}
                  >
                    {skill.title}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:text-black transition-colors duration-300 underline">
                    <MoveRight className="w-4 h-4" />
                    <span>Read More</span>
                  </div>
                </div>

                <p
                  className={`
                  ${skill.textColor}
                  group-hover:text-black
                  text-base lg:text-lg leading-relaxed
                  transition-colors duration-300
                `}
                >
                  {skill.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#C5FF41] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
