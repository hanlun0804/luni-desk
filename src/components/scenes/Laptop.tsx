import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Laptop = (props) => {
  const { nodes, materials } = useGLTF('/models/laptop.glb')
  const screenTexture = useTexture('/assets/invoice-texture.png')
  screenTexture.center.set(0.64, 0.14); 
  screenTexture.rotation = -Math.PI / 2;
  screenTexture.repeat.set(2.5, 2.5);

  return (
    <group {...props} dispose={null}>
      <group position={[0.501, 0.021, 0.454]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.115}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['case']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.touchpad}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ports}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.holes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.ethernet_port}
        />
      </group>
      <group
        position={[0.501, 0.028, 0.742]}
        rotation={[-1.309, 0, -Math.PI]}
        scale={[0.115, 0.055, 0.115]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['case']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.display}>
            <meshMatcapMaterial map={screenTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.bezel}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.keyboard}
        position={[0.515, 0.037, 0.541]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.115}
      />
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')

export default Laptop