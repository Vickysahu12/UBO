import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Button from '../ui/Button.jsx'

const columns = [
  {
    title: 'For Students',
    links: ['Browse Jobs', 'How it works', 'Career Guide', 'Sign up'],
  },
  {
    title: 'For Recruiters',
    links: ['Post a Job', 'Find Candidates', 'Pricing', 'Sign up'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Contact us'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white/60 pt-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Logo + link columns */}
        <div className="grid grid-cols-2 gap-10 pb-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-cream font-display font-bold">
                H
              </div>
              <span className="font-display text-lg font-bold text-ink">HireSwipe</span>
            </div>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-ink/55">
              Connecting talent with opportunity and building careers, together.
            </p>
            <div className="mt-5 flex gap-3">
              {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:bg-cream hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink/55 transition-colors hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter — full-width bar, row layout on larger screens */}
        <div className="flex flex-col items-start gap-5 rounded-2xl bg-cream-soft p-6 sm:flex-row sm:items-center sm:justify-between lg:p-7">
          <div className="max-w-xs">
            <h4 className="text-sm font-semibold text-ink">Stay updated</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/55">
              Subscribe to get the latest job opportunities and tips.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-clay/40 sm:w-64"
            />
            <Button
              variant="primary"
              icon={false}
              type="submit"
              className="w-full justify-center whitespace-nowrap !py-2.5 !text-sm sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="border-t border-ink/10 py-6 text-center text-xs text-ink/40">
          © {new Date().getFullYear()} HireSwipe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}