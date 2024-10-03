// src/ScrollTextMoveRight.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextAnimation = () => {
  const { scrollYProgress } = useScroll(); // Get the scroll progress value

  // Horizontal movement: Move the text from 0px (starting position) to 300px (right) based on scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Optional: Change opacity from 0 (invisible) to 1 (fully visible) while scrolling
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div style={{ x, opacity }} transition={{ duration: 0.5 }}>
      <h1 className="text-4xl font-bold text-center overflow-x-hidden">
        This text moves to the right as you scroll!
      </h1>
    </motion.div>
  );
};

export default TextAnimation;
