import React from 'react'
import { motion } from 'framer-motion'
import { Fingerprint, CalendarDays, Settings2, Clock3, ToggleLeft, ListOrdered } from 'lucide-react'

const features = [
  {
    title: 'Toggle-style booking',
    desc: 'Quickly switch between booking states with tactile toggle controls.',
    icon: ToggleLeft,
  },
  {
    title: 'Minimal scheduler cards',
    desc: 'Clean rectangular cards with clear color-coding for pickups and drop-offs.',
    icon: ListOrdered,
  },
  {
    title: 'Enhanced shared calendar',
    desc: 'A compact calendar component used across the driver dashboard.',
    icon: CalendarDays,
  },
  {
    title: 'Long-press interactions',
    desc: 'Mobile-first long-press to reveal quick actions and options.',
    icon: Fingerprint,
  },
  {
    title: 'Modify action',
    desc: 'Edit any schedule with a focused flow and confirmations.',
    icon: Settings2,
  },
  {
    title: 'Upcoming schedules & load more',
    desc: 'See what’s next and fetch more in one tap with smart pagination.',
    icon: Clock3,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Designed for clarity</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Minimal rectangular cards, improved calendar, and mobile-first gestures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-5 shadow hover:shadow-md transition-shadow will-change-transform"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <f.icon className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
