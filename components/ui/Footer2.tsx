"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Footer2 = () => {
  // Refs for scroll animations
  const footerRef = useRef(null);
  const companyRef = useRef(null);
  const linksRef = useRef(null);
  const servicesRef = useRef(null);
  const postsRef = useRef(null);
  const bottomRef = useRef(null);
  
  // Check if elements are in view
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.1 });
  const isCompanyInView = useInView(companyRef, { once: true, amount: 0.3 });
  const isLinksInView = useInView(linksRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isPostsInView = useInView(postsRef, { once: true, amount: 0.3 });
  const isBottomInView = useInView(bottomRef, { once: true, amount: 0.5 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.3,
        type: "spring" as const,
        stiffness: 200
      }
    })
  };
  
  // Social media icons array
  const socialIcons = [
    { icon: <FaTwitter className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#" },
    { icon: <FaFacebookF className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#" },
    { icon: <FaLinkedinIn className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#" },
    { icon: <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#" },
    { icon: <FaYoutube className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#" }
  ];
  
  // Useful links array
  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" }
  ];
  
  // Services array
  const services = [
    "Mobile Application Development",
    "Web Development",
    "Blockchain Development",
    "IoT Development",
    "Custom Software Development",
    "Business Intelligence"
  ];
  
  return (
    <motion.footer 
      ref={footerRef}
      className="bg-[#714DB5] text-white"
      initial={{ opacity: 0 }}
      animate={isFooterInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Section */}
          <motion.div 
            ref={companyRef}
            className="space-y-4 lg:space-y-6 text-center sm:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isCompanyInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center justify-center sm:justify-start space-x-2"
              variants={itemVariants}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isCompanyInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/robralLogo.png"
                  alt="Robral Logo"
                  width={120}
                  height={40}
                  className="h-10 lg:h-14 w-auto"
                />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-purple-200 text-sm leading-relaxed"
              variants={itemVariants}
            >
              Thinking Beyond Present.
            </motion.p>
            {/* Social Media Icons */}
            <motion.div 
              className="flex space-x-3 lg:space-x-4 justify-center sm:justify-start"
              variants={containerVariants}
            >
              {socialIcons.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={socialIconVariants}
                >
                  <Link
                    href={item.href}
                    className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Useful Links */}
          <motion.div 
            ref={linksRef}
            className="space-y-4 lg:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isLinksInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-lg lg:text-xl font-semibold text-white"
              variants={itemVariants}
            >
              Useful Links
              <motion.span 
                className="flex flex-row"
                initial={{ width: 0 }}
                animate={isLinksInView ? { width: "auto" } : { width: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 lg:w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[6px] lg:w-[8px]"></div>
                <div className="w-4 lg:w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </motion.span>
            </motion.h3>
            <motion.ul 
              className="space-y-2 lg:space-y-3"
              variants={containerVariants}
            >
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors flex items-center text-sm lg:text-base"
                  >
                    <motion.span 
                      className="text-[#FFAE8E] font-bold mr-2"
                      initial={{ x: -5, opacity: 0 }}
                      animate={isLinksInView ? { x: 0, opacity: 1 } : { x: -5, opacity: 0 }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* What We Do */}
          <motion.div 
            ref={servicesRef}
            className="space-y-4 lg:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-lg lg:text-xl font-semibold text-white"
              variants={itemVariants}
            >
              What We Do
              <motion.span 
                className="flex flex-row"
                initial={{ width: 0 }}
                animate={isServicesInView ? { width: "auto" } : { width: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 lg:w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[6px] lg:w-[8px]"></div>
                <div className="w-4 lg:w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </motion.span>
            </motion.h3>
            <motion.ul 
              className="space-y-2 lg:space-y-3 text-purple-200"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-sm lg:text-base"
                  variants={itemVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-1.5 lg:mt-2 mr-3 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isServicesInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  ></motion.span>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Popular Posts */}
          <motion.div 
            ref={postsRef}
            className="space-y-4 lg:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isPostsInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-lg lg:text-xl font-semibold text-white"
              variants={itemVariants}
            >
              Popular Posts
              <motion.span 
                className="flex flex-row"
                initial={{ width: 0 }}
                animate={isPostsInView ? { width: "auto" } : { width: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 lg:w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[6px] lg:w-[8px]"></div>
                <div className="w-4 lg:w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </motion.span>
            </motion.h3>
            <motion.div 
              className="space-y-3 lg:space-y-4"
              variants={containerVariants}
            >
              {/* Post 1 */}
              <motion.div 
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isPostsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Image
                    src="/footerImgIcon1.jpg"
                    alt="Mobile App"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover flex-shrink-0 w-12 h-12 lg:w-15 lg:h-15"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <p className="text-purple-200 text-xs lg:text-sm mb-1">
                    November 29, 2024
                  </p>
                  <Link
                    href="#"
                    className="text-white text-xs lg:text-sm hover:text-orange-400 transition-colors line-clamp-2"
                  >
                    20 Mobile App .......
                  </Link>
                </motion.div>
              </motion.div>

              {/* Post 2 */}
              <motion.div 
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isPostsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Image
                    src="/footerImgIcon2.jpg"
                    alt="Digital Triumph"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover flex-shrink-0 w-12 h-12 lg:w-15 lg:h-15"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <p className="text-purple-200 text-xs lg:text-sm mb-1">
                    November 29, 2024
                  </p>
                  <Link
                    href="#"
                    className="text-white text-xs lg:text-sm hover:text-orange-400 transition-colors line-clamp-2"
                  >
                    Digital Triumph .....
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div 
        ref={bottomRef}
        className="border-t bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <motion.div 
              className="text-[#878787] text-xs lg:text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={isBottomInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Copyright © 2025{" "}
              <Link
                href="#"
                className="text-[#878787] hover:text-[#FFAE8E] transition-colors"
              >
                Robral Technologies
              </Link>
              . All Rights Reserved.
            </motion.div>
            <motion.div 
              className="flex space-x-4 lg:space-x-6 text-xs lg:text-sm"
              initial={{ opacity: 0 }}
              animate={isBottomInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href="/terms"
                className="text-[#878787] hover:text-[#714DB5] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[#878787] hover:text-[#714DB5] transition-colors"
              >
                Privacy Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer2;
