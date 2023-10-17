import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';

const Character = ({ position, scale, rotation }) => {
  const speed = 0.02;
  const [moveSpeedX, setMoveSpeedX] = useState(0);
  const [moveSpeedZ, setMoveSpeedZ] = useState(speed);

  const [moveToSecond, setMoveToSecond] = useState(true);
  const [moveToThird, setMoveToThird] = useState(false);
  const [moveToFourth, setMoveToFourth] = useState(false);
  const [isGiro, setIsGiro] = useState(false);

  const [turnSpeed, setTurnSpeed] = useState(0.01);

  const characterModel = useGLTF('/assets/models/character/source/model.gltf');
  const characterRef = useRef();
  const { animations } = characterModel;
  const { actions } = useAnimations(animations, characterRef);

  /* 
  posicion inicial: [3.5,-1.9,-1.5],   [0, 3, 0]
  segunda posicion: [3.5,-1.9,3.5]  , [0, 3, 0]
  tercera posicion: [-2.5,-1.9,3.5]  , [0, 2, 0]
  cuarta posicion: [-2.5,-1.9,-1.5]  , [0,0.3, 0]
  quinta posicion: [3.5,-1.9,-1.5]   , [0, -1., 0]
  */

  const moveToSecondPosition = () => {
    characterRef.current.position.z += moveSpeedZ;
    if (!isGiro) {
      characterRef.current.position.x -= moveSpeedX;
    } else {
      giro();
    }
    if (characterRef.current.position.z >= 3) {
      setMoveSpeedX(speed);
      if (characterRef.current.rotation.y >= 2) {
        characterRef.current.rotation.y -= turnSpeed;
        if (characterRef.current.position.z >= 3.5) {
          setMoveSpeedZ(0);
        }
      }
    }
    if (characterRef.current.position.x <= -2) {
      setMoveSpeedZ(0);
      setMoveToSecond(false);
      setMoveToThird(true);
    }
  };

  const moveToThirdPosition = () => {
    setMoveSpeedZ(speed);

    characterRef.current.position.z -= moveSpeedZ;
    characterRef.current.position.x -= moveSpeedX;

    if (characterRef.current.rotation.y >= 0.3) {
      characterRef.current.rotation.y -= turnSpeed;
      if (characterRef.current.position.x <= -2.5) {
        setMoveSpeedX(0);
      }
    }

    if (characterRef.current.position.z <= -1) {
      setMoveToThird(false);
      setMoveToFourth(true);
    }
  };

  const moveToFourthPosition = () => {
    setMoveSpeedX(speed);

    characterRef.current.position.z -= moveSpeedZ;
    characterRef.current.position.x += moveSpeedX;

    if (characterRef.current.rotation.y >= -1) {
      characterRef.current.rotation.y -= turnSpeed;
      if (characterRef.current.position.z <= -1.5) {
        setMoveSpeedZ(0);
      }
    }

    if (characterRef.current.position.x >= 3) {
      setIsGiro(true);
      setMoveToSecond(true);
      setMoveToFourth(false);
    }
  };

  const giro = () => {
    characterRef.current.position.x += moveSpeedX;
    setMoveSpeedZ(speed);
    if (characterRef.current.rotation.y >= -3) {
      characterRef.current.rotation.y -= turnSpeed;
      if (characterRef.current.position.x >= 3.5) {
        setMoveSpeedX(0);
        setIsGiro(false);
      }
    }
  };

  useFrame(() => {
    if (moveToSecond) {
      moveToSecondPosition();
    }

    if (moveToThird) {
      moveToThirdPosition();
    }

    if (moveToFourth) {
      moveToFourthPosition();
    }
  });

  useEffect(() => {
    const aux = () => {
      const action = actions['walk'];
      action.play();
    };
    aux();
  }, []);

  return (
    <mesh
      ref={characterRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={characterModel.scene} />
    </mesh>
  );
};

export default Character;
useGLTF.preload('/assets/models/character/source/model.gltf');
