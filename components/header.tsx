'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(currentTheme)
    
    // Ensure initial class is set
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Shop', id: 'shop' },
    { label: 'Henna', id: 'henna' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Fixed Logo Link */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
              <span className="text-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">Sugarcraft Ila</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Corrected Desktop CTA Button */}
            <a
              href="https://wa.me/2347031466733?text=Hi%20Sugarcraft%20Ila%2C%20I%20would%20like%20to%20book%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-6 py-2 bg-accent text-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-muted rounded-lg transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            {/* Corrected Mobile CTA Button */}
            <a
              href="https://wa.me/2347031466733?text=Hi%20Sugarcraft%20Ila%2C%20I%20would%20like%20to%20book%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-accent text-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-all text-center mt-2"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}