import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const FirstBackground = () => {
    const controls = useAnimation(); // Controls for the initial animation
    const { scrollYProgress } = useScroll(); // Track scroll progress for the background animation
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false); // Track if initial animation is complete

    // Scroll-based background color transformation
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'rgba(0, 0, 0, 1)',   // Fully black at the top
            'rgba(34, 34, 34, 1)' // Dark gray near the bottom
        ]
    );

    // Trigger the initial background color animation on component mount
    useEffect(() => {
        controls.start({
            backgroundColor: ['rgba(0, 0, 0, 1)', 'rgba(34, 34, 34, 1)', 'rgba(0, 0, 0, 1)'], // Background color cycle
            transition: { duration: 3, ease: 'easeInOut' }, // Duration of the initial animation
        }).then(() => {
            setIsAnimationCompleted(true); // Mark the initial animation as completed
        });
    }, [controls]);

    // Scroll-based transformation for the text size
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 8]); // Scale from 1 to 8 as you scroll down

    // Scroll-based transformation for the text color
    const textColor = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'rgba(255, 255, 255, 1)', // White at the top
            'rgba(255, 0, 0, 1)'      // Red near the bottom
        ]
    );

    return (
        <motion.div
            animate={isAnimationCompleted ? undefined : controls} // Apply the initial animation only once
            style={{
                background: isAnimationCompleted ? background : 'rgba(0, 0, 0, 1)', // Switch to scroll-based background color after initial animation
                width: '100%',
                height: '100vh', // Extend height to allow scrolling
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden', // Prevent horizontal scrolling
            }}
        >
            {/* Animated Text */}
            <motion.h1
                className="text-9xl font-bold"
                style={{ 
                    color: textColor,   // Apply scroll-based color change
                    scale: scaleText,   // Use `style` to apply the scale transformation
                    transformOrigin: 'center top', // Scale from the top-center to avoid overflow
                }} 
                initial={{ opacity: 0, y: -100 }} // Start with hidden and slightly above
                animate={{
                    opacity: 1, // Fade in
                    y: 0, // Move to original position
                    transition: { duration: 1.5, ease: 'easeOut' }, // Duration of the text animation
                }}
            >
                Welcome to My Landing Page
            </motion.h1>
        </motion.div>
    );
}

export default FirstBackground;
