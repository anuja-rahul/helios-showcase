import { useGLTF } from "@react-three/drei";

export default function Crystal() {
  const { scene } = useGLTF("/models/crystal.glb");
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
