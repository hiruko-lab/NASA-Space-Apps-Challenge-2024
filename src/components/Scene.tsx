/* eslint-disable @typescript-eslint/no-unused-vars */
// import useGravity from "../hooks/useGravity";
import { CameraProvider } from "../context/Camera";
import { ExplosionProvider } from "../context/Explosions";
import { TrailProvider } from "../context/Trails";

import Sun from "./Sun";
import Earth from "./Earth";
import Earth2 from "./Earth2";
import Test from "./test";
import Globe from "react-globe.gl";
// import Stars from "./Stars";
import Planets from "./Planets";
import { Stars } from "@react-three/drei";

// Scene component
const Scene = () => {
  // Custom hook for gravity logic
  // useGravity();

  return (
    <CameraProvider>
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
    </CameraProvider>
  );
};

export default Scene;
