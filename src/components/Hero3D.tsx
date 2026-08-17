'use client'

import dynamic from 'next/dynamic'

const Hero3DScene = dynamic(() => import('./Hero3DScene').then((m) => m.Hero3DScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-[28px] bg-haze" />
})

export function Hero3D({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Hero3DScene />
    </div>
  )
}
