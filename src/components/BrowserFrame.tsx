'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const SOURCE_WIDTH = 1920
const SOURCE_HEIGHT = 1020

const LENS_SIZE = 300
const ZOOM = 4.5

type LensState = {
  x: number
  y: number
  percentX: number
  percentY: number
  visible: boolean
}

export function BrowserFrame({
  src,
  alt
}: {
  src: string
  alt: string
}) {
  const frameRef = useRef<HTMLDivElement>(null)

  const [lens, setLens] = useState<LensState>({
    x: 0,
    y: 0,
    percentX: 0,
    percentY: 0,
    visible: false
  })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const frame = frameRef.current
    if (!frame) return

    const rect = frame.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setLens({
      x,
      y,
      percentX: (x / rect.width) * 100,
      percentY: (y / rect.height) * 100,
      visible: true
    })
  }

  function openFullImage() {
    window.open(src, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      ref={frameRef}
      className="relative overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setLens((current) => ({
          ...current,
          visible: true
        }))
      }
      onMouseLeave={() =>
        setLens((current) => ({
          ...current,
          visible: false
        }))
      }
    >
      <button
        type="button"
        onClick={openFullImage}
        className="
          block
          w-full
          cursor-zoom-in
          overflow-hidden
          rounded-lg
          border
          border-line
          bg-surface
          text-left
          shadow-lift
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-coral
          focus-visible:ring-offset-2
        "
        aria-label={`Open ${alt} full size`}
      >
        <Image
          src={src}
          alt={alt}
          width={SOURCE_WIDTH}
          height={SOURCE_HEIGHT}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="block h-auto w-full select-none"
          priority={false}
          draggable={false}
        />
      </button>

      {lens.visible && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            z-50
            hidden
            rounded-full
            border-[3px]
            border-white/95
            shadow-[0_18px_50px_rgba(0,0,0,0.32),inset_0_0_0_1px_rgba(0,0,0,0.1)]
            lg:block
          "
          style={{
            width: LENS_SIZE,
            height: LENS_SIZE,
            left: lens.x,
            top: lens.y,
            transform: 'translate(-50%, -50%)',
            backgroundImage: `url("${src}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${ZOOM * 100}% auto`,
            backgroundPosition: `${lens.percentX}% ${lens.percentY}%`
          }}
        />
      )}
    </div>
  )
}