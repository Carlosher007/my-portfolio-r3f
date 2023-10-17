import { Sky,  Stars } from '@react-three/drei';
import React from 'react';

const Environments = () => {
  return (
    <>
      {/* Backgorund */}
      {/* <Environment
        files={'/assets/environments/ballroom_1k.hdr'}
        ground={{ height: 20, scale: 256 }}
        background={true}
      /> */}

      <Stars
        radius={80} // Radius of the inner sphere (default=100)
        depth={100} // Depth of area where stars should fit (default=50)
        count={7000} // Amount of stars (default=5000)
        factor={3} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
      />
      <Sky
        sunPosition={[0, 0, -1]} // Coloca el sol debajo del horizonte
        inclination={0.2} // Ajusta la inclinación para simular el atardecer
        azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
        mieCoefficient={0.005} // Ajusta la dispersión atmosférica
        elevation={5} // Ajusta la elevación del sol
        mieDirectionalG={0.07} // Ajusta la luminosidad del sol
        rayleigh={3} // Ajusta la dispersión de Rayleigh
        turbidity={10} // Ajusta la claridad del cielo]
        exposure={0.5}
      />
      {/* <Sparkles
        color="rose"
        count={50}
        size={1}
        fade={true}
        speed={0.5}
        scale={1}
        position={[-3.5, -1, -2.5]}
      /> */}
    </>
  );
};

export default Environments;
