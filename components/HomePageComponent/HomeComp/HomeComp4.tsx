"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const HomeComp4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.3, scale: 1, transition: { duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section ref={ref} className="py-25 lg:py-32 bg-gray-50 border border-y-4 border-x-0 border-[#714DB5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-lg"
        ></motion.div>
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="absolute top-20 right-20 w-16 h-16 bg-orange-100 rounded-lg"
        ></motion.div>
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-lg"
        ></motion.div>
        <motion.div 
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="absolute bottom-10 right-10 w-18 h-18 bg-purple-100 rounded-lg"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Mobile Layout - Simplified decorative elements */}
        <div className="block lg:hidden">
          <div className="relative mb-8">
            {/* Simplified mobile decorative layout */}
            <div className="flex justify-center space-x-4 mb-6">
              <motion.div 
                custom={1}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-16 h-20 rounded-lg overflow-hidden shadow-lg"
              >
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={64} 
                  height={80} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div 
                variants={decorativeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-14 h-14 bg-purple-100 rounded-lg opacity-60 self-center"
              ></motion.div>
              <motion.div 
                custom={2}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-16 h-20 rounded-lg overflow-hidden shadow-lg"
              >
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={64} 
                  height={80} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <motion.div 
                variants={decorativeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
                className="w-12 h-16 bg-orange-100 rounded-lg opacity-60"
              ></motion.div>
              <motion.div 
                custom={3}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-20 h-24 rounded-lg overflow-hidden shadow-lg"
              >
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={96} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div 
                variants={decorativeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="w-12 h-16 bg-blue-100 rounded-lg opacity-60"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original complex positioning */}
        <div className="hidden lg:block">
          <div className="relative mb-12">
            {/* Left side - 5 elements (3 images + 2 decorative) */}
            <div className="absolute left-0 top-0 lg:left-10 xl:left-20">
              <div className="grid grid-cols-2 gap-4 w-40">
                {/* Top row */}
                <motion.div 
                  variants={decorativeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-16 bg-gray-200 rounded-lg"
                ></motion.div>
                <motion.div 
                  custom={1}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                {/* Bottom row */}
                <motion.div 
                  custom={2}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div 
                  variants={decorativeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 bg-gray-200 rounded-lg"
                ></motion.div>
              </div>
              {/* 5th element - positioned separately */}
              <motion.div 
                custom={3}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-16 h-24 rounded-lg overflow-hidden shadow-lg mt-4 ml-2"
              >
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={64} 
                  height={96} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            {/* Left center - 2 elements */}
            <div className="absolute left-32 top-8 lg:left-52 xl:left-72">
              <div className="flex flex-col space-y-6">
                <motion.div 
                  custom={2}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-24 h-32 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={96} 
                    height={128} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div 
                  custom={3}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right center - 2 elements */}
            <div className="absolute right-32 top-8 lg:right-52 xl:right-72">
              <div className="flex flex-col space-y-6">
                <motion.div 
                  custom={2}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-24 h-32 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={96} 
                    height={128} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div 
                  custom={3}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right side - 5 elements (3 images + 2 decorative) */}
            <div className="absolute right-0 top-0 lg:right-10 xl:right-20">
              <div className="grid grid-cols-2 gap-4 w-40">
                {/* Top row */}
                <motion.div 
                  custom={1}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div 
                  variants={decorativeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-16 bg-gray-200 rounded-lg"
                ></motion.div>
                {/* Bottom row */}
                <motion.div 
                  variants={decorativeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 bg-gray-200 rounded-lg"
                ></motion.div>
                <motion.div 
                  custom={2}
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-20 h-28 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image 
                    src="/testimonial1.jpg" 
                    alt="Professional testimonial" 
                    width={80} 
                    height={112} 
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
              {/* 5th element - positioned separately */}
              <motion.div 
                custom={3}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-16 h-24 rounded-lg overflow-hidden shadow-lg mt-4 mr-2 ml-auto"
              >
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={64} 
                  height={96} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            {/* Additional decorative elements scattered around */}
            <motion.div 
              variants={decorativeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="absolute top-0 left-1/4 w-16 h-12 bg-purple-100 rounded-lg opacity-60"
            ></motion.div>
            <motion.div 
              variants={decorativeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-1/4 w-20 h-14 bg-orange-100 rounded-lg opacity-60"
            ></motion.div>
            <motion.div 
              variants={decorativeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="absolute bottom-20 left-1/3 w-18 h-16 bg-blue-100 rounded-lg opacity-60"
            ></motion.div>
            <motion.div 
              variants={decorativeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }}
              className="absolute bottom-16 right-1/3 w-16 h-18 bg-purple-100 rounded-lg opacity-60"
            ></motion.div>
          </div>
        </div>

        {/* Central Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto pt-16 lg:pt-32"
        >
          {/* Testimonials Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="inline-flex items-center justify-center px-4 py-2 lg:px-6 bg-purple-200 rounded-full mb-6 lg:mb-8"
          >
            <span className="text-purple-700 font-medium tracking-wide text-xs lg:text-sm uppercase">
              TESTIMONIALS
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-[#714DB5] text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed px-4 lg:px-0"
          >
            Learn why professionals trust our solutions to<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>complete their technical journeys
          </motion.p>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12 leading-tight px-4 lg:px-0"
          >
            <span className="text-[#714DB5]">Trusted By Leaders</span><br />
            <span className="text-[#FFAE8E]">From Various Industries</span>
          </motion.h2>

          {/* CTA Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-[#714DB5] hover:bg-[#714DB5] text-white font-semibold rounded-lg transition-colors duration-300 group text-sm lg:text-base"
          >
            READ SUCCESS STORIES
            <motion.svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut",
                repeatDelay: 3
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeComp4;