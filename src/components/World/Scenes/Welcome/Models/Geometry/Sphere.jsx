import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react';

const Sphere = ({ position }) => {
  const sphereRef = useRef();
  const PATH = "/assets/textures/barkWillow/"

  const propsTexture = useTexture({
    map: PATH + 'barkColor.jpg',
    normalMap: PATH + 'barkNormal.jpg',
    roughnessMap: PATH + 'barkRoughness.jpg',
    aoMap: PATH + 'barkAO.jpg',
  });

  // useFrame((state, delta) => {
  //   sphereRef.current.rotation.z += 1.5 * delta;
  //   sphereRef.current.rotation.x += 1.3 * delta;
  //   sphereRef.current.rotation.y += 3 * delta;
  // });

  return (
    <>
      <mesh ref={sphereRef} position={position} scale={0.06}>
        <sphereGeometry args={[15, 32, 16]} />
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </>
  );
};

export default Sphere;
