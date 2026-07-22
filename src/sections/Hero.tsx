
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FaRocket } from 'react-icons/fa'
import Button from '../components/ui/Button'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { scrollToSection } from '../utils/helpers'
import { RESUME_URL } from '../constants/theme'
import profile from '../data/profile.json'



export default function Hero() {
  const typedText = useTypingEffect()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* 3D Background */}
     {/* Background Video */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover opacity-50"
  >
    <source src="/videos/swayam_vdo2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Optional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
</div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-secondary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="h-8 md:h-10 mb-6">
            <p className="text-lg md:text-2xl text-white/80">
              <span className="text-secondary">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </p>
          </div>

          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={() => scrollToSection('contact')}>
              <FaRocket size={16} />
              Hire Me
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(RESUME_URL, '_blank')}
            >
              <HiDownload size={18} />
              Download Resume
            </Button>
            <Button
              variant="ghost"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to about section"
        >
          {/* <HiArrowDown size={24} /> */}
        </motion.button>
      </div>
    </section>
  )
}
