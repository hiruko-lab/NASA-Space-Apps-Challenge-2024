import { useRef } from "react";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import noise from "./../shaders/noise.glsl";
import { SUN_RADIUS } from "../config/constants";
import { useCamera } from "../context/Camera";

import MoonMap from "./../assets/textures/8k_moon.jpg"
import { TextureLoader } from "three";


import * as THREE from 'three'
import { earthSize } from "./Earth";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      customShaderMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<any>;
        emissiveIntensity?: number;
        time?: number;
      };
    }
  }
}

const Moon = () => {
  const cameraContext = useCamera();
  const handleFocus = cameraContext ? cameraContext.handleFocus : () => {};

  const [moonMap] = useLoader(TextureLoader, [MoonMap])

  const moonRef = useRef() as any;

  // useFrame(({clock}) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   earthRef.current? (earthRef.current as any).rotation.y = elapsedTime/6: console.log("earthRef undefined");
  // } )

  return ( 
    
    <RigidBody
      
      colliders="ball"
      userData={{ type: "Moon" }}
      type="kinematicPosition"
      position={[50,50,50]}
      // onClick={handleFocus}
      >
       <ambientLight intensity={0.03}/>
       <mesh ref = {moonRef} >
       <sphereGeometry args={[earthSize*0.27, 64, 64]} />
       <meshPhongMaterial map={moonMap}
        />
       </mesh>

    </RigidBody>
  );
};

export default Moon;
