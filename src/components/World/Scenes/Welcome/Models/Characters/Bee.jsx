import {
  ContactShadows,
  useAnimations,
  useGLTF,
  useHelper,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { BoxHelper } from 'three';
import { motion } from 'framer-motion-3d';

const Bee = (props) => {
  const [direction, setDirection] = useState('down');
  const [isWalking, setIsWalking] = useState(false);
  const stepSize = 0.01;
  const rotationSpeed = 0.01;
  const [isHovered, setIsHovered] = useState(false);


  const beeRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/characters/bee/bee.gltf'
  );

  const { actions } = useAnimations(animations, beeRef);

  useEffect(() => {
    const animate = () => {
      const action = actions['All Animations'];
      action.play();
    };
    animate();
  }, []);

  useFrame(() => {
    if (isWalking) {
      const currentPosition = beeRef.current.position.clone();

      if (direction === 'down') {
        currentPosition.x += stepSize;
        if (currentPosition.x >= 3) {
          setDirection('left');
        }
      } else if (direction === 'left') {
        currentPosition.z += stepSize;
        if (currentPosition.z >= 1.6) {
          setDirection('up');
        }
      } else if (direction === 'up') {
        currentPosition.x -= stepSize;
        if (currentPosition.x <= -3.5) {
          setDirection('right');
        }
      } else if (direction === 'right') {
        currentPosition.z -= stepSize;
        if (currentPosition.z <= -2.5) {
          setDirection('down');
        }
      }

      // Actualiza la posición del personaje
      beeRef.current.position.copy(currentPosition);
    }
  });

  const handleAnimate = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };


  return (
    <motion.group
      ref={beeRef}
      {...props}
      dispose={null}
      animate={{
        scale: (isHovered && !isWalking) ? 1.4 : 1,
      }}
      onPointerMissed={(e) => handleAnimate()}
    >
      <group name="Scene">
        <group
          name="base_dummy"
          position={[0, 0.086, 0.007]}
          rotation={[Math.PI / 2, 0, 0]}
          onClick={() => setIsWalking(!isWalking)}
        >
          <mesh
            name="backpack_gloss"
            castShadow
            receiveShadow
            geometry={nodes.backpack_gloss.geometry}
            material={materials.transp_1}
            position={[-0.002, 0.173, 0.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={136.034}
          />
          <mesh
            name="backpack_low001"
            castShadow
            receiveShadow
            geometry={nodes.backpack_low001.geometry}
            material={materials.base_1}
            position={[-0.002, 0.173, 0.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={136.034}
          />
          <mesh
            name="base_body_v2"
            castShadow
            receiveShadow
            geometry={nodes.base_body_v2.geometry}
            material={materials.base_1}
            position={[0.011, -0.007, 0.086]}
          />
          <group name="dummy_head">
            <mesh
              name="head_new001"
              castShadow
              receiveShadow
              geometry={nodes.head_new001.geometry}
              material={materials.base_1}
              position={[-0.002, 0.173, 0.18]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={136.034}
            />
            <mesh
              name="Object012"
              castShadow
              receiveShadow
              geometry={nodes.Object012.geometry}
              material={materials.base_1}
              position={[-0.002, 0.029, -0.425]}
            />
          </group>
          <group name="Dummy_vent_base_left" position={[-0.298, -0.01, -0.046]}>
            <group name="Dummy_vent_left" position={[-0.213, 0, -0.017]}>
              <mesh
                name="vent_left001"
                castShadow
                receiveShadow
                geometry={nodes.vent_left001.geometry}
                material={materials.base_1}
                position={[0.509, 0.183, 0.243]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={136.034}
              />
            </group>
            <mesh
              name="vent_base_left001"
              castShadow
              receiveShadow
              geometry={nodes.vent_base_left001.geometry}
              material={materials.base_1}
              position={[0.296, 0.183, 0.226]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={136.034}
            />
          </group>
          <group
            name="Dummy_vent_base_right"
            position={[0.3, -0.01, -0.046]}
            rotation={[0, 0, Math.PI]}
          >
            <group name="Dummy_vent_right" position={[-0.21, 0, -0.017]}>
              <mesh
                name="vent_left001001"
                castShadow
                receiveShadow
                geometry={nodes.vent_left001001.geometry}
                material={materials.base_1}
                position={[0.512, -0.183, 0.243]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={136.034}
              />
            </group>
            <mesh
              name="vent_base_right001"
              castShadow
              receiveShadow
              geometry={nodes.vent_base_right001.geometry}
              material={materials.base_1}
              position={[0.302, -0.183, 0.226]}
              rotation={[Math.PI / 2, 0, Math.PI]}
              scale={136.034}
            />
          </group>
          <group
            name="left_hands_base"
            position={[-0.246, 0.092, 0.105]}
            rotation={[0, 1.309, 0]}
          >
            <group
              name="left_hands_1"
              position={[-0.243, 0, 0]}
              rotation={[0, 0, -0.698]}
            >
              <group
                name="Dummy_capture_left_down"
                position={[-0.169, 0, -0.013]}
                rotation={[1.57, 0.005, -0.003]}
                scale={[1.184, 0.389, 1.184]}
              >
                <mesh
                  name="wrist_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.wrist_2.geometry}
                  material={materials.base_1}
                  position={[-0.02, 0.033, 0]}
                  rotation={[-3.141, 0.005, -0.006]}
                  scale={[0.97, 4.312, 0.844]}
                />
              </group>
              <group name="Dummy_hand" position={[-0.169, 0, -0.002]}>
                <group
                  name="Dummy_capture_left_up"
                  position={[0, 0, 0.016]}
                  rotation={[1.57, 0.005, -0.003]}
                  scale={[1.201, 0.394, 1.201]}
                >
                  <mesh
                    name="wrist_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.wrist_1.geometry}
                    material={materials.base_1}
                    position={[-0.02, -0.035, 0]}
                    rotation={[0.001, -0.005, 0.006]}
                    scale={[0.957, 4.254, 0.833]}
                  />
                </group>
              </group>
              <mesh
                name="forearm"
                castShadow
                receiveShadow
                geometry={nodes.forearm.geometry}
                material={materials.base_1}
                position={[-0.007, 0, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 13.488, 1]}
              />
              <mesh
                name="wrist_0"
                castShadow
                receiveShadow
                geometry={nodes.wrist_0.geometry}
                material={materials.base_1}
                position={[-0.169, 0, 0]}
              />
            </group>
            <mesh
              name="shoulder"
              castShadow
              receiveShadow
              geometry={nodes.shoulder.geometry}
              material={materials.base_1}
              position={[-0.031, 0.004, -0.006]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={1.155}
            />
          </group>
          <group
            name="Point001"
            position={[0, 0.007, 0.082]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group name="Point002" position={[0, 0, 0.158]}>
              <mesh
                name="base_part_1_low001"
                castShadow
                receiveShadow
                geometry={nodes.base_part_1_low001.geometry}
                material={materials.base_1}
                position={[0.166, 0.002, -0.059]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={136.034}
              />
              <group name="Point003" position={[0, -0.002, 0.111]}>
                <mesh
                  name="base_part_2_low001"
                  castShadow
                  receiveShadow
                  geometry={nodes.base_part_2_low001.geometry}
                  material={materials.base_1}
                  position={[0, 0.002, -0.016]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={129.757}
                />
                <mesh
                  name="Box001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box001.geometry}
                  material={materials.base_1}
                  position={[-0.007, 0.001, 0.096]}
                  scale={1.058}
                >
                  <mesh
                    name="Box002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box002.geometry}
                    material={materials.base_1}
                    position={[0, 0, 0.06]}
                  >
                    <mesh
                      name="Box003"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box003.geometry}
                      material={materials.base_1}
                      position={[0, 0, 0.012]}
                      scale={0.904}
                    >
                      <mesh
                        name="pathcord_new_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.pathcord_new_2.geometry}
                        material={materials.base_1}
                        position={[-0.018, 0, -0.084]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={98.442}
                      >
                        <mesh
                          name="Box006"
                          castShadow
                          receiveShadow
                          geometry={nodes.Box006.geometry}
                          material={materials.base_1}
                          position={[0, -0.001, 0.002]}
                          rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          scale={0.011}
                        />
                      </mesh>
                    </mesh>
                  </mesh>
                </mesh>
              </group>
            </group>
          </group>
          <group
            name="right_hands_base001"
            position={[0.217, 0.085, 0.099]}
            rotation={[-0.022, -1.222, -3.076]}
          >
            <group
              name="right_hands_002"
              position={[-0.243, 0, 0]}
              rotation={[0, 0, Math.PI / 4]}
            >
              <group name="Dummy_hand001" position={[-0.169, 0, 0.001]}>
                <group
                  name="Dummy_capture_left_down001"
                  position={[0, 0, -0.014]}
                  rotation={[1.57, 0.005, -0.003]}
                  scale={[1.184, 0.389, 1.184]}
                >
                  <mesh
                    name="Object013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object013.geometry}
                    material={materials.base_1}
                    position={[-0.021, 0.033, 0.027]}
                  />
                </group>
                <group
                  name="Dummy_capture_left_up001"
                  position={[0, 0, 0.016]}
                  rotation={[1.57, 0.005, -0.003]}
                  scale={[1.201, 0.394, 1.201]}
                >
                  <mesh
                    name="Box009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box009.geometry}
                    material={materials.base_1}
                    position={[-0.021, -0.042, 0.026]}
                    scale={0.986}
                  />
                </group>
              </group>
              <mesh
                name="forearm001"
                castShadow
                receiveShadow
                geometry={nodes.forearm001.geometry}
                material={materials.base_1}
                position={[-0.007, 0, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[1, 13.488, 1]}
              >
                <mesh
                  name="wrist_003"
                  castShadow
                  receiveShadow
                  geometry={nodes.wrist_003.geometry}
                  material={materials.base_1}
                  position={[0, 0.012, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.074, 1, 1]}
                />
              </mesh>
            </group>
            <mesh
              name="shoulder001"
              castShadow
              receiveShadow
              geometry={nodes.shoulder001.geometry}
              material={materials.base_1}
              position={[-0.031, 0.004, -0.006]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={1.155}
            />
          </group>
          <mesh
            name="Sphere001"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials.base_1}
            position={[-0.002, -0.44, -0.035]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Object"
              castShadow
              receiveShadow
              geometry={nodes.Object.geometry}
              material={materials.base_1}
              position={[0, 0, -0.002]}
              scale={[1.293, 1.293, 0.845]}
            />
          </mesh>
        </group>
      </group>
    </motion.group>
  );
};

export default Bee;
useGLTF.preload('/assets/models/bee/scene.gltf');
