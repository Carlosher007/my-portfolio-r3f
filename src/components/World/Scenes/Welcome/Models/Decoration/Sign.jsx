import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import React, { useRef, useState } from 'react';
import { useRenderStore } from '../../../../../../store/storeWorld';

export function Sign(props) {
  const { nodes, materials } = useGLTF('/assets/models/sign/sing.gltf');
  const aboutMeRef = useRef();
  const textAboutMeRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  // const isInfoOpened = useRenderStore((state) => state.isInfoOpened);
  const setIsInfoOpened = useRenderStore((state) => state.setIsInfoOpened);
  const setScene = useRenderStore((state) => state.setScene);

  const handleSign = (e, type) => {
    // console.log("distance", e.distance); // Distancia entre la cámara y el punto de contacto del rayo.
    // console.log("point", e.point); // Punto de coordenadas en 3D de donde hizo el contacto del rayo en el objeto.
    // console.log("uv", e.uv); // Punto de coordenadas en 2D de donde hizo el contacto el rayo con la geometría.
    // console.log("object", e.object); // Retorna el objeto que fue interceptado.
    // console.log("eventObject", e.eventObject); // Retorna el objeto que escucho el evento.
    // console.log("x", e.x); // Retorna las coordenadas 2D del puntero del mouse en la posición x.
    // console.log("y", event.y); // Retorna las coordenadas 2D del puntero del mouse en la posición y.
    // console.log("shiftKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla shiftKey.
    // console.log("ctrlKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla ctrlKey.
    // console.log("metaKey", e.metaKey); // retorna true si el evento fue realizado presionando la tecla metaKey.

    console.log(type);
  };

  const changeColor = () => {
    aboutMeRef.current.material.color.set(
      `hsl(${Math.random() * 360},100%, 50%)`
    );
  };

  const handleAnimate = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  const handleClickAboutMe = () => {
    setScene(0);
    setIsInfoOpened(true);
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign.geometry}
        material={materials.wood}
      />
      <motion.group
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        onPointerMissed={(e) => handleAnimate()} //Se dispara cuando se clickea fuera del objeto.
      >
        <group
          onClick={() => handleClickAboutMe()}
          onPointerMissed={() => setIsInfoOpened(false)}
        >
          <mesh
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.9 }}
            castShadow
            receiveShadow
            geometry={nodes.AboutMe.geometry}
            material={materials.green}
            ref={aboutMeRef}
            onClick={() => changeColor()}
            // onContextMenu={(e) => handleSign(e, 'About Me 2')} //Este ocurre presionando click derecho
            // onDoubleClick={(e) => handleSign(e, 'About Me 3')} //Se activa cuando se hace doble click en el objeto.
            // onPointerUp={(e) => handleSign(e, 'About Me 4')} //Se activa cuando se hace click izquierdo o derecho o tocar.
            // onPointerDown={(e) => handleSign(e, 'About Me 5')} //Se dispara cuando un puntero se vuelve activo. Para el mouse, se activa cuando el dispositivo pasa de no presionar ningún botón a presionar al menos un botón.
            // onPointerOver={(e) => setIsOptionsOpened(true)} //Se dispara cuando un puntero ingresa al objeto.
            // onPointerEnter={(e) => handleSign(e, 'About Me 7')} //Se dispara cuando un puntero ingresa al objeto.
            // onPointerOut={(e) => setIsOptionsOpened(false)} //Se dispara cuando un puntero deja al objeto.
            // onPointerLeave={(e) => handleSign(e, 'About Me 9')} //Se dispara cuando un puntero deja al objeto.
            // onPointerMove={(e) => handleSign(e, 'About Me 10')} //Se dispara cuando se mueve por cada frame en el objeto.
            // onPointerMissed={(e) => handleAnimate()} //Se dispara cuando se clickea fuera del objeto.
          />
          <mesh
            ref={textAboutMeRef}
            castShadow
            receiveShadow
            geometry={nodes.TextAboutMe.geometry}
            material={materials.text}
            position={[0.03, 2.23, 0.087]}
            rotation={[1.559, -0.139, -0.088]}
            scale={0.189}
          />
        </group>

        <group onClick={() => setScene(1)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Projects.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TextProjects.geometry}
            material={materials.text}
            position={[0.02, 1.86, 0.092]}
            rotation={[Math.PI / 2, 0, 0.087]}
            scale={0.189}
          />
        </group>
      </motion.group>

      {props.children}
    </group>
  );
}

useGLTF.preload('/assets/models/sign/sing.gltf');
