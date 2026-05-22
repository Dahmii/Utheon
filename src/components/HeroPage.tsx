import React from "react";
import { Navbar } from "./Navbar";
import { HeroContent } from "./HeroContent";

const HeroPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#3300FF] overflow-hidden select-none">
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default HeroPage;