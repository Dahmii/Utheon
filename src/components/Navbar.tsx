import React from "react";
import {FaEnvelope} from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#3300FF] text-[#FFFFFF]">
      
  <div className="flex items-center gap-3 cursor-pointer group">
    
    <img 
      src="/ulogo2.jpg" 
      alt="Utheon Logo" 
      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
    />

   
    {/* <span className="font-serif-editorial text-2xl font-black tracking-tight">
      utheon
    </span> */}
  </div>

      
      {/* <div className="font-serif-editorial text-xl font-bold space-x-1.5 hidden md:flex">
        <span className="cursor-pointer hover:opacity-70">people,</span>
        <span className="cursor-pointer hover:opacity-70">work,</span>
        <span className="cursor-pointer hover:opacity-70">reasons,</span>
        <span className="cursor-pointer hover:opacity-70">questions</span>
      </div> */}

      
      {/* <div className="font-serif-editorial text-xl font-bold cursor-pointer hover:opacity-70">
        email
      </div> */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-70">
        <FaEnvelope size={20} />
      </div>

    </nav>
  );
};