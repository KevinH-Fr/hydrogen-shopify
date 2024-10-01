import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls } from '@react-three/drei';
import { useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

const BoxAnimation = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Map scrollYProgress (0 to 1) to the desired rotation range (0 to 3)
  const progress = useTransform(scrollYProgress, [0, 1], [0, 3]);

  // Smooth the scrolling progress
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div ref={container} className="main">
      <div className="cube">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  );
};

function Cube({ progress }) {
  // Create a reference to the mesh
  const mesh = useRef(null);

  // Load textures
  const texture_1 = useLoader(TextureLoader, "/assets/cartier eyewear.webp");
  const texture_2 = useLoader(TextureLoader, "/assets/saint laurent eyewear.webp");
  const texture_3 = useLoader(TextureLoader, "/assets/saint laurent eyewear 2.webp");
  const texture_4 = useLoader(TextureLoader, "/assets/prada eyewear.webp");
  const texture_5 = useLoader(TextureLoader, "/assets/prada eyewear 2.webp");
  const texture_6 = useLoader(TextureLoader, "/assets/cartier eyewear.webp");

  // Rotate the mesh based on the progress value
  useFrame(() => {
    if (mesh.current) {
      // Rotate the cube along the x and y axes based on the smooth progress
      const rotation = progress.get();
      mesh.current.rotation.y = rotation;
      mesh.current.rotation.x = rotation;
    }
  });

  return (
    <motion.mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}

export default BoxAnimation;
