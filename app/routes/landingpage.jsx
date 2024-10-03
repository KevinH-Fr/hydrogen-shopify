import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import FirstBackground from '../components/OpeningAnimation/FirstBackground';
import BoxAnimation from '../components/OpeningAnimation/BoxAnimation';
import GateAnimation from '~/components/OpeningAnimation/GateAnimation';
import TextAnimation from '~/components/OpeningAnimation/TextAnimation';
import AdvanceTextAnimation from '~/components/OpeningAnimation/AdvanceTextAnimation';

const LandingPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FirstBackground /> 

      <BoxAnimation />

      <div style={{ height: '0vh' }}></div>

      <GateAnimation />
      <div style={{ height: '10vh' }}></div> 

      <TextAnimation />
      <div style={{ height: '20vh' }}></div> 

      <AdvanceTextAnimation />
      <div style={{ height: '20vh' }}></div> 

    </div>
  )
};

export default LandingPage;
