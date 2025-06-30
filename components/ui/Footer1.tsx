"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Footer1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <motion.hr
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1 }}
        className="border-2 border-[#714DB5]"
      />
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center py-8 lg:py-16 px-4 lg:px-8 mx-2 lg:mx-10 my-10 lg:my-20"
      >
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/footerImage.png"
            alt="Footer background"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-10 z-[1]" />

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 hidden lg:block">
          
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-lg w-full px-4 lg:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#714DB5] rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-6 lg:mb-8"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-500 text-white mb-3 lg:mb-4 leading-tight">
                  Let&apos;s build{" "}
                  <span className="text-orange-300">greatest</span>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>software together.
                </h3>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed px-2 lg:px-0">
                  We are here to bring your concept to life, manage your
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>ongoing project, or expand
                  your existing software.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onSubmit={handleSubmit}
                className="space-y-3 lg:space-y-4"
              >
                {/* Name Fields Row */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex-1"
                  >
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all text-sm lg:text-base"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex-1"
                  >
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all text-sm lg:text-base"
                    />
                  </motion.div>
                </div>

                {/* Email Field */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all text-sm lg:text-base"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all text-sm lg:text-base"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <textarea
                    name="message"
                    placeholder="Leave us a message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all resize-none text-sm lg:text-base"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="pt-3 lg:pt-4"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#FFAE8E] hover:bg-[#FFAE8E] text-white font-semibold py-2.5 lg:py-3 px-6 rounded-lg transition-all duration-300 shadow-lg text-sm lg:text-base"
                  >
                    Send message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Footer1;
