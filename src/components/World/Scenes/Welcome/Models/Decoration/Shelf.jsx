import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Shelf (props) {
  const { nodes, materials } = useGLTF('/assets/models/shelf/shelf.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/shelf/shelf.glb');
