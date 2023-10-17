import { useHelper } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import { PointLightHelper } from 'three';

const Lights = () => {
  // DirectionalLightHelper
  const directionalLightRef = useRef();
  // useHelper(directionalLightRef, DirectionalLightHelper);

  // PointLightHelper
  const pointLightRef = useRef();
  // useHelper(pointLightRef,PointLightHelper,1,"hotpink")

  // SportLightHelper
  const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper);

  useFrame((state, delta) => {
    spotLightRef.current.position.x =
      Math.sin(state.clock.getElapsedTime()) * 1;
    // Estamos en break
  });

  // Memo
  const options = useMemo(() => {
    return {
      intensitySL: { value: 1000, min: 0, max: 1000, step: 1 },
      colorSL: { value: 'white' },
    };
  });
  // const { intensitySL, colorSL } = useControls('Spot Light', options);

  return (
    <>
      <ambientLight intensity={0.5} color={'#b1cece'} />
      <directionalLight
        ref={directionalLightRef}
        position={[1, 4, 7]}
        intensity={1}
        color={'white'}
        castShadow={true}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={32}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <pointLight
       
        position={[5, 0.8, -4]}
        intensity={2}
        color={'red'}
      />

      <pointLight position={[5, 0.8, -1.5]} intensity={2} color={'red'} />

      <pointLight  ref={pointLightRef} position={[-5.65, 0.5, 1.7]} intensity={4} color={'red'} />

      <spotLight
        ref={spotLightRef}
        position={[3, 3, -2]}
        angle={Math.PI / 2}
        intensity={100}
        color={'white'}
        penumbra={1.5}
        distance={8}
      />
    </>
  );
};

export default Lights;
