"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About2 = () => {
  const stats = [
    {
      number: '50+',
      label: 'Satisfied Clients'
    },
    {
      number: '50+',
      label: 'Projects Completed'
    },
    {
      number: '30+',
      label: 'Innovative Employees'
    },
    {
      number: '7+',
      label: 'Awards Taken'
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="text-white py-16 px-8" 
      style={{ backgroundColor: '#5a3d99' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center"
            >
              <motion.h2 
                variants={numberVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              >
                {stat.number}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl font-medium"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About2