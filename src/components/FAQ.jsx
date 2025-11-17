import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How do I book a schedule?',
    a: 'Tap the booking button, pick a date on the calendar, and confirm your details.',
  },
  {
    q: 'What can I do with long-press?',
    a: 'On mobile, long-press a schedule card to reveal quick actions like modify or cancel.',
  },
  {
    q: 'What is the difference between Scheduler and Driver Dashboard?',
    a: 'Scheduler focuses on booking and planning; Driver Dashboard focuses on daily execution, history, and quick actions.',
  },
  {
    q: 'How do modify pages work?',
    a: 'Open any schedule and use the modify flow available at /modify/:id for fast edits.',
  },
  {
    q: 'Can I view upcoming schedules and history?',
    a: 'Yes, upcoming schedules appear at the top. Use Load more to fetch additional items and visit History for past runs.',
  },
]

export default function FAQ() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">FAQs</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Quick answers to common questions.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-lg border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 shadow"
            >
              <summary className="cursor-pointer font-medium text-gray-900 dark:text-gray-100">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
