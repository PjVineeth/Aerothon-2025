"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Rocket } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Problem Statement", href: "#problems" },
  { name: "Important Dates", href: "#dates" },
  { name: "Registration", href: "#registration" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <span className="font-bold text-xl">AEROTHON 2025</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-muted transition-colors ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <ThemeToggle />
          <Button asChild>
            <a href="https://forms.gle/your-registration-link" target="_blank" rel="noopener noreferrer">Register Now</a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
                className="block px-3 py-3 text-base text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-3">
              <Button asChild className="w-full">
                <a href="https://forms.gle/your-registration-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
