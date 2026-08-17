'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COLS = 9
const ROWS = 5
const GAP = 0.86
const COLORS: readonly [string, string, string] = ['#2E9E6E', '#2E6BEE', '#E9A63C']

/** `COLORS[i % COLORS.length]` is always in range — TS just can't prove it
 *  for a computed index into a fixed-length tuple. */
function colorAt(i: number): string {
  return COLORS[i % COLORS.length] as string
}

interface CubeSpec {
  id: number
  x: number
  z: number
  baseHeight: number
  phase: number
  speed: number
  color: string
}

function buildGrid(): CubeSpec[] {
  const cubes: CubeSpec[] = []
  let id = 0
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const cx = (c - (COLS - 1) / 2) * GAP
      const cz = (r - (ROWS - 1) / 2) * GAP
      // Deterministic pseudo-variation from position, not Math.random() — keeps
      // this identical every render and cheap.
      const n = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453
      const frac = n - Math.floor(n)
      cubes.push({
        id: id++,
        x: cx,
        z: cz,
        baseHeight: 0.35 + frac * 2.1,
        phase: frac * Math.PI * 2,
        speed: 0.5 + frac * 0.4,
        color: colorAt(Math.floor(frac * 97))
      })
    }
  }
  return cubes
}

function CubeField() {
  const cubes = useMemo(buildGrid, [])
  const group = useRef<THREE.Group>(null)
  const meshRefs = useRef<Map<number, THREE.Mesh>>(new Map())

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = 0.42 + Math.sin(t * 0.06) * 0.18
    }
    for (const cube of cubes) {
      const mesh = meshRefs.current.get(cube.id)
      if (!mesh) continue
      const h = cube.baseHeight + Math.sin(t * cube.speed + cube.phase) * 0.35
      const height = Math.max(0.18, h)
      mesh.scale.set(1, height, 1)
      mesh.position.set(cube.x, height / 2, cube.z)
    }
  })

  return (
    <group ref={group} rotation={[0.5, 0.55, 0]}>
      {cubes.map((cube) => (
        <mesh
          key={cube.id}
          ref={(el) => {
            if (el) meshRefs.current.set(cube.id, el)
          }}
          position={[cube.x, cube.baseHeight / 2, cube.z]}
        >
          <boxGeometry args={[0.62, 1, 0.62]} />
          <meshStandardMaterial color={cube.color} roughness={0.35} metalness={0.05} />
        </mesh>
      ))}
    </group>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 5.5, 9.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[6, 10, 6]} intensity={1.1} />
      <directionalLight position={[-6, 4, -4]} intensity={0.35} color="#2E6BEE" />
      <CubeField />
    </Canvas>
  )
}
