import { OrbitControls, Stars, Environment, Float, PerspectiveCamera } from "@react-three/drei";
import HolographicMap from "./HolographicMap";
import CameraRig from "./CameraRig";
import POI from "./POI";
import { useRef } from "react";

const Experience = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        color="#10B981"
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#059669" />

      {/* Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Actors */}
      <CameraRig />
      
      <group position={[0, -2, 0]}>
        <HolographicMap />
        
        {/* POI - Products & Locations (Mapped to real coordinates) */}
        {/* Karu / Keffi Area (Western Nasarawa) */}
        <POI position={[(7.67 - 8.2) * 8, 0.5, (8.99 - 8.5) * -8]} label="Solana Karu Hub" type="community" />
        <POI position={[(7.87 - 8.2) * 8, 0.5, (8.84 - 8.5) * -8]} label="Keffi Builders" type="talent" />
        
        {/* Lafia Area (Capital / Central) */}
        <POI position={[(8.51 - 8.2) * 8, 0.5, (8.50 - 8.5) * -8]} label="Nasarawa HQ (Lafia)" type="hq" />
        
        {/* Other regions */}
        <POI position={[(9.2 - 8.2) * 8, 0.5, (8.2 - 8.5) * -8]} label="Wamba Tech Center" type="product" />
        <POI position={[(7.2 - 8.2) * 8, 0.5, (8.1 - 8.5) * -8]} label="Toto Creative Lab" type="product" />
      </group>

      {/* Grid Floor for Futuristic Feel */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#050505" 
          transparent 
          opacity={0.3} 
          wireframe
        />
      </mesh>
    </>
  );
};

export default Experience;
