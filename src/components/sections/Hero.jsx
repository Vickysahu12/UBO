import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import { fadeUp, fadeUpStagger } from '../../lib/animations.js'
import obu from "../../assets/images/obu.webp"
import obu1 from "../../assets/images/obu1.webp"
import obu4 from "../../assets/images/obu4.webp"

const avatars = [
  'https://i.pravatar.cc/64?img=12',
  'https://i.pravatar.cc/64?img=32',
  'https://i.pravatar.cc/64?img=47',
]

const mascotFrames = [obu, obu1, obu4]

export default function Hero() {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % mascotFrames.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pt-10 pb-10 lg:pt-16">
      {/* ambient background glow — the one place we spend "decoration" budget */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-clay/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        {/* Left: copy */}
        <motion.div
          variants={fadeUpStagger(0.12)}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>AI-powered job matching platform</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[42px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[56px]"
          >
            Where Talent
            <br />
            Meets <span className="text-clay">Opportunity.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/60">
            HireSwipe connects students with the right opportunities and helps
            recruiters find the perfect talent, faster.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary">I'm a Student</Button>
            <Button variant="secondary" icon={false}>
              I'm a Recruiter
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-cream object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-ink/60">
              Trusted by <span className="font-semibold text-ink">20,000+</span> students
              and <span className="font-semibold text-clay">1,000+</span> companies
            </p>
          </motion.div>
        </motion.div>

        {/* Right: mascot with cycling frames */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* idle float loop wraps the whole mascot group */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[300px] w-[260px] sm:h-[400px] sm:w-[350px] lg:h-[520px] lg:w-[460px]"
            >
              {/* AnimatePresence crossfades between frames — no hard cut, no layout jump */}
              <AnimatePresence mode="sync">
                <motion.img
                  key={frameIndex}
                  src={mascotFrames[frameIndex]}
                  alt="HireSwipe mascot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>
            </motion.div>

            {/* small ambient icon accents */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 top-8 z-20 text-clay/50 sm:-left-4 sm:top-12"
            >
              <Heart className="h-6 w-6" fill="currentColor" strokeWidth={0} />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-0 top-4 z-20 text-clay/60 sm:right-2 sm:top-8"
            >
              <Sparkles className="h-7 w-7" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}