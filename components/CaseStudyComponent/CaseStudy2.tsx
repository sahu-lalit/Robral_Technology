"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface CaseStudyCard {
  id: number
  title: string
  description: string
  image: string
  category: string
  gradient: string
}

const CaseStudy2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const caseStudies: CaseStudyCard[] = [
    {
      id: 1,
      title: "Enhancing Fleet Operations With An IoT-Driven Vehicle Management System",
      description: "IoT-driven vehicle management system for enhanced fleet operations and real-time monitoring.",
      image: "/about1.png",
      category: "IoT Solutions",
      gradient: "from-[#FF6B6B] to-[#4ECDC4]"
    },
    {
      id: 2,
      title: "Data Fluent: Payroll Management For A Leading Entertainment Company",
      description: "Comprehensive payroll management solution for streamlined HR operations.",
      image: "/about2.png",
      category: "HR Tech",
      gradient: "from-[#A8E6CF] to-[#7FDBFF]"
    },
    {
      id: 3,
      title: "Innovative Software Solution For Healthcare Management Industry",
      description: "Advanced healthcare management system improving patient care and operational efficiency.",
      image: "/about3.png",
      category: "Healthcare",
      gradient: "from-[#87CEEB] to-[#98FB98]"
    },
    {
      id: 4,
      title: "Case Study: Streamlined Restaurant Solution For Better Customer Management",
      description: "Restaurant management system enhancing customer experience and operational workflow.",
      image: "/caseStudy1.png",
      category: "Restaurant Tech",
      gradient: "from-[#F4A261] to-[#E9C46A]"
    },
    {
      id: 5,
      title: "Case Study: A Standalone Application For Insurance Brokers",
      description: "Comprehensive insurance broker application for policy management and client relations.",
      image: "/homeImage.png",
      category: "Insurance",
      gradient: "from-[#2A9D8F] to-[#264653]"
    },
    {
      id: 6,
      title: "Case Study: Building A Learning Management System (LMS)",
      description: "Educational platform enabling seamless learning experiences and course management.",
      image: "/homeImage2.png",
      category: "Education",
      gradient: "from-[#E76F51] to-[#F4A261]"
    },
    {
      id: 7,
      title: "Case Study: Accelerating Deployment Cycles With DevOps Services",
      description: "DevOps implementation reducing deployment time and improving system reliability.",
      image: "/footerImage.png",
      category: "DevOps",
      gradient: "from-[#6A4C93] to-[#1982C4]"
    },
    {
      id: 8,
      title: "Case Study: B2B E-Commerce For Automobile Products",
      description: "B2B e-commerce platform specializing in automobile parts and accessories.",
      image: "/getNews1.jpg",
      category: "E-Commerce",
      gradient: "from-[#8D5524] to-[#C68642]"
    },
    {
      id: 9,
      title: "Case Study: Blockchain-Based Land Registry System",
      description: "Secure blockchain solution for transparent and tamper-proof land registry management.",
      image: "/getNews2.jpg",
      category: "Blockchain",
      gradient: "from-[#FFD60A] to-[#003566]"
    }
  ]

  const totalPages = Math.ceil(caseStudies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = caseStudies.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#714DB5] via-[#8B5CF6] to-[#A855F7]">
      <div className="max-w-7xl mx-auto">
      

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {currentItems.map((study) => (
            <div
              key={study.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-md overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Image Container */}
              <div className="relative h-90 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    {study.category}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#714DB5] via-[#714DB5] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 h-full flex flex-col justify-end">
                <h3 className="text-white text-lg font-bold mb-3 leading-tight">
                  {study.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-12 h-12 rounded-lg font-bold transition-all duration-300 ${
                currentPage === page
                  ? 'bg-[#FFAE8E] hover:bg-[#FF9B7A] text-white shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
              }`}
            >
              {page}
            </button>
          ))}
          
          {/* Next Button */}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-12 h-12 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

      
      </div>
    </section>
  )
}

export default CaseStudy2