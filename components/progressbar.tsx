'use client';
import React, { useState, useEffect, useRef } from "react";

export default function ProgressBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("Element is visible");
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && progressRef.current) {
      console.log("Progress bar is visible");
      progressRef.current.animate(
        [
          { backgroundColor: 'red', transform: 'scaleX(0)' },
          { backgroundColor: 'darkred', transform: 'scaleX(1)' }
        ],
        {
          duration: 2000,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-full h-4 bg-gray-200 overflow-hidden rounded my-10"
    >
      <div
        ref={progressRef}
        className="h-full origin-left scale-x-0"
        style={{ backgroundColor: 'red' }}
      ></div>
    </div>
  );
}
