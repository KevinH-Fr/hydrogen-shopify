import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

const LogoAnimation = ({ text }) => {
  // Animation controls for Framer Motion
  const controls = useAnimation();
  const bgControls = useAnimation();  // Animation for the background

  // Trigger animations on component load
  useEffect(() => {
    // Start the image animation (scaling)
    controls.start({
      scale: [6, 2],    // Scale from 4 to 1
      y: [0, 0],        // No vertical translation initially
      transition: {
        duration: 2,    // Animation duration for scaling
        ease: "easeInOut", // Easing function for smooth animation
      },
    }).then(() => {
      // Move the logo to the top after scaling animation completes
      controls.start({
        scale: [2, 1],    // Scale from 4 to 1
        y: -200,         // Move the logo upwards by 300px
        transition: {
          duration: 1,  // Movement duration (1 second)
          ease: "easeInOut",
        },
      });
    });

    // Start the background color animation after 1.5 seconds
    bgControls.start({
      backgroundColor: ['#2d3748', 'rgb(0, 0, 0)'], // From gray to black
      transition: {
        duration: 0.5,  // Duration of the background transition
        delay: 1.5,     // Delay to start after 1.5 seconds
      },
    });
  }, [controls, bgControls]);

  return (
    <motion.div
      animate={bgControls}  // Apply background color animation controls
      initial={{ backgroundColor: '#2d3748' }}  // Initial background color (gray-800)
      className="overflow-hidden h-screen flex items-center justify-center"  // Full page height
    >
      <div className="w-[50vh]"> {/* Center the image */}
        <motion.img
          src="/assets/le22white.png"
          alt="Zoomed Image"
          className=""  // Maintain aspect ratio
          animate={controls}  // Apply image animation controls
          initial={{ scale: 4, y: 0 }}  // Initial values before the animation
        />
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
