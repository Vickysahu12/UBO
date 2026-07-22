import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-ink text-cream hover:bg-ink/90',
  secondary: 'bg-transparent text-ink border border-ink/15 hover:border-ink/30 hover:bg-white',
  clay: 'bg-clay text-white hover:bg-clay-dark',
}

export default function Button({
  children,
  variant = 'primary',
  icon = true,
  className = '',
  as: Comp = 'button',
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <Comp
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        {icon && <ArrowRight className="h-4 w-4" strokeWidth={2.5} />}
      </Comp>
    </motion.div>
  )
}
