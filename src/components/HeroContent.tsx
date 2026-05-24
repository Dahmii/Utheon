import React, { useState, useEffect } from "react";

export const HeroContent: React.FC = () => {
  // 1. Array of phrases to loop through infinitely
  const phrases = [
    "We architecture growth across every facet of your business.",
    "Business Strategy & Transformation",
    "Funding Support & Investor Readiness",
    "Corporate Finance & Deal Advisory",
    "Performance Improvement & Operational Excellence",
    "Governance, Structure & Organization Design",
    "Market Entry & Growth Advisory",
    "Research, Insights & Thought Leadership",
    "Startup & Venture Advisory"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Get the active string based on the loop index
  const currentText = phrases[textIndex];

  useEffect(() => {
    const typingSpeed = 60;       // Speed of typing characters
    const deletingSpeed = 25;     // Speed of deleting characters
    const pauseBeforeDelete = 3000; // Time the full text stays visible
    const pauseBeforeType = 400;    // Tiny delay before starting the next phrase

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing logic
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting logic
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause at completion, then switch to deleting state
      timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      // Deleting complete: Switch states and progress to the next phrase array index
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      timer = setTimeout(() => {}, pauseBeforeType);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentText, phrases.length]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 text-center bg-[#3300FF] text-[#FFFFFF]">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <h1 className="montserrat text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight font-normal select-none break-words min-h-[12rem] md:min-h-[16rem]">
          {displayedText}
          {/* Custom Blinking Cursor */}
          <span className="inline-block w-[4px] h-[2.5rem] md:h-[4.5rem] ml-1 bg-[#FFFFFF] align-middle transform translate-y-[-4px] animate-[pulse_0.8s_infinite]" />
        </h1>
      </div>
    </div>
  );
};