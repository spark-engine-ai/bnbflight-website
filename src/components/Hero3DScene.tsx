'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CORAL = '#F84F5C'
const CORAL_SOFT = '#ff7b84'

const WIDTH_SEGMENTS = 44
const HEIGHT_SEGMENTS = 30
const RADIUS = 2

function VoiceOrb() {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const {
    pointGeometry,
    lineGeometry,
    original,
    directions,
    linePairs
  } = useMemo(() => {
    /*
     * SphereGeometry generates a regular latitude / longitude grid.
     *
     * We use its vertices for the dots, but create our OWN line geometry
     * instead of THREE's wireframe so there are no diagonal triangle edges.
     */
    const sphere = new THREE.SphereGeometry(
      RADIUS,
      WIDTH_SEGMENTS,
      HEIGHT_SEGMENTS
    )

    const position = sphere.attributes.position as THREE.BufferAttribute
    const original = new Float32Array(position.array)
    const directions = new Float32Array(original.length)

    for (let i = 0; i < position.count; i++) {
      const idx = i * 3

      const x = original[idx]
      const y = original[idx + 1]
      const z = original[idx + 2]

      const length = Math.sqrt(x * x + y * y + z * z) || 1

      directions[idx] = x / length
      directions[idx + 1] = y / length
      directions[idx + 2] = z / length
    }

    /*
     * SphereGeometry indexing:
     *
     * every row contains WIDTH_SEGMENTS + 1 vertices
     * every column runs through HEIGHT_SEGMENTS + 1 rows
     *
     * We connect:
     *   current → right
     *   current → below
     *
     * That produces a clean rectangular grid over the sphere.
     */
    const rowLength = WIDTH_SEGMENTS + 1
    const linePairs: Array<[number, number]> = []

    for (let row = 0; row <= HEIGHT_SEGMENTS; row++) {
      for (let col = 0; col <= WIDTH_SEGMENTS; col++) {
        const current = row * rowLength + col

        // Left/right connection
        if (col < WIDTH_SEGMENTS) {
          linePairs.push([current, current + 1])
        }

        // Above/below connection
        if (row < HEIGHT_SEGMENTS) {
          linePairs.push([current, current + rowLength])
        }
      }
    }

    /*
     * Two XYZ coordinates for every line segment.
     */
    const linePositions = new Float32Array(linePairs.length * 2 * 3)

    for (let i = 0; i < linePairs.length; i++) {
      const [a, b] = linePairs[i]

      const lineIdx = i * 6
      const aIdx = a * 3
      const bIdx = b * 3

      linePositions[lineIdx] = original[aIdx]
      linePositions[lineIdx + 1] = original[aIdx + 1]
      linePositions[lineIdx + 2] = original[aIdx + 2]

      linePositions[lineIdx + 3] = original[bIdx]
      linePositions[lineIdx + 4] = original[bIdx + 1]
      linePositions[lineIdx + 5] = original[bIdx + 2]
    }

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    )

    return {
      pointGeometry: sphere,
      lineGeometry,
      original,
      directions,
      linePairs
    }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      const energyBurst =
        Math.pow(Math.max(0, Math.sin(t * 1.7 + 0.8)), 6)

      const twitchX =
        Math.sin(t * 2.3) * 0.11 +
        Math.sin(t * 4.7 + 1.2) * 0.045

      const twitchY =
        Math.sin(t * 1.9 + 0.4) * 0.13 +
        Math.sin(t * 5.1) * 0.05

      const twitchZ =
        Math.sin(t * 2.8 + 1.7) * 0.08 +
        Math.sin(t * 6.3) * 0.03

      groupRef.current.rotation.x =
        t * 0.09 +
        twitchX +
        energyBurst * 0.16

      groupRef.current.rotation.y =
        t * 0.14 +
        twitchY -
        energyBurst * 0.22

      groupRef.current.rotation.z =
        twitchZ +
        energyBurst * 0.1
    }

    const pointPositions =
      pointGeometry.attributes.position as THREE.BufferAttribute

    const pointArray = pointPositions.array as Float32Array

    /*
     * Voice energy:
     * overlapping frequencies prevent the motion from feeling like
     * one mechanical sine-wave pulse.
     */
    const voiceA = Math.max(0, Math.sin(t * 3.1))
    const voiceB = Math.max(0, Math.sin(t * 5.7 + 1.3))
    const voiceC = Math.max(0, Math.sin(t * 8.6 + 0.4))

    const speechEnergy =
      0.16 +
      voiceA * 0.34 +
      voiceB * 0.19 +
      voiceC * 0.1

    const syllable =
      Math.pow(
        Math.max(0, Math.sin(t * 2.1 + 0.8)),
        5
      ) * 0.34

    /*
     * Deform every point.
     */
    for (let i = 0; i < pointPositions.count; i++) {
      const idx = i * 3

      const ox = original[idx]
      const oy = original[idx + 1]
      const oz = original[idx + 2]

      const nx = directions[idx]
      const ny = directions[idx + 1]
      const nz = directions[idx + 2]

      const verticalWave =
        Math.sin(
          oy * 4.2 -
          t * 6.1
        ) *
        0.13 *
        speechEnergy

      const diagonalWave =
        Math.sin(
          ox * 3.0 +
          oy * 2.2 -
          oz * 1.8 +
          t * 4.8
        ) *
        0.1 *
        speechEnergy

      const horizontalWave =
        Math.sin(
          ox * 5.2 +
          t * 7.4
        ) *
        Math.exp(-oy * oy * 0.7) *
        0.11 *
        speechEnergy

      const radialOffset =
        verticalWave +
        diagonalWave +
        horizontalWave

      let x = ox + nx * radialOffset
      let y = oy + ny * radialOffset
      let z = oz + nz * radialOffset

      /*
       * Stronger speech moments make the middle widen and flatten slightly,
       * almost like the sphere is shaping a syllable.
       */
      const centerBand =
        Math.exp(-Math.pow(oy * 0.75, 4))

      x *= 1 + syllable * centerBand * 0.1
      y *= 1 - syllable * centerBand * 0.05

      /*
       * Small directional drift keeps the mesh organic.
       */
      x +=
        Math.sin(
          oy * 4.8 +
          oz * 2.2 +
          t * 3.8
        ) *
        0.022 *
        speechEnergy

      z +=
        Math.cos(
          oy * 4.1 -
          ox * 2.5 +
          t * 4.3
        ) *
        0.022 *
        speechEnergy

      pointArray[idx] +=
        (x - pointArray[idx]) * 0.17

      pointArray[idx + 1] +=
        (y - pointArray[idx + 1]) * 0.17

      pointArray[idx + 2] +=
        (z - pointArray[idx + 2]) * 0.17
    }

    pointPositions.needsUpdate = true

    /*
     * Rebuild the line endpoints from the newly-deformed point positions.
     *
     * This is the important part: the lines follow the points as the orb
     * talks, rather than remaining a static sphere underneath them.
     */
    const linePositions =
      lineGeometry.attributes.position as THREE.BufferAttribute

    const lineArray = linePositions.array as Float32Array

    for (let i = 0; i < linePairs.length; i++) {
      const [a, b] = linePairs[i]

      const lineIdx = i * 6
      const aIdx = a * 3
      const bIdx = b * 3

      lineArray[lineIdx] = pointArray[aIdx]
      lineArray[lineIdx + 1] = pointArray[aIdx + 1]
      lineArray[lineIdx + 2] = pointArray[aIdx + 2]

      lineArray[lineIdx + 3] = pointArray[bIdx]
      lineArray[lineIdx + 4] = pointArray[bIdx + 1]
      lineArray[lineIdx + 5] = pointArray[bIdx + 2]
    }

    linePositions.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      {/* Grid connections */}
      <lineSegments
        ref={linesRef}
        geometry={lineGeometry}
      >
        <lineBasicMaterial
          color={CORAL}
          transparent
          opacity={0.24}
          depthWrite={false}
        />
      </lineSegments>

      {/* Visible grid intersections */}
      <points
        ref={pointsRef}
        geometry={pointGeometry}
      >
        <pointsMaterial
          color={CORAL}
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      {/* Slight inner glow */}
      <mesh scale={0.88}>
        <sphereGeometry args={[RADIUS, 32, 24]} />
        <meshBasicMaterial
          color={CORAL_SOFT}
          transparent
          opacity={0.025}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 6.4],
        fov: 42
      }}
      gl={{
        antialias: true,
        alpha: true
      }}
      style={{
        background: 'transparent'
      }}
    >
      <VoiceOrb />
    </Canvas>
  )
}