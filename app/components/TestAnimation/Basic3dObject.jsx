import React, { useRef, useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const Basic3dObject = () => {
  return (
    <div className="h-screen bg-amber-700">
      <div className="glasses h-full w-full">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Glasses />
        </Canvas>
      </div>
    </div>
  );
};

// Component to load and animate the glasses model
function Glasses() {
  const { scene } = useGLTF('/assets/glasses.glb'); // Load the glasses model

  return (
    <motion.group>
      <primitive object={scene} />
    </motion.group>
  );
}

export default Basic3dObject;
