import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import Button from '../ui/Button.jsx'
import MascotImage from '../ui/MascotImage.jsx'
import { fadeUp, viewportOnce } from '../../lib/animations.js'
import obu4 from "../../assets/images/obu2.webp"

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-cream-soft p-10 sm:flex-row sm:justify-between lg:p-14"
      >
        <MascotImage
          src={obu4}
          alt="Mascot winking and giving a thumbs up"
          className="h-40 w-40 shrink-0 object-contain sm:h-48 sm:w-48"
        />

        <div className="text-center sm:text-left">
          <h2 className="max-w-md font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            Your dream job or next great hire is just <span className="text-clay">one step away.</span>
          </h2>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button variant="primary">Get started for free</Button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-white">
            Learn how it works
            <PlayCircle className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
