import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Torus = ({ position }) => {
  const torusRef = useRef();

  useFrame((state, delta) => {
    torusRef.current.position.y =
      position[1] + Math.sin(state.clock.getElapsedTime());
    torusRef.current.rotation.y =  Math.cos(state.clock.getElapsedTime());
  });

  return (
    <>
      <mesh
        ref={torusRef}
        rotation={[-Math.PI / 4, 0, 0]}
        position={position}
        scale={0.36}
      >
        <torusGeometry args={[2, 1, 32, 64]}/>
        <meshNormalMaterial flatShading={true} color="purple" />
      </mesh>
    </>
  );
};

export default Torus;
