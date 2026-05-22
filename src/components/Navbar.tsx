import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#3300FF] text-[#FFFFFF]">
      {/* Logo */}
      <div className="font-serif-editorial text-2xl font-black tracking-tight cursor-pointer">
        utheon
      </div>

      {/* Center Navigation Links */}
      {/* <div className="font-serif-editorial text-xl font-bold space-x-1.5 hidden md:flex">
        <span className="cursor-pointer hover:opacity-70">people,</span>
        <span className="cursor-pointer hover:opacity-70">work,</span>
        <span className="cursor-pointer hover:opacity-70">reasons,</span>
        <span className="cursor-pointer hover:opacity-70">questions</span>
      </div> */}

      {/* Right Side Link */}
      <div className="font-serif-editorial text-xl font-bold cursor-pointer hover:opacity-70">
        email
      </div>
    </nav>
  );
};