import {
  BakeShadows,
  Cone,
  ContactShadows,
  OrbitControls,
} from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import React, { useEffect } from 'react';
import { toRadians } from '../../Config/Angles';
import Bee from './Scenes/Welcome/Models/Characters/Bee';
import Robot from './Scenes/Welcome/Models/Characters/Robot';
import Room from './Scenes/Welcome/Models/Decoration/Room';
import { Setup } from './Scenes/Welcome/Models/Decoration/Setup';
import { Shelf } from './Scenes/Welcome/Models/Decoration/Shelf';
import { Sign } from './Scenes/Welcome/Models/Decoration/Sign';
import { WindowWall } from './Scenes/Welcome/Models/Decoration/WindowWall';
import Cube from './Scenes/Welcome/Models/Geometry/Cube';
import Environments from './Scenes/Welcome/Staging/Environments';
import Lights from './Scenes/Welcome/Staging/Lights';
import InitText from './Scenes/Welcome/Text/InitText';
import WelcomeText from './Scenes/Welcome/Text/WelcomeText';
import Welcome from './Scenes/Welcome/Welcome';
import { useFrame } from '@react-three/fiber';
import { useRenderStore } from '../../store/storeWorld';
import { MathUtils } from 'three';

const Experience = ({ section }) => {
  const scene = useRenderStore((state) => state.scene);

  useFrame((state) => {
    if (scene === 0) {
      state.camera.position.x = MathUtils.lerp(state.camera.position.x, 1, 0.1);
      state.camera.position.z = MathUtils.lerp(state.camera.position.z, 5, 0.1);
    } else if (scene === 1) {
      state.camera.position.x = MathUtils.lerp(
        state.camera.position.x,
        2.2,
        0.1
      );
      state.camera.position.z = MathUtils.lerp(
        state.camera.position.z,
        0.9,
        0.1
      );
    }
  });

  // useFrame((state, delta) => {
  //   if (Math.floor(state.clock.elapsedTime) % 1 === 0) {
  //     console.log(state.camera.position);
  //   }
  // });
  return (
    <>
      <OrbitControls
        maxPolarAngle={toRadians(-30)}
        minPolarAngle={toRadians(80)}
        maxAzimuthAngle={toRadians(50)}
        minAzimuthAngle={toRadians(-60)}
        enableZoom={false}
        enablePan={false}
      />

      {/* <ContactShadows
        opacity={1}
        position-y={-1.9}
        frames={60}
        scale={10}
        blur={1}
        resolution={512}
        color="black"
      /> */}

      <Lights />

      {/* Monitoring */}
      {/* <Perf /> */}

      <Environments />

      <Physics >
        <Welcome />
      </Physics>
    </>
  );
};

export default Experience;
