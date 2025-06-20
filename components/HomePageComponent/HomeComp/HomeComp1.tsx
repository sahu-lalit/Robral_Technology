import React from "react";
import Image from "next/image";

const HomeComp1 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/homeImage.png"
        alt="Home background"
        fill
        className="object-cover"
        priority
      />{" "}
      {/* Circular/Angular Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-90"
        style={{
          background: `conic-gradient(
            from 160deg,
            #FFAC8B 0%,
            #D28CB7 20%,
            #a76d8f 35%,
            #7f53ac 45%,
            #5e3387 55%,
            #2E3947 65%,
            #1c2d5e 73%,
            #1a1e5e 78%,
            #1c2d5e 87%,
            #22254B 93%,
            #FFAC8B 100%
          )`,
        }}
      />
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">          {/* Left Content */}
          <div className="space-y-25">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight whitespace-nowrap pl-10">
              Thinking Beyond Present
            </h1>
            <div className="max-w-xl">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed text-justify pl-10">
                Welcome to Robral Technologies! As a leading software development
                firm, we focus on delivering exceptional solutions that combine
                beautifully designed user interfaces, rapid load times, robust
                data protection, and stellar customer support. Our built-in
                integrations and attention to detail ensure your product performs
                at its best, all while staying within your budget. We understand
                the importance of delivering top-tier performance software
                development products without compromising on size or quality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pl-10">
              <button className="px-8 py-4 border-2 border-[#FFAE8E] text-[#FFAE8E] rounded-lg font-semibold hover:bg-[#FFAE8E] hover:text-white transition-all duration-300 text-lg">
                Read More
              </button>
              <button className="px-8 py-4 border-2 border-[#FFAE8E] text-[#FFAE8E] rounded-lg font-semibold hover:bg-[#FFAE8E] hover:text-white transition-all duration-300 text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default HomeComp1;
