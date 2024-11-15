import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Clock = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/clock.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="QuartzClock_FBXfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="QuartzRectClock" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="AlarmArm" position={[0.016, 0, 0.05]} rotation={[2.091, 0, 0]}>
                    <mesh
                      name="AlarmArm_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.AlarmArm_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                  <group name="Glass">
                    <mesh
                      name="Glass_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Glass_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                  <group name="HourArm" position={[0.018, 0, 0.05]} rotation={[-0.192, 0, 0]}>
                    <mesh
                      name="HourArm_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.HourArm_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                  <group
                    name="MinuteArm"
                    position={[0.02, 0, 0.05]}
                    rotation={[-Math.PI / 3, 0, 0]}>
                    <mesh
                      name="MinuteArm_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.MinuteArm_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                  <group
                    name="SeecondArm"
                    position={[0.022, 0, 0.05]}
                    rotation={[-Math.PI / 6, 0, 0]}>
                    <mesh
                      name="SeecondArm_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.SeecondArm_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                  <group name="Case">
                    <mesh
                      name="Case_QuartzClock_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Case_QuartzClock_0.geometry}
                      material={materials.QuartzClock}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/clock.glb')

export default Clock