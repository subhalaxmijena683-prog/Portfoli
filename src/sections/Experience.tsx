import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import experience from "../data/experience.json";

const typeColors: Record<string, string> = {
  Internship:
    "text-cyan-400 border border-cyan-400/30 bg-cyan-500/10",
  Training:
    "text-emerald-400 border border-emerald-400/30 bg-emerald-500/10",
  Projects:
    "text-purple-400 border border-purple-400/30 bg-purple-500/10",
  Freelancing:
    "text-orange-400 border border-orange-400/30 bg-orange-500/10",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative bg-bg-secondary/30"
      aria-label="Experience section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My journey in Java Full Stack Development, Artificial Intelligence, Software Engineering, and Real-World Product Development."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-primary to-purple-500"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-3 md:left-5 top-8 flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg bg-gradient-to-r from-primary to-cyan-400 shadow-lg shadow-primary/40"
                  aria-hidden="true"
                >
                  <HiBriefcase className="text-white text-sm" />
                </div>

                <GlassCard className="group overflow-hidden border border-white/10 p-6 md:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]">

                  {/* Top Row */}
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${typeColors[item.type] || "text-white/60"}`}
                    >
                      {item.type}
                    </span>

                    <span className="ml-auto text-xs tracking-wider text-white/50">
                      {item.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="mb-2 text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>

                  {/* Company */}
                  <h4 className="mb-5 text-xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                    {item.company}
                  </h4>

                  {/* Description */}
                  <p className="mb-6 leading-8 text-white/70">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                        }}
                        className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}