"use client";
import React, { useRef } from "react";
import { FaMobile, FaLaptopCode, FaCube, FaWifi } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const HomeComp3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <FaMobile className="text-6xl text-[#714DB5] mb-4" />,
      title: "MOBILE APP DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaLaptopCode className="text-6xl text-[#714DB5] mb-4" />,
      title: "WEB DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaCube className="text-6xl text-[#714DB5] mb-4" />,
      title: "BLOCKCHAIN DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "IOT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Saas Development",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Custom Software Development",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Business Intelligence",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Cloud Computing",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "UI/UX Designs",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gray-50 py-35 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-full"
      >
        {/* Mobile Layout - Title in separate row */}
        <div className="block lg:hidden">
          {/* Title Row for Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-8 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#714DB5] leading-tight text-center">
              DISCOVER
              <br />
              OUR SERVICES
            </h1>
          </motion.div>
          
          {/* Service Cards Row for Mobile */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(113, 77, 181, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-[#714DB5]/10 rounded-xl border-y-2 border-x-0 border-[#714DB5]/80 p-6 flex-shrink-0 w-80 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-[#f0ebfa] border border-[#714DB5] rounded-lg p-4 inline-block mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-xl font-extrabold text-[#714DB5] uppercase mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-[#6b6b6b] text-xs uppercase leading-relaxed mb-6"
                  >
                    {service.description}
                  </motion.p>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#5b3f8c" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#714DB5] text-white px-6 py-2 rounded-lg font-bold transition-colors"
                  >
                    Read More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original single row layout */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-8 min-w-max px-4">
              {/* Title Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-shrink-0 w-96 flex items-center mx-10 justify-center"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-[#714DB5] leading-tight text-center">
                  DISCOVER
                  <br />
                  OUR SERVICES
                </h1>
              </motion.div>

              {/* All Service Cards */}
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(113, 77, 181, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-[#714DB5]/10 rounded-xl border-y-2 border-x-0 border-[#714DB5]/80 p-8 flex-shrink-0 w-100 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-[#f0ebfa] border border-[#714DB5] rounded-lg p-4 inline-block mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-2xl font-extrabold text-[#714DB5] uppercase mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-[#6b6b6b] text-sm uppercase leading-relaxed mb-6"
                  >
                    {service.description}
                  </motion.p>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#5b3f8c" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#714DB5] text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  >
                    Read More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeComp3;
