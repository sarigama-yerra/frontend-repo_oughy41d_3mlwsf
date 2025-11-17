import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, ListChecks, PenSquare, Waypoints } from 'lucide-react'

const steps = [
  {
    title: 'Select a date',
    desc: 'Pick your day on the shared calendar to see available slots.',
    icon: CalendarDays,
  },
  {
    title: 'View schedules with spacing',
    desc: 'Browse neatly spaced trips with color-coded labels.',
    icon: Waypoints,
  },
  {
    title: 'Create or modify',
    desc: 'Add a new booking or adjust an existing one in seconds.',
    icon: PenSquare,
  },
  {
    title: 'Navigate dashboard/history',
    desc: 'Jump between your dashboard and your past runs.',
    icon: ListChecks,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">How it works</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Four simple steps to stay on schedule.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300/70 to-transparent dark:from-gray-700/70" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-0"
              >
                <div className="sm:flex sm:items-center sm:gap-4">
                  <div className="absolute left-0 sm:static sm:left-auto">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow">
                      <s.icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{i + 1}. {s.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
