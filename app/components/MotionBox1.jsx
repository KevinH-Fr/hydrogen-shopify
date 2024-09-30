// src/MotionBox.js
import { motion } from 'framer-motion';

const MotionBox1 = ({ text }) => {
  return (
    <motion.div
      className="bg-blue-500 text-white p-40 rounded text-center my-10" // Added margin-bottom for spacing
      initial={{ opacity: 0, y: -50 }} // Initial state
      animate={{ opacity: 1, y: 0 }}    // Animate to this state
      exit={{ opacity: 0, y: 50 }}      // Exit animation
      transition={{ duration: 0.5 }}     // Transition settings
    >
      {text}  {/* Display text passed as a prop */}
    </motion.div>
  );
};

export default MotionBox1;
