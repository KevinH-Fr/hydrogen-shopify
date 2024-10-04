import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Glasses3d from './Glasses3d'; // Ensure your 3D glasses component is imported

const LogoAnimation = () => {
  // Animation controls for Framer Motion
  const controls = useAnimation();
  const bgControls = useAnimation();
  const glassesControls = useAnimation(); // Animation control for the glasses

  useEffect(() => {
    // Start the background color animation sequence
    bgControls.start({
      backgroundColor: ['#2d3748', '#1e90ff', '#ff6347', '#00ff7f', 'rgb(0, 0, 0)'], // Sequence of colors
      transition: {
        duration: 2, // Total duration for the color transition
        times: [0, 0.3, 0.6, 0.9, 1], // Specify when each color should change
        ease: "easeInOut",
      },
    });

    // Start the logo animation
    controls.start({
      scale: [6, 2],
      y: [0, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    }).then(() => {
      // After scaling down, move the logo to the top
      return controls.start({
        scale: [2, 0.4],
        y: '-43vh',
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      });
    }).then(() => {
      // After moving the logo up, move it to the left
      return controls.start({
        x: '-37vw',
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      });
    }).then(() => {
      // Show glasses after logo animations are completed
      glassesControls.start({
        opacity: 1,
        transition: { 
          duration: 1,
          delay: 0,
         }, // Fade in effect
      });
    });

    // Initially hide glasses
    glassesControls.set({ opacity: 0 });

  }, [controls, bgControls, glassesControls]);

  return (
    <motion.div
      animate={bgControls}
      initial={{ backgroundColor: '#2d3748' }}
      className="overflow-hidden h-screen flex items-center justify-center relative" // Use relative for positioning
    >
      <div className="w-[50vh]">
        <motion.img
          src="/assets/le22white.png"
          alt="Zoomed Image"
          animate={controls}
          initial={{ scale: 6, y: 0 }}
        />
      </div>

      {/* Conditional rendering for the glasses */}
      <motion.div
        animate={glassesControls}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        <Glasses3d /> {/* Render the glasses */}
      </motion.div>
    </motion.div>
  );
};

export default LogoAnimation;
