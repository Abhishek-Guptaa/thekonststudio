import React, { useRef } from "react";
import useGsapFadeUp from "../Components/Hooks/useGsapFadeUp"; // Import the custom GSAP hook

const Hero = () => {
  const textRef = useRef(null);
  const scrollRef = useRef(null);

  // Use the fade-up effect
  useGsapFadeUp(textRef, { start: "top 80%", end: "top 10%" }); // Fades out at 90%
  useGsapFadeUp(scrollRef, { start: "top 95%", end: "bottom 50%" });

  return (
    <div className="hero relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Heading */}
      <h1
        ref={textRef}
        className="font-main font-light text-4xl md:text-6xl lg:text-7xl text-center leading-tight opacity-0"
      >
        Branding so <span className="text-teal-300">good</span>,<br />
        even your competitors <br />
        will <span className="text-teal-300">admire!</span>
      </h1>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10">
        <p
          ref={scrollRef}
          className="text-teal-300 text-sm border border-teal-300 rounded-lg animate-bounce inline-block py-2 px-4 opacity-0"
        >
          Scroll down
        </p>
      </div>
    </div>
  );
};

export default Hero;
