import React from 'react'
import Image from 'next/image'

const HomeComp4 = () => {
  return (
    <section className="py-25 lg:py-32 bg-gray-50 border border-y-4 border-x-0 border-[#714DB5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-lg"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-100 rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-lg"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-purple-100 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative">        {/* Testimonial Images and decorative elements arranged in pattern */}
        <div className="relative mb-12">
          {/* Left side - 5 elements (3 images + 2 decorative) */}
          <div className="absolute left-0 top-0 lg:left-10 xl:left-20">
            <div className="grid grid-cols-2 gap-4 w-40">
              {/* Top row */}
              <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Bottom row */}
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            </div>
            {/* 5th element - positioned separately */}
            <div className="w-16 h-24 rounded-lg overflow-hidden shadow-lg mt-4 ml-2">
              <Image 
                src="/testimonial1.jpg" 
                alt="Professional testimonial" 
                width={64} 
                height={96} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Left center - 2 elements */}
          <div className="absolute left-32 top-8 lg:left-52 xl:left-72">
            <div className="flex flex-col space-y-6">
              <div className="w-24 h-32 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={96} 
                  height={128} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right center - 2 elements */}
          <div className="absolute right-32 top-8 lg:right-52 xl:right-72">
            <div className="flex flex-col space-y-6">
              <div className="w-24 h-32 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={96} 
                  height={128} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - 5 elements (3 images + 2 decorative) */}
          <div className="absolute right-0 top-0 lg:right-10 xl:right-20">
            <div className="grid grid-cols-2 gap-4 w-40">
              {/* Top row */}
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
              {/* Bottom row */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/testimonial1.jpg" 
                  alt="Professional testimonial" 
                  width={80} 
                  height={112} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* 5th element - positioned separately */}
            <div className="w-16 h-24 rounded-lg overflow-hidden shadow-lg mt-4 mr-2 ml-auto">
              <Image 
                src="/testimonial1.jpg" 
                alt="Professional testimonial" 
                width={64} 
                height={96} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Additional decorative elements scattered around */}
          <div className="absolute top-0 left-1/4 w-16 h-12 bg-purple-100 rounded-lg opacity-60"></div>
          <div className="absolute top-4 right-1/4 w-20 h-14 bg-orange-100 rounded-lg opacity-60"></div>
          <div className="absolute bottom-20 left-1/3 w-18 h-16 bg-blue-100 rounded-lg opacity-60"></div>
          <div className="absolute bottom-16 right-1/3 w-16 h-18 bg-purple-100 rounded-lg opacity-60"></div>
        </div>

        {/* Central Content */}
        <div className="text-center max-w-4xl mx-auto pt-48 lg:pt-32">
          {/* Testimonials Badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 bg-purple-200 rounded-full mb-8">
            <span className="text-purple-700 font-medium tracking-wide text-sm uppercase">
              TESTIMONIALS
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-[#714DB5] text-lg mb-6 leading-relaxed">
            Learn why professionals trust our solutions to<br />
            complete their technical journeys
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 leading-tight">
            <span className="text-[#714DB5]">Trusted By Leaders</span><br />
            <span className="text-[#FFAE8E]">From Various Industries</span>
          </h2>

          {/* CTA Button */}
          <button className="inline-flex items-center px-8 py-4 bg-[#714DB5] hover:bg-[#714DB5] text-white font-semibold rounded-lg transition-colors duration-300 group">
            READ SUCCESS STORIES
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeComp4