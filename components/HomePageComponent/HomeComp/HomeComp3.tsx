import React from "react";
import { FaMobile, FaLaptopCode, FaCube, FaWifi } from "react-icons/fa";

const HomeComp3 = () => {
  const services = [
    {
      icon: <FaMobile className="text-6xl text-[#714DB5] mb-4" />,
      title: "MOBILE APP DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaLaptopCode className="text-6xl text-[#714DB5] mb-4" />,
      title: "WEB DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaCube className="text-6xl text-[#714DB5] mb-4" />,
      title: "BLOCKCHAIN DEVELOPMENT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "IOT",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Saas Development",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Custom Software Development",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Business Intelligence",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "Cloud Computing",
      description:
      "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
    {
      icon: <FaWifi className="text-6xl text-[#714DB5] mb-4" />,
      title: "UI/UX Designs",
      description:
        "ROBRAL TECHNOLOGIES SPECIALIZES IN CUSTOM MOBILE APPLICATION DEVELOPMENT, CREATING TAILORED SOLUTIONS THAT CATER TO YOUR UNIQUE BUSINESS NEEDS. OUR MOBILE APPS ARE DESIGNED TO BE INTUITIVE, SCALABLE, AND HIGH-PERFORMANCE, OFFERING SEAMLESS EXPERIENCES ACROSS BOTH ANDROID AND IOS PLATFORMS.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-35 px-4">
      {" "}
      <div className="max-w-full">
        {" "}
        {/* Single Horizontal Scrolling Row */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-8 min-w-max px-4">
            {/* Title Card */}
            <div className="flex-shrink-0 w-96 flex items-center mx-10 justify-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#714DB5] leading-tight text-center">
                DISCOVER
                <br />
                OUR SERVICES
              </h1>
            </div>

            {/* All Service Cards */}
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#714DB5]/10 rounded-xl border-y-2 border-x-0 border-[#714DB5]/80 p-8  flex-shrink-0 w-100 text-center"
              >
                <div className="bg-[#f0ebfa] border border-[#714DB5] rounded-lg p-4 inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#714DB5] uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm uppercase leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="bg-[#714DB5] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#5b3f8c] transition-colors">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp3;
