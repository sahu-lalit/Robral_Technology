import React from "react";
import Image from "next/image";

const About1 = () => {
  return (
    <div
      className="min-h-[200vh] flex flex-col items-center justify-start relative overflow-hidden pt-15"
      style={{
        background:
          "linear-gradient(135deg, #A76D8F 0%, #FFBCA2 25%, #714DB5 75%, #321071 100%)",
      }}
    >
      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto pl-0 lg:pl-0 relative pt-5 z-10">
        <div className="flex flex-col lg:flex-row gap-5 h-[150vh] items-start">
          {/* 1st Column: 3 rows - 3/10 width */}
          <div className="flex flex-col h-full pt-16 lg:w-4/15">
            {/* 1st row - Image (about1.png) */}
            <div className="relative h-[500px]  overflow-hidden mb-8">
              <Image
                src="/about1.png"
                alt="Abstract light pattern"
                fill
                className="object-cover"
              />
            </div>

            {/* 2nd row - 'ABOUT US' text */}
            <div className="text-white text-left mb-8 mr-8">
              <h1 className="text-7xl lg:text-8xl font-bold tracking-wide leading-tight">
                ABOUT
              </h1>
              <div className="flex items-center mt-2">
                <div className="w-32 h-1 bg-white mr-4"></div>
                <h1 className="text-6xl lg:text-8xl font-bold tracking-wide">
                  US
                </h1>
              </div>
            </div>
          </div>

          {/* 2nd Column: Single Image (about2.png) - 4/10 width */}
          <div className="flex items-start justify-center h-full pt-16 lg:w-7/15 ml-0">
            <div className="relative w-full h-[900px]  overflow-hidden">
              <Image
                src="/about2.png"
                alt="AI Technology Face"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 3rd Column: 2 rows - 3/10 width */}
          <div className="flex flex-col h-full pt-16 lg:w-4/15">
            {/* 1st row - Image (about3.png) */}
            <div className="relative h-[700px] w-[120%] overflow-hidden">
              <Image
                src="/about3.png"
                alt="Circular tech pattern"
                fill
                className="object-cover"
              />
            </div>

            {/* 2nd row - Text */}
            <div className="mt-4 w-[120%]">
              <p className="text-white text-3xl font-medium leading-relaxed text-justify">
                Robral Technologies Has Been A Leading Software Development Firm
                Since 2022.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section with Content from Image */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-30 z-10">
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl font-light italic mb-8">
            SINCE 2022
          </h2>
          <h1 className="text-white text-4xl lg:text-6xl font-lg leading-tight mb-8 max-w-6xl mx-auto">
            WE PROVIDE TOP-NOTCH SOFTWARE DEVELOPMENT SOLUTIONS THAT HELP VARIOUS INDUSTRIES THRIVE.
          </h1>
        </div>
        
        <div className="text-white text-lg leading-relaxed max-w-2xl mx-auto text-justify">
          <p>
            Our Expertise In Technology And Innovation Sets Us Apart From Others In The Industry. We Provide Top-Notch Software Development Solutions That Help Various Industries Thrive. With A Dedicated Team Of Professionals, We Create User-Friendly And Effective Software Tailored To Our Clients&apos; Needs. Our Commitment To Quality And Excellence Has Earned Us A Reputation As A Trusted Software Development Firm. From Cutting-Edge Technologies To Outstanding Customer Service, We Offer The Best In The Industry. Choose Robral Technologies For Reliable, Forward-Looking Software Solutions That Drive Success And Growth.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5"></div>
      </div>
    </div>
  );
};

export default About1;
