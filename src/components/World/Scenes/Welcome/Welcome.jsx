import { Cone, ContactShadows, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import React, { useEffect, useRef, useState } from 'react';
import { MathUtils } from 'three';
import { toRadians } from '../../../../Config/Angles';
import { useRenderStore } from '../../../../store/storeWorld';
import Bee from './Models/Characters/Bee';
import Robot from './Models/Characters/Robot';
import { Arrow } from './Models/Decoration/Arrow';
import Room from './Models/Decoration/Room';
import { Setup } from './Models/Decoration/Setup';
import { Shelf } from './Models/Decoration/Shelf';
import { Sign } from './Models/Decoration/Sign';
import { WindowWall } from './Models/Decoration/WindowWall';
import Cube from './Models/Geometry/Cube';
import Environments from './Staging/Environments';
import Lights from './Staging/Lights';
import InitText from './Text/InitText';
import WelcomeText from './Text/WelcomeText';

const Welcome = () => {
  const textRef = useRef();
  const [play, setPlay] = useState(false);
  const [hitSound] = useState(() => new Audio('/assets/sounds/hitBall.wav'));

  useEffect(() => {
    if (play) {
      hitSound.currentTime = 0;
      hitSound.volume = 0.6;
      hitSound.play();
    }
  }, [play]);

  useEffect(() => {
    textRef.current.sleep();
  }, []);

  

  const onHandleText = () => {
    textRef.current.wakeUp();
    textRef.current.applyImpulse({ x: 0, y: 2, z: 0 }, true);
    textRef.current.applyTorqueImpulse({ x: 0, y: 2, z: 0 }, true);
    textRef.current.addForce({ x: 0.1, y: 0, z: 0 }, true);
  };

  const onHandleRobot = () => {};

  return (
    <>
      <Room />

      {/* <RigidBody
        ref={textRef}
        colliders={'ball'}
        position={[0, 1, 0]}
        // gravityScale={-2} //Cambie la gravedad propia, por ejemplo apra volar
        // restitution={1.2}
        friction={0}
        restitution={0}
        onCollisionEnter={() => setPlay(!play)}
        onCollisionLeave={() => setPlay(!play)}
      >
        <mesh scale={0.5} onClick={onHandleText}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody> */}

      {/* Characters*/}
      <Robot
        rotation={[0, -Math.PI * 0.15, 0]}
        scale={0.2}
        position={[3.5, -1.55, -3]}
        onClick={onHandleRobot}
      />
      <Bee position={[3.3, 1.3, -3.2]} rotationY={-Math.PI * 0.15} scale={1} />

      {/* Decoration */}

        colliders={'ball'}
      <RigidBody colliders={'cuboid'} gravityScale={0} type="fixed">

      <Shelf position={[5.3, 0.5, -3]} scale={0.6} />
</RigidBody>

      <WindowWall
        position={[2, -2, -3.7]}
        scale={0.039}
        rotation-y={-Math.PI / 2}
      />

      <Cube position={[5.4, 0.9, -2.2]} scale={0.5} />

      <Cone position={[5.4, 1, -3]} scale={0.6} />

      <Sign
        position={[1, -2, -2.5]}
        scale={1.4}
        rotation-y={Math.PI * 0.15}
      ></Sign>

      <Setup
        position={[1.7, -1.8, 35]}
        rotation={[0, toRadians(90), 0]}
        scale={2.5}
      />

      <RigidBody
        ref={textRef}
        colliders={'cuboid'}
        rotation={[0, -Math.PI / 2, 0]}
        position={[5.4, 1.5, -4.6]}
        size={0.6}
        onCollisionEnter={() => setPlay(!play)}
        onCollisionLeave={() => setPlay(!play)}

      >
        <WelcomeText onClick={onHandleText} />
      </RigidBody>

      <InitText position={[0, 2, -8]} />

      <Arrow
        position={[-5.65, 0.8, 1.5]}
        rotation-z={toRadians(90)}
        scale={0.2}
      />
    </>
  );
};

export default Welcome;
