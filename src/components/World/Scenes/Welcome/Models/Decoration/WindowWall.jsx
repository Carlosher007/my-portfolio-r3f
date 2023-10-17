import { useGLTF, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';

export function WindowWall(props) {
  /**
   *
   * Diffuse => almbedo map => color
   * ROughness map => CUanto se dispersa la luz reflejada al relieve
   * Normal map => simular relieves y profundiad
   * Dsiplacement map or Height => Infor del relieve
   * AMbiental oclussion map => Aclara o uscurece
   * Metallic: Aboserve y refleja luz
   */

  const { nodes, materials } = useGLTF('/assets/models/window/window.glb');
  const PATH = '/assets/textures/WindowWall/';

  const propsTexture = useTexture({
    map: PATH + 'windowColor.jpg',
    // displacementMap: PATH + 'windowHeight.png',
    normalMap: PATH + 'windowNormal.jpg',
    roughnessMap: PATH + 'windowRoughness.jpg',
    aoMap: PATH + 'windowAO.jpg',
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod_End_1_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod_End_2_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring1_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring2_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring3_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring4_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring5_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod_Back_1_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod_Back_2_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain_2_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain_1_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame2_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame3_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame4_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame5_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame6_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame7_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame8_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame9_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame10_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame11_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame1_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame_lambert1_0.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/assets/models/window/window.glb');
