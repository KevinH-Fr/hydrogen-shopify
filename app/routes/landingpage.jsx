// React
import { motion } from "framer-motion"
import MotionBox1 from '../components/MotionBox1.jsx'; // Adjust the path based on your structure
import MotionBox2 from '../components/MotionBox2.jsx'; // Adjust the path based on your structure


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Center the content */}
      <h1 className="text-4xl font-bold mb-8">Welcome to My Landing Page</h1>
      <MotionBox1 text="This is the first motion box!" />  {/* First MotionBox */}
      <MotionBox2 text="This is the second motion box!" /> {/* Second MotionBox */}
    </div>
  );
};

export default LandingPage;