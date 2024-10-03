// React
import { motion } from "framer-motion"
import MotionBox1 from '../components/TestAnimation/MotionBox1.jsx'; 
import MotionBox2 from '../components/TestAnimation/MotionBox2.jsx'; 
import ScrollAnimationImage from '../components/TestAnimation/ScrollAnimationImage.jsx'; 

import TextAnimation from '../components/TestAnimation/TextAnimation.jsx'; 
import ScrollColorChangeBox from '../components/TestAnimation/ScrollColorChangeBox.jsx'; 
import BoxZoomIn from '../components/TestAnimation/BoxZoomIn.jsx'; 

import Animation3d from '../components/TestAnimation/Animation3d.jsx'; 
import Animation3dInteractions from "../components/TestAnimation/Animation3dInteractions.jsx";
import Animation3dScrollMotion from "../components/OpeningAnimation/BoxAnimation.jsx";

const TestLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Landing Page</h1>

      <Animation3d /> 
      <p>animation3d</p>

      <Animation3dInteractions /> 
      <p>Animation3dInteractions</p>

      <Animation3dScrollMotion />
      <p>Animation3d scroll motion </p>

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

export default TestLandingPage;