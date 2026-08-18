'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A faithful homage to Jarvis, the voice assistant's own orb visualization
 * (`src/renderer/src/jarvis/AudioSphere.tsx` in the real app) — same shape
 * (a wireframe sphere + a dimmer counter-rotating "glow" sphere + a small
 * pulsing core), same idle-breathing vertex animation the real orb uses
 * when it isn't actively listening, just recolored to the brand's coral
 * instead of Jarvis's blue, and always in that idle "alive, breathing"
 * state rather than reacting to real audio (there's no microphone here —
 * this is a hero visual, not a functioning assistant).
 */
const CORAL = '#F84F5C'
const CORAL_GLOW = '#DA3846'

function JarvisOrb() {
  const group = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const coreMatRef = useRef<THREE.MeshBasicMaterial>(null)
  const sphereMatRef = useRef<THREE.MeshBasicMaterial>(null)

  const { geometry, original, working } = useMemo(() => {
    const geo = new THREE.SphereGeometry(2, 40, 40)
    const position = geo.attributes.position as THREE.BufferAttribute
    const orig = new Float32Array(position.array)
    const work = new Float32Array(orig)
    return { geometry: geo, original: orig, working: work }
  }, [])

  const glowGeometry = useMemo(() => new THREE.SphereGeometry(2.16, 28, 28), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (group.current) group.current.rotation.y = t * 0.09

    const sphere = sphereRef.current
    if (sphere) {
      sphere.rotation.x += 0.0032
      sphere.rotation.y += 0.0022
    }
    const glow = glowRef.current
    if (glow) {
      glow.rotation.x -= 0.0011
      glow.rotation.y -= 0.0017
    }

    // Same "breathing" idea as the real orb's dormant state — a slow
    // whole-sphere pulse, with a touch of higher-frequency wobble layered
    // on top so it reads as organic rather than a mechanical zoom in/out.
    const positions = geometry.attributes.position as THREE.BufferAttribute
    const posArray = positions.array as Float32Array
    const vertexCount = positions.count
    for (let i = 0; i < vertexCount; i++) {
      const idx = i * 3
      const ox = original[idx] as number
      const oy = original[idx + 1] as number
      const oz = original[idx + 2] as number
      const wobble = Math.sin(t * 1.6 + ox * 2.2 + oy * 1.7) * 0.02
      const scale = 1 + Math.sin(t * 0.9) * 0.045 + wobble
      working[idx] = ox * scale
      working[idx + 1] = oy * scale
      working[idx + 2] = oz * scale
      posArray[idx] = (posArray[idx] as number) + ((working[idx] as number) - (posArray[idx] as number)) * 0.12
      posArray[idx + 1] =
        (posArray[idx + 1] as number) + ((working[idx + 1] as number) - (posArray[idx + 1] as number)) * 0.12
      posArray[idx + 2] =
        (posArray[idx + 2] as number) + ((working[idx + 2] as number) - (posArray[idx + 2] as number)) * 0.12
    }
    positions.needsUpdate = true

    if (coreMatRef.current) coreMatRef.current.opacity = 0.35 + Math.sin(t * 2) * 0.2
    if (sphereMatRef.current) sphereMatRef.current.opacity = 0.55 + Math.sin(t * 0.9) * 0.15
  })

  return (
    <group ref={group}>
      <mesh ref={sphereRef} geometry={geometry}>
        <meshBasicMaterial ref={sphereMatRef} color={CORAL} wireframe transparent opacity={0.7} />
      </mesh>
      <mesh ref={glowRef} geometry={glowGeometry}>
        <meshBasicMaterial color={CORAL_GLOW} wireframe transparent opacity={0.16} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshBasicMaterial ref={coreMatRef} color={CORAL} transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <JarvisOrb />
    </Canvas>
  )
}
