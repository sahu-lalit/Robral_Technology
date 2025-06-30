"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with loading fallbacks for better performance
const Footer1 = dynamic(() => import('./ui/Footer1'), {
  ssr: true,
});

const Footer2 = dynamic(() => import('./ui/Footer2'), {
  ssr: true,
});

const Footer3 = dynamic(() => import('./ui/Footer3'), {
  ssr: true,
});

const Footer = () => {
  return (
    <>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </>
  )
}

export default Footer