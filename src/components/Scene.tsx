/* eslint-disable @typescript-eslint/no-unused-vars */
// import useGravity from "../hooks/useGravity";
import { Stars } from "@react-three/drei";
import { CameraProvider } from "../context/Camera";
import { ExplosionProvider } from "../context/Explosions";
import { TrailProvider } from "../context/Trails";
import Earth from "./Earth";

import Sun from "./Sun";
// import Stars from "./Stars";
// import Planets from "./Planets";

// Scene component
const Scene = () => {
  // Custom hook for gravity logic
  // useGravity();

  return (
    <CameraProvider>
      <Earth />
      {/* <ExplosionProvider> */}
      <Sun />
      {/* null */}
      {/* <Stars /> */}
      {/* </ExplosionProvider> */}
      <Stars depth={100000} factor={696} saturation={124} />
    </CameraProvider>
  );
};

export default Scene;
