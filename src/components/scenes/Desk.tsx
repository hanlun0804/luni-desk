import React, { useState, useRef, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera, RoundedBox } from '@react-three/drei';
import Laptop from './Laptop';
import Notepad from './Notepad';
import Clock from './Clock';
import Cup from './Cup';

interface HoverableItemProps {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    Component: React.ComponentType;
    label: string;
    setHoveredLabel: (label: string | undefined) => void;
}

const HoverableItem: React.FC<HoverableItemProps> = ({ position, rotation, scale, Component, label, setHoveredLabel }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();
    const ivoryCream = getComputedStyle(document.documentElement).getPropertyValue('--ivory-cream').trim();


    // Animate the hover effect
    useFrame(() => {
        if (ref.current) {
            ref.current.position.y = isHovered ? position[1] + 0.1 : position[1];
        }
    });

    return (
        <group
            ref={ref}
            position={position}
            rotation={rotation}
            scale={scale}
            onPointerOver={() => {
                setIsHovered(true)
                setHoveredLabel(label);
            }}
            onPointerOut={() => {
                setIsHovered(false)
                setHoveredLabel(undefined); 
            }}
        >
            <Component />
        </group>
    );
};

type DeskProps = {
    setHoveredLabel: (label: string | undefined) => void;
}

const Desk: FC<DeskProps> = ({ setHoveredLabel }) => {
    const ivoryCream = getComputedStyle(document.documentElement).getPropertyValue('--ivory-cream').trim();
    return (
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 5, 5]} intensity={2} castShadow />

                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
                <PerspectiveCamera makeDefault position={[0, 2, 11]} fov={50} />

                <RoundedBox
                    args={[22, 0.4, 4]} 
                    radius={0.05}
                    smoothness={8} 
                    position={[0, -3.2, 1.5]} 
                    receiveShadow
                >
                    <meshStandardMaterial color="#DE9151" flatShading={false} />
                </RoundedBox>

                {/* Place hoverable items */}
                <HoverableItem 
                    position={[1.9, -2.87, 3.3]} 
                    rotation={[0, Math.PI, 0]} 
                    scale={4} 
                    Component={Laptop} 
                    label="Keep your invoice system in the same place as all your other tools, so it easily integrates into your workflow."
                    setHoveredLabel={setHoveredLabel}
                />
                <HoverableItem 
                    position={[-4.5, -2.5, 3.3]} 
                    rotation={[0, Math.PI / 6, 0]} 
                    scale={0.5} 
                    Component={Notepad} 
                    label="Get your to do lists created for you, and don't worry about losing them ever again."
                    setHoveredLabel={setHoveredLabel}
                />
                <HoverableItem 
                    position={[-2.5, -1.8, 3]} 
                    rotation={[0, Math.PI * 1.6, 0]} 
                    scale={6} 
                    Component={Clock} 
                    label="Don't worry about timetracking. LuniDesk got you covered."
                    setHoveredLabel={setHoveredLabel}
                />
                <HoverableItem 
                    position={[1.8, -2.5, 2.7]} 
                    rotation={[0, Math.PI / 3, 0]} 
                    scale={30} 
                    Component={Cup} 
                    label="We sadly can't provide you with coffee, but your best productivity tool is likely a fuller cup than this one."
                    setHoveredLabel={setHoveredLabel}
                />

            <color attach="background" args={[ivoryCream]} />
            </Canvas>
        </div>
    );
};

export default Desk;
