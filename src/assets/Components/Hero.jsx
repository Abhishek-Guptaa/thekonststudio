import React, { useRef } from "react";
import useGsapFadeUp from "../Components/Hooks/useGsapFadeUp";

const Hero = () => {
  const textRef = useRef(null);
  const scrollRef = useRef(null);

  useGsapFadeUp(textRef, { start: "top 80%", end: "top 10%" });
  useGsapFadeUp(scrollRef, { start: "top 95%", end: "bottom 50%" });

  return (
    <div className="hero relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8">
      {/* Animated Heading */}
      <h1
        ref={textRef}
        className="font-main font-light text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-center leading-tight opacity-0 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl  "
      >
        Branding so <span className="text-teal-300">good</span>,<br />
        even your competitors <br />
        will <span className="text-teal-300">admire!</span>
      </h1>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center">
        <p
          ref={scrollRef}
          className="text-teal-300 text-xs sm:text-sm border border-teal-300 rounded-lg animate-bounce inline-block py-2 px-4 opacity-0"
        >
          Scroll down
        </p>
      </div>
    </div>
  );
};

export default Hero;
