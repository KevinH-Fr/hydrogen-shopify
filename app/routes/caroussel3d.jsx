import React, { useState } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

// Define animation variants for the glasses model
const entranceVariants = {
  hidden: { opacity: 0, scale: 0.5, x: -10 }, // Start from smaller scale and shifted left
  visible: { 
    opacity: 1, 
    scale: 4, // Normal scale
    x: 0, // Correct final position to 0
    transition: { duration: 1.5 } // Duration for entrance animation
  },
  exit: { 
    opacity: 0, 
    scale: 0.5, 
    transition: { duration: 1 } // Duration for exit animation
  },
};

const Caroussel3d = () => {
  const [selectedModel, setSelectedModel] = useState('/assets/glasses.glb'); // Default model path
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-mount

  // Array of models to display
  const models = [
    { id: 1, label: "Prada Model 1", path: "/assets/glasses.glb" }, // Path to model 1
    { id: 2, label: "Prada Model 2", path: "/assets/pink_glasses.glb" }, // Path to model 2
    { id: 3, label: "Saint Laurent", path: "/assets/reading_glasses.glb" } // Path to model 3
  ];

  const handleModelChange = (modelPath) => {
    setAnimationKey(prev => prev + 1); // Increment key to trigger animation
    setSelectedModel(modelPath); // Change the selected model
  };

  return (
    <div className="h-[80vh] bg-amber-700">
      <div className="glasses h-full w-full">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Glasses key={animationKey} modelPath={selectedModel} /> {/* Use key to trigger re-mount */}
        </Canvas>
      </div>

      {/* Buttons for selecting different models */}
      <div className="flex flex-row justify-center mt-5">
        {models.map(model => (
          <button 
            key={model.id} 
            className="bg-gray-800 text-white p-3 px-10 text-xl rounded-4xl cursor-pointer mx-2"
            onClick={() => handleModelChange(model.path)} // Change the selected model on click
          >
            {model.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Component to load and animate the glasses model
function Glasses({ modelPath }) {
  const { scene } = useGLTF(modelPath); // Load the selected glasses model

  return (
    <motion.group
      variants={entranceVariants}
      initial="hidden" // Start with the hidden state
      animate="visible" // Animate to the visible state
      exit="exit" // Animate to exit when model changes
    >
      <primitive object={scene} />
    </motion.group>
  );
}

export default Caroussel3d;
