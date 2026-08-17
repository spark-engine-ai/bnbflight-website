import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const runtime = 'edge'
export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px',
          backgroundColor: '#FCFBF9',
          backgroundImage: 'radial-gradient(circle at 78% 22%, rgba(248,79,92,0.16), transparent 55%)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              background: '#F84F5C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              color: 'white',
              fontWeight: 700
            }}
          >
            B
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, color: '#13151B' }}>{site.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 56, fontWeight: 600, color: '#13151B', lineHeight: 1.12, maxWidth: 980 }}>
            Your Airbnb, priced by a machine that shows its work.
          </div>
          <div style={{ fontSize: 26, color: '#4A4F5C', maxWidth: 880 }}>
            A private desktop revenue engine — PriceLabs, a live competitor scan, and a proprietary algorithm,
            averaged and guarded by a safety governor.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
