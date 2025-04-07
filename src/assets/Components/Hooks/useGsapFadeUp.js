import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapFadeUp = (elementRef, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { y: 80, opacity: 0 }, // Start from below and hidden
      {
        y: 0,
        opacity: 1,
        duration: 1.5, // Smooth fade-in duration
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top 85%", // Appear earlier
          end: options.end || "top 10%", // Fade out only when 90% scrolled
          scrub: 1, // Smooth effect
          toggleActions: "play none none reverse", // Play on enter, reverse on exit
        },
      }
    );
  }, [elementRef, options]);
};

export default useGsapFadeUp;
