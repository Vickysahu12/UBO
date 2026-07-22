import { motion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Users, Briefcase, Building2, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Users, value: 20, suffix: 'K+', label: 'Students on HireSwipe' },
  { icon: Briefcase, value: 50, suffix: 'K+', label: 'Jobs available' },
  { icon: Building2, value: 1000, suffix: '+', label: 'Hiring companies' },
  { icon: ThumbsUp, value: 85, suffix: '%', label: 'Match success rate' },
]

// duplicated a few times so the mobile marquee never runs out of cards on wider phones
const track = [...stats, ...stats, ...stats, ...stats]

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
    <section className="mx-auto max-w-6xl lg:px-10">
      {/* Desktop / tablet — grid card, unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="hidden rounded-3xl bg-white p-8 shadow-card sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8"
      >
        {stats.map(({ icon: Icon, value, suffix, label }) => (
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

      {/* Mobile — continuous marquee strip, no cramped 2x2 grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-white py-6 shadow-card sm:hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="stats-marquee flex w-max gap-8 px-6">
          {track.map(({ icon: Icon, value, suffix, label }, i) => (
            <div key={`${label}-${i}`} className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-light text-clay-dark">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="whitespace-nowrap">
                <p className="font-display text-xl font-extrabold text-ink">
                  <Counter value={value} />
                  {suffix}
                </p>
                <p className="text-xs leading-tight text-ink/50">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes stats-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .stats-marquee {
          animation: stats-scroll 18s linear infinite;
        }
      `}</style>
    </section>
  )
}