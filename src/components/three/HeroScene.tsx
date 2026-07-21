import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import Particles from './Particles'
import AvatarPlaceholder from './AvatarPlaceholder'
import { isMobile } from '../../utils/helpers'

function SceneContent() {
  const particleCount = isMobile() ? 80 : 300

  return (
    <>
      <color attach="background" args={['#050816']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366F1" />
      <pointLight position={[-5, -3, 3]} intensity={0.6} color="#06B6D4" />
      <Stars
        radius={80}
        depth={40}
        count={isMobile() ? 800 : 2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <Particles count={particleCount} />
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <AvatarPlaceholder />
      </Float>
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}
