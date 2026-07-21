import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden group h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
  <video
    src={project.video}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
</div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-primary/40 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary/80 to-accent/80 text-white hover:opacity-90 transition-opacity"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
