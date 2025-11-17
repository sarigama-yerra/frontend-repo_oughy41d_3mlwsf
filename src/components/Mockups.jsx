import React from 'react'
import { motion } from 'framer-motion'
import CalendarPreview from './CalendarPreview'

export default function Mockups() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Screenshots & mockups</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Animated previews of cards and the shared calendar.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {[1,2,3].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-4 shadow"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Upcoming schedule</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Drop-off: <span className="truncate inline-block max-w-[180px] align-bottom">Long destination name that will be ellipsed gracefully</span></p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-200 border border-green-200/60 dark:border-green-400/30">Drop-off</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <CalendarPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
