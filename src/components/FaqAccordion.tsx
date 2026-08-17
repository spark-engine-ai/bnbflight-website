'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[16px] font-medium text-ink">{item.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-ink-faint transition-transform duration-300 ${
                  isOpen ? 'rotate-45 text-coral' : ''
                }`}
              />
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
