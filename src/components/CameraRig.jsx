import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

const CameraRig = () => {
  const scroll = useScroll();
  const cameraRef = useRef();

  // Define the camera path (3D Spline)
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 20, 20),   // Start - High altitude
      new THREE.Vector3(5, 10, 10),   // Overview
      new THREE.Vector3(-10, 5, 5),   // Zoom to west cluster
      new THREE.Vector3(10, 5, -5),   // Zoom to east cluster
      new THREE.Vector3(0, 3, 2),     // Final - HQ focus
    ]);
  }, []);

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Get position on curve
    const point = curve.getPointAt(offset);
    state.camera.position.lerp(point, 0.2);
    
    // Look ahead logic or look at center
    const lookAtPoint = new THREE.Vector3(0, -2, 0);
    state.camera.lookAt(lookAtPoint);
    
    // Subtle float effect
    state.camera.position.y += Math.sin(state.clock.getElapsedTime()) * 0.05;
  });

  return null;
};

export default CameraRig;
