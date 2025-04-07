import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["KONST", "KONST"]; // Letters changing

const AnimatedLogo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change every 1 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      key={index}
      className="font-main font-bold text-4xl text-white"
      initial={{ opacity: 0, rotateX: 90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: -90 }}
      transition={{ duration: 0.5 }}
    >
      {words[index]}
    </motion.h1>
  );
};

export default AnimatedLogo;
