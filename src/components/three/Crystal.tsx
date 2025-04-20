import { useGLTF } from "@react-three/drei";
// import { useEffect, useMemo } from "react";
// import { AnimationMixer, Clock } from "three";

export default function Crystal() {
  const { scene } = useGLTF("/models/crystal.glb");

  // const { scene, animations } = useGLTF("/models/moths.glb");
  // const mixer = useMemo(() => new AnimationMixer(scene), [scene]);

  // useEffect(() => {
  //   const animation = mixer.clipAction(animations[0]);
  //   animation.play();

  //   const clock = new Clock();
  //   const update = () => {
  //     mixer.update(clock.getDelta());
  //     requestAnimationFrame(update);
  //   };

  //   update();

  //   return () => {
  //     animation.stop();
  //   };
  // }, [mixer, animations]);

  return (
    <mesh>
      <primitive
        object={scene}
        // scale={[5, 5, 5]}
        // rotation={[0, Math.PI/2, 0]}
      />
    </mesh>
  );
}
