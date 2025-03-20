"use client"; // Mark this as a client component

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/types"; // Import the CSS

const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locoScroll;

    const initScroll = async () => {
      // Dynamically import Locomotive Scroll for client-side only
      locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, // Enable smooth scrolling
        multiplier: 1, // Adjust scroll speed (optional)
        lerp: 0.1, // Smoothness factor (lower = smoother)
      });

      // Handle resize events (optional but recommended)
      window.addEventListener("resize", () => locoScroll.update());
    };

    initScroll();

    // Cleanup on unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
