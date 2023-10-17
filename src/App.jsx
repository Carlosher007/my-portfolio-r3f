import { Html, useProgress } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import { MotionConfig } from 'framer-motion';
import React, { Suspense, useEffect, useState } from 'react';
import { cameraSettings } from './Config/Camera';
import { frameMotionConfig } from './Config/FrameMotionConfig';
import { Cursor } from './components/Info/Cursor';
import Info from './components/Info/Info';
import Spin from './components/Info/Spin';
import Experience from './components/World/Experience';
import { useRenderStore } from './store/storeWorld';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <mesh>
      <Html center>
        <Spin progress={parseInt(progress)} />
      </Html>
    </mesh>
  );
};

const App = () => {
  const [section, setSection] = useState(0);

  const isInfoOpened = useRenderStore((state) => state.isInfoOpened);

  return (
    <>
      <MotionConfig transition={{ ...frameMotionConfig }}>
        <Canvas camera={cameraSettings} shadows>
          <Suspense fallback={<Loader />}>
            <color attach="background" args={['#2980b9']} />
            <Html position={[-6, 0, 0]}>
              {isInfoOpened && (
                <Info
                  name={'Carlos'}
                  biography={"I'm a System Engineering Student"}
                />
              )}
            </Html>
            <Experience />
            {/* <Html position={[-5, 2, 0]}> */}

            {/* </Html> */}
          </Suspense>
        </Canvas>
        <Cursor />
      </MotionConfig>
    </>
  );
};

export default App;
