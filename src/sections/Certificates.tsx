import { motion } from 'framer-motion'
import { HiBadgeCheck } from 'react-icons/hi'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import certificates from '../data/certificates.json'

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding relative bg-bg-secondary/30"
      aria-label="Certificates section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and achievements"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <GlassCard className="overflow-hidden group h-full">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
                  <HiBadgeCheck className="absolute top-3 right-3 text-secondary text-xl" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-sm font-[family-name:var(--font-heading)] mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/50 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-secondary">{cert.date}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
