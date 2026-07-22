import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, MousePointerClick, UserCircle2, FileClock, ScanText, TrendingUp, ArrowRight, Check, X } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow.jsx'
import { fadeUp, fadeUpStagger, viewportOnce } from '../../lib/animations.js'

const features = [
  {
    icon: Sparkles,
    title: 'AI Matching',
    desc: 'Advanced AI reads your resume and matches you with roles that actually fit — not just keyword hits.',
    points: ['Skill-based scoring', 'Updates as you apply'],
    accent: 'clay',
    howItWorks: [
      'AI parses your resume into structured skills, projects, and experience.',
      'Every open role is scored against your profile on actual fit, not just keyword overlap.',
      'Your match scores refresh automatically as you apply and your profile evolves.',
    ],
  },
  {
    icon: MousePointerClick,
    title: 'One-Tap Apply',
    desc: 'Your profile, resume, and cover letter are always ready — apply to a new role in seconds.',
    points: ['Saved profile reused', 'No repeat forms'],
    accent: 'forest',
    howItWorks: [
      'Your resume and profile details are saved once and reused across every application.',
      'A tailored cover letter is generated automatically for each role.',
      'Review the draft and send — no forms to refill, no copy-pasting.',
    ],
  },
  {
    icon: UserCircle2,
    title: 'Profile Builder',
    desc: 'A guided builder turns your experience into a profile recruiters actually stop and read.',
    points: ['Guided prompts', 'Recruiter-ready format'],
    accent: 'clay',
    howItWorks: [
      'Step-by-step prompts pull out the details that actually matter to recruiters.',
      'Your experience is formatted into a clean, scannable profile automatically.',
      'Preview exactly how recruiters will see your profile before it goes live.',
    ],
  },
  {
    icon: FileClock,
    title: 'Application Tracker',
    desc: 'Every application in one timeline — see exactly where you stand, with no spreadsheet needed.',
    points: ['Status at a glance', 'Deadline reminders'],
    accent: 'forest',
    howItWorks: [
      'Every application you send is logged automatically on one timeline.',
      'Status updates — viewed, shortlisted, rejected — sync in real time.',
      'Get reminders before deadlines or interview slots so nothing slips through.',
    ],
  },
  {
    icon: ScanText,
    title: 'Resume Analyzer',
    desc: 'AI reviews your resume line by line and tells you exactly what to fix before you apply.',
    points: ['Instant feedback', 'ATS-friendly checks'],
    accent: 'clay',
    howItWorks: [
      'Upload your resume and get a line-by-line review in seconds.',
      'Checks cover formatting, clarity, and ATS-compatibility issues.',
      'Actionable fixes are suggested — not just a generic score.',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Career Insights',
    desc: 'Personalized tips on skills to learn and roles to target, based on where your field is heading.',
    points: ['Market trends', 'Skill gap alerts'],
    accent: 'forest',
    howItWorks: [
      'Your field\u2019s hiring trends are tracked and matched against your current skill set.',
      'Gaps between what you have and what roles are asking for are flagged.',
      'You get a short list of skills worth learning next, ranked by demand.',
    ],
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
    modalRing: 'ring-clay/20',
    stepBg: 'bg-clay-light',
    stepText: 'text-clay-dark',
  },
  forest: {
    iconBg: 'bg-forest-light',
    iconText: 'text-forest',
    ring: 'group-hover:ring-forest/30',
    link: 'text-forest',
    check: 'text-forest',
    watermark: 'text-forest/[0.06]',
    modalRing: 'ring-forest/20',
    stepBg: 'bg-forest-light',
    stepText: 'text-forest',
  },
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const active = isOpen ? features[activeIndex] : null
  const activeStyle = active ? accentStyles[active.accent] : null

  // close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setActiveIndex(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  // lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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
        {features.map(({ icon: Icon, title, desc, points, accent }, i) => {
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

              {/* Learn more — opens the details modal, hidden by default, slides + fades in on hover */}
              <div className="relative mt-4 h-5 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`flex translate-y-6 items-center gap-1.5 text-[13px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 ${style.link}`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Feature details modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="feature-modal-title"
              className={`relative w-full max-w-md rounded-3xl bg-white p-6 shadow-card ring-1 sm:max-w-lg sm:p-8 ${activeStyle.modalRing} max-h-[85vh] overflow-y-auto`}
            >
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${activeStyle.iconBg}`}>
                <active.icon className={`h-5.5 w-5.5 ${activeStyle.iconText}`} strokeWidth={2} />
              </div>

              <h3 id="feature-modal-title" className="font-display text-xl font-bold text-ink sm:text-2xl">
                {active.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/60 sm:text-[15px]">{active.desc}</p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                How it works
              </h4>
              <ol className="mt-4 space-y-4">
                {active.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${activeStyle.stepBg} ${activeStyle.stepText}`}
                    >
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink/70">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-6 border-t border-ink/5 pt-5">
                <ul className="space-y-2">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[13px] text-ink/65">
                      <Check className={`h-3.5 w-3.5 shrink-0 ${activeStyle.check}`} strokeWidth={3} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}