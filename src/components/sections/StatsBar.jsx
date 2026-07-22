import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Users, Briefcase, Building2, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Users, value: 20, suffix: 'K+', label: 'Students on HireSwipe' },
  { icon: Briefcase, value: 50, suffix: 'K+', label: 'Jobs available' },
  { icon: Building2, value: 1000, suffix: '+', label: 'Hiring companies' },
  { icon: ThumbsUp, value: 85, suffix: '%', label: 'Match success rate' },
]

function Counter({ value }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const controls = animate(0, value, {
            duration: 1.4,
            ease: 'easeOut',
            onUpdate: (v) => setDisplayValue(Math.round(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {value >= 1000 ? displayValue.toLocaleString() : displayValue}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-card sm:grid-cols-4 lg:gap-4"
      >
        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-light text-clay-dark">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="font-display text-xl font-extrabold text-ink">
                <Counter value={value} />
                {suffix}
              </p>
              <p className="text-xs leading-tight text-ink/50">{label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
