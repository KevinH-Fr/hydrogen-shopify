// React
import { motion } from "framer-motion"
import MotionBox1 from '../components/MotionBox1.jsx'; 
import MotionBox2 from '../components/MotionBox2.jsx'; 
import ScrollAnimationImage from '../components/ScrollAnimationImage'; 

import TextAnimation from '../components/TextAnimation'; 
import ScrollColorChangeBox from '../components/ScrollColorChangeBox'; 
import BoxZoomIn from '../components/BoxZoomIn'; 

import Animation3d from '../components/Animation3d'; 
import Animation3dInteractions from "../components/Animation3dInteractions.jsx";
import Animation3dScrollMotion from "../components/Animation3dScrollMotion.jsx";

const LandingPage = () => {
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

export default LandingPage;