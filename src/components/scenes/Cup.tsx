import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Cup = (props) => {
    const { nodes, materials } = useGLTF('/models/cup.glb')
    const screenTexture = useTexture('/assets/invoice-texture.png')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface2_blinn1_0.geometry}
                material={materials.blinn1}
                scale={0.01}
            
            >
                <meshMatcapMaterial map={screenTexture} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/cup.glb')

export default Cup