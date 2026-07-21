import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { SOCIAL_LINKS } from '../../constants/theme'

const socialIcons = [
  { href: SOCIAL_LINKS.github, icon: FaGithub, label: 'GitHub' },
  { href: SOCIAL_LINKS.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.email, icon: HiMail, label: 'Email' },
  { href: SOCIAL_LINKS.twitter, icon: FaTwitter, label: 'Twitter' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-bg-secondary/50" role="contentinfo">
      <div className="max-w-7xl mx-auto section-padding !py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold font-[family-name:var(--font-heading)] gradient-text mb-1">
            Subhalaxmi jena
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1 justify-center md:justify-start">
            Built with React + Three.js
            <FaHeart className="text-primary text-xs" aria-hidden="true" />
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialIcons.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass rounded-xl text-white/60 hover:text-white hover:border-primary/40 transition-all"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-text-muted text-sm">
          &copy; {year} Subhalaxmi jena. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
