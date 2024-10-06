/* eslint-disable @typescript-eslint/no-unused-vars */
// import useGravity from "../hooks/useGravity";
import { Stars } from "@react-three/drei";
import { CameraProvider } from "../context/Camera";
import { ExplosionProvider } from "../context/Explosions";
import { TrailProvider } from "../context/Trails";
import Earth from "./Earth";

import Sun from "./Sun";
import Test from "./test";
// import Stars from "./Stars";
import Planets from "./Planets";

// Scene component
const Scene = () => {
  // Custom hook for gravity logic
  // useGravity();

  return (
    <CameraProvider>
      <Earth />
      {/* <ExplosionProvider> */}
      <Sun />
      {/* <Earth /> */}
      {/* <Earth2 /> */}
      {/* <Globe  /> */}
      {/* <Test /> */}
      <TrailProvider>
        <Planets />
      </TrailProvider>
      <Stars depth={100000} factor={696} saturation={124}/>
      {/* </ExplosionProvider> */}
      {/* <Stars depth={100000} factor={696} saturation={124} /> */}
    </CameraProvider>
  );
};

export default Scene;
