import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const nasarawaCoords = [
  [6.9346, 8.3012], [6.9705, 8.2452], [6.9925, 8.1955], [6.9870, 8.0779],
  [6.9636, 7.9602], [6.9544, 7.9050], [7.1179, 7.9590], [7.3056, 8.0256],
  [7.5053, 8.0472], [7.7384, 8.0062], [7.9729, 7.9392], [8.2152, 7.8346],
  [8.4120, 7.7685], [8.3603, 7.9873], [8.4861, 8.1491], [8.6967, 8.0964],
  [8.9713, 8.0576], [9.1638, 7.9368], [9.3355, 7.9855], [9.4140, 8.0711],
  [9.3919, 8.1328], [9.3566, 8.3266], [9.4983, 8.3041], [9.6228, 8.3836],
  [9.4702, 8.4312], [9.2023, 8.4588], [8.9810, 8.5782], [8.9402, 8.6672],
  [8.8921, 8.7329], [8.7676, 9.1574], [8.6303, 9.1370], [8.3329, 9.1778],
  [8.0872, 9.2307], [7.8268, 9.2764], [7.7241, 9.3292], [7.5923, 8.9246],
  [7.3424, 8.5104], [7.1167, 8.4662], [6.9346, 8.3012]
];

const HolographicMap = () => {
  const meshRef = useRef();
  const lineRef = useRef();
  
  // Transform coordinates to fit our 3D space
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const lonMin = 6.9346;
    const latMin = 7.7685;
    const scale = 8; // Adjust scale to fit viewport
    
    nasarawaCoords.forEach((coord, i) => {
      const x = (coord[0] - 8.2) * scale;
      const y = (coord[1] - 8.5) * scale;
      if (i === 0) s.moveTo(x, y);
      else s.lineTo(x, y);
    });
    return s;
  }, []);

  const borderGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(shape.getPoints()), [shape]);

  // Create stylized terrain geometry inside the shape
  const gridGeometry = useMemo(() => {
    // We'll use a PlaneGeometry and clip it or just use a grid texture on the shape
    // For simplicity, let's use a dense grid and noise-displaced vertices
    // But then we need to clip it to the shape.
    // Let's use ShapeGeometry but it's not a regular grid.
    
    // Better: Use a PlaneGeometry and a custom shader that checks if a point is inside the shape.
    // Or just a regular ShapeGeometry with many subdivisions.
    return new THREE.ShapeGeometry(shape, 32); 
  }, [shape]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.material.opacity = 0.3 + Math.sin(t * 0.5) * 0.1;
    }
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.8 + Math.sin(t * 2) * 0.2;
    }
  });

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* Internal Grid / Fill */}
      <mesh geometry={gridGeometry} ref={meshRef}>
        <meshStandardMaterial 
          color="#10B981" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#10B981"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Border Line */}
      <line geometry={borderGeometry} ref={lineRef}>
        <lineBasicMaterial color="#34D399" transparent opacity={0.8} linewidth={4} />
      </line>

      {/* Glow Layer */}
      <mesh geometry={gridGeometry} position={[0, 0, -0.1]}>
        <meshStandardMaterial 
          color="#059669" 
          transparent 
          opacity={0.05} 
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Center Marker for Capital (Lafia) */}
      <mesh position={[(8.51 - 8.2) * 8, (8.50 - 8.5) * 8, 0.1]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#10B981" />
      </mesh>
    </group>
  );
};

export default HolographicMap;
