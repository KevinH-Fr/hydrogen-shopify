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

  // Map scrollYProgress (0 to 1) to a scaling range, e.g., 1 to 4
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  // Translate the image upwards to focus on the bottom part while scaling
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // Smooth the scaling and translation animations
  const smoothScale = useSpring(scale, { damping: 20 });
  const smoothTranslateY = useSpring(translateY, { damping: 20 });

  return (
    <div
      ref={container}
      className="main overflow-hidden h-[400vh]"  // Prevent horizontal scroll and make the page scrollable
    >
      <div className="image-container sticky top-0 h-full w-full flex justify-center items-center"> {/* Center the image */}
        <motion.img
          src="/assets/boutique.png"
          alt="Zoomed Image"
          className="object-cover w-full h-auto"  // Make sure the image covers the container and maintains its aspect ratio
          style={{
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
