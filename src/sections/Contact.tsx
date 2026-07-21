import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import { SOCIAL_LINKS } from '../constants/theme'
import profile from '../data/profile.json'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
 const [submitted, setSubmitted] = useState(false)
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  setLoading(true)
  setError('')

  try {
    await emailjs.send(
      'service_1rn0k1i',
      'template_qmps074',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'Hje0EU81wMNMJgFXB'
    )

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      message: '',
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  } catch (error) {
    console.error(error)
    setError('Failed to send message. Please try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <section
      id="contact"
      className="section-padding relative bg-bg-secondary/30"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

               <Button type="submit" className="w-full">
  <HiPaperAirplane size={18} />
  {submitted ? 'Message Sent!' : 'Send Message'}
</Button>

{submitted && (
  <p className="text-green-400 text-sm text-center mt-3">
    ✅ Your message has been sent successfully!
  </p>
)}
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <GlassCard className="p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-3 text-white/70">
                  <HiMail className="text-primary" size={18} />
                  {profile.email}
                </p>
                <p className="text-white/50 text-xs pl-8">{profile.location}</p>
              </div>
            </GlassCard>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" href={SOCIAL_LINKS.linkedin}>
                <FaLinkedin size={18} />
                LinkedIn
              </Button>
              <Button variant="outline" href={SOCIAL_LINKS.github}>
                <FaGithub size={18} />
                GitHub
              </Button>
              <Button variant="ghost" href={SOCIAL_LINKS.email}>
                <HiMail size={18} />
                Email
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
