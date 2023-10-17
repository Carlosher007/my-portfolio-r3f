import { useTexture } from '@react-three/drei';
import React from 'react';
import { RepeatWrapping, Vector2 } from 'three';

const Wall = ({ position, rotationX, rotationY, args, ...props }) => {
  const { isFloor } = props;
  const PATHFloor = '/assets/textures/Floor/';
  const PATHWall = '/assets/textures/Wall/';

  const texturePath = isFloor ? PATHFloor : PATHWall;

  const propsTexture = useTexture({
    map: texturePath + 'floorColor.jpg',
    normalMap: texturePath + 'floorNormal.jpg',
    roughnessMap: texturePath + 'floorRoughness.jpg',
    aoMap: texturePath + 'floorAO.jpg',
  });

  return (
    <mesh
      position={position}
      rotation-x={rotationX}
      rotation-y={rotationY}
      {...props}
    >
      <planeGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" {...propsTexture} />
    </mesh>
  );
};

export default Wall;
