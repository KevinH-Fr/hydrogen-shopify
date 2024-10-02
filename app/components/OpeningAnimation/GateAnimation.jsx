import React, { useRef } from 'react';
import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const GateAnimation = ({ text }) => {
  const container = useRef(null);

  // Hook to get the scroll position within the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Map scrollYProgress (0 to 1) to a scaling range, e.g., 1 to 2
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  // Translate the image upwards to focus on the bottom part while scaling
  // Adjust the y translation values to suit your design
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // Smooth the scaling and translation animations
  const smoothScale = useSpring(scale, { damping: 20 });
  const smoothTranslateY = useSpring(translateY, { damping: 20 });

  return (
    <div ref={container} className="main" style={{ height: '400vh' }}> {/* Make the page scrollable */}
      <div className="image-container" style={{ position: 'sticky', top: '0%' }}>
        <motion.img
          src="/assets/boutique.png"
          alt="Zoomed Image"
          style={{
            width: '100%',
            height: '100%',
            scale: smoothScale,  // Apply the smooth scaling to the image
            y: smoothTranslateY,  // Translate the image upwards while scaling
          }}
        />
      </div>
    </div>
  );
};

export default GateAnimation;

// reprndre avec image cover ou autre pour evier d'avoir une image plus large que la page,
// éviter d'avoir la scrollbarre horizontale
