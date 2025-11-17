import { motion, useScroll, useTransform } from 'framer-motion'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import React from 'react'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const sampleSchedules = [
  { id: 1, day: 'Mon', time: '08:30', type: 'pickup', label: 'Blue St. → Central Depot' },
  { id: 2, day: 'Mon', time: '17:15', type: 'dropoff', label: 'Green Ave. → West Yard' },
  { id: 3, day: 'Tue', time: '09:00', type: 'pickup', label: 'Harbor Gate → Terminal 2' },
  { id: 4, day: 'Thu', time: '14:00', type: 'dropoff', label: 'Industrial Park → North Dock' },
  { id: 5, day: 'Sat', time: '07:45', type: 'pickup', label: 'Airport Cargo → City Hub' },
]

export default function CalendarPreview() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div style={{ y }} className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enhanced Calendar</h3>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map(d => (
            <div key={d} className="text-xs text-gray-500 dark:text-gray-400 text-center">{d}</div>
          ))}
          {days.map((d, idx) => (
            <div key={`cell-${idx}`} className="min-h-[96px] rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 p-2 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-gray-100/60 dark:from-gray-800/80 to-transparent" />
              {sampleSchedules.filter(s => s.day === d).map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className={`group flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-md mb-1 border truncate ${
                    s.type === 'pickup'
                      ? 'bg-blue-50/70 border-blue-200 text-blue-800 dark:bg-blue-500/10 dark:border-blue-400/30 dark:text-blue-200'
                      : 'bg-green-50/70 border-green-200 text-green-800 dark:bg-green-500/10 dark:border-green-400/30 dark:text-green-200'
                  }`}
                  title={s.label}
                >
                  {s.type === 'pickup' ? (
                    <MapPin className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                  <span className="font-medium tabular-nums">{s.time}</span>
                  <span className="truncate">{s.label}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-200 border border-blue-200/60 dark:border-blue-400/30">
              <span className="w-2 h-2 rounded-sm bg-blue-600"></span> Pickup
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-200 border border-green-200/60 dark:border-green-400/30">
              <span className="w-2 h-2 rounded-sm bg-green-600"></span> Drop-off
            </span>
          </div>
          <span className="opacity-80">Long-press to reveal actions on mobile</span>
        </div>
      </motion.div>
    </div>
  )
}
