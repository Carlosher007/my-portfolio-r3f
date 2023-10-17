import { Float, Text3D } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import React, { useState } from 'react';

const WelcomeText = (props) => {
  const text = `Carlos`;
  const [isHovered, setIsHovered] = useState(false);

  const handleAnimate = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

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

    <>
      {/* <Center> */}
      {/* <Float
        speed={2} // Animation speed
        rotationIntensity={1.5} // XYZ rotation intensity
        floatIntensity={1.5} // Up/down float intensity
      > */}
      <motion.group
        animate={{
          scale: isHovered  ? 1.2 : 1,
        }}
        onPointerMissed={(e) => handleAnimate()}
      >
        <Text3D
          font={'/assets/fonts/Tourney-Thin_Regular.json'}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.05}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0.05}
          {...props}
        >
          {text}
          <meshNormalMaterial />
        </Text3D>
      </motion.group>
      {/* </Float> */}
      {/* </Center> */}
    </>
  );
};

export default WelcomeText;
