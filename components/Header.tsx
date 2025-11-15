'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-bg-shade-dark shadow-sm">
      <nav className="container mx-auto px-6 lg:px-20 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <a href="#home" className="flex items-center group w-fit">
            <img 
              src="/icons/dr.svg" 
              alt="DR Logo" 
              className="h-10 w-auto transition-all duration-300"
              style={{
                filter: 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(240deg) brightness(97%) contrast(105%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(37%) sepia(91%) saturate(3276%) hue-rotate(322deg) brightness(97%) contrast(89%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(240deg) brightness(97%) contrast(105%)'
              }}
            />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            <Link href="#home" className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="#skills" className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium">
              Skills
            </Link>
            <Link href="#about" className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="#experience" className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium">
              Experience
            </Link>
            <Link href="#contact" className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Side: Theme Toggle & CTA Button */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-medium rounded hover:bg-accent transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center space-y-3 pt-6">
              <Link 
                href="#home" 
                className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#skills" 
                className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="#about" 
                className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="#contact" 
                className="text-body dark:text-heading-dark hover:text-primary dark:hover:text-primary transition-colors font-medium text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-medium text-lg rounded hover:bg-accent transition-all mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
          )}
        </div>
      </nav>
    </header>
  )
}

