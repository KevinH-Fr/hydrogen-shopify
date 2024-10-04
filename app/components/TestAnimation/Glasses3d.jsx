import React, { useRef, useEffect, useState } from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ScrollControls, useScroll, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const Glasses3d = () => {
  return (
    <div className="h-screen w-screen mt-80">
      <Canvas>
        <ScrollControls pages={3}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <directionalLight position={[4, 3, 1]} />
          <Glasses />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

// Component to load the glasses model
function Glasses() {
  const { scene } = useGLTF('/assets/glasses.glb'); // Load the glasses model
  const glassesRef = useRef(null);
  const data = useScroll();
  const [isLoaded, setIsLoaded] = useState(false); // State to track if the load animation is completed

  // Set initial scale and rotation in useEffect
  useEffect(() => {
    if (glassesRef.current) {
      // Initial animation on load
      glassesRef.current.scale.set(0, 0, 0); // Start from scale (0, 0, 0)
      const targetScale = 4; // Final scale
      const increment = 0.01; // Smaller increment for a longer animation

      // Animate the scale
      const animateScale = () => {
        let scale = glassesRef.current.scale.x;
        if (scale < targetScale) {
          scale += increment; // Increment scale
          glassesRef.current.scale.set(scale, scale, scale); // Update scale
          requestAnimationFrame(animateScale); // Continue until target scale is reached
        } else {
          setIsLoaded(true); // Set loaded state to true after animation
        }
      };
      animateScale(); // Start the animation
    }
  }, []);

  // Set the rotation based on scroll
  useFrame(() => {
    if (isLoaded && glassesRef.current) {
      // Get scroll offset and adjust rotation
      const { offset } = data;
      glassesRef.current.rotation.y = offset * Math.PI * 2; // Rotate based on scroll position
    }
  });

  return (
    <motion.group ref={glassesRef}>
      <primitive object={scene} />
    </motion.group>
  );
}

export default Glasses3d;
