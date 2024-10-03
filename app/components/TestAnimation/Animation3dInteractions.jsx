import React, {useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls, ScrollControls, useScroll} from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from "framer-motion-3d"


const Animation3dInteractions = ({ text }) => {
  return (
    <div className='p-4 m-0 h-screen w-screen'>
      <Canvas>
        <ScrollControls pages={5}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube />
        </ScrollControls>

      </Canvas>
    </div>
  );
};

function Cube() {
    // Create a reference to the mesh
    const mesh = useRef(null);
    const data = useScroll();

    useFrame( (state, delta) => {
      const { offset } = data;
      mesh.current.rotation.x = offset * 5;
      mesh.current.rotation.y = offset * 5;
      mesh.current.rotation.z = offset * 5;
    })

    // Rotate the mesh on every frame using useFrame
    // useFrame((state, delta) => {
    //     // Ensure mesh is defined before trying to access it
    //         mesh.current.rotation.x += delta * 0.25;
    //         mesh.current.rotation.y += delta * 0.25;
    //         mesh.current.rotation.z += delta * 0.25;
    // });
    
    const texture_1 = useLoader(TextureLoader, "/assets/cartier eyewear.webp")
    const texture_2 = useLoader(TextureLoader, "/assets/saint laurent eyewear.webp")
    const texture_3 = useLoader(TextureLoader, "/assets/saint laurent eyewear 2.webp")
    const texture_4 = useLoader(TextureLoader, "/assets/prada eyewear.webp")
    const texture_5 = useLoader(TextureLoader, "/assets/prada eyewear 2.webp")
    const texture_6 = useLoader(TextureLoader, "/assets/cartier eyewear.webp")

    return (
        // Attach the ref to the mesh component
        <mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial map={texture_3} attach="material-2" />
            <meshStandardMaterial map={texture_4} attach="material-3" />
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5" />

        </mesh>        
    );
}

export default Animation3dInteractions;
