import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import FirstBackground from '../components/OpeningAnimation/FirstBackground';
import BoxAnimation from '../components/OpeningAnimation/BoxAnimation';

const LandingPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FirstBackground /> 

      <BoxAnimation />


    </div>
  )
};

export default LandingPage;
