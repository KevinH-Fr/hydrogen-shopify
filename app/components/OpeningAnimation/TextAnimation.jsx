import React, { useRef } from 'react';
import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const TextAnimation = () => {
    const container = useRef(null);

    // Hook to get the scroll position within the container
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    // Map scrollYProgress (0 to 1) to a scaling range, e.g., 1 to 2
    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]); // Adjust the range as needed

    // Smooth the scaling animations
    const smoothScale = useSpring(scale, { damping: 20 });

    return (
        <div 
            ref={container}
            className="h-[200vh] flex items-center justify-center"  // Make the container tall enough to allow scrolling
        >    
            <motion.div
                style={{
                    scale: smoothScale,  // Apply the smooth scaling to the text
                }}
                className="text-4xl" // Maintain the text size
            >
                TextAnimation
            </motion.div>
        </div> 
    );
}

export default TextAnimation;
