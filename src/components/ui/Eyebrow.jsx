export default function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-full bg-clay-light px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-clay-dark ${className}`}
    >
      {children}
    </span>
  )
}
