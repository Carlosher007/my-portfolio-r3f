import { Center, Float, Text3D } from '@react-three/drei';
import React from 'react';

const InitText = (props) => {
  const text = `Welcome`;

  return (
    // <Html position={[0,2.7,0]} center distanceFactor={12} occlude className='welcome-text'>
    //   <h2>Welcome</h2>
    // </Html>
    // <Float>
    //   <Text
    //     font="/assets/fonts/Bangers-Regular.ttf"
    //     fontSize={0.3}
    //     color={new Color(0xff6e09)}
    //     position-y={2.8}
    //     rotation-x={0.2}
    //     maxWidth={2}
    //     textAlign="center"
    //   >
    //     Welcome to Villa
    //   </Text>
    // </Float>

    <group {...props}>
      <Center>
        <Float
          speed={2} // Animation speed
          rotationIntensity={1.5} // XYZ rotation intensity
          floatIntensity={10} // Up/down float intensity
        >
          <Text3D
            font={'/assets/fonts/Tourney-Thin_Regular.json'}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.05}
            height={0.1}
            lineHeight={0.5}
            letterSpacing={0.05}
          >
            {text}
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </group>
  );
};

export default InitText;
