import React, { useRef } from 'react';

const Cube = (props) => {
  const cubeRef = useRef();

  // useFrame((state, delta) => {
  //   cubeRef.current.rotation.x += 1.5 * delta;
  //   cubeRef.current.rotation.z += 0.5 * delta;
  // });

  return (
    <>
      <mesh ref={cubeRef} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="yellow"
          // transparent={true}
          // opacity={0.4}
        />
      </mesh>
    </>
  );
};

export default Cube;
