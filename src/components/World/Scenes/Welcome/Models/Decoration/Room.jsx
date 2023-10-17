import { RigidBody } from '@react-three/rapier';
import React from 'react';
import { toRadians } from '../../../../../../Config/Angles';
import Floor from './Floor';
import Wall from './Wall';

const Room = () => {
  return (
    <>
      <group>
        {/* Floor */}
        <RigidBody type="fixed" colliders={'cuboid'}>
          <Wall
            position={[0, -1.6, 0]}
            rotationX={-Math.PI / 2}
            rotationY={0}
            color={'#ac7a51'}
            args={[12, 12, 1]}
            receiveShadow={true}
            isFloor={true}
          />

        {/* Front Wall */}
        <Wall
          position={[-3.7, 0.4, -6]}
          rotationX={0}
          rotationY={0}
          args={[4.8, 4]}
          receiveShadow={true}
          isFloor={false}
        />

        <Wall
          position={[3.2, 0.4, -6]}
          rotationX={0}
          rotationY={0}
          args={[5.6, 4]}
          receiveShadow={true}
          isFloor={false}
        />

        <Wall
          position={[-0.3, 1.75, -6]}
          rotationX={0}
          rotationY={0}
          args={[2, 1.3]}
          receiveShadow={true}
          isFloor={false}
        />

        <Wall
          position={[-0.3, -1.45, -6]}
          rotationX={0}
          rotationY={0}
          args={[2, 0.3]}
          receiveShadow={true}
          isFloor={false}
        />

        {/* Left Wall */}
        <Wall
          position={[-6, 0.4, 0]}
          rotationX={0}
          rotationY={Math.PI / 2}
          args={[12, 4]}
          receiveShadow={true}
          isFloor={false}
        />

        {/* Right Wall */}
        <Wall
          position={[6, 0.4, 0]}
          rotationX={0}
          rotationY={-Math.PI / 2}
          args={[12, 4]}
          receiveShadow={true}
          isFloor={false}
        />
        </RigidBody>

      </group>
    </>
  );
};

export default Room;
