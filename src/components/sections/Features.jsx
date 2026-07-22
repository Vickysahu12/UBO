import { motion } from 'framer-motion'
import { Sparkles, MousePointerClick, UserCircle2, FileClock, ScanText, TrendingUp, ArrowRight, Check } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow.jsx'
import { fadeUp, fadeUpStagger, viewportOnce } from '../../lib/animations.js'

const features = [
  {
    icon: Sparkles,
    title: 'AI Matching',
    desc: 'Advanced AI reads your resume and matches you with roles that actually fit — not just keyword hits.',
    points: ['Skill-based scoring', 'Updates as you apply'],
    accent: 'clay',
  },
  {
    icon: MousePointerClick,
    title: 'One-Tap Apply',
    desc: 'Your profile, resume, and cover letter are always ready — apply to a new role in seconds.',
    points: ['Saved profile reused', 'No repeat forms'],
    accent: 'forest',
  },
  {
    icon: UserCircle2,
    title: 'Profile Builder',
    desc: 'A guided builder turns your experience into a profile recruiters actually stop and read.',
    points: ['Guided prompts', 'Recruiter-ready format'],
    accent: 'clay',
  },
  {
    icon: FileClock,
    title: 'Application Tracker',
    desc: 'Every application in one timeline — see exactly where you stand, with no spreadsheet needed.',
    points: ['Status at a glance', 'Deadline reminders'],
    accent: 'forest',
  },
  {
    icon: ScanText,
    title: 'Resume Analyzer',
    desc: 'AI reviews your resume line by line and tells you exactly what to fix before you apply.',
    points: ['Instant feedback', 'ATS-friendly checks'],
    accent: 'clay',
  },
  {
    icon: TrendingUp,
    title: 'Career Insights',
    desc: 'Personalized tips on skills to learn and roles to target, based on where your field is heading.',
    points: ['Market trends', 'Skill gap alerts'],
    accent: 'forest',
  },
]

const accentStyles = {
  clay: {
    iconBg: 'bg-clay-light',
    iconText: 'text-clay-dark',
    ring: 'group-hover:ring-clay/30',
    link: 'text-clay-dark',
    check: 'text-clay',
    watermark: 'text-clay/[0.06]',
  },
  forest: {
    iconBg: 'bg-forest-light',
    iconText: 'text-forest',
    ring: 'group-hover:ring-forest/30',
    link: 'text-forest',
    check: 'text-forest',
    watermark: 'text-forest/[0.06]',
  },
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mb-14 text-center"
      >
        <Eyebrow>Smart features for smarter connections</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-lg text-3xl font-extrabold text-ink sm:text-4xl">
          Everything you need, in one place.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUpStagger(0.08)}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map(({ icon: Icon, title, desc, points, accent }) => {
          const style = accentStyles[accent]
          return (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-card ring-1 ring-transparent transition-all duration-300 ${style.ring}`}
            >
              {/* large faded watermark icon — fills the empty corner with subtle depth */}
              <Icon
                className={`pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 ${style.watermark}`}
                strokeWidth={1}
              />

              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg}`}
              >
                <Icon className={`h-5.5 w-5.5 ${style.iconText}`} strokeWidth={2} />
              </motion.div>

              <h3 className="relative font-display text-base font-bold text-ink">{title}</h3>
              <p className="relative mt-2 text-[13.5px] leading-relaxed text-ink/55">{desc}</p>

              {/* mini checklist — fills the card and reinforces what the feature does */}
              <ul className="relative mt-4 space-y-1.5 border-t border-ink/5 pt-4">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[12.5px] text-ink/60">
                    <Check className={`h-3.5 w-3.5 shrink-0 ${style.check}`} strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Learn more — hidden by default, slides + fades in on hover */}
              <div className="relative mt-4 h-5 overflow-hidden">
                <div
                  className={`flex translate-y-6 items-center gap-1.5 text-[13px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 ${style.link}`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}