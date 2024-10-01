import React, {useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Animation3d = ({ text }) => {
  return (
    <div className='p-4 m-0 h-screen w-screen'>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

function Cube() {
    // Create a reference to the mesh
    const mesh = useRef(null);

    // Rotate the mesh on every frame using useFrame
    useFrame((state, delta) => {
        // Ensure mesh is defined before trying to access it
            mesh.current.rotation.x += delta * 0.25;
            mesh.current.rotation.y += delta * 0.25;
            mesh.current.rotation.z += delta * 0.25;
    });
    
    const texture_1 = useLoader(TextureLoader, "/assets/le22white.png")
    return (
        // Attach the ref to the mesh component
        <mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial map={texture_1} />
        </mesh>        
    );
}

export default Animation3d;
