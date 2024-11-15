"use client"; 

import React, { useRef } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingCube = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={"#468585"} emissive={"#468585"} />
        </mesh>
    )
}

const TestScene: React.FC = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 1, 1]} intensity={1} color={"#9CDBA6"} />
      <color attach={"background"} args={["#F0F0F0"]} />
      <RotatingCube />
    </Canvas>
  );
};

export default TestScene;
