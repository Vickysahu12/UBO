import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { fadeUp, viewportOnce } from '../../lib/animations.js'

const testimonials = [
  {
    quote: 'HireSwipe made job searching so easy. I found the perfect opportunity in just a week.',
    name: 'Rohan Sharma',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/80?img=13',
  },
  {
    quote: 'We found amazing talent through HireSwipe. The AI matching is spot on.',
    name: 'Ananya Mehta',
    role: 'HR Manager, TechNova',
    avatar: 'https://i.pravatar.cc/80?img=33',
  },
  {
    quote: 'Applied to my first internship in under 2 minutes. The cover letter was better than the one I wrote myself.',
    name: 'Priya S.',
    role: 'Final Year, CSE',
    avatar: 'https://i.pravatar.cc/80?img=48',
  },
]

const AUTOPLAY_DELAY = 5000

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  const go = useCallback((dir) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }, [])

  const goTo = useCallback((targetIndex) => {
    setDirection(targetIndex > index ? 1 : -1)
    setIndex(targetIndex)
  }, [index])

  // Autoplay loop — resets whenever index changes or pause state changes
  useEffect(() => {
    if (isPaused) return
    timeoutRef.current = setTimeout(() => go(1), AUTOPLAY_DELAY)
    return () => clearTimeout(timeoutRef.current)
  }, [index, isPaused, go])

  const current = testimonials[index]

  return (
    <section id="stories" className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mb-10 flex items-center justify-between"
      >
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Loved by students and recruiters
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <div
        className="relative min-h-[220px] overflow-hidden rounded-3xl bg-white p-8 shadow-card sm:p-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Quote className="absolute right-8 top-8 h-10 w-10 text-clay-light" strokeWidth={1.5} />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p className="max-w-lg font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
              "{current.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={current.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-ink">{current.name}</p>
                <p className="text-xs text-ink/50">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* progress dots — also clickable to jump directly */}
        <div className="absolute bottom-6 left-8 flex gap-2 sm:left-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="group relative h-1.5 w-6 overflow-hidden rounded-full bg-ink/10"
            >
              {i === index && !isPaused && (
                <motion.span
                  key={`${index}-progress`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
                  className="absolute inset-0 origin-left rounded-full bg-clay"
                />
              )}
              {i === index && isPaused && (
                <span className="absolute inset-0 rounded-full bg-clay" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}