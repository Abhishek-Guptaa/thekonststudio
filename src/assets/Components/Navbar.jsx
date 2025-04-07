import React, { useState } from "react";
import AnimatedLogo from "./AnimatedLogo"; // Import the logo

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-white fixed top-0 left-0 w-full flex justify-between items-center py-4 px-24 z-[1000]">
      {/* Animated Logo with Hover Effect */}
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <AnimatedLogo /> : <h1 className="font-main font-bold text-4xl">KONST</h1>}
      </div>

      {/* Navigation */}
      <div className="flex justify-evenly gap-8 hover:cursor-pointer font-main font-normal text-xl">
  <a href="#about" className="display-underline hover:text-secondary">About</a>
  <a href="#works" className="display-underline hover:text-secondary">Works</a>
  <a href="#contact" className="display-underline hover:text-secondary">Contact us</a>
</div>

    </div>
  );
};

export default Navbar;
