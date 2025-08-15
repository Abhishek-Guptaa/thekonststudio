import React, { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Hide navbar at bottom only on large screens
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        // If user is at the bottom (with a small threshold)
        if (scrollY + windowHeight >= docHeight - 10) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
      } else {
        setHideNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white fixed top-0 left-0 w-full flex items-center py-4 px-6 md:px-24 z-[1000] transition-transform duration-500 ${
        hideNavbar ? "md:-translate-y-full" : ""
      }`}
    >
      {/* Logo */}
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="#">
          {isHovered ? (
            <AnimatedLogo />
          ) : (
            <h1 className="font-main font-bold text-3xl sm:text-4xl">KONST</h1>
          )}
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 font-main font-normal text-lg md:text-xl">
        <a href="#about" className="display-underline hover:text-secondary">
          About
        </a>
        <a href="#works" className="display-underline hover:text-secondary">
          Works
        </a>
        <a href="#contact" className="display-underline hover:text-secondary">
          Contact us
        </a>
      </div>

      {/* Burger Icon */}
      <button
        className="md:hidden ml-auto focus:outline-none z-[1002]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-[999]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 w-full flex flex-col items-center py-4 md:hidden z-[1001]">
          <a
            href="#about"
            className="py-2 text-lg display-underline hover:text-secondary"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#works"
            className="py-2 text-lg display-underline hover:text-secondary"
            onClick={() => setMenuOpen(false)}
          >
            Works
          </a>
          <a
            href="#contact"
            className="py-2 text-lg display-underline hover:text-secondary"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
