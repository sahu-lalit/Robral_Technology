import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="bg-[#714DB5] text-white">
      <div className="max-w-7xl mx-auto px-6 py-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/robralLogo.png"
                alt="Robral Logo"
                width={120}
                height={40}
                className="h-14 mr-15 w-auto"
              />
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Thinking Beyond Present.
            </p>            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Useful Links
               <span className="flex flex-row">
                <div className="w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[8px]"></div>
                <div className="w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-purple-200 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-[#FFAE8E] font-bold mr-2">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-purple-200 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-[#FFAE8E] font-bold mr-2">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-purple-200 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-[#FFAE8E] font-bold mr-2">→</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-purple-200 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-[#FFAE8E] font-bold mr-2">→</span>
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-purple-200 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-[#FFAE8E] font-bold mr-2">→</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              What We Do
              <span className="flex flex-row">
                <div className="w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[8px]"></div>
                <div className="w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </span>
            </h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mobile Application Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Web Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Blockchain Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                IoT Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Custom Software Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#FFAE8E] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Business Intelligence
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Popular Posts
              <span className="flex flex-row">
                <div className="w-15 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
                <div className="w-[8px]"></div>
                <div className="w-5 h-1 bg-[#FFAE8E] mt-2 rounded-2xl"></div>
              </span>
            </h3>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex items-start space-x-3">
                <Image
                  src="/footerImgIcon1.jpg"
                  alt="Mobile App"
                  width={60}
                  height={60}
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-purple-200 text-sm mb-1">
                    November 29, 2024
                  </p>
                  <Link
                    href="#"
                    className="text-white text-sm hover:text-orange-400 transition-colors line-clamp-2"
                  >
                    20 Mobile App .......
                  </Link>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex items-start space-x-3">
                <Image
                  src="/footerImgIcon2.jpg"
                  alt="Digital Triumph"
                  width={60}
                  height={60}
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-purple-200 text-sm mb-1">
                    November 29, 2024
                  </p>
                  <Link
                    href="#"
                    className="text-white text-sm hover:text-orange-400 transition-colors line-clamp-2"
                  >
                    Digital Triumph .....
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#878787] text-sm">
              Copyright © 2025{" "}
              <Link
                href="#"
                className="text-[#878787] hover:text-[#FFAE8E] transition-colors"
              >
                Robral Technologies
              </Link>
              . All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-[#878787] hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[#878787] hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
