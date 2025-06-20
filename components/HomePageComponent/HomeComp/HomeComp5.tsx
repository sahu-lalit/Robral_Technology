"use client";

import React, { useRef } from "react";
import Image from "next/image";

const HomeComp5 = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const newsArticles = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the digital marketing landscape and discover emerging opportunities...",
      image: "/getNews1.jpg",
      date: "June 15, 2025",
      category: "Marketing",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Cryptocurrency Market Analysis",
      excerpt:
        "Understanding the current market trends and investment opportunities in digital currencies for modern investors...",
      image: "/getNews2.jpg",
      date: "June 12, 2025",
      category: "Finance",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Mobile App Development Trends",
      excerpt:
        "Latest technologies and frameworks that are revolutionizing mobile app development in the modern era...",
      image: "/getNews3.jpg",
      date: "June 10, 2025",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "AI Revolution in Business",
      excerpt:
        "How artificial intelligence is transforming traditional business models and creating new opportunities...",
      image: "/getNews1.jpg",
      date: "June 8, 2025",
      category: "AI & Tech",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Sustainable Technology Solutions",
      excerpt:
        "Green technology innovations that are paving the way for a more sustainable and eco-friendly future...",
      image: "/getNews1.jpg",
      date: "June 5, 2025",
      category: "Environment",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Cloud Computing Advances",
      excerpt:
        "Revolutionary changes in cloud infrastructure and how they're enabling scalable business solutions...",
      image: "/getNews1.jpg",
      date: "June 3, 2025",
      category: "Cloud Tech",
      readTime: "9 min read",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Latest Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-[#714DB5]  bg-clip-text text-transparent">
            Get News & <span className="text-[#FFAE8E]">Blogs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with the latest insights, trends, and expert analysis
            across technology, business, and innovation
          </p>
        </div>
        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-500">
              Scroll to explore
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="group p-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="group p-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>{" "}
        {/* Horizontal Scrolling News Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="group relative min-w-[360px] max-w-[360px] h-[450px] bg-gray-800 rounded-2xl shadow-lg overflow-hidden snap-center"
            >
              {/* Background Image */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform translate-y-24 group-hover:translate-y-0">
                {/* Category Tag */}
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-semibold rounded-full">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-4 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt - Revealed on Hover */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold hover:text-purple-300 transition-colors">
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#714DB5] to-[#FFAE8E] text-white font-semibold rounded-2xl hover:from-[#714DB5] hover:to-[#FFAE8E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>View All Articles</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
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
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComp5;
