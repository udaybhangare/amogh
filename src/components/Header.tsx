'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold">
          Amogh Shirke
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`hover:text-primary transition-colors ${
                pathname === item.path ? 'text-primary font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-primary transition-colors ${
                  pathname === item.path ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </motion.div>
      )}
    </header>
  )
}

