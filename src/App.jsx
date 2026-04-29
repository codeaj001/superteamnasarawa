import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { ScrollControls, Scroll, Loader } from "@react-three/drei";
import Experience from "./components/Experience";
import UIOverlay from "./components/UIOverlay";
import Navbar from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pages, setPages] = useState(8);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);

    // Dynamic scroll pages for mobile layout stacking - precisely tuned to eliminate empty bottom space
    const handleResize = () => setPages(window.innerWidth < 768 ? 10.5 : 8.4);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* 3D Scene */}
      <div className="fixed inset-0 z-0">
        <Canvas
          shadows
          camera={{ position: [0, 20, 20], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 10, 50]} />

          <Suspense fallback={null}>
            <ScrollControls pages={pages} damping={0.3}>
              <Experience />
              <UIOverlay isLoaded={isLoaded} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      <Navbar isLoaded={isLoaded} />

      {/* Helpers */}
      <Loader
        containerStyles={{ background: '#000000' }}
        innerStyles={{ background: '#10B981', height: '2px' }}
        barStyles={{ background: '#10B981' }}
        dataStyles={{ color: '#10B981', fontFamily: 'Inter' }}
      />
    </main>
  );
}

export default App;
