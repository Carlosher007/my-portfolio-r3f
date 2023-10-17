import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Cone = (props) => {
  const coneRef = useRef();
  const map = useLoader(TextureLoader, 'assets/textures/Cone/coneColor.jpg');
  const aoMap = useLoader(TextureLoader, 'assets/textures/Cone/coneAo.jpg');
  const roughnessMap = useLoader(TextureLoader, 'assets/textures/Cone/coneRoughness.jpg');
  const normalMap = useLoader(TextureLoader, 'assets/textures/Cone/coneNormal.jpg');
  const heightMap = useLoader(TextureLoader, 'assets/textures/Cone/coneHeight.png');

//   useFrame((state, delta) => {
//     const amplitudeX = 0.8;
//     const frequencyX = 1;
//     const amplitudeY = 0.8;
//     const frequencyY = 2;
// 
//     const newX =
//       position[0] + amplitudeX * Math.cos(state.clock.elapsedTime * frequencyX);
//     const newY =
//       position[1] + amplitudeY * Math.cos(state.clock.elapsedTime * frequencyY);
// 
//     coneRef.current.rotation.z += 1 * delta;
// 
//     coneRef.current.position.set(newX, newY, position[2]);
//   });

  return (
    <>
      <mesh
        ref={coneRef}
        {...props}
      >
        <coneGeometry args={[0.5, 1, 16]} />
        <meshStandardMaterial
          map={map}
          aoMap={aoMap}
          roughness={roughnessMap}
          normalMap={normalMap}
          displacementMap={heightMap}
          displacementScale={0.01}
        />
      </mesh>
    </>
  );
};

export default Cone;
