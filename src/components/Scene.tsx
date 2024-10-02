/* eslint-disable @typescript-eslint/no-unused-vars */
// import useGravity from "../hooks/useGravity";
import { CameraProvider } from "../context/Camera";
import { ExplosionProvider } from "../context/Explosions";
import { TrailProvider } from "../context/Trails";

import Sun from "./Sun";
import Earth from "./Earth";
import Test from "./test";
// import Stars from "./Stars";
// import Planets from "./Planets";

// Scene component
const Scene = () => {
  // Custom hook for gravity logic
  // useGravity();

  return (
    <CameraProvider>
      {/* <ExplosionProvider> */}
      <Sun />
      {/* <Earth /> */}
      {/* <Test /> */}
      {/* <Planets /> */}
      {/* <Stars /> */}
      {/* </ExplosionProvider> */}
    </CameraProvider>
  );
};

export default Scene;
