import React, { useState, useEffect } from "react";

export const HeroContent: React.FC = () => {
  // 1. Core Heading Copy - Updated for Utheon
  const textToType = "We architecture growth across every facet of your business.";
  
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; 
    const deletingSpeed = 25;
    const pauseBeforeDelete = 4000; // Gives them plenty of time to read the full line
    const pauseBeforeType = 600;    

  let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < textToType.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === textToType.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      timer = setTimeout(() => {}, pauseBeforeType);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, textToType]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 text-center bg-[#3300FF] text-[#FFFFFF]">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <h1 className="font-serif-editorial text-[3rem] md:text-[5rem] leading-[1.05] tracking-tight font-normal select-none break-words min-h-[9rem] md:min-h-[15rem]">
          {displayedText}
          {/* Custom Blinking Cursor */}
          <span className="inline-block w-[4px] h-[2.5rem] md:h-[4.5rem] ml-1 bg-[#FFFFFF] align-middle transform translate-y-[-4px] animate-[pulse_0.8s_infinite]" />
        </h1>
      </div>

      
      {/* <p className="font-sans-corporate text-[0.95rem] md:text-[1.05rem] max-w-lg leading-relaxed text-[#FFFFFF] font-medium tracking-wide mt-8">
        Utheon is a premier consulting firm dedicated to business evolution. 
        From operational strategy to scale development, we deploy tailored expertise 
        in whatever area your enterprise needs to thrive.
      </p> */}
    </div>
  );
};