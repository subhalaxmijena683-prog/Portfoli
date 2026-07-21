import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiCode,
  HiFire,
  HiTrendingUp,
  HiChartBar,
} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import dsaStats from '../data/dsaStats.json'
import { formatNumber } from '../utils/helpers'

function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
    </span>
  )
}

const statCards = [
  {
    icon: HiCode,
    label: 'Problems Solved',
    value: dsaStats.problemsSolved,
    color: 'text-primary',
  },
  {
    icon: FaGithub,
    label: 'GitHub Contributions',
    value: dsaStats.githubContributions,
    color: 'text-secondary',
  },
  {
    icon: HiFire,
    label: 'Current Streak',
    value: dsaStats.currentStreak,
    suffix: ' days',
    color: 'text-accent',
  },
  {
    icon: HiTrendingUp,
    label: 'Longest Streak',
    value: dsaStats.longestStreak,
    suffix: ' days',
    color: 'text-primary',
  },
]

export default function DSADashboard() {
  return (
    <section
      id="dsa"
      className="section-padding relative"
      aria-label="DSA Dashboard section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="DSA Dashboard"
          subtitle="Coding practice statistics and achievements"
        />

        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-5 md:p-6 text-center">
                <stat.icon className={`mx-auto text-2xl mb-3 ${stat.color}`} />
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix || ''}
                </p>
                <p className="text-text-muted text-xs md:text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Platform breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6 flex items-center gap-2">
                <HiChartBar className="text-primary" />
                Platform Breakdown
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'LeetCode', count: dsaStats.leetcode, color: '#FFA116' },
                  { name: 'GeeksforGeeks', count: dsaStats.gfg, color: '#2F8D46' },
              
                ].map((platform) => (
                  <div key={platform.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/70">{platform.name}</span>
                      <span className="text-white/50">{platform.count}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: platform.color }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(platform.count / dsaStats.problemsSolved) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Language stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6">
                Language Distribution
              </h3>
              <div className="space-y-4">
                {Object.entries(dsaStats.languages).map(
                  ([lang, percent], index) => (
                    <div key={lang}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/70">{lang}</span>
                        <span className="text-white/50">{percent}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex gap-4">
                <div className="text-center flex-1">
                  <p className="text-sm text-text-muted">LeetCode Rank</p>
                  <p className="text-secondary font-semibold">
                    {dsaStats.rankings.leetcode}
                  </p>
                </div>
                {/* <div className="text-center flex-1">
                  <p className="text-sm text-text-muted">Codeforces</p>
                  <p className="text-accent font-semibold">
                    {dsaStats.rankings.codeforces}
                  </p>
                </div> */}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
