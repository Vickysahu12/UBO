import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Drop your generated raccoon PNGs into src/assets/images/ and pass
 * the imported path as `src`. If the asset is missing (e.g. during
 * early development before assets are generated), this renders a
 * clearly-labeled placeholder instead of a broken image icon.
 */
export default function MascotImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-ink/20 bg-white/50 text-ink/40 ${className}`}
      >
        <ImageIcon className="h-10 w-10" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium">{alt || 'Add mascot image'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      draggable={false}
    />
  )
}
