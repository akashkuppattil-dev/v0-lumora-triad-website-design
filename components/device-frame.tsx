'use client'

import React from 'react'

interface DeviceFrameProps {
  src: string
  alt: string
  type?: 'laptop' | 'tablet' | 'phone'
  className?: string
}

export function DeviceFrame({ src, alt, type = 'laptop', className = '' }: DeviceFrameProps) {
  const laptopFrame = (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Outer frame */}
      <div className="relative rounded-xl overflow-hidden border-8 border-black shadow-2xl">
        {/* Screen */}
        <img src={src} alt={alt} className="w-full h-auto display-block" />
      </div>
      {/* Bottom bezel */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black rounded-b-xl" />
      {/* Top notch simulation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-b-lg" />
    </div>
  )

  const tabletFrame = (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative rounded-3xl overflow-hidden border-12 border-black shadow-xl">
        <img src={src} alt={alt} className="w-full h-auto display-block" />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-black rounded-full" />
    </div>
  )

  const phoneFrame = (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      <div className="relative rounded-4xl overflow-hidden border-8 border-black shadow-lg">
        <img src={src} alt={alt} className="w-full h-auto display-block" />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl" />
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full" />
    </div>
  )

  return (
    <>
      {type === 'laptop' && laptopFrame}
      {type === 'tablet' && tabletFrame}
      {type === 'phone' && phoneFrame}
    </>
  )
}
