import { Html, Float } from "@react-three/drei";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const POI = ({ position, label, type }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* The 3D Hub/Node */}
        <mesh 
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setActive(!active)}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color={hovered || active ? "#34D399" : "#10B981"} 
            emissive={hovered || active ? "#34D399" : "#10B981"}
            emissiveIntensity={2}
          />
        </mesh>

        {/* Pulse Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.25, 0.3, 32]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* 2D Overlay Label */}
      <Html distanceFactor={10} position={[0, 0.5, 0]}>
        <AnimatePresence>
          {(hovered || active) && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="pointer-events-none select-none"
            >
              <div className="glass-card px-4 py-2 min-w-[150px] neon-border">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{type}</span>
                <h3 className="text-sm font-serif">{label}</h3>
                {active && (
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight">
                    Futuristic details about this project location. Explore the mission of Superteam Nasarawa here.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Static small dot label */}
        {!hovered && !active && (
          <div className="w-2 h-2 rounded-full bg-primary/50 blur-[2px]" />
        )}
      </Html>
    </group>
  );
};

export default POI;
