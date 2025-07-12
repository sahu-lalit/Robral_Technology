"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HomeComp1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/homeImage.png"
        alt="Home background"
        fill
        className="object-cover"
        priority
      />{" "}
      {/* Full Screen Rotating Circular Gradient Overlay */}
      <div
        className="absolute z-[1] opacity-90"
        style={{
          background: `conic-gradient(
            from 160deg at 50% 50%,
            #FFAC8B 0%,
            #D28CB7 20%,
            #a76d8f 35%,
            #7f53ac 45%,
            #5e3387 55%,
            #2E3947 65%,
            #1c2d5e 73%,
            #1a1e5e 78%,
            #1c2d5e 87%,
            #22254B 93%,
            #FFAC8B 100%
          )`,
          animation: 'rotate-gradient 8s linear infinite',
          width: '400vw',
          height: '400vh',
          left: '-150vw',
          top: '-150vh',
          transformOrigin: '50% 50%',
        }}
      />
      
      {/* Second full screen rotating gradient layer */}
      <div
        className="absolute z-[1] opacity-25"
        style={{
          background: `conic-gradient(
            from 270deg at 50% 50%,
            #FFAC8B 0%,
            #22254B 25%,
            #5e3387 50%,
            #D28CB7 75%,
            #FFAC8B 100%
          )`,
          animation: 'rotate-gradient 12s linear infinite reverse',
          width: '400vw',
          height: '400vh',
          left: '-150vw',
          top: '-150vh',
          transformOrigin: '50% 50%',
        }}
      />
      
      {/* Additional gradient layer for extra coverage */}
      <div
        className="absolute z-[1] opacity-15"
        style={{
          background: `radial-gradient(
            circle at 50% 50%,
            #FFAC8B 0%,
            #D28CB7 30%,
            #5e3387 60%,
            #22254B 100%
          )`,
          animation: 'rotate-gradient 15s linear infinite',
          width: '500vw',
          height: '500vh',
          left: '-200vw',
          top: '-200vh',
          transformOrigin: '50% 50%',
        }}
      />
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16 lg:py-25 h-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-12 lg:space-y-25">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight lg:whitespace-nowrap px-4 sm:px-6 lg:pl-10"
            >
              Thinking Beyond Present
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="max-w-xl"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed text-justify px-4 sm:px-6 lg:pl-10">
                Welcome to Robral Technologies! As a leading software development
                firm, we focus on delivering exceptional solutions that combine
                beautifully designed user interfaces, rapid load times, robust
                data protection, and stellar customer support. Our built-in
                integrations and attention to detail ensure your product performs
                at its best, all while staying within your budget. We understand
                the importance of delivering top-tier performance software
                development products without compromising on size or quality.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-6 lg:pl-10"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#FFAE8E", color: "white" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#FFAE8E] text-[#FFAE8E] rounded-lg font-semibold transition-all duration-300 text-base sm:text-lg"
              >
                Read More
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#FFAE8E", color: "white" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#FFAE8E] text-[#FFAE8E] rounded-lg font-semibold transition-all duration-300 text-base sm:text-lg"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements with animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
};

export default HomeComp1;
