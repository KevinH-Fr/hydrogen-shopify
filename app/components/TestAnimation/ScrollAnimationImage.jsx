// src/ScrollAnimationImage.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import exampleImage from '/assets/boutique.png'; // Correct path to the image

const ScrollAnimationImage = () => {
  const ref = React.useRef(null); // Create a ref to attach to the motion div
  const { scrollYProgress } = useScroll(); // Get the scroll progress value

  // Move the image based on scroll. For example, move it vertically by 200px.
  const y = useTransform(scrollYProgress, [1, 0], [, 200]); // Map scroll to vertical movement

    // Change opacity from 1 (fully visible) to 0 (fully transparent) based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div ref={ref}>
     <motion.img
        src={exampleImage} // Use the imported image
        alt="Scroll Animation"
        style={{ y, opacity }} // Apply both vertical movement and opacity variation
        initial={{ y: 0, opacity: 1 }} // Initial state
        transition={{ type: 'spring', stiffness: 100 }} // Add smooth transition
      />
      <p>This image moves vertically and disappear as you scroll!</p>
    </motion.div>
  );
};

export default ScrollAnimationImage;
