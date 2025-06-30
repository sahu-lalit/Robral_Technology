"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(90deg, #A76D8F 0%, #FFBCA2 33%, #714DB5 66%, #321071 100%)"
          : "transparent",
      }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/robralLogo.png"
                alt="Robral Logo"
                width={120}
                height={40}
                className="h-10 sm:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black/40 backdrop-blur-md border-t border-white/10">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-200 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-white/20 active:bg-white/30 transform hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
