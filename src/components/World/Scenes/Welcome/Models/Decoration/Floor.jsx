import { useTexture } from '@react-three/drei';
import React from 'react';

const Floor = (props) => {
  const PATHFloor = '/assets/textures/Floor/';
  const texturePath = PATHFloor;

  const propsTexture = useTexture({
    map: texturePath + 'floorColor.jpg',
    normalMap: texturePath + 'floorNormal.jpg',
    roughnessMap: texturePath + 'floorRoughness.jpg',
    aoMap: texturePath + 'floorAO.jpg',
  });
  return (
    <>
      <mesh {...props}>
        <planeGeometry attach="geometry" args={[12, 12, 1]} />

        <meshStandardMaterial attach="material" {...propsTexture} />
      </mesh>
    </>
  );
};

export default Floor;
