import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button.jsx'
import obu from "../../assets/images/obu.webp"

const navLinks = [
  { label: 'Students', href: '#students' },
  { label: 'Recruiters', href: '#recruiters' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Stories', href: '#stories' },
]

const GET_STARTED_URL = 'https://obu-job-9xt6.vercel.app/login'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-[15px] font-medium text-ink/70 transition-colors hover:text-ink"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-clay transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-card backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <img src={obu} alt="UBO logo" className="h-9 w-9 rounded-xl object-cover" />
          <span className="font-display text-lg font-bold text-ink">OBU</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            as="a"
            href={GET_STARTED_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!py-2.5"
          >
            Get Started
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-ink/80"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2">
                <Button
                  as="a"
                  href={GET_STARTED_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full justify-center !py-2.5"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}