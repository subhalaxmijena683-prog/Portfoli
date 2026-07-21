import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'

/** Animated 3D avatar placeholder — icosahedron with distortion shader */
export default function AvatarPlaceholder() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#6366F1"
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.4}
        speed={2}
      />
    </mesh>
  )
}
