// src/ScrollProportionalZoomBox.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BoxZoomIn = () => {
  const { scrollYProgress } = useScroll(); // Get the scroll progress

  // Map the scroll progress to a zoom effect (scale)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); // Zooms from scale 1 to 2

  return (
    <motion.div
      style={{
        scale, // Apply the dynamic scale based on scroll
        width: '300px',
        height: '300px',
        backgroundColor: '#3498db', // Blue box
        margin: '0 auto', // Center the box horizontally
        borderRadius: '10px', // Optional: round the corners
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 className="text-white text-center">Zoom Proportionally!</h2>
    </motion.div>
  );
};

export default BoxZoomIn;
