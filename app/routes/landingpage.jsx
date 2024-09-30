// React
import { motion } from "framer-motion"
import MotionBox1 from '../components/MotionBox1.jsx'; // Adjust the path based on your structure
import MotionBox2 from '../components/MotionBox2.jsx'; // Adjust the path based on your structure
import ScrollAnimationImage from '../components/ScrollAnimationImage'; // Import the ScrollAnimationBox

import TextAnimation from '../components/TextAnimation'; // Import the TextAnimation
import ScrollColorChangeBox from '../components/ScrollColorChangeBox'; // Import the color-changing box
import BoxZoomIn from '../components/BoxZoomIn'; // Import the color-changing box

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Center the content */}
      <h1 className="text-4xl font-bold mb-8">Welcome to My Landing Page</h1>

      <MotionBox1 text="This is the first motion box!" />  
      <MotionBox2 text="This is the second motion box!" /> 
      <ScrollAnimationImage /> 
     
      <div style={{ height: '20vh' }}></div>

      <TextAnimation /> 
      <ScrollColorChangeBox />   
      
      <BoxZoomIn /> 
      <div style={{ height: '50vh' }}></div>


    </div>
  );
};

export default LandingPage;