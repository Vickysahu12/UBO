import { motion } from 'framer-motion'
import { Upload, Zap, Send } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow.jsx'
import { fadeUp, fadeUpStagger, viewportOnce } from '../../lib/animations.js'

const steps = [
  { icon: Upload, title: 'Upload your resume', desc: 'AI extracts your skills, projects, and experience in seconds.' },
  { icon: Zap, title: 'Swipe through matches', desc: 'See one job at a time, ranked by real fit — not keyword luck.' },
  { icon: Send, title: 'Apply instantly', desc: 'AI writes a tailored cover letter. You review, then send.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mb-16 text-center"
      >
        <Eyebrow>Simple by design</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-lg text-3xl font-extrabold text-ink sm:text-4xl">
          From resume to offer, in three swipes.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUpStagger(0.15)}
        className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6"
      >
        {/* connecting line — desktop only, aligned to icon centers (1/6, 3/6, 5/6 of the row) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-8 hidden border-t-2 border-dashed border-clay/25 sm:block sm:left-[16.6667%] sm:right-[16.6667%]"
        />

        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} variants={fadeUp} className="relative flex flex-col items-center text-center">
            {/* vertical connector between steps — mobile only */}
            {i > 0 && (
              <div
                aria-hidden
                className="absolute -top-10 left-1/2 h-10 w-px -translate-x-1/2 border-l-2 border-dashed border-clay/25 sm:hidden"
              />
            )}

            <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cream ring-4 ring-cream">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clay text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cream bg-ink text-[11px] font-bold text-white">
                {i + 1}
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-ink/55">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}