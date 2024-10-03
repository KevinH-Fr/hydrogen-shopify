import React, { useRef } from 'react';
import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const AdvanceTextAnimation = () => {
    const container = useRef(null);

    // Hook to get the scroll position within the container
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    // Map scrollYProgress to horizontal position for the first text (coming from the left)
    const xLeft = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
    
    // Map scrollYProgress to horizontal position for the second text (coming from the right)
    const xRight = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

    return (
            <div 
                ref={container}
                className="h-[200vh] flex items-center justify-center relative"  // Make the container tall enough to allow scrolling
            >    
                <motion.div
                    style={{
                        x: xLeft,  // Apply horizontal movement to the left text
                    }}
                    className="text-4xl absolute" // Position the text absolutely
                >
                    Left Text
                </motion.div>

                <motion.div
                    style={{
                        x: xRight,  // Apply horizontal movement to the right text
                    }}
                    className="text-4xl absolute" // Position the text absolutely
                >
                    Right Text
                </motion.div>
            </div> 
    );
}

export default AdvanceTextAnimation;
