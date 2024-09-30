import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollColorChangeBox = () => {
  const { scrollYProgress } = useScroll(); // Get the scroll progress value

  // Define gradient transformation based on scroll progress
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'linear-gradient(135deg, #3498db, #8e44ad)',  // Start gradient (blue to purple)
      'linear-gradient(135deg, #e74c3c, #f1c40f)'   // End gradient (red to yellow)
    ]
  );

  return (
    <motion.div
      style={{
        background, // Apply the color change
        width: '800px',
        height: '800px',
        margin: '0 auto', // Center the box horizontally
        borderRadius: '10px',
      }}
      transition={{ duration: 0.5 }} // Smooth transition for color change
    />
  );
};

export default ScrollColorChangeBox;
