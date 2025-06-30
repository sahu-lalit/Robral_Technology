"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const About1 = () => {
  // Refs for scroll animations
  const mainSectionRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const bottomSectionRef = useRef(null);
  const decorRef = useRef(null);
  
  // Check if elements are in view
  const isMainSectionInView = useInView(mainSectionRef, { once: true, amount: 0.1 });
  const isColumn1InView = useInView(column1Ref, { once: true, amount: 0.3 });
  const isColumn2InView = useInView(column2Ref, { once: true, amount: 0.3 });
  const isColumn3InView = useInView(column3Ref, { once: true, amount: 0.3 });
  const isBottomSectionInView = useInView(bottomSectionRef, { once: true, amount: 0.3 });
  const isDecorInView = useInView(decorRef, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen lg:min-h-[200vh] flex flex-col items-center justify-start relative overflow-hidden pt-15"
      style={{
        background:
          "linear-gradient(135deg, #A76D8F 0%, #FFBCA2 25%, #714DB5 75%, #321071 100%)",
      }}
    >
      {/* Main container */}
      <motion.div 
        ref={mainSectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isMainSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto pl-0 lg:pl-0 relative pt-5 z-10"
      >
        <div className="hidden lg:flex flex-col lg:flex-row gap-5 h-[150vh] items-start">
          {/* 1st Column: 3 rows - 3/10 width */}
          <motion.div 
            ref={column1Ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isColumn1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col h-full pt-16 lg:w-4/15"
          >
            {/* 1st row - Image (about1.png) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isColumn1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[500px] overflow-hidden mb-8"
            >
              <Image
                src="/about1.png"
                alt="Abstract light pattern"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 2nd row - 'ABOUT US' text */}
            <motion.div 
              className="text-white text-left mb-8 mr-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={isColumn1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-7xl lg:text-8xl font-bold tracking-wide leading-tight"
              >
                ABOUT
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isColumn1InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center mt-2"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isColumn1InView ? { width: "8rem" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-32 h-1 bg-white mr-4"
                ></motion.div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isColumn1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-6xl lg:text-8xl font-bold tracking-wide"
                >
                  US
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 2nd Column: Single Image (about2.png) - 4/10 width */}
          <motion.div 
            ref={column2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isColumn2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-start justify-center h-full pt-16 lg:w-7/15 ml-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isColumn2InView ? 
                { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.6 }} 
                : { opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative w-full h-[900px] overflow-hidden"
            >
              <Image
                src="/about2.png"
                alt="AI Technology Face"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* 3rd Column: 2 rows - 3/10 width */}
          <motion.div 
            ref={column3Ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isColumn3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col h-full pt-16 lg:w-4/15"
          >
            {/* 1st row - Image (about3.png) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isColumn3InView ? 
                { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, delay: 0.8 }} 
                : { opacity: 0, scale: 0.9, rotate: -5 }}
              className="relative h-[700px] w-[120%] overflow-hidden"
            >
              <Image
                src="/about3.png"
                alt="Circular tech pattern"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 2nd row - Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isColumn3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-4 w-[120%]"
            >
              <p className="text-white text-3xl font-medium leading-relaxed text-justify">
                Robral Technologies Has Been A Leading Software Development Firm
                Since 2022.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* New Section with Content from Image */}
      <motion.div 
        ref={bottomSectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isBottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto px-8 pb-30 z-10"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isBottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-2xl font-light italic mb-8"
          >
            SINCE 2022
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isBottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white text-4xl lg:text-6xl font-lg leading-tight mb-8 max-w-6xl mx-auto"
          >
            WE PROVIDE TOP-NOTCH SOFTWARE DEVELOPMENT SOLUTIONS THAT HELP VARIOUS INDUSTRIES THRIVE.
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isBottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-white text-lg leading-relaxed max-w-2xl mx-auto text-justify"
        >
          <p>
            Our Expertise In Technology And Innovation Sets Us Apart From Others In The Industry. We Provide Top-Notch Software Development Solutions That Help Various Industries Thrive. With A Dedicated Team Of Professionals, We Create User-Friendly And Effective Software Tailored To Our Clients&apos; Needs. Our Commitment To Quality And Excellence Has Earned Us A Reputation As A Trusted Software Development Firm. From Cutting-Edge Technologies To Outstanding Customer Service, We Offer The Best In The Industry. Choose Robral Technologies For Reliable, Forward-Looking Software Solutions That Drive Success And Growth.
          </p>
        </motion.div>
      </motion.div>

      {/* Background decorative elements */}
      <motion.div 
        ref={decorRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={isDecorInView ? { opacity: 0.5, x: 0, y: 0 } : { opacity: 0, x: 50, y: -50 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={isDecorInView ? { opacity: 0.5, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About1;
