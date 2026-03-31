'use client'

import { useState, useEffect } from 'react'

export function Brand({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <span className={`text-xl sm:text-2xl font-bold tracking-tight block mt-1 ${className}`}>
        Lumora.Triad
      </span>
    )
  }

  return (
    <span className={`text-xl sm:text-2xl tracking-tight block mt-1 ${className}`}>
      <span className="font-bold">{"Lumora"}</span>
      <span className="font-normal opacity-80">.{"Triad"}</span>
    </span>
  )
}
