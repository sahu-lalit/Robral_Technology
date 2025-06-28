"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const CaseStudy1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

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

  return (
    <section className="relative min-h-screen flex items-center justify-center py-35 px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/caseStudy.png"
          alt="Case Study background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFAC8B99] via-[#714DB599] to-[#5a3d9a99] z-[1]" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Side - Contact Form */}
        <div className="flex-1 max-w-lg w-full">
          <div className="bg-[#714DB5] rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-500 text-white mb-4">
                Let&apos;s build <span className="text-orange-300">greatest</span><br />
                software together.
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                We are here to bring your concept to life, manage your<br />
                ongoing project, or expand your existing software.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields Row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Leave us a message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#714DB5] bg-opacity-20 border border-white border-opacity-30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-opacity-30 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FFAE8E] hover:bg-[#FF9B7A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book A Call
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Title */}
        <div className="flex-1 text-center lg:text-right mt-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            OUR<br />
            SOFTWARE<br />
            DEVELOPMENT<br />
            CASE STUDIES
          </h1>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy1