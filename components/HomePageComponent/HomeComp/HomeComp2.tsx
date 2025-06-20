"use client";
import React, { useState } from "react";

const HomeComp2 = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Custom Web Application Development",
      content:
        "Power your business transformation with superior web apps adjusted to your business objectives. Our custom application development firm delivers stable and responsive web applications from scratch that smoothly integrate with existing environments. We create a broad spectrum of web solutions.",
    },
    {
      title: "Super app for any industry",
      content:
        "A Super App is a unified platform offering multiple services within a single application, eliminating the need for multiple apps. For example, in the retail industry, a Super App can integrate online shopping, payment solutions, loyalty rewards, personalized recommendations, delivery tracking, and customer support. It creates a seamless user experience, increases engagement, and fosters brand loyalty. Super Apps leverage advanced technologies like AI and analytics to provide tailored solutions, while features like digital wallets streamline transactions. Popular in industries like e-commerce, healthcare, and travel, they drive convenience and efficiency, serving as an all-in-one solution for users’ diverse needs.",
    },
    {
      title: "From DApps to DeFi: We are the leaders in Blockchain Solutions",
      content:
        "From DApps to DeFi, we create blockchain solutions that transform businesses. As experts in the field, we design secure and easy-to-use technologies to meet your unique needs. Whether it’s building decentralized apps, smart contracts, or finance platforms, we make sure your business stays ahead. Our goal is to help you unlock the power of blockchain and take your business to the next level. Work with us and lead the way in the blockchain revolution!",
    },
    {
      title: "Our Clients Demand Neural Networks to Gen AI",
      content:
        "Our clients rely on us for AI solutions that range from neural networks for smart predictions to generative AI for creativity and automation. We create practical, powerful tools that solve real problems and help businesses grow. With us, you’ll get simple, effective AI that works for you.",
    },
    {
      title: "How To Use Technology to Desire",
      content:
        "Using IoT, technology helps turn your desires into reality. From smart homes that adapt to your preferences to wearable devices that track your health, IoT connects everyday objects to make life easier. We provide tailored IoT solutions to enhance your lifestyle, delivering seamless, real-time experiences that meet your needs.",
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#714DB5] px-6 py-35 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}{" "}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex flex-col items-center">
            <span className="whitespace-nowrap">
              Cutting-Edge Software{" "}
              <span className="text-[#FFAE8E]">Solutions</span>
            </span>
            <span>for your Business</span>
          </h1>{" "}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-8xl mx-auto mt-20 text-justify">
            A seasoned software development company, we have built up competencies
            to empower a wide range of custom software development solutions to
            introduce automation into your business processes. Our expert team of
            certified engineers and developers employs a unique combination of
            trending technologies and components to create flexible, secure, and
            competitive digital products.
          </p>
        </div>
        {/* Accordion Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mt-25 border border-white/20">
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/20 last:border-b-0"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 px-4 text-left flex items-center justify-between group hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <span className="text-white text-lg md:text-xl font-medium group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-300 ${
                        expandedItem === index
                          ? "bg-white/20 border-orange-300"
                          : "group-hover:border-orange-300"
                      }`}
                    >
                      <span
                        className={`text-white text-xl font-light transition-transform duration-300 ${
                          expandedItem === index ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItem === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-4">
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp2;
