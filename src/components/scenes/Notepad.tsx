import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Notepad = (props) => {
  const { nodes, materials } = useGLTF('/models/notepad.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[2.047, 0.005, -1.245]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.035, -0.089, -1]} rotation={[-3.057, -0.504, 0.063]} scale={0.03}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[3.371, 0, 1.335]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.066, 0.084, 0.066]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials['Material.006']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
            position={[1.382, -0.04, 0.094]}
            scale={[1.408, 0.006, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.001']}
            position={[2.599, 0.057, 0.091]}
            scale={[0.011, 0.974, 0.974]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/notepad.glb')

export default Notepad