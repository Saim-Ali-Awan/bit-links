'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import { Playfair_Display } from 'next/font/google'

// Import Playfair Display font
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] })

// Dynamically import Navbar
const Navbar = dynamic(
  () => import('@/components/animate-ui/components/background/Navbar'),
  { ssr: false }
)

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const pathname = usePathname()
  const contentRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted || !overlayRef.current || !contentRef.current) return

    const totalDuration = pathname === '/' ? 3 : 1.5 // slow overall overlay animation

    // Animate overlay moving fully to the right
    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: totalDuration,
      ease: 'power2.inOut',
      onComplete: () => setShowContent(true),
    })

    // Animate page content: fade + move from bottom
    const targets = contentRef.current.children
    if (targets.length) {
      gsap.set(targets, { opacity: 0, y: 30 })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'power3.out',
        stagger: 0.06,
        delay: 0.5, // after overlay animation
      })
    }
  }, [mounted, children, pathname])

  if (!mounted) return null

  return (
    <>

      {/* Overlay with Bit-Links text */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#A855F7] to-[#855CF1]"
      >
        <h2
          className={`text-4xl font-bold text-white opacity-80 select-none font-sans`}
        >
          Bit-Links
        </h2>
      </div>

      {/* Page content */}
      <div ref={contentRef} className="min-h-screen will-change-transform relative z-10">
        {showContent && children}
      </div>
    </>
  )
}
