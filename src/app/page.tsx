'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  const heroRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          // Trigger Framer Motion animation after GSAP animation
          controls.start({ opacity: 1, y: 0 })
        }
      })
    })

    return () => ctx.revert()
  }, [controls])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
      <motion.div
        ref={heroRef}
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Your Financial Future
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Professional trading, expert financial advice, and in-depth market analysis
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

