import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CalendarDays, ArrowRight, Car, Sparkles } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur border border-gray-200 dark:border-gray-700">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Driver scheduling & booking platform</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Schedule smarter. Drive better.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Book schedules, browse an improved calendar, and manage upcoming trips with a clean, minimal design built for speed and clarity.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
            >
              <Car className="w-4 h-4" /> Book a Schedule
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <a href="#features" className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
              Explore features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
