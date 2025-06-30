import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <>
      <motion.hr
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 0.8 }}
        className='border-1 border-[#714DB5]'
      />
      <motion.div 
        ref={sectionRef}
        className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-[#714DB5] tracking-wide sm:tracking-wider drop-shadow-lg leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { 
              scale: 1, 
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                duration: 0.8,
                delay: 0.3
              }
            } : { scale: 0.9, opacity: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            ROBRAL TECHNOLOGIES
          </motion.h1>
        </div>
      </motion.div>
    </>
  )
}

export default Footer3