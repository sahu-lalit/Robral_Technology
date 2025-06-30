"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const HomeComp2 = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const accordionItems = [
    {
      title: "Custom Web Application Development",
      content:
        "Power your business transformation with superior web apps adjusted to your business objectives. Our custom application development firm delivers stable and responsive web applications from scratch that smoothly integrate with existing environments. We create a broad spectrum of web solutions.",
    },
    {
      title: "Super app for any industry",
      content:
        "A Super App is a unified platform offering multiple services within a single application, eliminating the need for multiple apps. For example, in the retail industry, a Super App can integrate online shopping, payment solutions, loyalty rewards, personalized recommendations, delivery tracking, and customer support. It creates a seamless user experience, increases engagement, and fosters brand loyalty. Super Apps leverage advanced technologies like AI and analytics to provide tailored solutions, while features like digital wallets streamline transactions. Popular in industries like e-commerce, healthcare, and travel, they drive convenience and efficiency, serving as an all-in-one solution for users’ diverse needs.",
    },
    {
      title: "From DApps to DeFi: We are the leaders in Blockchain Solutions",
      content:
        "From DApps to DeFi, we create blockchain solutions that transform businesses. As experts in the field, we design secure and easy-to-use technologies to meet your unique needs. Whether it’s building decentralized apps, smart contracts, or finance platforms, we make sure your business stays ahead. Our goal is to help you unlock the power of blockchain and take your business to the next level. Work with us and lead the way in the blockchain revolution!",
    },
    {
      title: "Our Clients Demand Neural Networks to Gen AI",
      content:
        "Our clients rely on us for AI solutions that range from neural networks for smart predictions to generative AI for creativity and automation. We create practical, powerful tools that solve real problems and help businesses grow. With us, you’ll get simple, effective AI that works for you.",
    },
    {
      title: "How To Use Technology to Desire",
      content:
        "Using IoT, technology helps turn your desires into reality. From smart homes that adapt to your preferences to wearable devices that track your health, IoT connects everyday objects to make life easier. We provide tailored IoT solutions to enhance your lifestyle, delivering seamless, real-time experiences that meet your needs.",
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div ref={ref} className="min-h-screen bg-[#714DB5] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-35 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl w-full"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="sm:whitespace-nowrap"
            >
              Cutting-Edge Software{" "}
              <span className="text-[#FFAE8E]">Solutions</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              for your Business
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-8xl mx-auto mt-8 sm:mt-12 lg:mt-20 text-justify px-2 sm:px-4"
          >
            A seasoned software development company, we have built up competencies
            to empower a wide range of custom software development solutions to
            introduce automation into your business processes. Our expert team of
            certified engineers and developers employs a unique combination of
            trending technologies and components to create flexible, secure, and
            competitive digital products.
          </motion.p>
        </motion.div>
        {/* Accordion Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mt-8 sm:mt-16 lg:mt-25 border border-white/20"
        >
          <div className="space-y-2 sm:space-y-4">
            {accordionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="border-b border-white/20 last:border-b-0"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 sm:py-6 px-2 sm:px-4 text-left flex items-center justify-between group rounded-lg transition-all duration-200"
                >
                  <motion.span className="text-white text-base sm:text-lg md:text-xl font-medium group-hover:text-orange-300 transition-colors pr-2">
                    {item.title}
                  </motion.span>
                  <div className="flex-shrink-0 ml-2 sm:ml-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-300 ${
                        expandedItem === index
                          ? "bg-white/20 border-orange-300"
                          : "group-hover:border-orange-300"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: expandedItem === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-lg sm:text-xl font-light"
                      >
                        +
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-2 sm:px-4 pb-4 sm:pb-6"
                      >
                        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeComp2;
