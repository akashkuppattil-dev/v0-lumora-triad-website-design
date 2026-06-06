'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground opacity-60">
            Frequently Asked Questions
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold mb-16 tracking-tighter uppercase">
          Answers to your inquiries.
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-6 sm:py-8 group">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:opacity-85 transition-opacity">
                    {item.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0 p-2 border border-border rounded-full hover:border-foreground transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-foreground" />
                    ) : (
                      <Plus className="w-4 h-4 text-foreground" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
