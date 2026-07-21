import { motion } from 'framer-motion'
import { HiAcademicCap, HiStar } from 'react-icons/hi'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import profile from '../data/profile.json'
import myPhoto from '../../public/profile.png'
export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-4 text-primary">
                Introduction
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">{profile.bio}</p>

              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-4 text-secondary">
                Career Objectives
              </h3>
              <ul className="space-y-3" role="list">
                {profile.careerObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <div className="space-y-8">
            {/* CGPA Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-6 md:p-8 text-center glow-primary">
                <HiStar className="mx-auto text-accent text-3xl mb-3" />
                <p className="text-5xl font-bold gradient-text mb-1">
                  {profile.cgpa}
                </p>
                <p className="text-text-muted text-sm">
                  CGPA out of {profile.cgpaScale}
                </p>
                <p className="text-white/60 text-sm mt-2">
                  {profile.degree} — {profile.university}
                </p>
              </GlassCard>
            </motion.div>

            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-6 md:p-8">
                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-4 text-accent">
                  My Story
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {profile.personalStory}
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Education Timeline */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold font-[family-name:var(--font-heading)] mb-8 text-center">
            <HiAcademicCap className="inline mr-2 text-primary" />
            Education Timeline
          </h3>

          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px"
              aria-hidden="true"
            />

           <div className="space-y-8">

  {/* Profile Photo */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex justify-center">
      <div className="relative group">
        {/* Animated Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />

        {/* Photo */}
        <img
          src={myPhoto}
          alt="Subhalaxmi Jena"
className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-2xl transition-transform duration-500 group-hover:scale-105"/>      </div>
    </div>
  </motion.div>
              {profile.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-bg -translate-x-1/2 mt-6 z-10"
                    aria-hidden="true"
                  />
                  <div className="md:w-1/2 pl-10 md:pl-0">
                    <GlassCard className="p-5 md:p-6">
                      <span className="text-xs text-secondary font-medium">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-semibold mt-1 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-white/60 text-sm">{edu.description}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
