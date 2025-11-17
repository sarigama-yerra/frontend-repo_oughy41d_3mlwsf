import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LayoutGrid, User, CalendarDays, PenSquare } from 'lucide-react'

export default function DriverTools() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  const items = [
    {
      title: 'Driver dashboard',
      desc: 'All driver sections in one place with clear status indicators.',
      icon: LayoutGrid,
    },
    {
      title: 'Modify page',
      desc: 'Jump directly to /modify/:id to adjust any schedule.',
      icon: PenSquare,
    },
    {
      title: 'Reusable calendar',
      desc: 'Shared component across dashboard and booking pages.',
      icon: CalendarDays,
    },
    {
      title: 'Minimal rectangular cards',
      desc: 'Driver name and trip details in a crisp, compact layout.',
      icon: User,
    },
  ]

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-20 -z-10 h-40 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Driver tools</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Built to match your daily flow and mobile habits.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-5 shadow"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3">
                <it.icon className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
