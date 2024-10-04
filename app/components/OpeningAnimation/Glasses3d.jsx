import React, { useRef, useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const Glasses3d = () => {
  return (
    <div className="h-screen w-screen mt-80">
      <div className="glasses h-[80%]">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <directionalLight position={[4, 3, 1]} />

          <Glasses />
        </Canvas>
      </div>
    </div>
  );
};

// Component to load and animate the glasses model
function Glasses() {
  const { scene } = useGLTF('/assets/glasses.glb'); // Load the glasses model
  const glassesRef = useRef(null);

  // Animation control
  useEffect(() => {
    if (glassesRef.current) {
      // Initial scale and rotation
      glassesRef.current.scale.set(4, 4, 4); // Start from a larger scale
      glassesRef.current.rotation.set(0, 0, 0); // Start with no rotation

      // Animate scale and rotation over 2 seconds
      const duration = 1500; // Duration in milliseconds

      // Set up the animation
      const animationStart = 4000 + performance.now();

      const animate = (time) => {
        const elapsed = time - animationStart; // Time elapsed since start
        const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1

        // Interpolating scale and rotation
        const scale = 3 - (progress * 1); // Scale goes from 2 to 1
        const rotationY = Math.PI * 2 * progress; // Rotation goes from 0 to 2 * PI

        // Apply the transformations
        glassesRef.current.scale.set(scale, scale, scale);
        glassesRef.current.rotation.y = rotationY;

        if (progress < 1) {
          requestAnimationFrame(animate); // Continue animation if not complete
        }
      };

      requestAnimationFrame(animate); // Start the animation
    }
  }, []);

  return (
    <motion.group ref={glassesRef}>
      <primitive object={scene} />
    </motion.group>
  );
}

export default Glasses3d;
