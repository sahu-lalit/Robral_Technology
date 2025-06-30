"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const CaseStudy1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const titleRef = useRef(null)
  
  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  // Form elements animation variants
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const formElementVariants = {
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
  }

  // Title animation variants
  const titleWordVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i: number) => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 60,
        damping: 12,
        delay: 0.2 + (i * 0.1)
      }
    })
  }

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center py-35 px-8"
    >
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isSectionInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/caseStudy.png"
          alt="Case Study background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFAC8B99] via-[#714DB599] to-[#5a3d9a99] z-[1]" 
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Side - Contact Form */}
        <motion.div 
          ref={formRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-lg w-full"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isFormInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#714DB5] rounded-3xl p-8 shadow-2xl"
          >
            {/* Header */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={isFormInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl md:text-4xl font-500 text-white mb-4">
                Let&apos;s build <span className="text-orange-300">greatest</span><br />
                software together.
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                We are here to bring your concept to life, manage your<br />
                ongoing project, or expand your existing software.
              </p>
            </motion.div>

            <motion.form 
              variants={formContainerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* Name Fields Row */}
              <motion.div 
                variants={formElementVariants}
                className="flex gap-4"
              >
                <div className="flex-1">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={formElementVariants}>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={formElementVariants}>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={formElementVariants}>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Leave us a message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                variants={formElementVariants}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#FF9B7A"
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#FFAE8E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Book A Call
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Right Side - Title */}
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, x: 50 }}
          animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 text-center lg:text-right mt-40"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <motion.div
              custom={0}
              variants={titleWordVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            >
              OUR
            </motion.div>
            <motion.div
              custom={1}
              variants={titleWordVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            >
              SOFTWARE
            </motion.div>
            <motion.div
              custom={2}
              variants={titleWordVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            >
              DEVELOPMENT
            </motion.div>
            <motion.div
              custom={3}
              variants={titleWordVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            >
              CASE STUDIES
            </motion.div>
          </h1>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CaseStudy1