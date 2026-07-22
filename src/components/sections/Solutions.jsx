import { motion } from 'framer-motion'
import { Check, User, Briefcase } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import MascotImage from '../ui/MascotImage.jsx'
import { fadeUp, viewportOnce } from '../../lib/animations.js'
import obu1 from "../../assets/images/obu1.webp"
import obu4 from "../../assets/images/obu4.webp"

const studentPoints = [
  'Smart job recommendations',
  'One-tap apply with AI cover letters',
  'Track applications & updates',
  'AI resume feedback',
]

const recruiterPoints = [
  'AI-powered candidate matching',
  'Advanced search & filters',
  'Track & manage applications',
  'Build your employer brand',
]

function SolutionCard({ id, icon: Icon, iconBg, iconColor, title, description, points, ctaLabel, cardBg, mascotSrc, mascotAlt }) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      className={`flex flex-col justify-between gap-8 rounded-3xl p-8 sm:flex-row sm:items-center lg:p-10 ${cardBg}`}
    >
      <div className="max-w-sm">
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{description}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-ink/75">
              <Check className="h-4 w-4 shrink-0 text-clay" strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Button variant="primary" className="!py-3 !text-sm">
            {ctaLabel}
          </Button>
        </div>
      </div>

      <MascotImage
        src={mascotSrc}
        alt={mascotAlt}
        className="h-56 w-full shrink-0 object-contain sm:h-64 sm:w-56"
      />
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mb-14 text-center"
      >
        <Eyebrow>Built for every career journey</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-lg text-3xl font-extrabold text-ink sm:text-4xl">
          One platform. <span className="text-clay">Two powerful solutions.</span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <SolutionCard
          id="students"
          icon={User}
          iconBg="bg-clay-light"
          iconColor="text-clay-dark"
          title="For Students"
          description="Find the right job, build your profile, and grow your career with HireSwipe."
          points={studentPoints}
          ctaLabel="Explore for Students"
          cardBg="bg-cream-soft"
          mascotSrc={obu1}
          mascotAlt="Mascot sitting with a laptop, backpack beside them"
        />
        <SolutionCard
          id="recruiters"
          icon={Briefcase}
          iconBg="bg-forest-light"
          iconColor="text-forest"
          title="For Recruiters"
          description="Find, engage, and hire the best talent with powerful tools."
          points={recruiterPoints}
          ctaLabel="Explore for Recruiters"
          cardBg="bg-forest-light"
          mascotSrc={obu4}
          mascotAlt="Mascot in a blazer holding a tablet"
        />
      </motion.div>
    </section>
  )
}