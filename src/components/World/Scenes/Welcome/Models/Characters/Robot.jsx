import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Robot = (props) => {
    const robotRef = useRef();
    const robotModel = useGLTF("/assets/models/characters/humanoidRobot/scene.gltf")
    const {animations,nodes,materials} = robotModel;

    const {actions} = useAnimations(animations, robotRef)

    useEffect(()=>{
        // ALL, IDLE, WALK, RUN
        const aux = () => {
        const action = actions['IDLE'];
            action.play();
        };
        aux();
    }, [])

    return (
      <mesh
        ref={robotRef}
        castShadow
        {...props}
        onClick={(e) => e.stopPropagation()} //Detener la propagacion (Hacer click cuando hay un elemetno en frente)
      >
        <primitive object={robotModel.scene} />
      </mesh>
    );
};

export default Robot;
useGLTF.preload('/assets/models/characters/humanoidRobot/scene.gltf');