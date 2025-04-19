import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Text } from "@react-three/drei";
import { Suspense } from "react";

import Model from "./Model";

export default function HeroCanvas() {
  return (
    <div className="h-dvh w-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <Suspense
          fallback={
            <Text color="white" fontSize={3} anchorX="center" anchorY="middle">
              Loading Canvas...
            </Text>
          }
        >
          {/* <OrbitControls /> */}
          <ContactShadows
            opacity={0.3}
            color={"white"}
            position={[0, -2.4, 0]}
            blur={7}
            far={10}
          />
          <ambientLight intensity={0.9} />
          <Model />
          <Environment preset={"night"} />
        </Suspense>
      </Canvas>
    </div>
  );
}
