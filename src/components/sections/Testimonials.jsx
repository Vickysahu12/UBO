import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
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

// duplicated a few times so the loop never runs out of cards on wide screens
const track = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="stories" className="py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto mb-10 max-w-4xl px-6 text-left lg:px-10"
      >
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-clay">
          zero paid actors, we promise
        </span>
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Loved by students and recruiters
        </h2>
      </motion.div>

      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div
          className="testimonial-marquee flex w-max gap-6 px-6 lg:px-10"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {track.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              tabIndex={0}
              className="group flex w-[300px] shrink-0 flex-col rounded-3xl bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 sm:w-[340px] sm:p-8"
            >
              <Quote
                className="mb-3 h-9 w-9 text-clay-light transition-colors duration-300 group-hover:text-clay"
                strokeWidth={1.5}
              />
              <p className="mb-5 font-display text-base font-medium leading-relaxed text-ink sm:text-lg">
                "{t.quote}"
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-ink/10 pt-4">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .testimonial-marquee {
          animation: testimonial-scroll 64s linear infinite;
        }
      `}</style>
    </section>
  )
}